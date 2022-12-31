const sqlconnection= require("mysql");

//const mongoose = require("mongoose");

const sqldbconnection= sqlconnection.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"node",
  multipleStatements:true
});
sqldbconnection.connect((err)=>{
    if(!err)
    {
    console.log("Database Connected");
    } else{
        console.log("Database Not Connected");    
    }

});

module.exports= sqldbconnection;



