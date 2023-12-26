const express = require("express")
const router = express.Router()
const ctrl = require("../../controller/cookie/cookie_ctrl")
router.get("/", ctrl.index)
/*
router.get("/", (req, res)=>{
    res.send("연동 성공")
})
*/
module.exports = router