const router= require('express').Router();
const express=require("express");
const passport = require('passport');
router.use('/',require('./sawgger'));


router.get('/',(req,res)=>{
    //#swagger.tags=['hello world']
    res.send('On this page are the best players♠');
});

router.use('/users',require('./users'));

router.use('/company',require('./company'));

router.use('/Game',require('./Game'));


router.use('/Genere',require('./Genere'));

router.get('/login', passport.authenticate('github'), (req, res)=>{});

router.get('/logout',function(req,res,next){
    req.logout(function(err){
        if (err){return next(err);}
        res.redirect('/');
    });
})


module.exports=router;