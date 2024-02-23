'use client'
import React, { useState } from 'react'

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');
  
  function handleHexColor() {
    let hex = '#' + Math.floor(Math.random() * 16777215).toString(16);
    while (hex.length < 6) {
      hex = '0' + hex;
    }
    setColor(hex);
  }

  function handleRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r},${g},${b})`);
  }

  return (
    <div className={`text-white w-full flex flex-col items-center h-40 my-5 p-5`} 
    style={{background: color}}
    > 
      <div className='flex justify-center items-start gap-5'>
        <button className='bg-blue-800 p-2' onClick={() => setTypeOfColor('hex')}>create hex color</button>
        <button className='bg-blue-800 p-2' onClick={() => setTypeOfColor('rgb')}>create rgb color</button>
        <button 
        className='bg-blue-800 p-2'
        onClick={typeOfColor === 'hex' ? 
        () => handleHexColor() : 
        () => handleRgbColor()}>
          generate random color
        </button>
      </div>
      <p className='flex items-center'>
        {typeOfColor === 'hex'? 'Hex color': 'RGB color'}
      </p> 
      <p className='flex items-center h-full'>{color}</p>
    </div>
  )
}

export default RandomColor