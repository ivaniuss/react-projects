'use client'
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex: any) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex: any) {
    setHover(getCurrentIndex);
  }
  
  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div className='flex justify-center'>
      {[...Array(5)].map((_, index) => {
        return (
          <FaStar
          key={index}
          className={index <= (hover || rating) ? "text-yellow-300" : "text-black"}
          onClick={() => handleClick(index)}
          onMouseMove={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave()}
          size={40}
          />
        )
      })}
    </div>
  )
}

export default StarRating