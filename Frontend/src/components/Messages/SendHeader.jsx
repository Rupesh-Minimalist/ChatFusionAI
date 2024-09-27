import { IoIosCall } from "react-icons/io";
import { MdOutlineVideoCall } from "react-icons/md";


const SendHeader = () => {
  return (
    <>
    <div className="flex justify-between bg-green-500 rounded-xl items-center">
      <div className="flex items-center gap-3 px-3 py-1 w-full text-white font-semibold text-xl ">
        <img src="https://www.clipartmax.com/png/small/277-2772135_female-user-icon-download-female-person-icon.png" className="w-8 rounded-full" alt="" />
        <h1>John Doe</h1>

      </div>
      <div className="flex gap-5 items-center " >
          <IoIosCall className="h-11 w-11 hover:bg-green-700 rounded-full  p-2 transition-all" />
          <MdOutlineVideoCall className="h-11 w-11 p-[5px] mr-5 hover:bg-green-700 rounded-full transition-all " />
      </div>
    </div>
    </>
  )
}

export default SendHeader