const express = require("express");

const router = express.Router();

const {
getAllFund
} = require("../controllers/fund");

router.get("/", getAllFund);

module.exports = router;
