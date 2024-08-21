import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"

const RegisterUser=async(req,res)=>{

    const {fullName,username,password,confirmPassword,gender}=req.body

    //Validations
    const fields=[fullName,username,password,confirmPassword,gender]
    const isFieldValid=fields.every(field=>field.trim()!=="")

    if(!isFieldValid){
        return res.status(400).json({
            error:"All Fields are required !"
        })
    }

    if(password!==confirmPassword){
        return res.status(400).json({
            error:"Password is not same !"
        })
    }

    //is user exist

    const existed_user=await User.findOne({username})
 
    if(existed_user){
        return res.status(400).json({
            error:"User Already Registered, Login !"
        })
    }

    //Check for Images 

    const profilePicLocalPath=req.file.path 

    if(!profilePicLocalPath){
        return res.status(400).json({
            error:"Profile Pic is missing"
        })
    }

    const profilePic=await uploadOnCloudinary(profilePicLocalPath)

    if(!profilePic){
        return res.status(400).json({
            error:"Error while uploading Profile Pic to cloudinary"
        })
    }

    // Create User

    const user=await User.create({
        fullName,
        username,
        password,
        gender,
        profilePic:profilePic.url 
    })

    await user.save({validateBeforeSave:false})

    const isCreated=await User.find({username}).select("-password")

    if(!isCreated){
        return res.status(500).json({
            error:"Error while creating User"
        })
    }

    return res.status(200).json({
        message:"User Created",
        isCreated
    })
}

const LoginUser=async(req,res)=>{

    const {username,password}=req.body

    if( !username || !password){
        return res.status(401).json({
            error:"Both fields are required"
        })
    }

    const existed_user=await User.findOne({username})

    if(!existed_user){
        return res.status(401).json({
            error:"Register First !"
        })
    }

    const isPassCorrect=await existed_user.isPasswordCorrect(password)

    if(!isPassCorrect){
        return res.status(401).json({
            error:"Wrong Password !"
        })
    }

    const token=await existed_user.generateAccessToken()

    const options={
        httpOnly:true, // Prevents Cross site scripting attacks
        secure:true,
        sameSite:true // prevent CSRF attack
    }

    return res.status(200).cookie("token",token,options).json({
        message:"Logged In successfully !"
    })

}

const LogoutUser=(req,res)=>{

    let existed_user=req.user

    const options={
        httpOnly:true, // Prevents Cross site scripting attacks
        secure:true,
        sameSite:true // prevent CSRF attack
    }

    return res
    .status(200)
    .clearCookie("token",options)
    .json({
        message:"Logout Successfully"
    })

}

export {RegisterUser, LoginUser, LogoutUser}