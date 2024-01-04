const memberDAO = require("../../database/member/member_dao")
const getList = async () => {
    const result = await memberDAO.getList()
    return result
}
module.exports = {getList}