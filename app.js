const express=require("express");
const app=express();
app.get("/",(req,res,next)=>{
                             res.send("hallo man !");
                             res.end();
                             });
const port=process.env.PORT||3001;
app.listen(port,()=>console.log("Listening On Port "+port));