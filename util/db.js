let {MongoClient}=require("mongodb");

const log=require("./Logger");

let _db;
exports.connect=()=>{
                     return MongoClient.connect("mongodb+srv://BAHAA:1C11BiuGJItWGteC@shop.qhv52.mongodb.net/?retryWrites=true&w=majority")
                                       .then(client=>{
                                                      _db=client.db();
                                                      log("Connected !");
                                                      });
                     };
exports.getDB=()=>{
                   return _db||log("No Database Found !");
                   };