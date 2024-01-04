const { sqlExecute } = require("../../../config/database/db_config")
const getList = async() => {
    let sql = `
    SELECT
    *
    FROM 
    MEMBERS
    `
    let {results, fields} = await sqlExecute(sql);
    return {results, fields}
}
module.exports = {getList}