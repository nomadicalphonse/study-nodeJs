const { mysql, sqlSelect, sqlExecute, sqlExecuteMulti } = require("../../config/database/db_config")
const daoRead = {
    list : async(s, e) => {
        let sql = `
        SELECT * 
        FROM (
            SELECT 
              @row_number:=@row_number+1 AS RN, 
              PG.*
            FROM 
              PG, (SELECT @row_number:=0) AS t
            ORDER BY 
              NUM DESC
        ) AS A
        WHERE RN BETWEEN ${mysql.escape(s)} AND ${mysql.escape(e)}
        `;
        console.log(sql)
        let {results, fields} = await sqlSelect(sql);
        return {results, fields}
    },
    content : async(num) => {
        let sql = `
        SELECT
          NUM
        , TITLE
        , COUNT
        FROM 
        PG
        WHERE NUM = ${mysql.escape(num)}
        `
        let {results, fields} = await sqlSelect(sql);
        return {results, fields}
    },
    totalContent : async() => {
        const sql = `SELECT COUNT(*) CNT FROM PG`
        let {results, fields} = await sqlSelect(sql);
        let totalContent = results[0]["CNT"];
        return totalContent
    } 
}

const daoInsert = {
    write : async(body) => {
        console.log("넘어온body값:", body.TITLE)
        let sql = `
        INSERT INTO PG
        (TITLE) VALUES
        (${mysql.escape(body.TITLE)})
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
}

const daoUpdate = {
    upHit : async(num) => {
        let sql = `
        UPDATE PG SET
        COUNT = COUNT + 1
        WHERE NUM = ${mysql.escape(num)}
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
}


module.exports = {daoRead, daoInsert, daoUpdate}