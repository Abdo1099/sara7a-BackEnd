import { messageModel } from "../../../DB/models/message.model.js"
import { userModel } from "../../../DB/models/user.model.js"
import { AppError } from "../../Error/ErrorClass.js"
import { asyncHandler } from "../../Error/asyncHandler.js"
import jwt from "jsonwebtoken"

export const sendMessage = asyncHandler(async(req, res, next)=>{
    const {message, sentTo} = req.body
    await messageModel.insertMany({message, sentTo})
    return res.json({message:"Done"})
})

export const getUserMesaages = (req, res, next)=>{
    const token = req.header("TOKEN")
    jwt.verify(token, process.env.MY_SECRET_KEY, async(err, decoded)=>{
        if(err){
            return next(new AppError("Send Valid Token", 498))
        }else{
            const userMessages = await messageModel.find({sentTo:decoded.id})
            return res.json({message:"Done", userMessages})
        }
    })
}