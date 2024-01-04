const views = {
    index : (req, res) => {
        console.log("컨트롤러 연동")
        res.render("file_index")
    }
}

const process = {
    upload : (req, res) => {
        console.log(req.file)
        console.log("------------")
        console.log(req.body)
        console.log("errorMessage : ", req.errorMessage)
        if(req.errorMessage ){
            return res.send(req.errorMessage)
        }
        res.send("upload")
    }
}
function iconvDecode(str){
    return iconv.decode(Buffer.from(str, 'binary'), 'utf8');//파일명한글깨짐 해결
}

module.exports = {views, process}
