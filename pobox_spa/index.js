const express = require('express');
const port = 5353;
const app = express();
app.use(express.json());
//---------------------------------------------------
app.listen(port,()=>{
    console.log(`now listen to port ${port}`);
});
app.get("/",(req,res)=>{
    res.sendFile("./views/spa_main.html",{root: __dirname})
})
