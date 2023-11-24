const problem5 = require("/home/madvi/Documents/ipl_project/src/server/5-team_wins.js");
describe("problem5", () => {
  test("working well for null values", () => {
    const input = null;
    const result = problem5(input);
    expect(result).toEqual(null);
  });
  describe("working well for empty values", () => {
    const input = [];
    const result = problem5(input);
    expect(result).toEqual({});
  });
  describe("working well for valid input values", () => {
    const input = [
      { toss_winner: "a", winner: "a" },
      { toss_winner: "b", winner: "b" },
      { toss_winner: "a", winner: "b" },
    ];
    const expected_op = { a: 1, b: 1 };
    const result = problem5(input);
    expect(result).toEqual(expected_op);
  });
});
