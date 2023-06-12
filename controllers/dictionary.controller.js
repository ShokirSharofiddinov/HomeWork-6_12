const { errorHandler } = require("../helpers/helpers/error_handler");
const Dictionary = require("../models/Dictionary");

const addTerm = async (req, res) => {
  try {
    const { term } = req.body;
    const dict = await Dictionary.findOne({
      term: { $regex: term, $options: "i" },
    });
    if (dict) {
      res.status(500).send({ message: `bunday term avval ham bo'lgan` });
    }
    const newTerm = await Dictionary({
      term,
      letter: term[0],
    });
    await newTerm.save();
    res.status(200).send({ message: "Yangi termin qo'shildi" });
  } catch (error) {
    console.log(error)
    errorHandler(res, error);
  }
};

const getTerms = async (req, res) => {
  try {
    const dict = await Dictionary.find({});
    if (!dict) {
      return res.status(400).send({ message: "topilmadi!" });
    }
    res.json({ dict });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getTermById = async (req, res) => {
  try {
    const dict = await Dictionary.findOne({ _id: req.params.id });
    if (!dict) {
      return res.status(400).send({ message: "term topilmadi!!!" });
    }
    res.json({ dict });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getTermByLetter = async (req, res) => {
  try {
    const letter = req.params.letter;
    const term = await Dictionary.find({ letter });
    if (!term) {
      return res.status(400).send({ message: "Birorta termin topilmadi" });
    }
  } catch (error) {
    errorHandler(res, error);
  }
};

const getTermsByTerm = async (req, res) => {
  try {
    const term = await Dictionary.find({term: req.params.term});
    if (!term) {
      return res.status(400).send({ message: "Bunday termin topilmadi" });
    }
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports = {
  addTerm,
  getTermById,
  getTerms,
  getTermsByTerm,
  getTermByLetter,
};
