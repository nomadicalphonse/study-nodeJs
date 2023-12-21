//슈퍼바이져 설치확인 - npm list -g supervisor
//슈퍼바이져 설치 - npm install -g supervisor
//파워쉘권한 - Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
const express = require("express")
const app = express();

app.get("/", (req, res)=>{
    res.send("기본 페이지")
})

app.get("/test", (req, res)=>{
    res.send("test 페이지")
})

app.listen( 3000, ()=>console.log("3000 port server") )
