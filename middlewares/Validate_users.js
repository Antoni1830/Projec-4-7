const{check}= require('express-validator')
const{validateResult}=require('../helpers/validate_users')
const validateCreate=[ // FavoriteGame,FirstName,Gaming-platform,LastName,age,birthday,email
check('FavoriteGame').exists().not().isEmpty(), 
check('firstName').exists().not().isEmpty(),
check('Gaming_platform').exists().not().isEmpty(),
check('lastName').exists().not().isEmpty(),
check('age').exists().isNumeric(),
check('birthday').exists().isNumeric(),
check('email').exists().not().isEmpty(),
(req,res,next)=>{
    validateResult(req,res,next)

}
]

module.exports={validateCreate}