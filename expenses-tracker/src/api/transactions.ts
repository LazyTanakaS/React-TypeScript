import type { Transaction } from "../types/types";

const API_URL = "http://localhost:3000";

type ApiTransaction = {
  id: number;
  amount: string;
  type: "expense" | "income";
  category: string | null;
  description: string;
  date: string;
};

export async function fetchTransactions(): Promise<ApiTransaction[]> {
  const res = await fetch(`${API_URL}/transactions`);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

export function toTransaction(row: ApiTransaction): Transaction {
  return {
    id: row.id.toString(),
    amount: Number(row.amount),
    type: row.type,
    category: row.category ?? "Other",
    description: row.description,
    date: row.date,
  };
}
