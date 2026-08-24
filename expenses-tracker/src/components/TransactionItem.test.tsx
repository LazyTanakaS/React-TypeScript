import { render, screen } from "@testing-library/react";
import TransactionItem from "./TransactionItem";
import type { Transaction } from "../types/types";
import userEvent from "@testing-library/user-event";

describe("TransactionItem", () => {
  it("Show income-transaction with correct formatting", () => {
    const mockTransaction: Transaction = {
      id: "1",
      type: "income",
      amount: 500,
      category: "Salary",
      description: "Monthly salary",
      date: "2026-08-24",
    };

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
    const mockTransaction: Transaction = {
      id: "1",
      type: "income",
      amount: 500,
      category: "Salary",
      description: "Monthly salary",
      date: "2026-08-24",
    };

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
});
