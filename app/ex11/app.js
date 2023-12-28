const express = require("express")
//쿠키관련
const cookieRouter = require("./src/routes/cookie/cookie_router")
const cookieParser = require("cookie-parser")
//세션관련
const session = require("express-session")
const sessionRouter = require("./src/routes/session/session_router")
const config = require("./config/cookie_session/config")
const bodyParser = require("body-parser")

const app = express()

app.set("views", "./src/views")
app.set("view engine", "ejs")

app.use( cookieParser("암호화를위한무작위문자") )
app.use("/cookie", cookieRouter)


app.use( bodyParser.urlencoded({extended:false} /* QS모듈사용여부 */) )

app.use(session( config.sessionConfig))
app.use("/session", sessionRouter)

app.listen(3000, ()=> console.log("3000번 서버 실행"))
