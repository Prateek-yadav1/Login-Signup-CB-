const path=require('path');
const express=require('express');
const router=express.Router();
const ProfileController=require('../controller/profile');

router.get('/',ProfileController.getProfile);

module.exports=router;