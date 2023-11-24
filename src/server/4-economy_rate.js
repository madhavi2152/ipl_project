function economy_rate(matches, deliveries) {
  let id_temp = matches
    .filter((row) => row["season"] === "2015")
    .map((row) => row["id"]);
  //console.log(id_temp);
  //console.log(id_temp.indexOf("580"));
  let output = deliveries.reduce((op, row) => {
    if (id_temp.indexOf(row["match_id"]) !== -1) {
      let bowler_name = row["bowler"];
      let runs = row["total_runs"];
      let wides = row["wide_runs"];
      let no_ball = row["noball_runs"];

      let ball = 0;
      if (wides === "0" && no_ball === "0") ball = 1;
      if (!op[bowler_name]) {
        op[bowler_name] = {};
        op[bowler_name]["run"] = 0;
        op[bowler_name]["balls"] = 0;
      }
      op[bowler_name]["run"] += parseInt(runs);
      op[bowler_name]["balls"] += ball;
      //console.log(op[bowler_name]["run"], op[bowler_name]["balls"]);
    }
    return op;
  }, {});
  //console.log(output);

  let top_ten = Object.entries(output).reduce((op, [bowler, row]) => {
    let total_runs = row.run;
    let total_balls = row.balls;
    let economy = (total_runs * 6) / total_balls;
    op[bowler] = economy;
    return op;
  }, {});
  //console.log(top_ten);
  let top_ten_aray = Object.entries(top_ten).sort((a, b) => a[1] - b[1]);

  return top_ten_aray.slice(0, 10);
}
module.exports = economy_rate;
