import { useState } from "react";
import type { Transaction } from "../types/types";
import TransactionItem from "./TransactionItem";
import { FaChartLine, FaFileInvoiceDollar, FaPlus } from "react-icons/fa";

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
      <h2>
        <FaChartLine /> All Transactions
      </h2>

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
          <div className="no-transactions">
            <div className="empty-state">
              <div className="empty-state-icon">
                <FaFileInvoiceDollar />
              </div>
              <h3 className="empty-state-title">No Transactions Yet</h3>
              <p className="empty-state-description">
                {filterType !== "all" || filterCategory !== "all"
                  ? "No transactions match your filters. Try adjusting the filters above."
                  : "Start tracking your finances by adding your first income or expense transaction."}
              </p>
              {filterType === "all" && filterCategory === "all" && (
                <button className="empty-state-action">
                  <FaPlus /> Add Transaction
                </button>
              )}
            </div>
          </div>
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
