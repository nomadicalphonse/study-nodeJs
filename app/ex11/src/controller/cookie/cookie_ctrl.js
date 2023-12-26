const config = require("../../../config/cookie_session/config")
const cookieConfig = config.cookieConfig;

const index = (req, res) => {
    const myCookie = req.signedCookies.myCookie;
    res.render("cookie/main", {myCookie})
}
const popup = (req, res) => {
    res.render("cookie/popup")
}
const makeCookie = (req, res) => {
    res.cookie("myCookie", "value", cookieConfig)
    res.send("<script>window.close()</script>")
}
module.exports = {index, popup, makeCookie}