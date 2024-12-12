const express = require("express");

const router = express.Router();

const {
getAllGeoloc,
createGeoloc,
} = require("../controllers/geoloc");

router.get("/", getAllGeoloc);
router.post("/", createGeoloc);

module.exports = router;
