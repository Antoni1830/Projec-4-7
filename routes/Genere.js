const express=require('express');
const router=express.Router();

const  GenereController=require('../controllers/Genere');

router.get('/', GenereController.getAll);

router.get('/:id',GenereController.getSingle);


router.post('/', GenereController.createUser);

router.put('/:id',GenereController.updateUser);

router.delete('/:id', GenereController.deleteUser);

module.exports=router