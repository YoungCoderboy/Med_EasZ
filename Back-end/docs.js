const express=require('express');
const router=express.Router();

router.post('/docs',(req,res)=>{
    console.log(req);
})

module.exports=router;