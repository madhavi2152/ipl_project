function player_of_match(matches) {
  if (matches === null) return null;
  let output = matches.reduce((op, row) => {
    let year = row["season"];
    let player = row["player_of_match"];
    if (!op[year]) {
      op[year] = {};
    }
    if (!op[year][player]) {
      op[year][player] = 1;
    }
    op[year][player] += 1;
    return op;
  }, {});
  let sorted_op = Object.entries(output).reduce((op, row) => {
    let year = row[0];
    let arr = Object.entries(row[1]).sort((a, b) => b[1] - a[1]);
    op[year] = arr[0][0];
    return op;
  }, {});

  return sorted_op;
}
module.exports = player_of_match;
