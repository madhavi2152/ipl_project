function highest_dismissal(deliveries) {
  let player_records = deliveries.reduce((op, row) => {
    let batsman = row["player_dismissed"];
    let type = row["dismissal_kind"];
    let fielder = row["fielder"];
    let bowler = row["bowler"];
    let out_by;
    if (type === "run out") {
      out_by = fielder;
    } else if (type === "retired hurt") {
      out_by = "dontcount";
    } else {
      out_by = bowler;
    }

    if (out_by !== "dontcount" && out_by !== undefined) {
      if (!op[batsman]) {
        op[batsman] = {};
      }

      if (!op[batsman][out_by]) {
        op[batsman][out_by] = 0;
      }
      op[batsman][out_by] += 1;
    }
    return op;
  }, {});

  let player_records_2 = Object.entries(player_records).reduce((op, row) => {
    let batsman = row[0];
    let max = Object.entries(row[1]).sort((a, b) => b[1] - a[1]);
    op[batsman] = max[0];
    return op;
  }, {});

  let sorted_array = Object.entries(player_records_2).sort(
    (a, b) => b[1][1] - a[1][1]
  );

  return `${sorted_array[1][0]} was dismissed by ${sorted_array[1][1][0]} ${sorted_array[1][1][1]} times `;
}
module.exports = highest_dismissal;
