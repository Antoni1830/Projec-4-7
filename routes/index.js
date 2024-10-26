const router= require('express').Router();
const express=require("express");
router.use('/',require('./sawgger'));


router.get('/',(req,res)=>{
    //#swagger.tags=['hello world']
    res.send('On this page are the best players♠');
});

router.use('/users',require('./users'));

router.use('/company',require('./company'));

router.use('/Game',require('./Game'));


router.use('/Genere',require('./Genere'));


module.exports=router;