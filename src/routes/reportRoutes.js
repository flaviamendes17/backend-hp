const express = require("express");
const router = express.Router();

const reportController = require("./../controllers/reportController");
const apiKeyMiddleware = require("./../config/apiKey.js");

router.use(apiKeyMiddleware);

//Rota para gerar CSV
router.get("/report/csv", reportController.exportWizardCSV);

//Rota para o PDF
router.get("/report/pdf", reportController.exportWizardPDF);


module.exports = router;