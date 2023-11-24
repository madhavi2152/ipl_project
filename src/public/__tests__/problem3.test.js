const problem3 = require("/home/madvi/Documents/ipl_project/src/server/3-runs_conceded.js");
describe("problem3", () => {
  test("working well for null values", () => {
    const ip = null;
    const result = problem3(ip, ip);
    expect(result).toEqual(null, null);
    expect(result).toEqual(null);
  });
  test("working well for empty values", () => {
    const ip1 = [];
    const ip2 = [];
    const result = problem3(ip1, ip2);
    expect(result).toEqual({});
  });
  test("working well for valid input values", () => {
    const ip1 = [
      { season: "2016", id: 1 },
      { season: "2017", id: 3 },
      { season: "2016", id: 2 },
    ];
    const ip2 = [
      { match_id: 1, extra_runs: 3, batting_team: "A" },
      { match_id: 2, extra_runs: 2, batting_team: "B" },
      { match_id: 9, extra_runs: 3, batting_team: "A" },
    ];
    const expected_op = { A: 3, B: 2 };
    const result = problem3(ip1, ip2);
    expect(result).toEqual(expected_op);
  });
});
