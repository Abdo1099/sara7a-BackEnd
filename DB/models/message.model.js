
import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    message:{
        type:String,
        required:true
    },
    sentTo:{
        type:Schema.Types.ObjectId,
        ref:"user"
    }
})

export const messageModel = model("message",messageSchema)