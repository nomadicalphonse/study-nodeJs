const mysql = require('mysql2')//mysql2는(named parameter binding)지원

const dbConfig = {
  host: "144.24.70.156",
  port: "3306",
  user: "alphonse",
  password:'chae3834',
  database:'test',
  connectionLimit: 30
};

const pool = mysql.createPool(dbConfig);
/**
 * SELECT 처리
 * @param {} sql 
 * @returns 
 */
async function sqlSelect(sql) {
    let result = await new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if (err) return reject(err);
            conn.query(sql, (error, results, fields) => {
                conn.release();
                if (error) return reject(error);
                resolve({ results, fields });
            });
        });
    });
    return result;
}

/**
 * 하나의 SQL 쿼리를 실행합니다.
 * @param {string} sql - 실행할 SQL 쿼리.
 * @returns {int} 쿼리에 의해 영향 받은 행의 수.
 */
async function sqlExecute(sql) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if (err) return reject(err);
            
            conn.query(sql, (error, results) => {
                conn.release();
                if (error) return reject(error);
                
                resolve(results.affectedRows);
            });
        });
    });
}


/**
 * 여러 개의 SQL 쿼리를 한 번에 실행합니다.
 * 각 쿼리는 별도의 Promise를 통해 실행되며, 모든 쿼리가 성공적으로 실행되면 트랜잭션을 커밋합니다.
 * 만약 어떤 쿼리에서든 오류가 발생하면 트랜잭션을 롤백합니다.
 * @param {string[]} sqls - 실행할 SQL 쿼리들을 담은 배열.
 * @returns {Object[]} 각 SQL 쿼리와 그 쿼리의 실행 결과를 담은 객체들의 배열.
 */
async function sqlExecuteMulti(sqls) {
    let conn;
    let results = [];

    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) return reject(err);
            conn = connection;

            conn.beginTransaction((err) => {
                if (err) {
                    conn.release();
                    return reject(err);
                }

                sqls.forEach((sql, index) => {
                    conn.query(sql, (error, result) => {
                        if (error) {
                            conn.rollback(() => {
                                conn.release();
                                console.log("롤백이 발생했습니다.");  // 롤백 발생 시 콘솔 출력
                                return reject(error);
                            });
                        } else {
                            results.push({ query: sql, affectedRows: result.affectedRows });

                            if (index === sqls.length - 1) {
                                conn.commit((err) => {
                                    if (err) {
                                        conn.rollback(() => {
                                            conn.release();
                                            console.log("롤백이 발생했습니다.");  // 롤백 발생 시 콘솔 출력
                                            return reject(err);
                                        });
                                    } else {
                                        conn.release();
                                        resolve(results);
                                    }
                                });
                            }
                        }
                    });
                });
            });
        });
    });
}


module.exports = { mysql, pool, sqlSelect, sqlExecute, sqlExecuteMulti };
