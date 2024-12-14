const express = require("express");

const router = express.Router();

const {
getAllGeoloc,
createGeoloc,
getRecentGeoloc,
} = require("../controllers/geoloc");

router.get("/", getAllGeoloc);
router.post("/", createGeoloc);
router.get("/recent", getRecentGeoloc);

module.exports = router;
