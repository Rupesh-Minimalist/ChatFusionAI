import MessageContainer from "../components/Messages/MessageContainer.jsx"
import Sidebar from "../components/sidebar/Sidebar.jsx"

const Home = () => {
  return (
    <div className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] w-[900px] h-[450px] rounded-md bg-opacity-35 bg-gray-400 font-mono shadow-2xl">  
        <div className="w-[35%] p-3">
          <Sidebar/>
        </div>
        <div className="h-[410px] my-auto border-[1px] border-gray-500"></div>
        <div className="w-[65%] p-3">
          <MessageContainer/>
        </div>
        
        
    </div>
  )
}

export default Home