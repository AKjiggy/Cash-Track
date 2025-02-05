// src/types.ts
export interface Transaction {
  id: number;
  date: string;
  description: string;
  type: "income" | "expense";
  amount: number;
  category: string;
}

export interface Budget {
  category: string;
  limit: number;
  spent: number;
}

export interface SavingsGoal {
  id: number;
  name: string;
  target: number;
  current: number;
  deadline: string;
}
