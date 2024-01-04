const svr = require("../../service/member/member_service")
const list = async(req, res) =>{
    const result = await svr.getList()
    //console.log("list => ", result.results)
    //console.log("fields => ", result.fields)
    //res.send("리스트" + JSON.stringify(result.results) );
    //res.send("컬럼정보" + JSON.stringify(result.fields) );
    res.render("member/member_index", {list:result.results, field:result.fields})
}

const registerForm = (req, res) =>{
    res.render("member/register_form")
}

const register = async(req, res) =>{
    console.log(req.body)
    let msg = await svr.insert(req.body)
    res.send(msg)
}

const modify = async (req, res) =>{
    console.log("바디::", req.body)
    const msg = await svr.modify(req.body)
    res.send(msg)
}

const memberView1 = async (req, res) =>{
    const result = await svr.getMember(req.params)
    console.log(result);
    //res.send("view1")
    res.render("member/member_view", {member:result})
}
const memberView2 = async (req, res) =>{
    const result = await svr.getMember(req.query)
    console.log(result);
    res.render("member/member_view", {member:result})
}

const deleteMember = async (req, res) =>{
    const msg = await svr.deleteMember(req.params.id)
    res.send(msg)
}

const modifyForm = async (req, res) =>{
    const member = await svr.getMember(req.params)
    res.render("member/modify_form", member)
}


module.exports = { list, registerForm, register, memberView1, memberView2, deleteMember, modifyForm, modify}