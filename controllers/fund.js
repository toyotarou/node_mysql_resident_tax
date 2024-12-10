const mysql = require("mysql2");

const express = require("express");
const app = express();
app.use(express.json());

const db = mysql.createConnection({user: "mysql_outer_user", host: "160.16.145.135", password: "Hidechy4819@", database: "brain", port: 3306});

const getAllFund = (req, res) => {
const query = "SELECT * FROM t_fund order by fundname, year, month, day";

db.query(query, (err, result) => {
if (err) {
console.log(err);

res.status(500).send("Error retrieving data from database");
} else {
res.status(200).json(result);
}
});
}

module.exports = {
getAllFund,
};
