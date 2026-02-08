import { useState } from "react";
import type { Transaction } from "../types/types";
import TransactionItem from "./TransactionItem";

interface TransactionListProps {
  transactions: Transaction[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

function TransactionList({
  transactions,
  onEdit,
  onDelete,
}: TransactionListProps) {
  const [filterType, setFilterType] = useState<"all" | "income" | "expense">(
    "all",
  );
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const filteredTransactions = transactions.filter((transaction) => {
    const typeMatch = filterType === "all" || transaction.type === filterType;
    const categoryMatch =
      filterCategory === "all" || transaction.category === filterCategory;
    return typeMatch && categoryMatch;
  });

  const categories = Array.from(new Set(transactions.map((t) => t.category)));

  return (
    <div className="transaction-list">
      <h2>📊 All Transactions</h2>

      <div className="filters">
        <select
          value={filterType}
          onChange={(e) =>
            setFilterType(e.target.value as "all" | "income" | "expense")
          }
        >
          <option value="all">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="transactions">
        {filteredTransactions.length === 0 ? (
          <p className="no-transactions">No transactions found</p>
        ) : (
          filteredTransactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TransactionList;
