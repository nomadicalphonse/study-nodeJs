const router = require("express").Router()

const multer = require("multer")
const iconv = require('iconv-lite');//파일명한글깨짐 방지

const f_filter = (req, file, cb)=>{
    const type = file.mimetype.split("/")
    console.log(type);
    const fileType = type[0]
    if(fileType === 'image'){
        cb(null, true)//저장하겠다.
    }else{
        req.errorMessage = "이미지만 저장가능합니다."
        cb(null, false)//저장하지 않겠다.
    }
}
const upload = multer({ storage: storageConfig("upload_file"), fileFilter:f_filter });//최신 multer버젼코드
function storageConfig(savePath){//최신버전 multer에서 파일명 한글깨짐방지 함수
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, savePath);//파일저장경로
        },
        filename: function (req, file, cb) {
          let originalname = iconv.decode(Buffer.from(file.originalname, 'binary'), 'utf8');
          let date = new Date();
          let formattedDate = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}${date.getHours().toString().padStart(2, '0')}${date.getMinutes().toString().padStart(2, '0')}${date.getSeconds().toString().padStart(2, '0')}`;
          cb(null, formattedDate +"_"+ originalname); // 디코딩된 이름으로 저장
        }
      });
    return storage;
}

const fileCtrl = require("../controller/file_controller")
router.get("/", fileCtrl.views.index)
router.post("/upload", upload.single("file_name"), fileCtrl.process.upload)

module.exports = router