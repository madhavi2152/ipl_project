const problem1 = require("/home/madvi/Documents/ipl_project/src/server/1-matches-per-year.js");
describe("problem1", () => {
  test("working good for empty object", () => {
    const ip = [];
    const ans = problem1(ip);
    expect(ans).toEqual({});
  });
  test("working well for null objects passes", () => {
    const ip = [null];
    const ans = problem1(ip);
    expect(ans).toEqual();
  });
  test("working well for values", () => {
    const ip = [
      { season: 2017, team: "rcb" },
      { season: 2017, team: "tcb" },
      { season: 2017, team: "bhg" },
      { season: 2015, team: "rcb" },
    ];
    const op = problem1(ip);
    expect(op).toEqual({ "2015": 1, "2017": 3 });
  });
});
