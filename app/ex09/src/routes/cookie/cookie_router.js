const express = require("express")
const router = express.Router()
const ctrl = require("../../controller/cookie/cookie_ctrl")
router.get("/", ctrl.index)
router.get("/popup", ctrl.popup)
router.get("/makeCookie", ctrl.makeCookie)
module.exports = router