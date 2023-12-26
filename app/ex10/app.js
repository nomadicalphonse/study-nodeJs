const express = require("express")
const cookieRouter = require("./src/routes/cookie/cookie_router")
const cookieParser = require("cookie-parser")

const app = express()

app.set("views", "./src/views")
app.set("view engine", "ejs")
app.use( cookieParser("암호화를위한무작위문자") )
app.use("/cookie", cookieRouter)

app.listen(3000, ()=> console.log("3000번 서버 실행"))