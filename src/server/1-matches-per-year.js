function matches_per_year(matches) {
  let output = matches.reduce((output, row) => {
    if (row === null) return;
    let year = row.season;

    if (!output[year]) output[year] = 1;
    else output[year] += 1;
    return output;
  }, {});

  return output;
}
module.exports = matches_per_year;
