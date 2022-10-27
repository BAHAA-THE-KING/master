const express=require("express");
const db=require("./db");
const app=express();
app.get("/",(req,res,next)=>{
                             const name=req.query.name;
                             const password=req.query.password;
                             db.getDB()
                               .collection("users")
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
db.connect()
  .then(()=>{
             app.listen(port,()=>console.log("Listening On Port "+port));
             })
  .catch(err=>console.log(err));