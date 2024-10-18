const express=require('express');
const router=express.Router();

const  usersController=require('../controllers/users');
const{validateCreate}=require('../middlewares/Validate_users');

router.get('/', usersController.getAll);

router.get('/:id',usersController.getSingle);


router.post('/', validateCreate,usersController.createUser);

router.put('/:id',usersController.updateUser);

router.delete('/:id', usersController.deleteUser);

module.exports=router