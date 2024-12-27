const mysql = require("mysql2");

const express = require("express");
const app = express();
app.use(express.json());

const db = mysql.createConnection({user: "mysql_outer_user", host: "160.16.145.135", password: "Hidechy4819@", database: "brain", port: 3306});

const getAllWalkRecord = (req, res) => {
const query = "SELECT * FROM t_walk_record order by year, month, day";

db.query(query, (err, result) => {
if (err) {
console.log(err);

res.status(500).send("Error retrieving data from database");
} else {
res.status(200).json(result);
}
});
}

const getWalkRecordByYear = (req, res) => {
const year = req.params.year;

const query = "SELECT * FROM t_walk_record where year=? order by year, month, day";

db.query(query, [year], (err, result) => {
if (err) {
console.log(err);

res.status(500).send("Error retrieving data from database");
} else {
res.status(200).json(result);
}
});
}

module.exports = {
getAllWalkRecord,
getWalkRecordByYear,
};
