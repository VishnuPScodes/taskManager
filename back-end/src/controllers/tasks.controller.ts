import express from 'express';
import { TasksList } from '../models/tasks.model';


const router=express.Router();


//making a get request to get the data from the api

router.get('/',async (req,res)=>{
    try {
        const data=await TasksList.find().lean().exec();
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

//post
router.post('/',async (req,res)=>{
    try {
        const data=await TasksList.create(req.body);
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
} )

//update

router.patch('/:id',async (req,res)=>{
    try {
        const data=await TasksList.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
})

//delete

router.delete('/:id',async (req,res)=>{
    try {
        const data=await TasksList.findByIdAndDelete(req.params.id);
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
})

export default router
