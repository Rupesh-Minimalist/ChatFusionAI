// import React from 'react'
import { FaSearch } from "react-icons/fa";


const Search = () => {
  return (
    <div className="mx-1">
      <input type="text" placeholder="Search Conversation" className="px-3 py-2 rounded-2xl outline-none w-[230px] bg-white transition-all" />
      <button className="bg-white p-3 ml-2 rounded-full hover:bg-green-500 transition-all hover:scale-[97%] relative top-[4px]"><FaSearch className="w-4 h-4" /></button>
    </div>
  )
}

export default Search