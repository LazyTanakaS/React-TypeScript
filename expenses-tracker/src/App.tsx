import "./App.css";
import "./styles/variables.css";
import { useState, useEffect } from "react";
import type { Month, Transaction } from "./types/types";
import { calculateMonthStats } from "./utils/calculations";
import {
  loadMonths,
  saveMonths,
  loadActiveMonthId,
  saveActiveMonthId,
  createInitialMonth,
} from "./utils/localStorage";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import EditTransactionModal from "./components/EditTransactionModal";
import ConfirmModal from "./components/ConfirmModal";
import Subscriptions from "./components/Subscriptions";

function App() {
  const [months, setMonths] = useState<Month[]>(() => {
    const saved = loadMonths();
    if (saved && saved.length > 0) {
      return saved;
    }
    return [createInitialMonth()];
  });

  const [activeMonthId, setActiveMonthId] = useState<string>(() => {
    const saved = loadActiveMonthId();
    if (saved) {
      return saved;
    }
    const loadedMonths = loadMonths();
    return loadedMonths?.[0]?.id || "";
  });

  const [showCloseMonthConfirm, setShowCloseMonthConfirm] = useState(false);

  const [editingTransaction, setEditingTransaction] =
    useState<Transaction | null>(null);

  useEffect(() => {
    saveMonths(months);
  }, [months]);

  useEffect(() => {
    if (activeMonthId) {
      saveActiveMonthId(activeMonthId);
    }
  }, [activeMonthId]);

  const activeMonth = months.find((m) => m.id === activeMonthId);

  const stats = activeMonth
    ? calculateMonthStats(activeMonth.transactions)
    : { income: 0, expenses: 0, balance: 0 };

  const handleAddTransaction = (transaction: Omit<Transaction, "id">) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: crypto.randomUUID(),
    };

    setMonths((prevMonths) =>
      prevMonths.map((month) =>
        month.id === activeMonthId
          ? { ...month, transactions: [...month.transactions, newTransaction] }
          : month,
      ),
    );
  };

  const handleDeleteTransaction = (transactionId: string) => {
    setMonths((prevMonths) =>
      prevMonths.map((month) =>
        month.id === activeMonthId
          ? {
              ...month,
              transactions: month.transactions.filter(
                (t) => t.id !== transactionId,
              ),
            }
          : month,
      ),
    );
  };

  const handleEditTransaction = (transactionId: string) => {
    const transaction = activeMonth?.transactions.find(
      (t) => t.id === transactionId,
    );
    if (transaction) {
      setEditingTransaction(transaction);
    }
  };

  const handleSaveEdit = (updatedTransaction: Transaction) => {
    setMonths((prevMonths) =>
      prevMonths.map((month) =>
        month.id === activeMonthId
          ? {
              ...month,
              transactions: month.transactions.map((t) =>
                t.id === updatedTransaction.id ? updatedTransaction : t,
              ),
            }
          : month,
      ),
    );
  };

  const handleCloseEditModal = () => {
    setEditingTransaction(null);
  };

  const handleAddMonth = () => {
    const now = new Date();
    const monthName = now.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });

    const currentActiveMonth = months.find((m) => m.id === activeMonthId);
    const startBalance = currentActiveMonth
      ? calculateMonthStats(currentActiveMonth.transactions).balance
      : 0;

    const newMonth: Month = {
      id: crypto.randomUUID(),
      name: monthName,
      startBalance: startBalance,
      transactions: [],
      isClosed: false,
    };

    setMonths((prev) => [...prev, newMonth]);
    setActiveMonthId(newMonth.id);
  };

  const handleCloseMonth = () => {
    setShowCloseMonthConfirm(true);
  };

  const confirmCloseMonth = () => {
    setMonths((prevMonth) =>
      prevMonth.map((month) =>
        month.id === activeMonthId
          ? {
              ...month,
              isClosed: true,
              closedAt: new Date().toISOString(),
            }
          : month,
      ),
    );
  };

  const handleMonthSelect = (monthId: string) => {
    setActiveMonthId(monthId);
  };

  return (
    <div className="app">
      <Header
        income={stats.income}
        expenses={stats.expenses}
        balance={stats.balance}
      />
      <div className="layout">
        <SideBar
          months={months}
          activeMonthId={activeMonthId}
          onMonthSelect={handleMonthSelect}
          onAddMonth={handleAddMonth}
          onClosedMonth={handleCloseMonth}
        />
        <div className="main-content">
          <TransactionForm onAddTransaction={handleAddTransaction} />

          {activeMonth && (
            <Subscriptions
              transactions={activeMonth.transactions}
              onEdit={handleEditTransaction}
              onDelete={handleDeleteTransaction}
            />
          )}

          {activeMonth && (
            <TransactionList
              transactions={activeMonth.transactions}
              onEdit={handleEditTransaction}
              onDelete={handleDeleteTransaction}
            />
          )}
        </div>
      </div>

      {editingTransaction && (
        <EditTransactionModal
          isOpen={!!editingTransaction}
          onClose={handleCloseEditModal}
          transaction={editingTransaction}
          onSave={handleSaveEdit}
        />
      )}

      <ConfirmModal
        isOpen={showCloseMonthConfirm}
        onClose={() => setShowCloseMonthConfirm(false)}
        onConfirm={confirmCloseMonth}
        title="Close Month"
        message={`Are you sure you want to close "${activeMonth?.name}"? This action cannot be undone.`}
        confirmText="Close Month"
        cancelText="Cancel"
        isDangerous={true}
      />
    </div>
  );
}

export default App;
