import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
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
    <div className="forms-container">
      <form onSubmit={handleIncomeSubmit} className="transaction-form income">
        <h2>
          <FaArrowUp /> Add Income
        </h2>
        <div className="form-group">
          <label htmlFor="income-amount">Amount</label>
          <input
            id="income-amount"
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
        </div>
        <div className="form-group">
          <label htmlFor="income-category">Category</label>
          <select
            id="income-category"
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
        </div>
        <div className="form-group">
          <label htmlFor="income-description">Description</label>
          <input
            id="income-description"
            type="text"
            placeholder="Description (Optional)"
            value={incomeForm.description}
            onChange={(e) =>
              setIncomeForm({ ...incomeForm, description: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="income-date">Date</label>
          <input
            id="income-date"
            type="date"
            value={incomeForm.date}
            onChange={(e) =>
              setIncomeForm({ ...incomeForm, date: e.target.value })
            }
          />
        </div>
        <button type="submit">Add Income</button>
      </form>

      <form onSubmit={handleExpenseSubmit} className="transaction-form expense">
        <h2>
          <FaArrowDown /> Add Expense
        </h2>
        <div className="form-group">
          <label htmlFor="expense-amount">Amount</label>
          <input
            id="expense-amount"
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
        </div>
        <div className="form-group">
          <label htmlFor="expense-category">Category</label>
          <select
            id="expense-category"
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
        </div>
        <div className="form-group">
          <label htmlFor="expense-description">Description</label>
          <input
            id="expense-description"
            type="text"
            placeholder="Description (Optional)"
            value={expensesForm.description}
            onChange={(e) =>
              setExpensesForm({ ...expensesForm, description: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="expense-date">Date</label>
          <input
            id="expense-date"
            type="date"
            value={expensesForm.date}
            onChange={(e) =>
              setExpensesForm({ ...expensesForm, date: e.target.value })
            }
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default TransactionForm;
