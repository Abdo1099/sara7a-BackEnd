import express  from "express";
import { dbConnection } from "./DB/dbConnection.js";
import { userRouter } from "./src/modules/user/user.router.js";
import { messageRouter } from "./src/modules/messages/message.router.js";

const app = express()
app.use(express.json())
app.get("/", (req, res, next)=>{
    return res.send("Hello Abdo")
})

app.use("/users", userRouter)
app.use("/messages", messageRouter)
app.get("*", (req, res, next)=>{
    return res.send("Page not Found")
})
app.use((err, req, res, next)=>{
    let code = err.codeStatus || 500
    return res.status(code).json({message:err.message})
})
dbConnection()
app.listen(5000, ()=>{console.log("Server is Ruunig....");})