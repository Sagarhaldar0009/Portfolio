import React from 'react'
import "./Spinner.css"


const Spinner = () => {
  return (
    <div className='w-screen h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-y-4'>
      <div className='spinner'></div>
      <div className='text-white font-bold text-xl'>Please wait a minute, while the data is being fetched...</div>
    </div>
   
  )
}

export default Spinner