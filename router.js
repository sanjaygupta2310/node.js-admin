const express= require("express");
const bodyparser= require("body-parser");

const doconnection= require("./connection");

const Router= express();


//Router.get("/", (req, res)=>{
//    const data=[{name:"sanjay", email:"sanjay@gmail.com", age:34}];
//    res.send(data)
//});

Router.get("/", (req, res)=>{
    doconnection.query("select *from tbl_user", (err, rows)=>{
        if(!err)
        {
            res.render('index',{data:rows});
        } else {
            res.send(err);
        }
    });
});

Router.get("/course/", (req, res)=>{
    doconnection.query("select *from tbl_user", (err, rows)=>{
        if(!err)
        {
            res.render('course',{data:rows});
        } else {
            res.send(err);
        }
    });
});


module.exports= Router;