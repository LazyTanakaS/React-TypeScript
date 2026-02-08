import type { Transaction } from "../types/types";

interface TransactionItemProps {
  transaction: Transaction;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

function TransactionItem({
  transaction,
  onEdit,
  onDelete,
}: TransactionItemProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    return `${day}.${month}`;
  };

  const icon = transaction.type === "income" ? "💰" : "💸";

  const amount =
    transaction.type === "income"
      ? `+${transaction.amount} Kč`
      : `-${transaction.amount} Kč`;

  const amountClass = transaction.type === "income" ? "income" : "expense";

  return (
    <div className="transaction-item">
      <div className="transaction-info">
        <span className="transaction-date">{formatDate(transaction.date)}</span>
        <span className="transaction-icon">{icon}</span>
        <div className="transaction-details">
          <h4>{transaction.category}</h4>
          {transaction.description && <p>{transaction.description}</p>}
        </div>
      </div>

      <span className={`transaction-amount ${amountClass}`}>{amount}</span>

      <div className="transaction-actions">
        <button onClick={() => onEdit(transaction.id)}>✏️ Edit</button>
        <button onClick={() => onDelete(transaction.id)}>🗑️ Delete</button>
      </div>
    </div>
  );
}

export default TransactionItem;
