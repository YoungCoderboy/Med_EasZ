const dotenv= require('dotenv');
dotenv.config({path: './config.env'})
const express=require("express");
const app=express();
const router=require('./docs')
const bodyparser = require('body-parser')
// const cors=require('cors')

// const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
// const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
// require("dotenv").config()


const mongoose = require('mongoose');
const DB= process.env.DATABASE.replace('<%PASSWORD%>', process.env.DB_PASSWORD);

mongoose.connect(DB).then(()=>{
  // console.log(con.connection)
  console.log("connected to database")
})

app.use(bodyparser.json())
app.use(express.urlencoded({extended:true}));
app.use(cors())
app.use('/',cors(),router);

// const port=process.env.PORT || 8000;
// app.listen(port,()=>{
//     console.log("Server running on port");
// })




app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    
    const{email,password,name}=req.body
    
    const data={
        name:name,
        email:email,
        password:password,
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.listen(8000,()=>{
    console.log("port connected");
})