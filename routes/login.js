const path=require('path');
const express=require('express');
const router=express.Router();
const LoginController=require('../controller/login');



router.get('/',LoginController.getLogin)

router.post('/',LoginController.postLogin)

module.exports=router;
