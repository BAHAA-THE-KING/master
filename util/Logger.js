const util=require("util");
module.exports=function(...string){
                                   console.log(">>>>>>>>");
                                   string.forEach(item=>{
                                                         console.log(util.inspect(item,{
                                                                                        showHidden:false,
                                                                                        depth:null,
                                                                                        colors:true
                                                                                        }));
                                                         });
                                   console.log("<<<<<<<<");
                                   };