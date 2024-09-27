import Header from "./components/Header.jsx"
import {createBrowserRouter, Outlet} from "react-router-dom"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import Home from "./pages/Home.jsx"


const AppLayout=()=>{

    return(
        <>
           <div className=" w-full min-h-screen bg-zinc-800">
                <Header/>
                <Outlet/>
           </div>
        </>
    )
}

const AppRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Login/>
            },
            {
                path:"/signup",
                element:<Signup/>
            },
            {
                path:"/home",
                element:<Home/>
            }
        ]
    }
])


export default AppRouter
