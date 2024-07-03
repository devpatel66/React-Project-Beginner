import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeFromWishList } from '../store/slice';
import {useSearch} from '../context/context'
import {useNavigate} from 'react-router'
function Wishlist() {

    const[loading,setLoading] = useState(false);
    const data = useSelector(state=>state.wishlist);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {setId} = useSearch();
    console.log(data)

    const handleClick = (id) => {
        console.log(id)
        setId(id)

        navigate("/detail")
      }

    const removeItem = (id)=>{
        dispatch(removeFromWishList(id))
    }


  return (
    <div>
         <h1 className='text-center capitalize my-20 2xl:text-9xl lg:text-7xl md:text-6xl font-semibold text-5xl'>your wishlist</h1>
            {
                loading ? <BeatLoader color="#36d7b7" />
                    : <div className='grid grid-rows-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1  gap-6 px-4 m-4 items-center'>
                        {
                            data && data.length > 0 ?
                                data.map((item) => (
                                    <div key={item.recipe_id} className='flex flex-col rounded-lg shadow-lg cursor-pointer justify-between h-80 gap-3 border px-4 py-2'>
                                        <div onClick={() => handleClick(item.id)} className='flex flex-col'>
                                            <h1 className='h-10'>{item.name}</h1>
                                            <img src={item.img_url} className='h-40 w-15' alt="" />
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-gray-500'>Publicer : {item.publicer_name}</p>
                                            <button className='px-2 py-4 bg-red-300 font-bold text-sm rounded-3xl hover:bg-red-700 hover:text-white' onClick={(e) => removeItem(item.id)}>Remove 💔</button>
                                        </div>
                                    </div>
                                ))
                                : "Nothing to show..."
                        }
                    </div>
            }
    </div>
  )
}

export default Wishlist