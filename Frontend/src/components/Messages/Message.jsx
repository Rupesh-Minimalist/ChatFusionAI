
const Message = () => {
  return (
    <>
      {/* Left */}
    <div className="flex items-end">
      <div className="mr-2">
        <img src="https://www.clipartmax.com/png/small/277-2772135_female-user-icon-download-female-person-icon.png" alt="Sender" className="h-8 w-8 rounded-full"/>
      </div>
      <div className="bg-white px-4 py-2 shadow-md rounded-tl-xl">
        <p className="text-gray-800">Hello! How are you?</p>
      </div>
    </div>
  
    {/* Right */}
    <div className="flex items-end justify-end my-3 mr-2">
      <div className="bg-blue-500 text-white px-4 py-2 rounded-tr-xl shadow-md">
       <p>I am good, thank you! How about you?</p>
     </div>
     <div className="flex-shrink-0 ml-2">
        <img src="https://www.clipartmax.com/png/small/277-2772135_female-user-icon-download-female-person-icon.png" alt="Receiver" className="h-8 w-8 rounded-full"/>
      </div>
    </div>

    </>
  )
}

export default Message