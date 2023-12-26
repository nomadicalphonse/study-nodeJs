const cookieConfig = {
    httpOnly : true, //웹통신 할때만 쿠키를 적용
    maxAge : 10000, //10초동안 쿠키를 유지
    signed: true //쿠키의 암호화처리

}
module.exports = {cookieConfig}