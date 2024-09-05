import React from 'react'
import "./Spinner.css"


const Spinner = () => {
  return (
    <div className='w-screen h-[calc(100vh-80px)] flex flex-col justify-center items-center'>
      <div className='spinner'></div>
      <div className='text-white'>Wait a Minute, while the data is Loading...</div>
    </div>
   
  )
}

export default Spinner