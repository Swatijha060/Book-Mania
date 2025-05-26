
import mongoose, { Schema } from "mongoose";

const UserSchema=new Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{type:String,required:true},
    avatar:{
        type: String,
    },
    role:{type:String,enum:['admin','user'],default:'user'}
});

const User=mongoose.model('User',UserSchema);
export default User;