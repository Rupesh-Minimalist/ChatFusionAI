import { createRoot } from 'react-dom/client'
import AppRouter from './App'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {Toaster} from "react-hot-toast"

let root=createRoot(document.getElementById('root'))

root.render(
    <>
        <RouterProvider router={AppRouter}/>
        <Toaster /> 
    </>

)
