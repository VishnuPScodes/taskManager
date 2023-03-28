import express from 'express';
import { TasksList } from '../models/tasks.model';

const router=express.Router();

//get
router.get('/',async (req,res)=>{
    try {
        const data=await TasksList.find().lean().exec();
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

export default router;