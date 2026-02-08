import { useState } from "react";
import Modal from "./Modal";

interface InitialSetupModalProps {
  isOpen: boolean;
  onCompleted: (startBalance: number) => void;
}

function InitialSetupModal({ isOpen, onCompleted }: InitialSetupModalProps) {
  const [balance, setBalance] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const amount = parseFloat(balance);
    if (isNaN(amount) || amount < 0) return;

    onCompleted(amount);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {}}
      title="Welcome to Expense Tracker!"
    >
      <form onSubmit={handleSubmit}>
        <div className="initial-setup-content">
          <p>
            Let's set up your account. Enter your current balance to get
            started:
          </p>

          <div className="form-group">
            <label htmlFor="initial-balance">Current Balance (Kč)</label>
            <input
              id="initial-balance"
              type="number"
              step="0.01"
              min="0"
              placeholder="Enter your current balance"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div className="form-actions">
            <button type="submit">Start Tracking</button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default InitialSetupModal;
