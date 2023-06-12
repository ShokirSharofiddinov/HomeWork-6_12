
const { errorHandler } = require("../helpers/helpers/error_handler");
const Description = require("../models/Description");

const addDes = async (req, res) => {
  try {
    const { description,category_id } = req.body;
    const newDes = await Description({
      description,
      category_id,
    });
    await newDes.save();
    res.status(200), send({ message: "Yangi desin qo'shish" });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getAllDes = async (req, res) => {
  try {
    const des = await Description.find({});
    if (!des) {
      return res.status(400).send({ message: "topilmadi!" });
    }
    res.json({ des });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getDesById = async (req, res) => {
  try {
    try {
      const des = await Description.findOne({ _id: req.params.id });
      if (!des) {
        return res.status(400).send({ message: "des topilmadi!!!" });
      }
      res.json({ des });
    } catch (error) {
      errorHandler(res, error);
    }
  } catch (error) {
    errorHandler(res, error);
  }
};

const deleteDes = async (req, res) => {
  try {
    const des = await Description.deleteOne({ _id: req.params.id });
    res.status(200).send({ message: "description muvofaqiyatli ochirildi" });
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports = {
    getAllDes,
    getDesById,
    addDes,
    deleteDes
};
