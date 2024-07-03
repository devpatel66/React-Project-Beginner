import Input from "./input";
import { useSearch } from "../context/context";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

function Header() {
    const {search,setSearch} = useSearch();
    const menu = useRef("");

    const handleMenu=()=>{
        menu.current.classList.toggle("max-sm:hidden")
    }
    // console.log(search)
    return (
        <>
        <div className="md:flex w-full max-sm:hidden">
        <header className="flex justify-between items-center h-24 w-full px-5">
            <div className="w-1/3 flex justify-center">
                <h1 className="font-bold text-2xl">FoodRecpisssss</h1>

            </div>
            <div className="w-1/3">
                <Input setSearch={setSearch} placeholder={"Enter Item..."} className="text-red-600 border shadow-lg rounded-2xl text-lg outline-none" type={"text"} />
            </div>
            <div className="flex gap-4 pr-6 w-1/3 justify-center">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/wishlist'}>Favrouite</NavLink>
            </div>
        </header>
        </div>


        <div className="max-md:hidden hidden  max-sm:flex max-sm:flex-col">
        <header className="flex justify-between items-center h-24 w-full px-5">
            <div className="px-2 flex justify-center">
                <h1 className="font-bold text-2xl">another</h1>

            </div>
            <div className="px-2 flex justify-center">
                <button onClick={handleMenu}>menu</button>
            </div>
            
        </header>
        <div className="h-full w-full flex justify-center flex-col items-center gap-4 max-sm:hidden duration-1000 transition-all ease-in-out" ref={menu}>
                <Input setSearch={setSearch} placeholder={"Enter Item..."} className="text-red-600 border shadow-lg rounded-2xl text-lg outline-none" type={"text"} />
                <NavLink className={"text-xl font-semibold"} to={'/'}>Home</NavLink>
                <NavLink className={"text-xl font-semibold"} to={'/wishlist'}>Favrouite</NavLink>
            </div>
        </div>
        </>
    )
}

export default Header;