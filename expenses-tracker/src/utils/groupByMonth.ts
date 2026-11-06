import type { Transaction } from "../types/types";

export function groupByMonth(
  transactions: Transaction[],
): Record<string, Transaction[]> {
  const groups: Record<string, Transaction[]> = {};

  for (const t of transactions) {
    const key = t.date.slice(0, 7);
    if (!groups[key]) groups[key] = [];
    groups[key].push(t);
  }

  return groups;
}
