// src/components/OnboardingScreen2.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OnboardingScreen2 = ({ onNext }: { onNext: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl font-bold mb-4 text-center"
      >
        Welcome to Your Personal Finance App
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl mb-8 text-center"
      >
        Take control of your finances with our comprehensive tools and features.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-opacity-20 p-6 rounded-lg mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Track Income & Expenses:</strong> Log your daily
            transactions and categorize them for better insights.
          </li>
          <li>
            <strong>Set Budgets:</strong> Define monthly budgets for different
            categories to control your spending.
          </li>
          <li>
            <strong>Savings Goals:</strong> Set and track your savings goals to
            achieve financial milestones.
          </li>
          <li>
            <strong>Visualize Trends:</strong> Use charts and graphs to
            understand your spending patterns and financial health.
          </li>
        </ul>
      </motion.div>
      <Link to="/register">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={onNext}
          className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Next
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default OnboardingScreen2;
