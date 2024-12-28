const express = require("express");

const router = express.Router();

const {
getAllTemple,
getAllTempleLatlng
} = require("../controllers/temple");

router.get("/", getAllTemple);
router.get("/latlng", getAllTempleLatlng);

module.exports = router;
