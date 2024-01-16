const service = require("../service/pg_service")
const views = {
    index : (req, res) => {
        console.log("pg_ctl.index")
        res.render("index")
    },
    list : async(req, res)=>{
        console.log("start:", req.query.start)
        console.log("pg_ctl.list")
        const totalContent = await service.pageRead.totalContent()
        const data = await service.pageRead.list(req.query.start, totalContent)
        console.log("data::::", data)
        res.render("list", {list:data.list, page:data.page, start:data.start, totalContent})
    },
    writeFrom : (req, res) => {
        console.log("pg_ctl.write_form")
        res.render("write_form")
    },
    content : async(req, res) => {
        console.log("pg_ctl.content")
        const data = await service.pageRead.content(req.params.num)
        res.render("content", {data})
    }
}
const process = {
    write : async (req, res) => {
        console.log("컨트롤러:::",req.body)
        await service.pageInsert.write(req.body)
        res.redirect("/pg/list")
    }
}
module.exports = {views, process}