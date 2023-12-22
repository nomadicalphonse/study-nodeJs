const express = require("express")
const app = express();

//ejs문법 셋팅
app.set("views", "./") //ejs파일은 현재위치에서 찾아주세요.
app.set("view engine", ".ejs"); // view로 사용할 엔진은 ejs파일은 ejs를 사용하겠다는 선언

app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/test", (req, res)=>{
    res.render("test")
})

app.listen( 3000, ()=>console.log("3000 port server") )
