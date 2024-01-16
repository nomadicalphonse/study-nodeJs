const dao = require("../database/pg_dao")
const pageOperation = (start, totalC) =>{
    let page = {}
    const pageNum = 3
    const num = (totalC % pageNum === 0)?0:1
    page.totPage = parseInt(totalC/pageNum) + num
    page.startNum = (start -1) * pageNum + 1
    page.endNum = start * pageNum
    return page;
}
const pageRead = {
    list : async(start, totalC)=>{
        start = (start && start > 1) ? Number(start):1
        const page = pageOperation(start, totalC)

        const list = await dao.daoRead.list(page.startNum, page.endNum)
        console.log(list.results);

        data = {}
        data.page = page
        data.start = start
        data.list = list.results
        return data;
    },
    content : async(num)=>{
        pageUpdate.upHit(num)
        const data = await dao.daoRead.content(num)
        console.log("content::::", data)
        return data.results[0]
    },
    totalContent : async() => {
        const totalContent = await dao.daoRead.totalContent()
        return totalContent;
    }
}
const pageUpdate = {
    upHit : (num) => {
        dao.daoUpdate.upHit(num)
    }
}
const pageInsert = {
    write : async(body) => {
        console.log("서비스에서:::", body)
        await dao.daoInsert.write(body)
    }
}
module.exports = {pageRead, pageInsert}