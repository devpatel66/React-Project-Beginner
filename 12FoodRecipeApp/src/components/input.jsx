import React from 'react'

function Input({type,placeholder,className = "",label,setSearch}) {
  return (
    <>
        <div className='flex justify-center items-center w-full flex-col p-2'>
        {label ? <label className='text-xl font-semibold'>{label}</label> : null}
        <input type={type} onChange={(e)=>setSearch(e.target.value)} className={`py-3 px-2 w-full  ${className}`} placeholder={placeholder} />
        </div>
    </>
  )
}

export default Input