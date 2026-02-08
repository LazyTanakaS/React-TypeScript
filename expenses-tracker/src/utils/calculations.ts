import type { Transaction } from "../types/types";

export function calculateMonthStats(
  transactions: Transaction[],
  startBalance: number = 0,
) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = startBalance + income - expenses;

  return { income, expenses, balance };
}
