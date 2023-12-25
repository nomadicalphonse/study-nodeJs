const service = require("../service/test_service")
const index = (req, res) => {
    const member = service.index()
    console.log("member => ", member)
    res.render("index", {member})
}
const loginCheck = (req, res) => {
    console.log(req.query.id)
    console.log(req.query.pwd)
    const id = "aaa";
    const pwd = "aaa";
    if(id === req.query.id && pwd === req.query.pwd){
         console.log("로그인 성공");
         res.redirect(`/info?id=${req.query.id}`);
    }else{
        console.log("로그인 실패");
        res.redirect("/login")
    }
}
const login = (req, res) => {
    res.send("로그인에 실패하였습니다.")
}
const info = (req, res) => {
    res.send(`[info] ${req.query.id}님이 접속하셨습니다.`);
}

module.exports = { index:index, info:info, loginCheck:loginCheck, login:login }