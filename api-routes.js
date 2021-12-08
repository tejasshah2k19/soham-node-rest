var router = require("express").Router()
var calcController = require("./calc-controller")

router.get("/home",function(req,res){
    res.send("Home")
})


router.get("/login",function(req,res){
    res.send("Login")
})


router.post("/addition",calcController.addition);

module.exports = router