const express = require("express");
const router = express.Router();
const wizardController = require("../controllers/wizardController.js");

router.get("/wizards", wizardController.getAllWizards);
router.get("/wizards/:id", wizardController.getWizard);
router.post("/wizards", wizardController.createWizard);
router.delete("/wizards/:id", wizardController.deleteWizard);
router.put("/wizards/:id", wizardController.updateWizard);

module.exports = router;