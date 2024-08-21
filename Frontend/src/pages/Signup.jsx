const Signup = () => {
  return (
    <div className="flex flex-col items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px]  rounded-md bg-opacity-35 bg-gray-400 ">
            <h1 className="text-white text-4xl font-mono py-5">Signup</h1>
            <form action="" encType="multipart/form-data" className="flex flex-col justify-center items-start text-center font-mono"> 
                <div className="flex items-center gap-8">
                   <input type="text" name="fullName" className="w-80 px-3 py-2 rounded-md bg-[rgb(40,67,54)] outline-none text-white " placeholder="Enter Full Name" />

                 <input type="text" name="username" className=" w-80 px-3 py-2 rounded-md bg-[rgb(40,67,54)] outline-none text-white " placeholder="Create username" />
                </div>
                
                <div className="flex items-center gap-8">
                  <input type="password" name="password" className="mt-5 w-80 px-3 py-2 rounded-md bg-[rgb(40,67,54)] outline-none text-white " placeholder="Create Password" />

                  <input type="password" name="confirmPassword" className="mt-5 w-80 px-3 py-2 rounded-md bg-[rgb(40,67,54)] outline-none text-white " placeholder="Confirm Password" />
                </div>

                <div className="flex items-center gap-8">
                  <div className="flex gap-5 items-center w-80 text-gray-400 mt-5  bg-[rgb(40,67,54)] px-3 py-2 rounded-md">
                    <span>Male: </span>
                    <input type="checkbox" name="gender" className="w-5 h-5 px-3 py-2 rounded-3xl  outline-none text-white " placeholder="Choose Gender" />

                    <span>Female: </span>
                    <input type="checkbox" name="gender" className="w-5 h-5 px-3 py-2 rounded-md bg-[rgb(40,67,54)] outline-none text-white " placeholder="Choose Gender" />
                  </div>
                  

                  <input type="file" name="profilePic" className="mt-5 w-80 px-3 py-2 rounded-md bg-[rgb(40,67,54)] outline-none text-white " placeholder="Enter Email" />

                </div>

                <button className="mt-5 w-[670px] mx-auto px-3 py-2 rounded-md outline-none text-white bg-[rgb(40,67,54)] hover:scale-[102%] hover:bg-green-500 transition-all">Register</button>
                <a href="/" className="mt-2 mx-auto rounded-md outline-none text-white  hover:text-green-500 ">Already Registered? Sign-in </a>
                <p className="mx-auto  px-3 py-2 rounded-md outline-none text-white pb-5 opacity-50 text-xs">
                This page is protected by Google reCAPTCHA to ensure you are not a
                bot
                </p>
                

            </form>
        </div>
  )
}

export default Signup