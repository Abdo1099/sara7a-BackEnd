import { Schema, model } from "mongoose";


const userSchema = new Schema({
    name:{
        type:String,
        minLength:3,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true,
        min:[16, "You are young"],
        max:65
    },
    password:{
        type:String,
        required:true
    },
    verified:{
        type:Boolean,
        default:false
    }

})

export const userModel = model("user", userSchema)