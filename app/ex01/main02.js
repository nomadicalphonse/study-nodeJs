const http = require("http")
const fs = require("fs") //파일사용할수 있도록 해주는 기능

const app = http.createServer((req, res)=>{
    res.setHeader("Content-Type", "text/html; charset=utf-8"); // charset=utf-8 설정 추가
    if(req.url === "/"){
        res.end("<h1>/로 접속</h1>"); //html태그를 직접입력
    }else if(req.url === "/test"){
        let data = fs.readFileSync("test.html")
        res.end(data)
    }
})
app.listen(3000)