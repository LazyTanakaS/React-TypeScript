import { getMonthKey } from "./getMonthKey";

describe("getMonthKey", () => {
  it("returns YYYY-MM with a leading zero", () => {
    expect(getMonthKey(new Date(2026, 0, 15))).toBe("2026-01");
  });

  it("uses the local date at the start of a month", () => {
    expect(getMonthKey(new Date(2026, 11, 1, 0, 30))).toBe("2026-12");
  });
});
