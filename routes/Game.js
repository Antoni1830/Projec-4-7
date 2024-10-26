const express=require('express');
const router=express.Router();

const  GameController=require('../controllers/Game');
const{validateGame}=require('../middlewares/Validate_game');

router.get('/', GameController.getAll);

router.get('/:id',GameController.getSingle);


router.post('/',validateGame, GameController.createUser);

router.put('/:id',validateGame,GameController.updateUser);

router.delete('/:id', GameController.deleteUser);

module.exports=router