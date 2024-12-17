const express = require("express");

const router = express.Router();

const {
getAllGeoloc,
createGeoloc,
getRecentGeoloc,
getGeolocByYearMonth,
deleteGeolocByDate,
} = require("../controllers/geoloc");

router.get("/", getAllGeoloc);
router.post("/", createGeoloc);
router.get("/recent", getRecentGeoloc);
router.get("/yearmonth/:yearmonth", getGeolocByYearMonth);
router.delete("/date/:date", deleteGeolocByDate);

module.exports = router;
