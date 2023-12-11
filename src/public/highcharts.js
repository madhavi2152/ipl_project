const output1 = {
  "2008": 58,
  "2009": 57,
  "2010": 60,
  "2011": 73,
  "2012": 74,
  "2013": 76,
  "2014": 60,
  "2015": 59,
  "2016": 60,
  "2017": 59,
};

const output2 = {
  "2008": {
    "Kolkata Knight Riders": 6,
    "Chennai Super Kings": 9,
    "Delhi Daredevils": 7,
    "Royal Challengers Bangalore": 4,
    "Rajasthan Royals": 13,
    "Kings XI Punjab": 10,
    "Deccan Chargers": 2,
    "Mumbai Indians": 7,
  },
  "2009": {
    "Mumbai Indians": 5,
    "Royal Challengers Bangalore": 9,
    "Delhi Daredevils": 10,
    "Deccan Chargers": 9,
    "Chennai Super Kings": 8,
    "Kolkata Knight Riders": 3,
    "Rajasthan Royals": 6,
    "Kings XI Punjab": 7,
  },
  "2010": {
    "Kolkata Knight Riders": 7,
    "Mumbai Indians": 11,
    "Delhi Daredevils": 7,
    "Deccan Chargers": 8,
    "Royal Challengers Bangalore": 8,
    "Chennai Super Kings": 9,
    "Rajasthan Royals": 6,
    "Kings XI Punjab": 4,
  },
  "2011": {
    "Chennai Super Kings": 11,
    "Rajasthan Royals": 6,
    "Royal Challengers Bangalore": 10,
    "Mumbai Indians": 10,
    "Pune Warriors": 4,
    "Kolkata Knight Riders": 8,
    "Kings XI Punjab": 7,
    "Deccan Chargers": 6,
    "Kochi Tuskers Kerala": 6,
    "Delhi Daredevils": 4,
    "": 1,
  },
  "2012": {
    "Mumbai Indians": 10,
    "Delhi Daredevils": 11,
    "Pune Warriors": 4,
    "Rajasthan Royals": 7,
    "Royal Challengers Bangalore": 8,
    "Chennai Super Kings": 10,
    "Kolkata Knight Riders": 12,
    "Kings XI Punjab": 8,
    "Deccan Chargers": 4,
  },
  "2013": {
    "Kolkata Knight Riders": 6,
    "Royal Challengers Bangalore": 9,
    "Sunrisers Hyderabad": 10,
    "Rajasthan Royals": 11,
    "Mumbai Indians": 13,
    "Kings XI Punjab": 8,
    "Chennai Super Kings": 12,
    "Pune Warriors": 4,
    "Delhi Daredevils": 3,
  },
  "2014": {
    "Kolkata Knight Riders": 11,
    "Royal Challengers Bangalore": 5,
    "Kings XI Punjab": 12,
    "Rajasthan Royals": 7,
    "Delhi Daredevils": 2,
    "Chennai Super Kings": 10,
    "Sunrisers Hyderabad": 6,
    "Mumbai Indians": 7,
  },
  "2015": {
    "Kolkata Knight Riders": 7,
    "Chennai Super Kings": 10,
    "Rajasthan Royals": 7,
    "Royal Challengers Bangalore": 8,
    "Kings XI Punjab": 3,
    "Sunrisers Hyderabad": 7,
    "Delhi Daredevils": 5,
    "Mumbai Indians": 10,
    "": 2,
  },
  "2016": {
    "Rising Pune Supergiants": 5,
    "Kolkata Knight Riders": 8,
    "Gujarat Lions": 9,
    "Royal Challengers Bangalore": 9,
    "Mumbai Indians": 7,
    "Delhi Daredevils": 7,
    "Kings XI Punjab": 4,
    "Sunrisers Hyderabad": 11,
  },
  "2017": {
    "Sunrisers Hyderabad": 8,
    "Rising Pune Supergiant": 10,
    "Kolkata Knight Riders": 9,
    "Kings XI Punjab": 7,
    "Royal Challengers Bangalore": 3,
    "Mumbai Indians": 12,
    "Delhi Daredevils": 6,
    "Gujarat Lions": 4,
  },
};

const output3 = {
  "Mumbai Indians": 102,
  "Rising Pune Supergiants": 101,
  "Delhi Daredevils": 109,
  "Kolkata Knight Riders": 130,
  "Kings XI Punjab": 83,
  "Gujarat Lions": 132,
  "Royal Challengers Bangalore": 118,
  "Sunrisers Hyderabad": 124,
};

const output4 = [
  ["RN ten Doeschate", 4],
  ["J Yadav", 4.142857142857143],
  ["V Kohli", 5.454545454545454],
  ["R Ashwin", 5.871794871794871],
  ["S Nadeem", 6.142857142857143],
  ["Parvez Rasool", 6.2],
  ["MC Henriques", 6.56],
  ["Z Khan", 6.5793103448275865],
  ["M Vijay", 7],
  ["GB Hogg", 7.0476190476190474],
];

const output5 = {
  "Rising Pune Supergiant": 5,
  "Kolkata Knight Riders": 44,
  "Kings XI Punjab": 28,
  "Royal Challengers Bangalore": 35,
  "Sunrisers Hyderabad": 17,
  "Mumbai Indians": 48,
  "Gujarat Lions": 10,
  "Delhi Daredevils": 33,
  "Chennai Super Kings": 42,
  "Rajasthan Royals": 34,
  "Deccan Chargers": 19,
  "Kochi Tuskers Kerala": 4,
  "Pune Warriors": 3,
  "Rising Pune Supergiants": 3,
};

const output6 = {
  "2008": "SE Marsh",
  "2009": "YK Pathan",
  "2010": "SR Tendulkar",
  "2011": "CH Gayle",
  "2012": "CH Gayle",
  "2013": "MEK Hussey",
  "2014": "GJ Maxwell",
  "2015": "DA Warner",
  "2016": "V Kohli",
  "2017": "BA Stokes",
};

const output7 = Highcharts.chart("op1", {
  chart: { renderTo: "chart", type: "bar" },
  title: { text: "output1" },
  xAxis: { categories: Object.keys(output1), text: "year" },
  yAxis: { text: "number of matches" },
  series: [{ data: Object.values(output1) }],
});

Highcharts.chart("op2", {
  chart: { renderTo: "chart", type: "bar" },
  title: { text: "output2" },
  xAxis: { categories: Object.keys(output2) },
  yAxis: { title: { text: "teams" } },
  series: Object.keys(output2["2008"]).map((team) => ({
    name: team,
    data: Object.keys(output2).map((year) => output2[year][team] || 0),
  })),
});

const keys = Object.keys(output3);
const values = Object.values(output3);

Highcharts.chart("op3", {
  chart: { renderTo: "chart", type: "bar" },
  title: { text: "extra_runs_conceded" },
  xAxis: { title: { text: "team" }, categories: keys },
  yAxis: { title: { text: "extra runs" } },
  series: [{ data: values }],
});

Highcharts.chart("op4", {
  chart: { renderTo: "chart", type: "bar" },
  title: { text: "output4" },
  xAxis: { categories: output4.map((row) => row[0]) },
  yAxis: { text: "economy" },
  series: [{ data: output4.map((row) => row[1]) }],
});

Highcharts.chart("op5", {
  chart: { renderTo: "chart", type: "bar" },
  title: { text: "output5" },
  xAxis: { categories: Object.keys(output5), text: "team" },
  yAxis: { text: "wins" },
  series: [{ data: Object.values(output5) }],
});

/*
Highcharts.chart("op6", {
  chart: { renderTo: "bar", type: "bar" },
  title: { text: "output6" },
  xAxis: { categories: Object.keys(output6) },
  yAxis: { text: "player of the match" },
  series: [{ name: Object.values(output6) }],
});
*/
