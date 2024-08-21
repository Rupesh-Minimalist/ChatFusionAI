import { LuMessagesSquare } from "react-icons/lu";

const NoChatSelected = () => {
  return (
    <div className="text-xl text-white text-center my-auto">
        <p className="text-4xl -mb-3 ">Welcome Rupesh Singh</p> 
        <br/>
        <p className="opacity-80">Select a Chat to Start Messaging</p>
        <LuMessagesSquare className="w-10 h-10 mx-auto mt-4 animate-pulse" />

    </div>
  )
}

export default NoChatSelected