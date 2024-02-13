import React from 'react'
import { RiHome5Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMore } from "react-icons/ci";
export default function Header({setDarkMode,darkMode}) {
  return (
    <nav className='flex py-5 px-10 justify-around items-center border-b dark:bg-gray-800 dark:text-gray-400'>
        <div className='px-2 py-5 rounded-2xl '>
            <p className='font-bold text-sm'>Dostoo</p>
        </div>
        <ul className='px-3 py-6 rounded-3xl flex gap-5 border'> 
            <li className='hover:text-amber-700 font-semibold cursor-pointer'><RiHome5Line size={30} /></li>
            <li className='hover:text-amber-700 font-bold cursor-pointer'><CiHeart size={30}/></li>
            <li className='hover:text-amber-700 font-semibold cursor-pointer'><IoIosAddCircleOutline size={30} /> </li>
            <li className='hover:text-amber-700 font-semibold cursor-pointer'><CiCircleMore size={30}/></li>
        </ul>
        <div className='flex gap-2'>
            <h2 className='px-2 py-4'>Profile</h2>
            {/* <button onClick={()=>setDarkMode(prev=>!prev)} className='border px-6 py-2 dark:bg-gray-700 dark:text-gray-200 rounded-full hover:bg-gray-300'>{darkMode?"Light 💡":"Dark 🌙"}</button> */}
        </div>
    </nav>
  )
}
