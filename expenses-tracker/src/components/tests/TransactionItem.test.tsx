import { render, screen } from "@testing-library/react";
import TransactionItem from "../TransactionItem.tsx";
import type { Transaction } from "../../types/types.ts";
import userEvent from "@testing-library/user-event";

describe("TransactionItem", () => {
  const mockTransaction: Transaction = {
    id: "1",
    type: "income",
    amount: 500,
    category: "Salary",
    description: "Monthly salary",
    date: "2026-08-24",
  };

  const mockExpenseTransaction: Transaction = {
    id: "2",
    type: "expense",
    amount: 300,
    category: "Food",
    description: "Groceries",
    date: "2026-08-24",
  };

  it("Show income-transaction with correct formatting", () => {
    render(
      <TransactionItem
        transaction={mockTransaction}
        onEdit={vi.fn()}
        onDelete={vi.fn()}
      />,
    );

    expect(screen.getByText("Salary")).toBeInTheDocument();
    expect(screen.getByText("Monthly salary")).toBeInTheDocument();
    expect(screen.getByText("+500 Kč")).toBeInTheDocument();
    expect(screen.getByText("24.08")).toBeInTheDocument();
  });

  it("Call onEdit with the right id when clicking on Edit", async () => {
    const onEdit = vi.fn();

    render(
      <TransactionItem
        transaction={mockTransaction}
        onEdit={onEdit}
        onDelete={() => {}}
      />,
    );

    const user = userEvent.setup();
    const editButton = screen.getByRole("button", { name: "Edit" });
    await user.click(editButton);

    expect(onEdit).toHaveBeenCalledWith(mockTransaction.id);
  });

  it("Show expense-transaction with correct formatting", () => {
    const onEdit = vi.fn();

    render(
      <TransactionItem
        transaction={mockExpenseTransaction}
        onEdit={onEdit}
        onDelete={() => {}}
      />,
    );

    expect(screen.getByText("Food")).toBeInTheDocument();
    expect(screen.getByText("Groceries")).toBeInTheDocument();
    expect(screen.getByText("-300 Kč")).toBeInTheDocument();
    expect(screen.getByText("24.08")).toBeInTheDocument();
  });
});
