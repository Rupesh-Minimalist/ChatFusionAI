import express from "express"
import { sendMessage,getMessage } from "../controllers/message.controller.js"
import {isLoggedIn} from "../middlewares/isLoggedIn.js"

const router=express.Router()

router.route("/send/:recieverId").post(isLoggedIn,sendMessage)
router.route("/chats/:id").get(isLoggedIn,getMessage)

export default router