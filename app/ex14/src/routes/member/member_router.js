const router = require("express").Router()
const memberCtrl = require("../../controller/member/member_ctrl")
router.get("/", memberCtrl.list)
router.get("/register_form", memberCtrl.registerForm)
router.post("/register", memberCtrl.register)
router.get("/member_view/:id", memberCtrl.memberView1)
router.get("/member_view", memberCtrl.memberView2)
router.get("/delete/:id", memberCtrl.deleteMember)
router.get("/modify_form/:id", memberCtrl.modifyForm)
router.post("/modify", memberCtrl.modify)

/*
router.get("/", (req, res)=>{
    res.render("member/member_index")
})
*/
module.exports = router