import { useEffect, useState } from 'react';
import './App.css';
import Button from './Button';

interface HistoryEntry {
  action: string;
  timestamp: string;
}

function App() {
  const [count, setCount] = useState<number>(() => {
    const saved = localStorage.getItem('counter');
    return saved ? Number(saved) : 0;
  });

  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    localStorage.setItem('counter', count.toString());
  }, [count]);

  const handleChange = (amount: number) => {
    setCount((prevCount) => {
      const newCount = prevCount + amount;

      return Math.max(0, Math.min(100, newCount));
    });

    const newEntry: HistoryEntry = {
      action: amount > 0 ? `+${amount}` : `${amount}`,
      timestamp: new Date().toLocaleTimeString(),
    };

    setHistory((prevHistory) => [newEntry, ...prevHistory].slice(0, 5));
  };

  const handleReset = () => {
    setCount(0);

    const newEntry: HistoryEntry = {
      action: 'Reset',
      timestamp: new Date().toLocaleTimeString(),
    };

    setHistory((prevHistory) => [newEntry, ...prevHistory].slice(0, 5));
  };

  return (
    <>
      <div className="counter">
        <h1>Counter</h1>
      </div>

      <div className="counter-display">
        <h2>{count}</h2>
      </div>

      <Button
        label="+5"
        onClick={() => handleChange(5)}
        className="btn-plus-5"
      />
      <Button label="+1" onClick={() => handleChange(1)} className="btn-plus" />
      <Button label="Reset" onClick={handleReset} className="btn-reset" />
      <Button
        label="-1"
        onClick={() => handleChange(-1)}
        className="btn-minus"
      />
      <Button
        label="-5"
        onClick={() => handleChange(-5)}
        className="btn-minus-5"
      />

      <div className="history">
        <h3>History:</h3>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              <span>{entry.action}</span>
              <span>{entry.timestamp}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
