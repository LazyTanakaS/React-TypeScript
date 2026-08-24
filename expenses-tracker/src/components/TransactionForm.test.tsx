import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionForm from "./TransactionForm";

describe("TransactionForm", () => {
  it("Call onAddTransaction with right data when send income-form", async () => {
    const onAddTransaction = vi.fn();

    render(<TransactionForm onAddTransaction={onAddTransaction} />);

    const incomeHeading = screen.getByRole("heading", { name: "Add Income" });
    const incomeForm = incomeHeading.closest("form")!;
    const amountInput = within(incomeForm).getByLabelText("Amount");
    const user = userEvent.setup();

    await user.type(amountInput, "200");

    const submitButton = within(incomeForm).getByRole("button", {
      name: "Add Income",
    });
    await user.click(submitButton);

    const today = new Date().toISOString().split("T")[0];
    expect(onAddTransaction).toHaveBeenCalledWith({
      type: "income",
      amount: 200,
      category: "Salary",
      description: "",
      date: today,
    });
  });

  it("Call onAddTransaction with right data when send expense-form", async () => {
    const onAddTransaction = vi.fn();

    render(<TransactionForm onAddTransaction={onAddTransaction} />);

    const expenseHeading = screen.getByRole("heading", { name: "Add Expense" });
    const expenseForm = expenseHeading.closest("form")!;
    const amountInput = within(expenseForm).getByLabelText("Amount");
    const user = userEvent.setup();

    await user.type(amountInput, "200");

    const submitButton = within(expenseForm).getByRole("button", {
      name: "Add Expense",
    });
    await user.click(submitButton);

    const today = new Date().toISOString().split("T")[0];
    expect(onAddTransaction).toHaveBeenCalledWith({
      type: "expense",
      amount: 200,
      category: "Food",
      description: "",
      date: today,
    });
  });

  it("Call onAddTransaction with wrong data when send income-form", async () => {
    const onAddTransaction = vi.fn();

    render(<TransactionForm onAddTransaction={onAddTransaction} />);

    const incomeHeading = screen.getByRole("heading", { name: "Add Income" });
    const incomeForm = incomeHeading.closest("form")!;
    const amountInput = within(incomeForm).getByLabelText("Amount");
    const user = userEvent.setup();

    await user.type(amountInput, "-50");

    const submitButton = within(incomeForm).getByRole("button", {
      name: "Add Income",
    });
    await user.click(submitButton);

    expect(onAddTransaction).not.toHaveBeenCalled();
  });
});
