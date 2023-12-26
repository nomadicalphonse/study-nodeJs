const cookieConfig = {
    httpOnly : true, //웹통신 할때만 쿠키를 적용
    maxAge : 5000 //5초동안 쿠키를 유히
}

const index = (req, res) => {
    //res.send("컨트롤러 연동")
    //res.cookie("myCookie", "valueCookie")
    const userCookie = req.cookies.myCookie
    console.log("user cookie : ", userCookie)


    res.cookie("myCookie", "valueCookie", cookieConfig)
    res.render("cookie/cookie01", {userCookie})
}
module.exports = {index}