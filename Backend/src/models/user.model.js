import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema=new mongoose.Schema({

    fullName:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female"]
    },
    profilePic:{
        type:String,
        default:"",
        required:true
    }

},{timestamps:true})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next()
    }

    this.password=await bcrypt.hash(this.password,12)
    next();
})

userSchema.methods.isPasswordCorrect=async function (pass) {
     return bcrypt.compare(pass,this.password)
}

userSchema.methods.generateAccessToken=async function(){

    return jwt.sign(
        {
            _id:this._id,
            username:this.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
} 

export const User=mongoose.model("User",userSchema)