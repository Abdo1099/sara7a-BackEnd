import joi from "joi"


export const messageSchema = joi.object({
    message:joi.string().min(10).max(200),
    sentTo:joi.string().pattern(new RegExp("^.{24}$")).required()
})