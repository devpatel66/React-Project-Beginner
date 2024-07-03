import React, { useEffect, useState } from 'react'
import { useSearch } from '../context/context';

function Detail() {
    const { id } = useSearch();
    const [details, setDetails] = useState(null);
    console.log(id)
    async function fetchData() {
        let res = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
        let result = await res.json();
        setDetails(result.recipe)
        console.log(result.recipe.ingredients)
    }

    

    useEffect(() => {
        fetchData();
        console.log(details)
    }, [id])
    return (
        <div className='flex justify-center flex-col'>
            <h1 className='px-10 mb-16 font-bold text-3xl'>Recepie Name : {details?.title}</h1>
            <div className='flex px-10'>
                <img src={details?.image_url} className='h-max'  alt="" />
                <div className='mx-6'>
                    <h2 className='mb-5 font-semibold text-xl'>Ingredients</h2>
                    {
                        details && details.ingredients ?
                            details.ingredients.map((item) => (
                                <div key={1} className='border px-4 py-6'>
                                    <p className=''>{item}</p>
                                </div>
                            ))
                            : "Not found"
                    }
                </div>
            </div>
        </div>
    )
}

export default Detail