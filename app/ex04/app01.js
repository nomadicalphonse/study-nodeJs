const express = require("express")
const router = require("./routers/test_router")
const app = express()

app.set("views", "./views")
app.set('view engine', 'ejs');
app.use("/", router)

app.listen(3000, ()=>console.log("3000 port start"))