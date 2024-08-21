import ConversationContainer from "./ConversationContainer"
import Logout from "./Logout"
import Search from "./Search"

const Sidebar = () => {
  return (
    <div className="h-full items-start flex flex-col  justify-between">
        <Search />
        <ConversationContainer  />
        <Logout  />
    </div>
  )
}

export default Sidebar