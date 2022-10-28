const express=require("express");

const database=require("./util/db");
const log=require("./util/Logger");

const app=express();
app.get("/",(req,res,next)=>{
                             const db=database.getDB();
                             const name=req.query.name;
                             const password=req.query.password;
                             db.collection("users")
                               .findOne({name})
                               .then(user=>{
                                            if (!user){
                                              res.send("Wrong Name");
                                              res.end();
                                              return;
                                              }
                                            if (user.password!==password){
                                              res.send("Wrong Password");
                                              res.end();
                                              return;
                                              }
                                            res.send("o;;bob;u;");
                                            res.end();
                                            });
                             });
const port=process.env.PORT||3001;
database.connect()
        .then(()=>{
                   app.listen(port,()=>log("Listening To Port "+port));
                   })
        .catch(err=>console.log(err));