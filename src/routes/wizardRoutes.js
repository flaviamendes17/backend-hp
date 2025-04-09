const express = require("express");
const router = express.Router();
const wizardController = require("../controllers/wizardController.js");
const upload = require("./../config/upload.js"); 


router.get("/wizards", wizardController.getAllWizards);
router.get("/wizards/:id", wizardController.getWizard);

// Atualize aqui para aceitar foto
router.post("/wizards", upload.single("photo"), wizardController.createWizard);

router.delete("/wizards/:id", wizardController.deleteWizard);
router.put("/wizards/:id", wizardController.updateWizard);

module.exports = router;