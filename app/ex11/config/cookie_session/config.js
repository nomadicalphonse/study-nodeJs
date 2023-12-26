const cookieConfig = {
    httpOnly : true, //웹통신 할때만 쿠키를 적용
    maxAge : 10000, //10초동안 쿠키를 유지
    signed: true //쿠키의 암호화처리

}

const sessionConfig = {
    secret : "암호화키", //암호화를하기위한 키값
    resave : false, //true무조건 세션값을 새롭게 생성, false내용이 변경되었을때만 생성
    saveUninitialized: true, //true무조건 세션값을 저장, false내용이 변경되었을때만 저장
    cookie : {maxAge : 10000} //10초동안만 세션유지
}

module.exports = {cookieConfig, sessionConfig}