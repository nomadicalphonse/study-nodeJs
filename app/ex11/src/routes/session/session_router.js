const express = require("express")
const ctrl = require("../../controller/session/session_ctrl")
const router = express.Router()
router.get("/", ctrl.index)
router.get("/set_session", ctrl.setSession)
router.get("/get_session", ctrl.getSession)
router.get("/del_session", ctrl.delSession)
module.exports = router
