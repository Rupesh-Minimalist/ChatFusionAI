// import React from 'react'

import Conversation from "../Messages/Conversation"

const ConversationContainer = () => {
  return (
    <div className="h-[75%] overflow-y-scroll scrollbar-hide ml-2 mr-5 bg-opacity-35 w-[95%] rounded-xl">
      <Conversation/>
      <Conversation/>
      <Conversation/>
      
    </div>
  )
}

export default ConversationContainer