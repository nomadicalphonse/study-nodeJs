const fs = require("fs")
const views = {
    index : (req, res) => {
        console.log("index컨트롤러 연동")
        res.render("file_index")
    },
    list : (req, res) => {
        console.log("list컨트롤러 연동")
        const fileList = fs.readdirSync("./upload_file")
        console.log("aaaaa")
        console.log(fileList)
        res.render("file_list", {files:fileList})
    },
    download : (req, res) => {
        console.log("download컨트롤러 연동")
        const filePath = "./upload_file/"+req.params.fileName
        res.download(filePath)
    },
    modifyForm : (req, res) => {
        console.log("modifyForm컨트롤러 연동")
        const fileName = req.params.fileName
        res.render("modify_form", {fileName})
    },
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
    },
    deleteFile : (req, res) => {
        console.log("process.deleteFile 컨트롤러 연동")
        fs.unlinkSync("./upload_file/"+req.params.fileName)
        res.redirect("/file/list")
    },
    modify : (req, res) => {
        console.log("process.modify 컨트롤러 연동")
        if(req.file ){
            return res.redirect("/file/deleteFile/"+req.body.originFileName) //기존파일삭제
        }
        console.log(req.body)
        console.log(req.file)
        res.redirect("/file/list")
    }
}
function iconvDecode(str){
    return iconv.decode(Buffer.from(str, 'binary'), 'utf8');//파일명한글깨짐 해결
}

module.exports = {views, process}
