import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionList from "./TransactionList";
import type { Transaction } from "../types/types.ts";

describe("TransactionList", () => {
  it("shows empty state with add button when there are no transactions", () => {
    render(
      <TransactionList transactions={[]} onDelete={vi.fn()} onEdit={vi.fn()} />,
    );

    expect(screen.getByText("No Transactions Yet")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add Transaction" }),
    ).toBeInTheDocument();
  });

  it("shows filter message and no add button when filters match nothing", async () => {
    const user = userEvent.setup();
    const transactions: Transaction[] = [
      {
        id: "1",
        type: "income",
        amount: 500,
        category: "Salary",
        description: "Monthly salary",
        date: "2026-08-24",
      },
    ];

    render(
      <TransactionList
        transactions={transactions}
        onDelete={vi.fn()}
        onEdit={vi.fn()}
      />,
    );

    await user.selectOptions(screen.getByDisplayValue("All Types"), "expense");

    expect(screen.getByText(/no transactions match/i)).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Add Transaction" }),
    ).not.toBeInTheDocument();
  });

  it("renders every transaction when no filters are applied", () => {
    const transactions: Transaction[] = [
      {
        id: "1",
        type: "income",
        category: "Salary",
        amount: 500,
        description: "",
        date: "2026-08-24",
      },
      {
        id: "2",
        type: "expense",
        category: "Food",
        amount: 350,
        description: "",
        date: "2026-08-29",
      },
    ];

    render(
      <TransactionList
        transactions={transactions}
        onDelete={vi.fn()}
        onEdit={vi.fn()}
      />,
    );

    expect(screen.getAllByRole("heading", { level: 4 })).toHaveLength(2);
  });
});
