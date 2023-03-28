import express from 'express';
import { TasksList } from '../models/tasks.model';
import { authenticate } from '../middlewares/authentication';
import { CustomRequest } from '../middlewares/authentication';
const router=express.Router();

//get
router.get('/',authenticate,async (req:CustomRequest,res)=>{
    try {
        const data=await TasksList.find().lean().exec();
        console.log('user' ,req.user);
        
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

export default router;