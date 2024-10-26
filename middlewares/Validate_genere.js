const{check}= require('express-validator')
const{validateResult}=require('../helpers/validate_genere')
const validateCreate=[ // FavoriteGame,FirstName,Gaming-platform,LastName,age,birthday,email
check('Genere').exists().not().isEmpty(), 
check('number_of_players').exists().isNumeric(),
(req,res,next)=>{
    validateResult(req,res,next)

}
]

module.exports={validateCreate}