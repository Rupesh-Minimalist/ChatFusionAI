import express from "express";
const router=express.Router()

router.route("/signup",RegisterUser)
router.route("/login",LoginUser)
router.route("/logout",LogoutUser)

export default router