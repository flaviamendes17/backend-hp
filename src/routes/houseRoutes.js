const express = require("express");
const router = express.Router();
const houseController = require("../controllers/houseController.js");

router.get("/houses", houseController.getAllHouses);
router.get("/houses/:id", houseController.getHouse);
router.post("/houses", houseController.createHouse);
router.delete("/houses/:id", houseController.deleteHouse);
router.put("/houses/:id", houseController.updateHouse);

module.exports = router;