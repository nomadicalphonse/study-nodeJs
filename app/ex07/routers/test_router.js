const express = require("express")
const ctl = require("../controller/test_controller")
const router = express.Router()
console.log(ctl.index);
router.get("/", ctl.index)
router.get("/loginCheck", ctl.loginCheck)
router.get("/info", ctl.info)
router.get("/login", ctl.login)
module.exports = router