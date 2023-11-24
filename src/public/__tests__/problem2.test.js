const prob2 = require("/home/madvi/Documents/ipl_project/src/server/2-per-team-per-year.js");
describe("prob2", () => {
  test("working fine for null values", () => {
    const ip = null;
    const result = prob2(ip);
    expect(result).toEqual(ip);
  });
  test("working fine for empty values", () => {
    const ip = [];
    const result = prob2(ip);
    expect(result).toEqual({});
  });
  test("working fine for values", () => {
    const ip = [
      { season: 20, winner: "A" },
      { season: 30, winner: "A" },
      { season: 20, winner: "B" },
      { season: 20, winner: "B" },
    ];
    const result = prob2(ip);
    const expected_op = {
      20: { A: 1, B: 2 },
      30: { A: 1 },
    };
    expect(result).toEqual(expected_op);
  });
});
