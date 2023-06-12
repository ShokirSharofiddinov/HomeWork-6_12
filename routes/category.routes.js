const { Router } = require("express");
const {
  getAllCt,
  getCtById,
  addCt,
  deleteCt,
  updateCt,
  getCtByName,
} = require("../controllers/category.controller");

const router = Router();

router.get("/", getAllCt);
router.get("/:id", getCtById);
router.get("/name/:name", getCtByName);
router.delete("/:id", deleteCt);
router.post("/", addCt);
router.put("/:id", updateCt);

module.exports = router;
