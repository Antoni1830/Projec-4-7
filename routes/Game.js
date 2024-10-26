const express=require('express');
const router=express.Router();

const  GameController=require('../controllers/Game');
const{validateCreate}=require('../middlewares/Validate_game');

router.get('/', GameController.getAll);

router.get('/:id',GameController.getSingle);


router.post('/',validateCreate, GameController.createUser);

router.put('/:id',GameController.updateUser);

router.delete('/:id', GameController.deleteUser);

module.exports=router