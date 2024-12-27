const express = require("express");

const router = express.Router();

const {
getAllGeoloc,
createGeoloc,
getRecentGeoloc,
getGeolocByYearMonth,
getOldestGeoloc,
deleteGeolocByDate,
} = require("../controllers/geoloc");

router.get("/", getAllGeoloc);
router.post("/", createGeoloc);
router.get("/recent", getRecentGeoloc);
router.get("/yearmonth/:yearmonth", getGeolocByYearMonth);
router.get("/oldest", getOldestGeoloc);
router.delete("/date/:date", deleteGeolocByDate);

module.exports = router;
