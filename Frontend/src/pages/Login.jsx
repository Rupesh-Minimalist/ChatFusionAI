
import {Link} from "react-router-dom"

const Login=()=>{

    return(
        <div className="flex flex-col items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-96  rounded-md bg-opacity-35 bg-gray-400 ">
            <h1 className="text-white text-4xl font-mono py-5">LOGIN</h1>
            <form action="" className="flex flex-col justify-center items-start text-center">
                <input type="text" name="username" className="w-80 px-3 py-2 rounded-md bg-zinc-800 outline-none text-white " placeholder="Enter username" />
                <input type="password" name="password" className="mt-5 w-80 px-3 py-2 rounded-md bg-zinc-800 outline-none text-white " placeholder="Enter Password" />
                <button className="mt-5 w-80 px-3 py-2 rounded-md outline-none text-white bg-green-500 hover:scale-[102%] hover:bg-green-600 transition-all">Login</button>
                <Link to="/signup" className="mt-2 mx-auto rounded-md outline-none text-white  hover:text-green-500 ">Not Registered? Sign-up </Link>
                <p className=" w-80 px-3 py-2 rounded-md outline-none text-white pb-5 opacity-50 text-xs">
                This page is protected by Google reCAPTCHA to ensure you are not a
                bot
                </p>
                

            </form>
        </div>
        
    )

}

export default Login