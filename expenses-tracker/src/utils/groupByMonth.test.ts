import { groupByMonth } from "./groupByMonth";
import type { Transaction } from "../types/types";

const make = (id: string, date: string): Transaction => ({
  id,
  type: "expense",
  amount: 10,
  category: "Food",
  description: "",
  date,
});

describe("groupByMonth", () => {
  it("groups transactions by YYYY-MM", () => {
    const result = groupByMonth([
      make("1", "2026-10-31"),
      make("2", "2026-11-01"),
      make("3", "2026-11-05"),
    ]);

    expect(Object.keys(result)).toEqual(["2026-10", "2026-11"]);
    expect(result["2026-11"]).toHaveLength(2);
    expect(result["2026-10"]).toHaveLength(1);
  });
});
