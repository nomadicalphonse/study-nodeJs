const member = require("../db/memberDAO")
const index = () => {
    console.log("service index 실행");
    return member;
}
module.exports = {index} //{index:index} 이름이 동일할때는 {index}로 쓸수있습니다.
