const service = require("../service/test_service")
const index = (req, res) => {
    const member = service.index()
    console.log("member => ", member)
    res.render("index", {member})
}
const test1 = (req, res) => {
    res.send("test1 연동")
}
const test2 = (req, res) => {
    res.send("test2 연동")
}

module.exports = {index : index, test1 : test1, test2 : test2}