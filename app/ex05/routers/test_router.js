const express = require("express")
const ctl = require("../controller/test_controller")
const router = express.Router()
console.log(ctl.index);
router.get("/", ctl.index)
router.get("/test1", ctl.test1)
router.get("/test2", ctl.test2)
module.exports = router