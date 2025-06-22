const path=require('path');
const express=require('express');
const router=express.Router();
const SignupController=require('../controller/signup');


router.get('/',SignupController.getSignup);    

router.post('/',SignupController.postSignup);


module.exports=router;
