const express = require("express")
const app = express()

let con;
app.get("/", (req, res) => {
    console.log("1.연동 전")
    con = connect();
    con.then(msg=>{
        console.log("3. 연동 완료 후 특정 기능을 사용합니다.")
        res.send("con : " + msg)
    })
})

const connect = () => {
    let msg;
    //Promise로 setTimeout함수를 감싸준다.
    return new Promise((resolve) => 
        setTimeout(()=>{
            msg = "연동 되었습니다."
            console.log("2. 연동 하는 중")
            resolve(msg)
        }, 1000)
    )
}

app.listen(3000, ()=> console.log("3000번 서버 실행"))
