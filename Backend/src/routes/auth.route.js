import express from "express";
const router=express.Router()

import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import { upload } from "../middlewares/multer.js"
import { RegisterUser, LoginUser, LogoutUser } from "../controllers/auth.controller.js";

router.route("/signup").post(upload.single("profilePic"),RegisterUser)
router.route("/login").post(LoginUser)
router.route("/logout").post(isLoggedIn,LogoutUser)

export default router