import express from "express"
import {isLoggedIn} from "../middlewares/isLoggedIn.js"
import { getUserForSidebar } from "../controllers/user.controller.js"

const router=express.Router()

router.route("/landing").get(isLoggedIn,getUserForSidebar)


export default router