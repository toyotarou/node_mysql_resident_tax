const express = require("express");

const router = express.Router();

const {
getAllWalkRecord,
getWalkRecordByYear,
} = require("../controllers/walk_record");

router.get("/", getAllWalkRecord);
router.get("/year/:year", getWalkRecordByYear);

module.exports = router;
