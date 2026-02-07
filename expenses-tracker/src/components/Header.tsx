interface HeaderProps {
  income: number;
  expenses: number;
  balance: number;
}

function Header({ income, expenses, balance }: HeaderProps) {
  return (
    <header className="header">
      <h1>Expenses Tracker</h1>
      <div className="stats">
        <span>Income: +{income.toLocaleString()} Kč</span>
        <span>Expenses: -{expenses.toLocaleString()} Kč</span>
        <span>Balance: {balance.toLocaleString()} Kč</span>
      </div>
    </header>
  );
}

export default Header;
