const {Router} = require("express")

const dic = require("./dictionary.routes")
const des = require("./description.routes")
const ct = require("./category.routes")
const sy = require("./synonym.routes")

const router = Router()

router.use("/dic", dic)
router.use("/des", des)
router.use("/ct",ct)
router.use("/sy",sy)

module.exports = router