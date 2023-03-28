import mongoose from "mongoose";


interface Tasks {
  task_name: string;
  description: string;
  date: String;
  userId:mongoose.Schema.Types.ObjectId
}


export const tasksSchema=new mongoose.Schema<Tasks>({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
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