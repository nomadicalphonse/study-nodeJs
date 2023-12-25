const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

const router = express.Router();
app.use("/", router);
router.get("/", (req, res) => {
    res.render("index");
});

const router2 = express.Router();
app.use("/member", router2)
router2.get("/list", (req, res)=> {
    res.send("member/list 경로 연결")
})


app.listen(3000, () => console.log("Server is running on port 3000"));