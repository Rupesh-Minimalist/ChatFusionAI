import { useState } from "react"
import GenderCheckBox from "./GenderCheckBox"
import useSignup from "../Hooks/useSignup"
import {Link} from "react-router-dom"

const Signup = () => {

  const [input,Setinput]=useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:""
  })

  const {loading,signup}=useSignup()

  const HandleSubmit=async(e)=>{
    e.preventDefault()
    // console.log(input)

    await signup(input)
  }

  return (
    <div className="flex flex-col items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px]  rounded-md bg-opacity-35 bg-gray-400 ">
            <h1 className="text-white text-4xl font-mono py-5">Signup</h1>
            <form action="" onSubmit={HandleSubmit} className="flex flex-col justify-center items-start text-center font-mono"> 
                <div className="flex items-center gap-8">
                  <input type="text" name="fullName" value={input.fullName} onChange={(e)=>{
                    Setinput({...input,fullName:e.target.value})
                  }} className="w-80 px-3 py-2 rounded-md bg-zinc-800 outline-none text-white " placeholder="Enter Full Name" />

                  <input type="text" name="username" value={input.username} onChange={(e)=>{
                    Setinput({...input,username:e.target.value})
                  }}  className=" w-80 px-3 py-2 rounded-md bg-zinc-800 outline-none text-white " placeholder="Create username" />
                </div>
                
                <div className="flex items-center gap-8">
                  <input type="password" name="password" value={input.password} onChange={(e)=>{
                    Setinput({...input,password:e.target.value})
                  }} className="mt-5 w-80 px-3 py-2 rounded-md bg-zinc-800 outline-none text-white " placeholder="Create Password" />

                  <input type="password" name="confirmPassword" value={input.confirmPassword} onChange={(e)=>{
                    Setinput({...input,confirmPassword:e.target.value})
                  }} className="mt-5 w-80 px-3 py-2 rounded-md bg-zinc-800 outline-none text-white " placeholder="Confirm Password" />
                </div>

                <div className="flex items-center gap-8">

                  <GenderCheckBox/>  
                  {/* //2:33 min */}
          
                  <input type="file" name="profilePic" className="mt-5 w-80 px-3 py-2 rounded-md bg-zinc-800 outline-none text-white "  />

                </div>

                <button className="mt-5 w-[670px] mx-auto px-3 py-2 rounded-md outline-none text-white bg-green-500 hover:scale-[99%] hover:bg-green-600 transition-all">Register</button>
                <Link to="/" className="mt-2 mx-auto rounded-md outline-none text-white  hover:text-green-500 ">Already Registered? Sign-in </Link
                >
                <p className="mx-auto  px-3 py-2 rounded-md outline-none text-white pb-5 opacity-50 text-xs">
                This page is protected by Google reCAPTCHA to ensure you are not a
                bot
                </p>
                

            </form>
        </div>
  )
}

export default Signup