const express=require('express');
const router=express.Router();

const  GenereController=require('../controllers/Genere');
const{validateCreate}=require('../middlewares/Validate_genere');
const{isAuthenticated}=require ("../middlewares/authenticate");


router.get('/', GenereController.getAll);

router.get('/:id',GenereController.getSingle);


router.post('/',validateCreate, isAuthenticated ,GenereController.createUser);

router.put('/:id',isAuthenticated,GenereController.updateUser);

router.delete('/:id', GenereController.deleteUser);

module.exports=router