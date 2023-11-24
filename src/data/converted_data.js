const csvtojson = require('csvtojson');
const fs = require('fs');


csvtojson()
    .fromFile("/home/madvi/Documents/ipl_project/src/data/deliveries.csv")
    .then((obj) =>
      fs.writeFileSync(
        "/home/madvi/Documents/ipl_project/src/deliveries.json",
        JSON.stringify(obj),
        "utf-8",
        (err) => console.log(err)
      )
    );

    csvtojson()
    .fromFile("/home/madvi/Documents/ipl_project/src/data/matches.csv")
    .then((obj) =>
      fs.writeFileSync(
        "/home/madvi/Documents/ipl_project/src/matches.json",
        JSON.stringify(obj),
        "utf-8",
        (err) => console.log(err)
      )
    );
    
    
   