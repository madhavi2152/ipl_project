const deliveries = require("/home/madvi/Documents/ipl_project/src/deliveries.json");
const matches = require("/home/madvi/Documents/ipl_project/src/matches.json");
const fs = require("fs");

const matches_per_year = require("./1-matches-per-year.js");

const per_team_per_player = require("./2-per-team-per-year.js");

const runs_conceded = require("./3-runs_conceded.js");

const economy_rate = require("./4-economy_rate.js");

const tos_wins = require("/home/madvi/Documents/ipl_project/src/server/5-team_wins.js");

const player_of_thematch = require("/home/madvi/Documents/ipl_project/src/server/6-hightest_player_of_match.js");

const highest_strikerate = require("/home/madvi/Documents/ipl_project/src/server/7-strike_rate.js");

const highest_dismissal = require("/home/madvi/Documents/ipl_project/src/server/8-highest_dismisal.js");

const super_over = require("/home/madvi/Documents/ipl_project/src/server/9-economy_superovers.js");

const { error } = require("console");

const matches_per_year_output = matches_per_year(matches);
fs.writeFileSync(
  "/home/madvi/Documents/ipl_project/src/public/output/1-matches_per_year.json",
  JSON.stringify(matches_per_year_output),
  "utf-8",
  (err) => console.log(err)
);

const per_team_per_player_output = per_team_per_player(matches);
fs.writeFileSync(
  "/home/madvi/Documents/ipl_project/src/public/output/2-per_team_per_year.json",
  JSON.stringify(per_team_per_player_output),
  "utf-8",
  (err) => console.log(err)
);

const runs_conceded_output = runs_conceded(matches, deliveries);
fs.writeFileSync(
  "/home/madvi/Documents/ipl_project/src/public/output/3-runs_conceded.json",
  JSON.stringify(runs_conceded_output),
  "utf-8",
  (err) => console.log(err)
);

const economy_rate_output = economy_rate(matches, deliveries);
fs.writeFileSync(
  "/home/madvi/Documents/ipl_project/src/public/output/4-economy_rate_output.json",
  JSON.stringify(economy_rate_output),
  "utf-8",
  (err) => console.log(err)
);

const team_wins_output = tos_wins(matches);
fs.writeFileSync(
  "/home/madvi/Documents/ipl_project/src/public/output/5-team_wins_output.json",
  JSON.stringify(team_wins_output),
  "utf-8",
  (err) => console.log(err)
);

const highest_player_output = player_of_thematch(matches);
fs.writeFileSync(
  "/home/madvi/Documents/ipl_project/src/public/output/6-highest_player_output.json",
  JSON.stringify(highest_player_output),
  "utf-8",
  (err) => console.log(err)
);

const highest_strikerate_output = highest_strikerate(matches, deliveries);
fs.writeFileSync(
  "/home/madvi/Documents/ipl_project/src/public/output/7_strike_rate_output.json",
  JSON.stringify(highest_strikerate_output),
  "utf-8",
  (err) => console.log(err)
);

const highest_dismisal_output = highest_dismissal(deliveries);
fs.writeFileSync(
  "/home/madvi/Documents/ipl_project/src/public/output/8_highest_dismissal_output.json",
  JSON.stringify(highest_dismisal_output),
  "utf-8",
  (err) => console.log(err)
);

const super_over_output = super_over(deliveries);
fs.writeFileSync(
  "/home/madvi/Documents/ipl_project/src/public/output/9_economy_superover_output.json",
  JSON.stringify(super_over_output),
  "utf-8",
  (err) => console(err)
);
