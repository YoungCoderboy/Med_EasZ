const express=require("express");
const app=express();
import router from "./docs";

app.use('/',router);

const port=process.env.PORT || 8000;
app.listen(port,()=>{
    console.log("Server running on port");
})