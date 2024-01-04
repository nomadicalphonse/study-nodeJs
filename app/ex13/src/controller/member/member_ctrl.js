const svr = require("../../service/member/member_service")
const list = async(req, res) =>{
    const result = await svr.getList()
    console.log("list => ", result.results)
    console.log("fields => ", result.fields)
    //res.send("리스트" + JSON.stringify(result.results) );
    //res.send("컬럼정보" + JSON.stringify(result.fields) );
    res.render("member/member_index", {list:result.results, field:result.fields})
}
module.exports = { list }