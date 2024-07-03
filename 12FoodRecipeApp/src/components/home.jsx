import React, { useEffect, useMemo, useState } from 'react'
import Header from './header'
import { BeatLoader } from 'react-spinners';
import { Navigate, useNavigate } from 'react-router-dom'
import { useSearch } from '../context/context';
import { useDispatch,useSelector } from 'react-redux'
import { addToWishList,addToRecepies } from '../store/slice';

function Home() {
    const { search, setId} = useSearch();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    // const memo = useMemo();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const recpieData = useSelector(state=>state.recipes)
    
    const handleClick = (id) => {
        setId(id)
        navigate(`/detail`)
      }

    async function fetchData() {
        setLoading(true);
        let res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${search}`)
        let result = await res.json();
        dispatch(addToRecepies(result.recipes))
        setLoading(false)
    }
    console.log(data);
    const AddWishList = (e,item) => {
        const obj = {
            id: item.recipe_id,
            name: item.title,
            img_url: item.image_url,
            publicer_name: item.publisher
        }
        e.target.textContent = "Added to WishList"
        e.target.disabled = "true"
        dispatch(addToWishList(obj));
        alert("Item added to wishlist")
    }

    const CahedData = async()=>{
        let result = await recpieData;
        setData(result)

    }

    useEffect(()=>{
        CahedData();
    },[recpieData])

    useEffect(() => {
        fetchData();
    }, [search,setData])

    return (
        <>
            <h1 className='text-center capitalize my-20 text-9xl font-semibold'>recipes for everyone</h1>
            {
                loading ? <BeatLoader color="#36d7b7" />
                    : <div className='grid grid-rows-6 grid-cols-5 gap-6 px-4 m-4 items-center'>
                        {
                            data && data.length > 0 ?
                                data.map((item) => (
                                    <div key={item.recipe_id} className='flex flex-col rounded-lg shadow-lg cursor-pointer justify-between h-80 gap-3 border px-4 py-2'>
                                        <div onClick={() => handleClick(item.recipe_id)} className='flex flex-col'>
                                            <h1 className='h-10'>{item.title}</h1>
                                            <img src={item.image_url} className='h-40 w-15' alt="" />
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-gray-500'>Publicer : {item.publisher}</p>
                                            <button className='px-2 py-4 bg-green-400 font-bold text-sm rounded-3xl hover:bg-green-700 hover:text-white' disabled={false} onClick={(e) => AddWishList(e,item)}>WishList ❤️</button>
                                        </div>
                                    </div>
                                ))
                                : "Nothing to show..."
                        }
                    </div>
            }
        </>
    )
}


export default Home