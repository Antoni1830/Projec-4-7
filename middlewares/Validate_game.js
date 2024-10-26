const{check}= require('express-validator')
const{validateResult}=require('../helpers/validate_game')
const validateGame=[ 
check('Game').exists().not().isEmpty(), 
check('Developer').exists().not().isEmpty(),
check('release_date').exists().not().isEmpty(),
check('Best_Player').exists().not().isEmpty(),

(req,res,next)=>{
    validateResult(req,res,next)

}
]

module.exports={validateGame}