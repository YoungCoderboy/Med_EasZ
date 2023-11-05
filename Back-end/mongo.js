require("dotenv").config()
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://researchgrps123:iOTo6YEo9TAPLMRg@cluster0.ierihyj.mongodb.net/")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    symptoms:{
        type:[String],
        required:false
    },
    number:{
        type:String,
        require:true
    }
    
})

const collection = mongoose.model("collection",newSchema)

console.log("zala connect")
module.exports=collection
