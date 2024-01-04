const express = require("express")
const bcrypt = require("bcrypt")
const app = express()

app.get("/", (req, res)=>{
    const pwd = "test"
    const changePwd = bcrypt.hashSync(pwd, 10)
    console.log("변경전:", pwd)
    console.log("변경후:", changePwd)
    console.log(bcrypt.compareSync(pwd, changePwd))
    res.send("연습중")
    
})

app.listen(3000, ()=>console.log("3000 server"))