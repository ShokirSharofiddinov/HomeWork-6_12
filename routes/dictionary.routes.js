const { Router } = require("express");
const {
  addTerm,
  getTermById,
  getTerms,
  getTermsByTerm,
  getTermByLetter,
} = require("../controllers/dictionary.controller");

const router = Router();

router.get("/", getTerms);
router.get("/:id", getTermById)
router.get("/letter/:letter", getTermByLetter)
router.get("/term/:term", getTermsByTerm)
router.post("/", addTerm)

module.exports = router