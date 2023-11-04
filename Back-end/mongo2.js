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
        type:Array,
        required:true
    },
})

const coll = mongoose.model("coll",newSchema)

console.log("zala connect")
module.exports=coll
