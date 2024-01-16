module.exports = ( app ) => {
    const pgRouter = require("./pg_router")
    app.use("/pg", pgRouter)

    const router = require("express").Router()
    router.get("/", (req, res)=>{
        const msg = `
        <h3>기본페이지 입니다.</h3>
        <a href="/pg">PG기본화면</a>
        `;
        res.send(msg)
    })
    return router
}