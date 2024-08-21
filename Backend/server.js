import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToDB from "./src/db/connectToDB.js"
import authRouter from "./src/routes/auth.route.js"
import messageRouter from "./src/routes/message.route.js"
import userRouter from "./src/routes/user.route.js"

const PORT=process.env.PORT || 5000
const app=express()

connectToDB()

dotenv.config({path:"./.env"})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/messages",messageRouter)
app.use("/api/v1/users",userRouter)


app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})
