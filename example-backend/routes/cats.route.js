const express = require("express");
const router = express.Router();
const catsController = require("../controllers/cats.controller");

router.get("/", catsController.readCats);
router.post("/:name", catsController.createCat);
router.put("/:id/:name", catsController.updateCat);
router.delete("/:id", catsController.deleteCat);

module.exports = router;
