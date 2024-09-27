
const GenderCheckBox = () => {
  return (
    <div className="flex gap-5 items-center w-80 text-gray-400 mt-5  bg-zinc-800 px-3 py-2 rounded-md">
                    <span>Male: </span>
                    <input type="checkbox" name="gender" className="w-5 h-5 px-3 py-2 rounded-3xl  outline-none text-white "  />

                    <span>Female: </span>
                    <input type="checkbox" name="gender" className="w-5 h-5 px-3 py-2 rounded-md bg-[rgb(40,67,54)] outline-none text-white "  />
    </div>
  )
}

export default GenderCheckBox