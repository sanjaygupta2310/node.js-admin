const express= require("express");
const bodyparser= require("body-parser");
const routerPath= require("./router");
const path = require('path');
const cors= require('cors');
const http = require('http');
//app.use(express.static(path.join(__dirname, 'public')));

const port=7000;

const app= express();

app.use(bodyparser.json());
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use("/", routerPath);
app.use(express.static('public'));


app.listen(port, ()=>console.log("Server running on port 7000"));

module.exports = app;