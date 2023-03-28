import mongoose from "mongoose";


 interface User {
    email:string,
    password:string
 }

export const userSchema = new  mongoose.Schema<User>({
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  },
});

export const User =mongoose.model('user',userSchema);