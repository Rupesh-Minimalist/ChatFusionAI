import {useState} from "react"
import toast from "react-hot-toast"
import axios from 'axios';

const useSignup = () => {
   
    const [loading,SetLoading]=useState(false)

    const signup=async ({fullName,username,password,confirmPassword})=>{

        const success=handleValidations({fullName,username,password,confirmPassword})
      
        if(!success) return
        
        SetLoading(true)

        try {

            // const res=await fetch("http://localhost:3000/api/v1/auth/signup",{
            //     method:"POST",
            //     headers:{"Content-Type":"application/json"},
            //     body:JSON.stringify({fullName,username,password,confirmPassword})
            // })
            
            // const data=await res.json()


            const res = await axios.post('http://localhost:3000/api/v1/auth/signup', {
                fullName,
                username,
                password,
                confirmPassword,
            });

            const data = res.data;

            console.log(data)

            if(data.error){
             toast.error(data.error)
            }
            else{
                toast.success(data.message)
            }
            
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.error)
        } finally{
            SetLoading(false)
        }
        
    }
    return {signup,loading}
}

export default useSignup


const handleValidations = ({ fullName, username, password, confirmPassword }) => {
    if (!fullName || !username || !password || !confirmPassword) {
        toast.error("All fields are required!");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters long!");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match!");
        return false;
    }
    
    return true;
};