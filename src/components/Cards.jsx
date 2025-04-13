import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen px-15 bg-zinc-900 flex items-center gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2'>
        <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
            <img className='w-32' src = "https://ochi.design/wp-content/uploads/2022/04/logo001.svg"/>
            <button className='absolute px-5 py-1 left-10 rounded-full border-2 bottom-10 text-[#CDEA68]'>&copy;2019-2022</button>
        </div>
        </div>
      
        <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
        <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
        <img className='w-32' src = "https://ochi.design/wp-content/uploads/2022/04/logo002.svg"/>
            <button className='absolute px-5 py-1 left-10 rounded-full border-2 bottom-10 '>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
        <img className='w-32' src = "https://ochi.design/wp-content/uploads/2022/04/logo003.png"/>
            <button className='absolute px-5 py-1 left-10 rounded-full border-2 bottom-10 '>BUSINESS BOOTCAMP ALUMNI</button>
        </div>
        </div>

    </div>
  )
}

export default Cards
