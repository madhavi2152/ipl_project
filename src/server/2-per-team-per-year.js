function per_team_per_player(matches) {
  if (matches === null) return null;
  let output = matches.reduce((op, row) => {
    let year = row.season;
    let team = row.winner;

    if (!op[year]) op[year] = {};
    if (!op[year][team]) {
      op[year][team] = 1;
    } else {
      op[year][team]++;
    }
    return op;
  }, {});

  return output;
}
module.exports = per_team_per_player;
