const mysql = require("mysql2");

const express = require("express");
const app = express();
app.use(express.json());

const db = mysql.createConnection({user: "root", host: "localhost", password: "Hidechy4819@", database: "toyohide_api", port: 3306});

const getAllGeoloc = (req, res) => {
const query = "SELECT * FROM t_geoloc";

db.query(query, (err, result) => {
if (err) {
console.log(err);

res.status(500).send("Error retrieving data from database");
} else {
res.status(200).json(result);
}
});
}

const createGeoloc = (req, res) => {
const year = req.body.year;
const month = req.body.month;
const day = req.body.day;

const time = req.body.time;

const latitude = req.body.latitude;
const longitude = req.body.longitude;

const query = "INSERT INTO t_geoloc(year, month, day, time, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?)";

db.query(query, [year, month, day, time, latitude, longitude], (err, result) => {
if (err) {
console.log(err);

res.status(500).send({ error: "Error inserting data into database" });
} else {
res.status(200).json({ message: "Value Inserted" });
}
});
}

const getRecentGeoloc = (req, res) => {
const query = "SELECT * FROM t_geoloc order by id desc limit 10";

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
getAllGeoloc,
createGeoloc,
getRecentGeoloc,
};
