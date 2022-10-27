const mongodb=require("mongodb");
let db;
exports.connect=()=>{
                     return mongodb.MongoClient
                                   .connect("mongodb+srv://BAHAA:1C11BiuGJItWGteC@shop.qhv52.mongodb.net/?retryWrites=true&w=majority")
                                   .then(client=>{
                                                  console.log("DB Is Connected !");
                                                  db=client.db("shop");
                                                  });
                     };
exports.getDB=()=>{
                   return db||console.log("ERROR DB");
                   };
