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

module.exports = {index, setSession, getSession, delSession}