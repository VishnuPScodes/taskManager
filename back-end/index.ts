import express from 'express';
import cors from 'cors';
import { connectMongodb } from './db/db';


const app=express();
app.use(cors());

app.use(express.json());


app.listen(3000,async ()=>{
    try {
        await connectMongodb();
         console.log("listening on port 3000");
    } catch (error) {
        console.log('server failed',error)
    }
   
})