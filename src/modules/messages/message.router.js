import { Router } from "express";
import { getUserMesaages, sendMessage } from "./message.controller.js";
import { validation } from "../../middleware/validation.js";
import { messageSchema } from "./message.validation.js";

export const messageRouter = Router()

messageRouter.post("/sendmessage",validation(messageSchema) ,sendMessage)

messageRouter.post("/getUserMesaages",getUserMesaages )