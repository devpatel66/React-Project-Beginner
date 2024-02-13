import React from 'react'
import { useState } from 'react'
import {FaStar} from 'react-icons/fa'

function Rating({noOfStars = 5}) {
    const [rating,setRating] = useState(0)
    const [hover,setHover] = useState(0)
    const handleClick = (id)=>{
        setRating(id)
        console.log(id);
    }
    const handleLeave = (id) =>{
        setHover(rating)
        console.log(id);
    }
    const handleMouseMove = (id)=>{
        setHover(id)
        console.log(id)
    }
  return (
    <div className='starRating'>
       {
            [...Array(noOfStars)].map((_,index)=>{
                index += 1
                return <FaStar
                        className={index <= (hover || rating) ?"active" :"inactive" }
                        key={index}
                        onClick={()=>handleClick(index)}
                        onMouseMove={()=>handleMouseMove(index)}
                        onMouseLeave={()=>handleLeave(index)}
                        size={40}
                        />
            })
        }
    </div>
  )
}

export default Rating