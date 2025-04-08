const express = require("express");
const router = express.Router();

const reportController = require("./../controllers/reportController");

//Rota para gerar CSV
router.get("/report/csv", reportController.exportWizardCSV);


module.exports = router;