const express = require("express");

const router = express.Router();

const {
getAllGeoloc,
createGeoloc,
getRecentGeoloc,
getYearMonthGeoloc,
} = require("../controllers/geoloc");

router.get("/", getAllGeoloc);
router.post("/", createGeoloc);
router.get("/recent", getRecentGeoloc);
router.get("/yearmonth/:yearmonth", getYearMonthGeoloc);

module.exports = router;
