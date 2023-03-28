import express from 'express';
import cors from 'cors';
import { connectMongodb } from './db/db';
import userController from './controllers/registration.controller'
import tasksController from './controllers/tasks.controller'
const app=express();
app.use(cors());

app.use(express.json());

app.use('/reg',userController);
app.use('/tasks',tasksController)
app.listen(3000,async ()=>{
    try {
        await connectMongodb();
         console.log("listening on port 3000");
    } catch (error) {
        console.log('server failed',error)
    }
   
})