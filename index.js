const express = require("express")
const app = express() 
const apiRoutes = require("./api-routes")

app.use(express.urlencoded({extended:true})) //form-data 
app.use(express.json()) //json 

app.use("/api",apiRoutes)

// app.get("/home",function(req,res){
//     res.send("Home")
// })






app.listen(3000,function(){
    console.log("server started on port 3000");
})

