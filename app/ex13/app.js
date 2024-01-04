const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use( bodyParser.urlencoded({extended:false} /* QS모듈사용여부 */) )

const router = require("./src/routes/router")(app)
app.use("/", router)

app.set("views", "./src/views")
app.set("view engine", "ejs")

app.listen(3000, ()=> console.log("3000번 서버 실행"))
