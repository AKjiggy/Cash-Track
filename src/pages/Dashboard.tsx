import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  FaDollarSign,
  FaTrash,
  FaRegMoneyBillAlt,
  FaChartLine,
  FaPiggyBank,
} from "react-icons/fa";

// Define Types
interface User {
  fullname: string;
  email: string;
}

interface Transaction {
  id: number;
  amount: number;
  description: string;
  type: "income" | "expense";
  category: string;
  date: string;
}

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState(0);
  const [newTransaction, setNewTransaction] = useState({
    amount: "",
    description: "",
    type: "income",
    category: "general",
  });

  const navigate = useNavigate();

  // Sample chart data
  const categoryData = [
    { name: "Food", value: 400 },
    { name: "Transport", value: 300 },
    { name: "Housing", value: 600 },
  ];

  const spendingData = [
    { month: "Jan", amount: 2400 },
    { month: "Feb", amount: 2100 },
    { month: "Mar", amount: 3200 },
  ];

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          "https://finance-app-backend-two.vercel.app/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(response.data.user);
      } catch (err) {
        setError("Failed to fetch user data");
        localStorage.removeItem("token");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  useEffect(() => {
    const newBalance = transactions.reduce((acc, transaction) => {
      return transaction.type === "income"
        ? acc + transaction.amount
        : acc - transaction.amount;
    }, 0);
    setBalance(newBalance);
  }, [transactions]);

  // Add transaction
  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTransaction.amount || !newTransaction.description) return;

    const transaction: Transaction = {
      id: Date.now(),
      amount: parseFloat(newTransaction.amount),
      description: newTransaction.description,
      type: newTransaction.type as "income" | "expense",
      category: newTransaction.category,
      date: new Date().toISOString(),
    };

    setTransactions([transaction, ...transactions]);
    setNewTransaction({
      amount: "",
      description: "",
      type: "income",
      category: "general",
    });
  };

  // Delete transaction
  const handleDeleteTransaction = (id: number) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600">
        {error}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100"
    >
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FaDollarSign /> Finance Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 px-4 py-2 rounded-lg">
              Balance: ₦{balance.toFixed(2)}
            </div>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="lg:col-span-1 space-y-4"
        >
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaRegMoneyBillAlt /> Add Transaction
            </h2>
            <form onSubmit={handleAddTransaction} className="space-y-3">
              <div>
                <label className="block text-sm font-medium">Amount</label>
                <input
                  type="number"
                  value={newTransaction.amount}
                  onChange={(e) =>
                    setNewTransaction({
                      ...newTransaction,
                      amount: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Description</label>
                <input
                  type="text"
                  value={newTransaction.description}
                  onChange={(e) =>
                    setNewTransaction({
                      ...newTransaction,
                      description: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Type</label>
                <select
                  value={newTransaction.type}
                  onChange={(e) =>
                    setNewTransaction({
                      ...newTransaction,
                      type: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded"
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Add Transaction
              </button>
            </form>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-4">
          {/* Welcome Card */}
          {user && (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                Welcome, {user.fullname}!
              </h2>
              <p className="text-gray-600 mt-2">Email: {user.email}</p>
            </motion.div>
          )}

          {/* Charts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-white p-4 rounded-lg shadow-sm"
            >
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <FaChartLine /> Spending by Category
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#3b82f6"
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="bg-white p-4 rounded-lg shadow-sm"
            >
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <FaPiggyBank /> Spending Trends
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={spendingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="amount" stroke="#3b82f6" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* Transactions List */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="bg-white p-4 rounded-lg shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <div className="space-y-2">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-full ${
                        transaction.type === "income"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }`}
                    >
                      {transaction.type === "income" ? (
                        <FaRegMoneyBillAlt className="text-green-600" />
                      ) : (
                        <FaTrash className="text-red-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-gray-500">
                        {transaction.category}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-semibold ${
                        transaction.type === "income"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      ₦{transaction.amount.toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleDeleteTransaction(transaction.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
