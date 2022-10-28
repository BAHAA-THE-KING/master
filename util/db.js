const {MongoClient}=require("mongodb");

const log=require("./Logger");

let _db;
exports.connect=()=>{
                     return MongoClient.connect("mongodb+srv://user:xnHKT1rOTM0Yukq1B7jMXYqrUQb26LNO@test.uagawr5.mongodb.net/?retryWrites=true&w=majority")
                                       .then(client=>{
                                                      log("The DB Is Connected");
                                                      _db=client.db("myApp");
                                                      });
                     };
exports.getDB=()=>{
                   if (_db)return _db;
                   console.error("No DB Found");
                   return null;
                   };