const mysql = require("mysql2");

const express = require("express");
const app = express();
app.use(express.json());

const db = mysql.createConnection({user: "root", host: "localhost", password: "Hidechy4819@", database: "toyohide_api", port: 3306});

const getAllResidentTax = (req, res) => {
const query = "SELECT * FROM t_resident_tax";

db.query(query, (err, result) => {
if (err) {
console.log(err);

res.status(500).send("Error retrieving data from database");
} else {
res.status(200).json(result);
}
});
}

const createResidentTax = (req, res) => {
const payLimit = req.body.pay_limit;
const period = req.body.period;
const price = req.body.price;

const query = "INSERT INTO t_resident_tax(pay_limit, period, price) VALUES (?, ?, ?)";

db.query(query, [payLimit, period, price], (err, result) => {
if (err) {
console.log(err);

res.status(500).send({ error: "Error inserting data into database" });
} else {
res.status(200).json({ message: "Value Inserted" });
}
});
}

const getResidentTaxByPayLimit = (req, res) => {
const payLimit = req.params.payLimit;

const query = "SELECT * FROM t_resident_tax where pay_limit = ?";

db.query(query, [payLimit], (err, result) => {
if (err) {
console.log(err);

res.status(500).send("Error retrieving data from database");
} else {
res.status(200).json(result);
}
});
}

const getResidentTaxByPeriod = (req, res) => {
const period = req.params.period;

const query = "SELECT * FROM t_resident_tax where period = ?";

db.query(query, [period], (err, result) => {
if (err) {
console.log(err);

res.status(500).send("Error retrieving data from database");
} else {
res.status(200).json(result);
}
});
}

const updateResidentTaxByPayLimit = (req, res) => {
const payLimit = req.params.payLimit;

const price = req.body.price;
const payDate = req.body.pay_date;

const interestPrice = req.body.interest_price;
const interestPayDate = req.body.interest_pay_date;

const query = "UPDATE t_resident_tax SET price = ?, pay_date = ?, interest_price = ?, interest_pay_date = ? WHERE pay_limit = ?";

db.query(query, [price, payDate, interestPrice, interestPayDate, payLimit], (err, result) => {
if (err) {
console.log(err);

res.status(500).send("Error updating data in database");
} else {
res.status(200).send("Value Updated");
}
});
}

const updateResidentTaxByPeriod = (req, res) => {
const period = req.params.period;

const price = req.body.price;
const payDate = req.body.pay_date;

const interestPrice = req.body.interest_price;
const interestPayDate = req.body.interest_pay_date;

const query = "UPDATE t_resident_tax SET price = ?, pay_date = ?, interest_price = ?, interest_pay_date = ? WHERE period = ?";

db.query(query, [price, payDate, interestPrice, interestPayDate, period], (err, result) => {
if (err) {
console.log(err);

res.status(500).send("Error updating data in database");
} else {
res.status(200).send("Value Updated");
}
});
}

const deleteResidentTaxByPayLimit = (req, res) => {
const payLimit = req.params.payLimit;

const query = "DELETE FROM t_resident_tax WHERE pay_limit = ?";

db.query(query, [payLimit], (err, result) => {
if (err) {
console.log(err);

res.status(500).send("Error deleting data from database");
} else {
res.status(200).send("Value Deleted");
}
});
}

const deleteResidentTaxByPeriod = (req, res) => {
const period = req.params.period;

const query = "DELETE FROM t_resident_tax WHERE period = ?";

db.query(query, [period], (err, result) => {
if (err) {
console.log(err);

res.status(500).send("Error deleting data from database");
} else {
res.status(200).send("Value Deleted");
}
});
}

module.exports = {
getAllResidentTax,
createResidentTax,
getResidentTaxByPayLimit,
getResidentTaxByPeriod,
updateResidentTaxByPayLimit,
updateResidentTaxByPeriod,
deleteResidentTaxByPayLimit,
deleteResidentTaxByPeriod
};
