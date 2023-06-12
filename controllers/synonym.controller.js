const { errorHandler } = require("../helpers/helpers/error_handler");
const Synonym = require("../models/Synonym");

const addSy = async (req, res) => {
  try {
    const { desc_id, dict } = req.body;
    const newSy = await Synonym({
      desc_id,
      dict,
    });
    await newSy.save();
    res.status(200), send({ message: "Yangi sy qo'shish" });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getAllSy = async (req, res) => {
  try {
    const sy = await Synonym.find({});
    if (!sy) {
      return res.status(400).send({ message: "topilmadi!" });
    }
    res.json({ sy });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getSyById = async (req, res) => {
  try {
    try {
      const sy = await Synonym.findOne({ _id: req.params.id });
      if (!sy) {
        return res.status(400).send({ message: "sy topilmadi!!!" });
      }
      res.json({ sy });
    } catch (error) {
      errorHandler(res, error);
    }
  } catch (error) {
    errorHandler(res, error);
  }
};

const deleteSy = async (req, res) => {
  try {
    const sy = await Synonym.deleteOne({ _id: req.params.id });
    res.status(200).send({ message: "sy muvofaqiyatli ochirildi" });
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports = {
  getAllSy,
  getSyById,
  addSy,
  deleteSy,
};
