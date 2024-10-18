const{check}= require('express-validator')
const{validateResult}=require('../helpers/validate_company')
const validateCreate=[ // Name,Founder,Foundation,Most_Popular_Game,Country,best_year,worst_year
check('Name').exists().not().isEmpty(), 
check('Founder').exists().not().isEmpty(),
check('Foundation').exists().not().isEmpty(),
check('Most_Popular_Game').exists().not().isEmpty(),
check('Country').exists().not().isEmpty(),
check('best_year').exists().isNumeric(),
check('worst_year').exists().isNumeric(),
(req,res,next)=>{
    validateResult(req,res,next)

}
]

module.exports={validateCreate}