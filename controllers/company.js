//const { ObjectId } = require('mongodb');
const { Result } = require('express-validator');
const mongodb= require('../data/database');
const ObjectId =require('mongodb').ObjectId;

const getAll= async(req,res)=>{
  //#swagger.tags=['Games']
 const result= await mongodb.getDatabase().
 db()
 .collection('Company')
 .find()
 
 result.toArray(req).then((users)=>{
    res.setHeader('Contet-Type','aplication/json');
    res.status(200).json(users)});
  };


    



//const getSingle =async(req,res)=>{
    //#swagger.tags=['Games']
    //const userId=new ObjectId(req.params.id);
    //const result= await mongodb.getDatabase()
    //.db()
    //.collection('Games')
    //.find({id: userId})
   //result.toArray().then((users)=>{
     // res.setHeader('Contet-Type','aplication/json');
      // res.status(200).json(users[0])

      const getSingle = (req, res) => {
        if (!ObjectId.isValid(req.params.id)) {
          res.status(400).json('Must use a valid contact id to find a contact.');
        }
        const userId = new ObjectId(req.params.id);
        mongodb
          .getDatabase()
          .db()
          .collection('Company')
          .find({ _id: userId })
          .toArray((err, result) => {
            if (err) {
              res.status(400).json({ message: err });
            }
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(result[0]);
          });
      };
    
   


const createUser= async(req,res) =>{  
    //#swagger.tags=['Games']
    const user={
    Name:req.body.Name,
    Founder:req.body.Founder,
    Foundation:req.body.Foundation,  
    Most_Popular_Game:req.body.Most_Popular_Game,
    Country:req.body.Country,
    best_year:req.body.best_year,
    worst_year:req.body.worst_year

};
const response= await mongodb.getDatabase().db().collection('Company').insertOne(user);
     if (response.acknowledged){
     res.status(204).send();
    } else{
      res.status(500).json(response.error||'algo malo papi');
    
    }

};

const updateUser= async(req,res)=>async(req,res) =>{  
    //#swagger.tags=['Games']
    const userId=new ObjectId(req.params.id);
    const user={
      Name:req.body.Name,
      Founder:req.body.Founder,
      Foundation:req.body.Foundation,  
      Most_Popular_Game:req.body.Most_Popular_Game,
      Country:req.body.Country,
      best_year:req.body.best_year,
      worst_year:req.body.worst_year
};
const response= await mongodb.getDatabase().db().collection('Company').replaceOne({id: userId}, user);
     if (response.modifiedCount>0){
     res.status(204).send();
    } else{
      res.status(500).json(response.error||'algo malo papi');
    
    }

};

const deleteUser = async (req, res) => {
    //#swagger.tags=['Games']
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDatabase().db().collection('Company').deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).json({
      response: response,
      message: "Deleted contact successfully.",
    });
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
};


module.exports={
   
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser
};