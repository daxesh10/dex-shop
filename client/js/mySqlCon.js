let mysql = require('mysql')

let con = mysql.createConnection({

     host: "localhost",
  user: "root",
  password: ""
})

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  createDb()
});

let createDb = ()=>{


     con.query("CREATE DATABASE shopping", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
}

//CREATE TABLE `shopping`.`inventory` ( `name` VARCHAR NOT NULL , `type` VARCHAR NOT NULL , `price` FLOAT NOT NULL , `quantity` INT NOT NULL ) ENGINE = MyISAM;