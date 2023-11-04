const dotenv= require('dotenv');
dotenv.config({path: './config.env'})
const express=require("express");
const app=express();
const router=require('./docs')
const bodyparser = require('body-parser')
const cor=require('cors')

const mongoose = require('mongoose');
const DB= process.env.DATABASE.replace('<%PASSWORD%>', process.env.DB_PASSWORD);

mongoose.connect(DB).then(()=>{
  // console.log(con.connection)
  console.log("connected to database")
})

app.use(bodyparser.json())
app.use(express.urlencoded({extended:true}));
app.use(cor())
app.use('/',cor(),router);

const port=process.env.PORT || 8000;
app.listen(port,()=>{
    console.log("Server running on port");
})