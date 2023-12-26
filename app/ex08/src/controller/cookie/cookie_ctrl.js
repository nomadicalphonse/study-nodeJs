const cookieConfig = {
    httpOnly : true, //웹통신 할때만 쿠키를 적용
    maxAge : 10000 //10초동안 쿠키를 유히
}

const index = (req, res) => {
    const userCookie = req.cookies.myCookie
    console.log("user cookie : ", userCookie)


    res.cookie("myCookie", "valueCookie", cookieConfig)
    res.render("cookie/cookie01", {userCookie})
}
const popup = (req, res) => {
    const userCookie = req.cookies.myCookie
    res.render("cookie/popup", {userCookie})
}
const cookie01 = (req, res) => {
    res.render("cookie/cookie01")
}
const makeCookie = (req, res) => {
    res.cookie("myCookie", "value", cookieConfig)
    res.send("<script>window.close()</script>")
}
module.exports = {index, popup, cookie01, makeCookie}