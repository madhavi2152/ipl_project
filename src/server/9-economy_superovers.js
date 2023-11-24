function economy(deliveries) {
  let count = 0;

  let output = deliveries
    .filter((row) => row["is_super_over"] === "1")
    .reduce((op, row) => {
      count++;

      let wide = row["wide_runs"];
      let noball = row["noball_runs"];
      let bowler = row["bowler"];
      let runs = parseInt(row["total_runs"]) || 0;
      let ball = 0;
      if (wide === "0" && noball === "0") ball = 1;
      if (!op[bowler]) {
        op[bowler] = {};
        op[bowler]["runs"] = 0;
        op[bowler]["balls"] = 0;
      }
      op[bowler]["runs"] += runs;
      op[bowler]["balls"] += ball;
      return op;
    }, {});
  /*
  let output = deliveries
    .filter((row) => row["is_super_over"] === "1")
    .reduce((op, row) => {
      let wide = parseInt(row["wide_runs"]) || 0;
      let noball = parseInt(row["noball_runs"]) || 0;
      let bowler = row["bowler"];
      let runs = parseInt(row["total_runs"]) - wide - noball; // Subtract wide and no-ball runs
      let ball = wide !== 0 || noball !== 0 ? 0 : 1;

      if (!op[bowler]) {
        op[bowler] = {};
        op[bowler]["runs"] = 0;
        op[bowler]["balls"] = 0;
      }

      op[bowler]["runs"] += runs;
      op[bowler]["balls"] += ball;

      return op;
    }, {});
    */

  let output2 = Object.entries(
    Object.entries(output).reduce((op, row) => {
      let temp = Object.entries(row[1]);
      let name = row[0];
      op[name] = temp[0][1] / (temp[1][1] / 6);
      return op;
    }, {})
  ).sort((a, b) => a[1] - b[1]);

  return output2[0];
}
module.exports = economy;
