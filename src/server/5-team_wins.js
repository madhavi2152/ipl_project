function team_wins(matches) {
  if (matches === null) return null;
  let output = matches.reduce((op, row) => {
    let toss_winner = row["toss_winner"];
    let match_winner = row["winner"];
    if (toss_winner === match_winner) {
      if (!op[toss_winner]) {
        op[toss_winner] = 1;
      } else op[toss_winner] += 1;
    }
    return op;
  }, {});

  return output;
}
module.exports = team_wins;
