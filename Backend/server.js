import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToDB from "./db/connectToDB.js";

const PORT=process.env.PORT || 5000
const app=express()
connectToDB()

dotenv.config({path:"./.env"})

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

// app.use("/api/v1/auth",authRouter)


app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})
