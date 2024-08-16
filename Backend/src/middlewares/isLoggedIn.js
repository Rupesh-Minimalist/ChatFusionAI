import jwt from "jsonwebtoken"
import {User} from "../models/user.model.js"

const isLoggedIn=async(req,res,next)=>{

    let token=req.cookies.token

    if(!token){
        return res.status(401).json({
            error:"Login First"
        })
    }

    const decyrpted_token=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

    if(!decyrpted_token){
        return res.status(401).json({
            error:"Incorrect Token"
        })
    }

    let existed_user=await User.findOne({_id:decyrpted_token._id})

    if(!existed_user){
        return res.status(401).json({
            error:"Incorrect Token"
        })
    }

    req.user=existed_user;

    next();
}

export {isLoggedIn}