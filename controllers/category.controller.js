const { errorHandler } = require("../helpers/helpers/error_handler");
const Category = require("../models/Category");

const addCt = async (req, res) => {
  try {
    const { category_name, parent_category_id } = req.body;
    if (category_name === "") {
      return res.status.send({ message: "Malumotlarni to'liq kiriting" });
    }
    const newCt = await Category({
      category_name,
      parent_category_id,
    });
    await newCt.save();
    res.status(200), send({ message: "Yangi category qo'shish" });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getAllCt = async (req, res) => {
  try {
    const ct = await Category.find({});
    if (!ct) {
      return res.status(400).send({ message: "topilmadi!" });
    }
    res.json({ ct });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getCtById = async (req, res) => {

    try {
      const ct = await Category.findOne({ _id: req.params.id });
      if (!ct) {
        return res.status(400).send({ message: "category topilmadi!!!" });
      }
      res.json({ ct });
    } catch (error) {
      errorHandler(res, error);
    }
  
};

const deleteCt = async (req, res) => {
  try {
    const ct = await Category.deleteOne({ _id: req.params.id });
    res.status(200).send({ message: "category muvofaqiyatli ochirildi" });
  } catch (error) {
    errorHandler(res, error);
  }
};

const updateCt = async (req, res) => {
  try {
    const { category_name, parent_category_id } = req.body;
    if (category_name == "" || parent_category_id == 0) {
      return res.status(400).send({ message: "Ma'lumotlarni to'liq kiriting" });
    }

    const updaeCtType = await PriceType.updateOne(
      { id: req.params.id },
      { $set: { category_name, parent_category_id } }
    );
    await updaeCtType.save();

    res.status(200).send({ message: "category update bo'ldi" });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getCtByName = async (req,res) => {
    try {
      const ct = await Category.findOne({ _id: req.params.name });
      if (!ct) {
        return res.status(400).send({ message: "category topilmadi!!!" });
      }
      res.json({ ct });
    } catch (error) {
      errorHandler(res, error);
    }
}

module.exports = {
  getAllCt,
  getCtById,
  addCt,
  deleteCt,
  updateCt,
  getCtByName,
};
