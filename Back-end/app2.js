const express = require("express")
const coll = require("./mongo2")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
require("dotenv").config()


app.get("/prediction-data",cors(),(req,res)=>{

})


app.post("/prediction-data",async(req,res)=>{
    const {arr} =req.body
    console.log("alal",arr)
    data = {
        name : arr,
    }
    try{
        await coll.insertMany([data])
        console.log("inserted")
        console.log(arr)

        res.json("200")
    }
    catch(e){
        res.json("fail")
    }

})



app.listen(8005,()=>{
    console.log("port connected");
})

