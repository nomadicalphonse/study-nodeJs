const http = require("http")
function test(req, res){
    console.log("서버연동")
    res.end("test page")
}
const app = http.createServer(test)
app.listen(3000)