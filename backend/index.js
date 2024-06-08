const express = require('express');
const app = express();
require("./conn/conn");
app.get('/',(req,res)=>{
  res.send('hello!');
})


app.use("/api/v1",auth)
app.listen(3000,()=>{
  console.log("listeningssss hello!");
})