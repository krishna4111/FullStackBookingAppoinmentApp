const userController=require('../controllers/bookingcontroller');

const express=require('express');
//injecting router to our project
const router=express.Router();

router.post('/user/add-user',userController.adduser);

router.get('/user/add-user',userController.postAddUser);

router.get('/user/show-all-users',userController.showAllUsers);

router.delete('/user/delete-user/:id',userController.deleteUser)

module.exports=router;