var router = require("express").Router()


router.get("/home",function(req,res){
    res.send("Home")
})


router.get("/login",function(req,res){
    res.send("Login")
})


router.post("/addition",function(req,res){
    let n1 = parseInt(req.body.n1);
    let n2 = parseInt(req.body.n2); 
    let ans = n1 + n2 ; 
    res.send(ans+"");
    
})

module.exports = router