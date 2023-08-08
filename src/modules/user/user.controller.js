import { userModel } from "../../../DB/models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { sendEmail } from "../../email/nodemailer.js"
import { AppError } from "../../Error/ErrorClass.js"
import { asyncHandler } from "../../Error/asyncHandler.js"
import dotenv from "dotenv"

dotenv.config()

export const getAllUsers = async (req, res, next) => {
    const users = await userModel.find()
    return res.json({ message: "All Users", users })
}


export const signUp = asyncHandler(async (req, res, next) => {
    const {  email, name, password, age } = req.body
        const user = await userModel.findOne({ email })
        if (user) {
            return next(new AppError("Email Exists", 409))
        } else {
            const hash = bcrypt.hashSync(password, process.env.ROUND)
            await userModel.insertMany({ email, name, password: hash, age })
            sendEmail({ email })
            return res.json({ message: "User Added" })
        }
})

export const verify = asyncHandler(async (req, res, next) => {
    const { email } = req.params
    await userModel.findOneAndUpdate({ email }, { verified: true })
    return res.json({ message: "Verified" })
})


export const signIn = asyncHandler(async(req, res, next)=>{
    const {email, password} = req.body
    const user = await userModel.findOne({email})
    if(user && bcrypt.compareSync(password, user.password)){
        const token = jwt.sign({email, id:user._id}, process.env.MY_SECRET_KEY)
        return res.json({message:`Welcome ${user.name}`, Token:token})
    }else{
        return next(new AppError("Email or Password is incorrect", 401))
    }
})