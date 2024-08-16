import {User} from "../models/user.model.js"

const getUserForSidebar=async(req,res)=>{
    const currentUser=req.user._id

    const allUser=await User.find().select("-password")
    // console.log(allUser)

    return res
    .status(200)
    .json({
        allUser
    })
}

export {getUserForSidebar}