const express = require("express");
const path = require("path");
const server = express();
const highcharts = require("highcharts");

server.use(express.static(path.join(__dirname, "../", "public")));

server.get("/", (req, res) => {
  res.send(path.join(__dirname, "../", "public/index.html"));
});

server.listen(3000, () => {
  console.log("listening to port 3000");
});
//const path = require("path");

// module.exports = {
//   entry: "../src/public/highcharts.js", // Adjust the entry point based on your project structure
//   output: {
//     mode: "development",

//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
// };
