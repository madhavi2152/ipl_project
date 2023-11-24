function strike_rate(matches, deliveries) {
  let years = matches.reduce((op, row) => {
    let year = row["season"];
    let id = row["id"];
    op[id] = year;
    return op;
  }, {});

  let player = deliveries.reduce((op, row) => {
    let player_name = row["batsman"];
    let id = row["match_id"];
    let year = years[id];
    let total_runs = Number(row["total_runs"]);
    let wide_runs = Number(row["wide_runs"]);
    let noball_runs = Number(row["noball_runs"]);
    let ball = wide_runs === 0 && noball_runs === 0 ? 1 : 0;

    if (!op[player_name]) {
      op[player_name] = {};
    }
    if (!op[player_name][year]) {
      op[player_name][year] = {};
      op[player_name][year]["total_runs"] = 0;
      op[player_name][year]["ball"] = 0;
    }
    op[player_name][year]["total_runs"] += total_runs;
    op[player_name][year]["ball"] += ball;
    return op;
  }, {});

  let unique_array = [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
  ];
  let output = Object.entries(player).reduce((op, row) => {
    let name = row[0];
    let obj = row[1];
    op[name] = [];
    for (let i = 0; i < unique_array.length; i++) {
      if (obj[unique_array[i]]) {
        let year = unique_array[i];
        let strike_rate =
          (obj[unique_array[i]]["total_runs"] * 100) /
          obj[unique_array[i]]["ball"];
        op[name].push({ year: year, strike: strike_rate });
      }
    }
    return op;
  }, {});
  return output;
}
module.exports = strike_rate;
