const problem6 = require("/home/madvi/Documents/ipl_project/src/server/6-hightest_player_of_match.js");

describe("problem6", () => {
  test("working well for null values", () => {
    const ip = null;
    const result = problem6(ip);
    expect(result).toEqual(null);
  });
  test("working well for empty values", () => {
    const ip = [];
    const result = problem6(ip);
    expect(result).toEqual({});
  });
  test("working well for actual input", () => {
    const input = [
      { season: 2017, player_of_match: "a" },
      { season: 2016, player_of_match: "a" },
      { season: 2016, player_of_match: "b" },
      { season: 2016, player_of_match: "b" },
      { season: 2016, player_of_match: "b" },
    ];
    const expected_output = { 2016: "b", 2017: "a" };
    const result = problem6(input);
    expect(result).toEqual(expected_output);
  });
});
