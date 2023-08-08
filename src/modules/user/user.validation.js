import joi from "joi"

export const signupSchema = joi.object({
    name:joi.string().min(4).max(20).required(),
    email:joi.string().email().required(),
    password:joi.string().required().pattern(new RegExp("^[A-Z][a-z0-9]{8,16}$")),
    age:joi.number().min(16).max(65).required()
})

export const signinSchema = joi.object({
    email:joi.string().email().required(),
    password:joi.string().required().pattern(new RegExp("^[A-Z][a-z0-9]{8,16}$")),
})