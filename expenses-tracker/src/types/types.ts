export type ExpensesCategory =
  | "Food"
  | "Shopping"
  | "Taxi"
  | "Fuel"
  | "Entertainment"
  | "Bills"
  | "Subscriptions"
  | string;

export type IncomeCategory = "Salary" | "Side Job" | "Debt repayment" | string;
export type Transaction = {
  id: string;
  type: "income" | "expense";
  amount: number;
  category: string;
  description: string;
  date: string;
};

export type Month = {
  id: string;
  name: string;
  startBalance: number;
  transactions: Transaction[];
  isClosed: boolean;
  closedAt?: string;
};
