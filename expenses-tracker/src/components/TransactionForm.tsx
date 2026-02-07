import { useState } from "react";
import type {
  Transaction,
  IncomeCategory,
  ExpensesCategory,
} from "../types/types";

interface TransactionFormProps {
  onAddTransaction: (transaction: Omit<Transaction, "id">) => void;
}

function TransactionForm({ onAddTransaction }: TransactionFormProps) {
  const [incomeForm, setIncomeForm] = useState({
    amount: "",
    category: "Salary" as IncomeCategory,
    description: "",
    date: new Date().toISOString().split("T")[0],
  });

  const [expensesForm, setExpensesForm] = useState({
    amount: "",
    category: "Food" as ExpensesCategory,
    description: "",
    date: new Date().toISOString().split("T")[0],
  });

  const handleIncomeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(incomeForm.amount);
    if (!incomeForm.amount || amount <= 0) return;

    onAddTransaction({
      type: "income",
      amount: parseFloat(incomeForm.amount),
      category: incomeForm.category,
      description: incomeForm.description,
      date: incomeForm.date,
    });

    setIncomeForm({
      amount: "",
      category: "Salary",
      description: "",
      date: new Date().toISOString().split("T")[0],
    });
  };

  const handleExpenseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expensesForm.amount) return;

    onAddTransaction({
      type: "expense",
      amount: parseFloat(expensesForm.amount),
      category: expensesForm.category,
      description: expensesForm.description,
      date: expensesForm.date,
    });

    setExpensesForm({
      amount: "",
      category: "Food",
      description: "",
      date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <div className="transaction-form-container">
      <form onSubmit={handleIncomeSubmit} className="income-form">
        <h3>💰 ADD INCOME</h3>
        <input
          type="number"
          step="0.01"
          min="0"
          placeholder="Amount"
          value={incomeForm.amount}
          onChange={(e) =>
            setIncomeForm({ ...incomeForm, amount: e.target.value })
          }
          required
        />
        <select
          value={incomeForm.category}
          onChange={(e) =>
            setIncomeForm({
              ...incomeForm,
              category: e.target.value as IncomeCategory,
            })
          }
        >
          <option value="Salary">Salary</option>
          <option value="Side Job">Side Job</option>
          <option value="Debt repayment">Debt repayment</option>
        </select>
        <input
          type="text"
          placeholder="Description (Optional)"
          value={incomeForm.description}
          onChange={(e) =>
            setIncomeForm({ ...incomeForm, description: e.target.value })
          }
        />
        <input
          type="date"
          value={incomeForm.date}
          onChange={(e) =>
            setIncomeForm({ ...incomeForm, date: e.target.value })
          }
        />
        <button type="submit">Add Income</button>
      </form>

      <form onSubmit={handleExpenseSubmit} className="expense-form">
        <h3>💸 ADD EXPENSE</h3>
        <input
          type="number"
          step="0.01"
          min="0"
          placeholder="Amount"
          value={expensesForm.amount}
          onChange={(e) =>
            setExpensesForm({ ...expensesForm, amount: e.target.value })
          }
          required
        />
        <select
          value={expensesForm.category}
          onChange={(e) =>
            setExpensesForm({
              ...expensesForm,
              category: e.target.value as ExpensesCategory,
            })
          }
        >
          <option value="Food">Food</option>
          <option value="Shopping">Shopping</option>
          <option value="Taxi">Taxi</option>
          <option value="Fuel">Fuel</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Bills">Bills</option>
          <option value="Subscriptions">Subscriptions</option>
        </select>
        <input
          type="text"
          placeholder="Description (Optional)"
          value={expensesForm.description}
          onChange={(e) =>
            setExpensesForm({ ...expensesForm, description: e.target.value })
          }
        />
        <input
          type="date"
          value={expensesForm.date}
          onChange={(e) =>
            setExpensesForm({ ...expensesForm, date: e.target.value })
          }
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default TransactionForm;
