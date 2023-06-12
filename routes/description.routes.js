const { Router } = require("express");
const {
  getAllDes,
  getDesById,
  addDes,
  deleteDes,
} = require("../controllers/description.controller");

const router = Router();

router.get("/", getAllDes);
router.get("/:id", getDesById);
router.delete("/:id", deleteDes);
router.post("/", addDes);

module.exports = router;
