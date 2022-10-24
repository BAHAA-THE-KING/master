const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use("/",bodyParser.json());
app.use("/",(req,res,next)=>{
                             res.setHeader("Access-Control-Allow-Origin","*");
                             res.setHeader("Access-Control-Allow-Method","GET");
                             res.setHeader("Access-Control-Allow-Headers","Content-Type");
                             next();
                             });
app.get("/",(req,res,next)=>{
                             console.log(req.body.asd);
                             res.send("hello man");
                             res.end();
                             });
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));