import express from 'express';
const router=express.Router();
import userController from '../controllers/userController.js';
// router.get('/',(req,res)=>{})
// router.post('/',(req,res)=>{})
//ye dono request same route pr h to ye hm ek simple way mein likh skte h
router.route('/')// '/' kyu dala bcz /user ke baad vali 
       .get(userController.getUsers)//usercontroller ek object h jo alg file mein h
       .post(userController.createUser)
export default router;