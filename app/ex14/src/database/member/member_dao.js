const { mysql, sqlSelect, sqlExecute, sqlExecuteMulti } = require("../../../config/database/db_config")
const getList = async() => {
    let sql = `
    SELECT
    *
    FROM 
    MEMBERS
    ORDER BY ID
    `
    let {results, fields} = await sqlSelect(sql);
    
    return {results, fields}
}

const getMember = async(mid) => {
    let sql = `
    SELECT
    *
    FROM 
    MEMBERS
    WHERE ID = ${mysql.escape(mid)}
    `;
    console.log(sql)
    let {results, fields} = await sqlSelect(sql);
    
    return {results, fields}
}


const insert = async(body) => {
    let sql = `
    INSERT INTO MEMBERS
    (ID, PWD, NAME, ADDR) VALUES
    (${mysql.escape(body.id)}, ${mysql.escape(body.pwd)}, ${mysql.escape(body.name)}, ${mysql.escape(body.addr)})
    `
    let result = 0;
    console.log(sql)
    try{
        result = await sqlExecute(sql);
    }catch(err){
        console.log(err)
    }
    return result
}

const deleteMember = async(mId) => {
    let sql = `
    DELETE FROM MEMBERS
    WHERE ID = ${mysql.escape(mId)}
    `
    let result = 0;
    console.log(sql)
    try{
        result = await sqlExecute(sql);
    }catch(err){
        console.log(err)
    }
    return result
}

const modify = async(body) => {
    let sql = `
    UPDATE MEMBERS SET
    PWD = ${mysql.escape(body.pwd)},
    NAME = ${mysql.escape(body.name)}, 
    ADDR = ${mysql.escape(body.addr)}
    WHERE ID = ${mysql.escape(body.id)}
    `
    let result = 0;
    console.log(sql)
    try{
        result = await sqlExecute(sql);
    }catch(err){
        console.log(err)
    }
    return result
}

module.exports = {getList, getMember, insert, deleteMember, modify}