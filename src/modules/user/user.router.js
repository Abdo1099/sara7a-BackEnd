import { Router } from "express";
import { getAllUsers, signIn, signUp, verify } from "./user.controller.js";
import { validation } from "../../middleware/validation.js";
import { signinSchema, signupSchema } from "./user.validation.js";


export const userRouter = Router()

userRouter.get("/",getAllUsers)

userRouter.post("/signUp",validation(signupSchema), signUp)
userRouter.post("/signIn",validation(signinSchema) ,signIn)
userRouter.get("/verify/:email", verify)