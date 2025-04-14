import React from 'react'

function Cards() {
  return (
    <div className='w-full min-h-screen px-5 md:px-15 bg-zinc-900 flex flex-col md:flex-row items-center gap-5 py-10 md:py-0'>
        <div className='cardcontainer h-[40vh] md:h-[50vh] w-full md:w-1/2'>
        <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
            <img className='w-24 md:w-32' src = "https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Ochi Design Logo"/>
            <button className='absolute px-4 md:px-5 py-1 left-5 md:left-10 rounded-full border-2 bottom-5 md:bottom-10 text-[#CDEA68] text-sm md:text-base'>&copy;2019-2022</button>
        </div>
        </div>
      
        <div className='cardcontainer flex flex-col md:flex-row gap-5 h-[40vh] md:h-[50vh] w-full md:w-1/2'>
        <div className='card relative flex items-center justify-center rounded-xl w-full md:w-1/2 h-full bg-[#192826]'>
        <img className='w-24 md:w-32' src = "https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="Clutch Logo"/>
            <button className='absolute px-4 md:px-5 py-1 left-5 md:left-10 rounded-full border-2 bottom-5 md:bottom-10 text-sm md:text-base'>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='card relative flex items-center justify-center rounded-xl w-full md:w-1/2 h-full bg-[#192826]'>
        <img className='w-24 md:w-32' src = "https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="Business Bootcamp Logo"/>
            <button className='absolute px-4 md:px-5 py-1 left-5 md:left-10 rounded-full border-2 bottom-5 md:bottom-10 text-sm md:text-base'>BUSINESS BOOTCAMP ALUMNI</button>
        </div>
        </div>

    </div>
  )
}

export default Cards
