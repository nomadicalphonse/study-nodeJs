const member = require("../db/memberDAO")
const index = () => {
    console.log("service index 실행");
    return member;
}
module.exports = {index}