const express=require("express");
const app=express();
const router=require('./docs')
const bodyparser = require('body-parser')
const cor=require('cors')


app.use(bodyparser.json())
app.use(express.urlencoded({extended:true}));
app.use(cor())
app.use('/',cor(),router);

const port=process.env.PORT || 8000;
app.listen(port,()=>{
    console.log("Server running on port");
})