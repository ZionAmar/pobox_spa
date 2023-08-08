const express = require('express');
const port = 5858;
const app = express();
app.use(express.json());

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const path = require('path');
// app.use(express.static(path.join(__dirname, "css")));
//------------------------------------------------
let allData =[];
//------------------------------------------------




app.get("/",(req,res)=>{
res.sendFile("./main.html",{root:__dirname});});
app.get("/Table",(req,res)=>{
    res.sendFile("./index.html",{root:__dirname});});
app.get("/List",(req,res)=>{
    res.send(allData).json();
});
app.post("/Add",(req,res)=>{
    let line ={};
    line.name = req.body.Name;
    line.phone = req.body.Phone;
    line.pobox = req.body.Pobox;
    allData.push(line);
    let line2 ={};
    line2.name = req.body.Name2;
    line2.phone = req.body.Phone2;
    line2.pobox = req.body.Pobox;
    if(line2.name && line2.phone!==""){
        allData.push(line2);
    }
    res.send("Ready to Add EndPoint");
});
//------------------------------------------------
app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});