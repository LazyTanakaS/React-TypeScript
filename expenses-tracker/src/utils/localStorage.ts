import type { Month } from "../types/types";

const MONTHS_KEY = "expense-tracker-months";
const ACTIVE_MONTH_KEY = "expense-tracker-active-month-id";
const SETUP_COMPLETED_KEY = "expense-tracker-setup-completed";

export const isSetupCompleted = (): boolean => {
  return localStorage.getItem(SETUP_COMPLETED_KEY) === "true";
};

export const markSetupCompleted = (): void => {
  localStorage.setItem(SETUP_COMPLETED_KEY, "true");
};

export const loadMonths = (): Month[] | null => {
  const saved = localStorage.getItem(MONTHS_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (error) {
      console.error("Failde to load months from LocalStorage", error);
    }
  }
  return null;
};

export const saveMonths = (months: Month[]): void => {
  try {
    localStorage.setItem(MONTHS_KEY, JSON.stringify(months));
  } catch (error) {
    console.error("Failed to load months to LocalStorage", error);
  }
};

export const loadActiveMonthId = (): string | null => {
  return localStorage.getItem(ACTIVE_MONTH_KEY);
};

export const saveActiveMonthId = (monthId: string): void => {
  localStorage.setItem(ACTIVE_MONTH_KEY, monthId);
};

export const createInitialMonth = (): Month => {
  return {
    id: crypto.randomUUID(),
    name: new Date().toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    }),
    startBalance: 0,
    transactions: [],
    isClosed: false,
  };
};
