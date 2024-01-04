const router = require("express").Router()
const memberCtrl = require("../../controller/member/member_ctrl")
router.get("/", memberCtrl.list)
/*
router.get("/", (req, res)=>{
    res.render("member/member_index")
})
*/
module.exports = router