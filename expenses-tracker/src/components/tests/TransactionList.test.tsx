import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionList from "../TransactionList.tsx";
import type { Transaction } from "../../types/types.ts";

describe("TransactionList", () => {
  const onEdit = vi.fn();
  const onDelete = vi.fn();
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

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows empty state with add button when there are no transactions", () => {
    render(
      <TransactionList transactions={[]} onDelete={onDelete} onEdit={onEdit} />,
    );

    expect(screen.getByText("No Transactions Yet")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add Transaction" }),
    ).toBeInTheDocument();
  });

  it("shows filter message and no add button when filters match nothing", async () => {
    const user = userEvent.setup();
    const incomeOnly: Transaction[] = [
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
        transactions={incomeOnly}
        onDelete={onDelete}
        onEdit={onEdit}
      />,
    );

    await user.selectOptions(screen.getByDisplayValue("All Types"), "expense");

    expect(screen.getByText(/no transactions match/i)).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Add Transaction" }),
    ).not.toBeInTheDocument();
  });

  it("renders every transaction when no filters are applied", () => {
    render(
      <TransactionList
        transactions={transactions}
        onDelete={onDelete}
        onEdit={onEdit}
      />,
    );

    expect(screen.getAllByRole("heading", { level: 4 })).toHaveLength(2);
  });

  it("shows only expenses when the type filters is 'expense'", async () => {
    const user = userEvent.setup();

    render(
      <TransactionList
        transactions={transactions}
        onEdit={onEdit}
        onDelete={onDelete}
      />,
    );

    await user.selectOptions(screen.getByDisplayValue("All Types"), "expense");
    const headings = screen.getAllByRole("heading", { level: 4 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent("Food");
  });

  it("shows only the selected category when the category filter is used", async () => {
    const user = userEvent.setup();

    render(
      <TransactionList
        transactions={transactions}
        onDelete={onDelete}
        onEdit={onEdit}
      />,
    );

    await user.selectOptions(
      screen.getByDisplayValue("All Categories"),
      "Salary",
    );

    const headings = screen.getAllByRole("heading", { level: 4 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent("Salary");
  });

  it("calls onEdit with the id of the clicked transaction", async () => {
    const user = userEvent.setup();

    render(
      <TransactionList
        transactions={transactions}
        onEdit={onEdit}
        onDelete={onDelete}
      />,
    );

    await user.click(screen.getAllByRole("button", { name: /edit/i })[1]);

    expect(onEdit).toHaveBeenCalledWith("2");
    expect(onEdit).toHaveBeenCalledTimes(1);
  });

  it("calls onDelete with the id of the clicked transaction", async () => {
    const user = userEvent.setup();

    render(
      <TransactionList
        transactions={transactions}
        onEdit={onEdit}
        onDelete={onDelete}
      />,
    );

    await user.click(screen.getAllByRole("button", { name: /delete/i })[0]);

    expect(onDelete).toHaveBeenCalledWith("1");
    expect(onDelete).toHaveBeenCalledTimes(1);
  });

  it("applies the type and category filters together", async () => {
    const user = userEvent.setup();

    render(
      <TransactionList
        transactions={transactions}
        onDelete={onDelete}
        onEdit={onEdit}
      />,
    );

    await user.selectOptions(screen.getByDisplayValue("All Types"), "income");
    await user.selectOptions(
      screen.getByDisplayValue("All Categories"),
      "Food",
    );

    expect(screen.queryAllByRole("heading", { level: 4 })).toHaveLength(0);
    expect(screen.getByText(/no transactions match/i)).toBeInTheDocument();
  });
});
