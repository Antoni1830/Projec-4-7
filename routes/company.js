const express=require('express');
const router=express.Router();

const  CompanyController=require('../controllers/company');
const{validateCreate}=require('../middlewares/Validate_Company');

router.get('/', CompanyController.getAll);

router.get('/:id',CompanyController.getSingle);


router.post('/',validateCreate, CompanyController.createUser);

router.put('/:id',validateCreate,CompanyController.updateUser);

router.delete('/:id', CompanyController.deleteUser);

module.exports=router