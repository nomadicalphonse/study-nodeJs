const express = require("express")
const bcrypt = require("bcrypt")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
const router = require("./src/routes/router")(app)

app.set("views", "./src/views")
app.set("view engine", "ejs")

app.get("/", router)
//app.get("/", (req, res) => res.send("test") )

app.listen(3000, ()=>console.log("3000 server"))