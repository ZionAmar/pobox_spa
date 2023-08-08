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
res.send("hello");});
app.get("/List",(req,res)=>{
    res.send(allData).json();
});
app.post("/Add",(req,res)=>{
    let line ={};
    line.name = req.body.Name;
    line.phone = req.body.Phone;
    line.pobox = req.body.Pobox;
    allData.push(line);
    res.send("Ready to Add EndPoint");
});
//------------------------------------------------
app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});