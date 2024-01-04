const memberDAO = require("../../database/member/member_dao")
const getList = async () => {
    const result = await memberDAO.getList()
    return result
}

const getMember = async (params) => {
    const result = await memberDAO.getMember(params.id)
    return result.results[0]
}



const insert = async ( body ) => {
    const result = await memberDAO.insert(body)
    let msg = "", url="";
    if(result == 0){
        msg = "회원추가 문제발생!"
        url = "/member/register_form"
    }else{
        msg = "회원추가 성공!"
        url = "/member"
    }
    return getMessage(msg, url)
}

const deleteMember = async ( mId ) => {
    console.log("엠아이디:", mId)
    const result = await memberDAO.deleteMember(mId)
    let msg = "", url="";
    console.log("result:",result)
    if(result == 0){
        msg = "회원삭제 문제발생!"
        url = "/member/register_form"
    }else{
        msg = "회원삭제 성공!"
        url = "/member"
    }
    return getMessage(msg, url)
}
const modify = async ( body ) => {
    console.log("바디바디:::");
    console.log(body);
    
    const result = await memberDAO.modify(body)
    let msg = "", url="";
    if(result == 0){
        msg = "회원수정 문제발생!"
        url = "/member/modify_form/"+body.id
    }else{
        msg = "회원수정 성공!"
        url = "/member/member_view/"+body.id
    }
    return getMessage(msg, url)
}

const getMessage = (msg, url) => {
    return `
    <script>
        alert('${msg}'); 
        location.href = '${url}';
    </script>
    `
}
module.exports = {getList, getMember, insert, getMessage, deleteMember, modify}