const mysql = require('mysql')

const dbConfig = {
  host: "144.24.70.156",
  port: "3306",
  user: "alphonse",
  password:'chae3834',
  database:'test'
};

const conn = mysql.createConnection(dbConfig);

async function sqlExecute(sql) {
    let result = await new Promise((resolve, reject) => {
        conn.query(sql, (error, results, fields) => {
            if (error) return reject(error);
            resolve({ results, fields });
        });
    });
    conn.end(); // 이 부분에서 연결 종료 - nodejs에서는 장시간 db를 열어둘수 있게 설계되어 닫지않는 경우도 많다고함
    return result;
}

module.exports = { conn, sqlExecute };