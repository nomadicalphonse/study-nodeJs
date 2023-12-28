const index = (req, res) => {
    res.render("session/main")
}
const setSession = (req, res) => {
    req.session.name = "한소희"
    req.session.age = 20
    res.render("session/set_session")
}

const getSession = (req, res) => {
    console.log(req.session.name)
    console.log(req.session.age)
    const sessionValue = {
        name : req.session.name,
        age : req.session.age
    }
    res.render("session/get_session", sessionValue)
}

const delSession = (req, res) => {
    console.log("세션삭제 함수....")
    //delete req.session.name //하나의 세션삭제
    req.session.destroy() //모든세션 삭제
    delete req.session
    res.redirect("/session/get_session")
}

const login = (req, res) => {
    res.render("session/login", {nick:req.session.nick})
}

const loginCheck = (req, res) => {
    const id = "aaa", pwd = "aaa", nick = "이제니"
    if(req.body.id === id && req.body.pwd === pwd){
        req.session.username = id
        req.session.nick = nick
        return res.redirect("/session/success")
    }
    const msg = `
    <script>
        alert("로그인 실패"); location.href = "/session/login";
    </script>
    `
    //console.log(req.query)//get방식
    console.log(req.body)//post방식
    res.send(msg)
}

const success = (req, res) => {
    if(req.session.username)
        res.render("session/success", {nick:req.session.nick})
    else
        res.redirect("/session/login")
}

const logout = (req, res) => {
    req.session.destroy()
    res.redirect("/session/login")
}

module.exports = {index, setSession, getSession, delSession, login, loginCheck, success, logout}