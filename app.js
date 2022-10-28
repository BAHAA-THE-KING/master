const fs=require("fs");

const express=require("express");
const bodyParser=require("body-parser");

const database=require("./util/db");
const log=require("./util/Logger");

const app=express();
app.use(bodyParser.json());
app.post("/",(req,res,next)=>{
                              const db=database.getDB();
                              const name=req.body.name;
                              const password=req.body.password;
                              db.collection("students")
                                .findOne({name})
                                .then(user=>{
                                             if (!user){
                                               res.status(403);
                                               res.send("Wrong Name");
                                               res.end();
                                               return;
                                               }
                                             if (user.password!==password){
                                               res.status(401);
                                               res.send("Wrong Password");
                                               res.end();
                                               return;
                                               }
                                             res.send("mongodb://user:xnHKT1rOTM0Yukq1B7jMXYqrUQb26LNO@ac-1rdzkzi-shard-00-00.uagawr5.mongodb.net:27017,ac-1rdzkzi-shard-00-01.uagawr5.mongodb.net:27017,ac-1rdzkzi-shard-00-02.uagawr5.mongodb.net:27017/?ssl=true&replicaSet=atlas-12vnah-shard-0&authSource=admin&retryWrites=true&w=majority");
                                             res.end();
                                             })
                                .catch(err=>console.error(err));
                              });
const port=process.env.PORT||3001;
database.connect()
        .then(()=>{
                   app.listen(port,()=>log("Listening To Port "+port));
                   })
        .catch(err=>console.error(err));