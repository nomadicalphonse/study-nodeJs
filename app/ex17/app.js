const express = require("express")
const bcrypt = require("bcrypt")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json())

console.log("dir name : ", __dirname)

app.set("views", __dirname+"/views")
app.set("view engine", "ejs")

let members = [
    {id:"id01", pwd:"1", name:"안유진", addr:"산골짜기"},
    {id:"id02", pwd:"2", name:"김지수", addr:"별나라"},
    {id:"id03", pwd:"3", name:"한소희", addr:"달나라"}
]

app.get("/index", (req, res) => {
    res.render("index")
})

app.post("/register", (req, res)=>{
    members = members.concat(req.body)
    res.json( 1 )
})
app.put("/modify", (req, res)=>{
    members = members.filter( (mem) => mem.id !== req.body.id )
    members = members.concat( req.body )
    res.json(1)
})
app.delete("/delete", (req, res)=>{
    members = members.filter( (mem) => mem.id !== req.body.id )
    res.json(1)
})
app.get("/get_members", (req, res) => {
    res.json(members)
})


app.get("/rest", (req, res) => {
    res.render("rest")
})

app.get("/test", (req, res) => {
    res.json("get 데이터 요청할 때!!")
})
app.post("/test", (req, res) => {
    res.json("post 데이터 추가할 때!!")
})
app.put("/test", (req, res) => {
    res.json("get 데이터 수정할 때!!")
})
app.delete("/test", (req, res) => {
    res.json("delete 데이터 삭제할 때!!")
})
app.listen(3000, ()=>console.log("3000 server"))