import { toTransaction } from "./transactions";

describe("toTransaction", () => {
  it("converts id to string and amount to number", () => {
    const result = toTransaction({
      id: 5,
      amount: "12.5",
      type: "expense",
      category: "Food",
      description: "lunch",
      date: "2026-11-05",
    });

    expect(result.id).toBe("5");
    expect(result.amount).toBe(12.5);
  });

  it("uses a fallback category when the API returns null", () => {
    const result = toTransaction({
      id: 6,
      amount: "3000.00",
      type: "income",
      category: null,
      description: "",
      date: "2026-11-05",
    });

    expect(result.category).toBe("Other");
  });
});
