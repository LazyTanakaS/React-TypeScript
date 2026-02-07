import type { Transaction } from "../types/types";
import TransactionItem from "./TransactionItem";

interface SubscriptionsProps {
  transactions: Transaction[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

function Subscriptions({ transactions, onEdit, onDelete }: SubscriptionsProps) {
  const subscriptions = transactions.filter(
    (t) => t.category === "Subscriptions",
  );

  const totalSubscriptions = subscriptions.reduce(
    (sum, t) => sum + t.amount,
    0,
  );

  if (subscriptions.length === 0) {
    return null;
  }

  return (
    <div className="subscription-container">
      <div className="subscription-header">
        <h3>📋 Active Subscriptions</h3>
        <span className="subscription-total">
          Total: {totalSubscriptions} Kč/month
        </span>
      </div>

      <div className="subscription-list">
        {subscriptions.map((subscription) => (
          <TransactionItem
            key={subscription.id}
            transaction={subscription}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Subscriptions;
