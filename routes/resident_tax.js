const express = require("express");

const router = express.Router();

const {
getAllResidentTax,
createResidentTax,
getResidentTaxByPayLimit,
getResidentTaxByPeriod,
updateResidentTaxByPayLimit,
updateResidentTaxByPeriod,
deleteResidentTaxByPayLimit,
deleteResidentTaxByPeriod
} = require("../controllers/resident_tax");

router.get("/", getAllResidentTax);
router.post("/", createResidentTax);
router.get("/payLimit/:payLimit", getResidentTaxByPayLimit);
router.get("/period/:period", getResidentTaxByPeriod);
router.patch("/payLimit/:payLimit", updateResidentTaxByPayLimit);
router.patch("/period/:period", updateResidentTaxByPeriod);
router.delete("/payLimit/:payLimit", deleteResidentTaxByPayLimit);
router.delete("/period/:period", deleteResidentTaxByPeriod);

module.exports = router;
