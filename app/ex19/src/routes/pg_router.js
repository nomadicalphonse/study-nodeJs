const router = require("express").Router()
const pageCtrl = require("../controller/pg_ctl")
router.get( "/", pageCtrl.views.index )
router.get( "/list", pageCtrl.views.list )
router.get( "/write_form", pageCtrl.views.writeFrom )
router.post( "/write", pageCtrl.process.write )
router.get( "/content/:num", pageCtrl.views.content )
module.exports = router