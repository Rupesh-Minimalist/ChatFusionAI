import { IoIosSend } from "react-icons/io";

const SendMessage = () => {
  return (

    <form action="" className="flex">
     
        <input type="text" name="message" className="w-full px-2 py-2 rounded-md bg-white outline-none" placeholder="Type Message" />
        
        <button>
            <IoIosSend className="p-2 h-10 w-10 rounded-md bg-green-500 ml-2 hover:bg-green-600 hover:scale-[105%]"/>
        </button>
    
    </form>
    
  )
}

export default SendMessage