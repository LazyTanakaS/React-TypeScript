import { FaArrowUp, FaArrowDown, FaWallet } from "react-icons/fa";

interface HeaderProps {
  income: number;
  expenses: number;
  balance: number;
}

function Header({ income, expenses, balance }: HeaderProps) {
  return (
    <header className="header">
      <h1>💰 Expenses Tracker</h1>
      <div className="stats-grid">
        <div className="stat-card income">
          <h3>
            <FaArrowUp /> Income
          </h3>
          <p>+{income.toLocaleString()} Kč</p>
        </div>
        <div className="stat-card expenses">
          <h3>
            <FaArrowDown /> Expenses
          </h3>
          <p>-{expenses.toLocaleString()} Kč</p>
        </div>
        <div className="stat-card balance">
          <h3>
            <FaWallet /> Balance
          </h3>
          <p>{balance.toLocaleString()} Kč</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
