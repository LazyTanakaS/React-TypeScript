import type { Transaction } from "../types/types";
import TransactionItem from "./TransactionItem";
import { FaSync } from "react-icons/fa";

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
    <div className="subscriptions">
      <div className="subscriptions-header">
        <h2>
          <FaSync /> Active Subscriptions
        </h2>
        <span className="total-subscriptions">
          {totalSubscriptions.toLocaleString()} Kč/month
        </span>
      </div>

      <div className="transactions">
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
