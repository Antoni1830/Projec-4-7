const express= require ('express');
const bodyParser=require('body-parser')
const mongodb=require('./data/database.js')

const session= require('express-session')
const GitHubStrategy= require('passport-github2').Strategy;

const passport= require('passport')
const cors = require('cors');

const app= express();



//app.use(bodyParser.json());
//app.use((req,res,next)=>{
    //res.setHeader('Access-Control-Allow-Origin','*')
    //res.setHeader(
        //'Access-Control-Allow-Headers',
        //'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
   // );
    //res.setHeader('Access-Control-Allow-Headers', 'GET,POST,PUT,DELETE,OPTIONS');
    //next();
//});

//app.use('/',require('./routes'));
///////////////////////////////////////////////////////////////////////////
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key,Authorization'
    );
    res.setHeader('Access-Control-Allow-Headers', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    next();
});




//app.use('/', require('./routes'));

app
 .use(bodyParser.json())
 .use(session({
    secret:"secret",
    resave: false,
    saveUninitialized:true,
 }))
 
 .use(passport.initialize())
 
 .use(passport.session())
 
 
    


     .use(cors({methods:['GET,POST,PUT,DELETE,OPTIONS, PATCH']}))
     .use(cors({origin:'*'}))
     .use("/",require("./routes/index"))

 passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
 },
 function(accessToken, refreshToken,Profile,done){
    return done(null,Profile);
 }
 ));

 passport.serializeUser((user,done)=>{ done(null,user)

 })
 ;
 passport.deserializeUser((user,done)=>{
    done(null,user)
 });
 app.get('/', (req,res) => {res.send(res.session.user !== undefined? ` logged in as${req.session.displayName} `:"logged Out")});

 app.get('/github/callback',passport.authenticate('github',{
    failureRedirect: '/api-docs',session:false}),
 (req,res)=>{
    req.session.user=req.user;
    res.redirect('/');
});

 
process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
  });

const port=process.env.PORT||3005;
mongodb.initDb((err)=>{
    if(err){ console.log(err);
}
else{
    app.listen(port,()=>{console.log( `la base esta lista bebe en ${port} `)})
}
});













//////////////////////////////////////////////////////////////////////////
//const port=process.env.PORT||3005;
//mongodb.initDb((err)=>{
   // if(err){ console.log(err);
//}
//else{
   // app.listen(port,()=>{console.log( `la base esta lista bebe en ${port} `)})
//}
//});