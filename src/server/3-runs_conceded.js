function runs_conceded(matches, deliveries) {
  if (matches === null || deliveries === null) return null;
  let id = matches.map((row) => {
    if (row["season"] === "2016") return row["id"];
  });

  let output = deliveries.reduce((op, row) => {
    let temp_id = row["match_id"];
    let temp_runs = row["extra_runs"];
    const present = id.indexOf(temp_id);
    if (present !== -1) {
      if (!op[row["batting_team"]]) op[row["batting_team"]] = Number(temp_runs);
      else op[row["batting_team"]] += Number(temp_runs);
    }
    return op;
  }, {});

  return output;
}
module.exports = runs_conceded;
