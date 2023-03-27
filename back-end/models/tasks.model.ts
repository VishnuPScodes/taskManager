import mongoose from "mongoose";


interface Tasks {
  task_name: string;
  description: string;
  date: String;
}


export const tasksSchema=new mongoose.Schema({
    task_name:{
        type:String,
        requied:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});

export const TasksList=mongoose.model("task",tasksSchema);