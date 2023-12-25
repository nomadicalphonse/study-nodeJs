const http = require("http")
function test(req, res){
    console.log(req.url) //url경로로 분기해서 자바controller처럼 서용가능
    console.log("HTTP서버 연동")
    res.setHeader("Content-Type", "text/plain; charset=utf-8"); // charset=utf-8 설정 추가
    res.end("ex01 HTTP서버가 test함수를 통해서 실행되었습니다.")
}
const app = http.createServer(test)
app.listen(3000)