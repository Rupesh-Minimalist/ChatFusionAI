import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className="p-5 shadow-2xl flex justify-center bg-white w-full">

        <img src={logo} alt="logo" className="rounded-md w-56" />

    </div>
  )
}

export default Header