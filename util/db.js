const {MongoClient}=require("mongodb");

const log=require("./Logger");

let _db;
exports.connect=()=>{
                     return MongoClient.connect("mongodb+srv://BAHAA:1C11BiuGJItWGteC@shop.qhv52.mongodb.net/?retryWrites=true&w=majority")
                                       .then(client=>{
                                                      log("The DB Is Connected");
                                                      _db=client.db("test");
                                                      });
                     };
exports.getDB=()=>{
                   if (_db)return _db;
                   console.error("No DB Found");
                   return null;
                   };