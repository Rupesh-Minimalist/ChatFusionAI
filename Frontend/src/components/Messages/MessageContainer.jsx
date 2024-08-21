import Messages from "./Messages"
import NoChatSelected from "./NoChatSelected"
import SendHeader from "./SendHeader"
import SendMessage from "./SendMessage"

const MessageContainer = () => {

  const chatSelected=true

  return (

    <div className="flex flex-col justify-between h-full">
      {chatSelected ? (<NoChatSelected/>):(
        <>
        <SendHeader/>
        <Messages/>
        <SendMessage/>
        </>
      )}
    </div>
  )
}

export default MessageContainer