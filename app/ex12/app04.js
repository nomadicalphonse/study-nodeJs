const express = require("express")
const app = express()

let con;
app.get("/", async (req, res) => {//async 비동기 방식으로 동작하는 함수가 포함되어 있다고 선언
    console.log("1.연동 전")
    con = await connect();//await 결과가 나올때까지 기다려주겠다는 산언
    console.log("3.연동 완료")
    res.send("con : " + con)
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
