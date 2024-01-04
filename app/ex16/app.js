const express = require("express")
const bcrypt = require("bcrypt")
const app = express()

console.log("dir name : ", __dirname)

app.set("views", __dirname+"/views")
app.set("view engine", "ejs")

app.get("/non_fetch",(req, res)=>{
    res.render("non_fetch")
})
app.get("/fetch01",(req, res)=>{
    console.log("fetch01 연동")
    res.render("fetch01")
})
app.get("/fetch_count",(req, res)=>{
    console.log("fetch_count 연동")
    res.render("fetch_count")
})

let count = 0;
app.get("/get_count",(req, res)=>{
    console.log("get_count 연동")
    count++
    res.json({cnt:count})
})
app.listen(3000, ()=>console.log("3000 server"))