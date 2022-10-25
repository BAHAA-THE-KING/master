const express=require("express");
const bodyParser=require("body-parser");

const log=require("./util/Logger");
const db=require("./util/db");

const app=express();

app.use("/",bodyParser.json());
app.use("/",(req,res,next)=>{
                             res.setHeader("Access-Control-Allow-Origin","*");
                             res.setHeader("Access-Control-Allow-Method","GET");
                             res.setHeader("Access-Control-Allow-Headers","Content-Type");
                             next();
                             });
app.get("/",(req,res,next)=>{
                             const name=req.body.name;
                             const password=req.body.password;
                             db.getDB()
                               .collection("users")
                               .findOne({name})
                               .then(user=>{
                                            if (!user){
                                              res.json({code:0,message:"Wrong Name"});
                                              res.end();
                                              return;
                                              }
                                            if (user.password===password && password!==""){
                                              log("fku");
                                              res.json({code:1,message:"Take This !"});
                                              res.end();
                                              }else{
                                                   res.json({code:-1,message:"Wrong Password"});
                                                   res.end();
                                                   }
                                            })
                               .catch(err=>log(err));
                             });
const port = process.env.PORT || 3001;
db.connect()
  .then(()=>{
             app.listen(port);
             log("App Is Listening On Port "+port+" !");
             })
  .catch(err=>log(err));