const express=require('express');
const router=express.Router();

const  CompanyController=require('../controllers/company');

router.get('/', CompanyController.getAll);

router.get('/:id',CompanyController.getSingle);


router.post('/', CompanyController.createUser);

router.put('/:id',CompanyController.updateUser);

router.delete('/:id', CompanyController.deleteUser);

module.exports=router