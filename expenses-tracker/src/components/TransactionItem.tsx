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
        <span className="date">{formatDate(transaction.date)}</span>
        <span className="icon">{icon}</span>
        <span className="category">{transaction.category}</span>
        {transaction.description && (
          <span className="description"> - {transaction.description}</span>
        )}
      </div>

      <div className="transaction-actions">
        <span className={`amount ${amountClass}`}>{amount}</span>
        <button onClick={() => onEdit(transaction.id)}>Edit</button>
        <button onClick={() => onDelete(transaction.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TransactionItem;
