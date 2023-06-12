const { Router } = require("express");
const {
  getAllSy,
  getSyById,
  addSy,
  deleteSy,
} = require("../controllers/synonym.controller");

const router = Router();

router.get("/", getAllSy);
router.get("/:id", getSyById);
router.delete("/:id", deleteSy);
router.post("/", addSy);

module.exports = router;
