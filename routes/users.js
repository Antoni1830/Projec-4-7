const express=require('express');
const router=express.Router();

const  usersController=require('../controllers/users');
const{isAuthenticated}=require ("../middlewares/authenticate");
const{validateCreate}=require('../middlewares/Validate_users');

router.get('/', usersController.getAll);

router.get('/:id',usersController.getSingle);


router.post('/',isAuthenticated,validateCreate,usersController.createUser);

router.put('/:id',isAuthenticated,usersController.updateUser);

router.delete('/:id', usersController.deleteUser);

module.exports=router