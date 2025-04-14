import React from 'react'

function About() {
  return (
    <div className='w-full p-5 md:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-["Neue Montreal"] text-[6vw] md:text-[4vw] leading-[6vw] md:leading-[4vw] tracking-tighter'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <u>raise funds</u>, <u>sell prod­ucts</u>, <u>ex­plain com­plex ideas</u>, and <u>hire great peo­ple</u>.</h1>
      <div className='w-full flex flex-col md:flex-row gap-10 md:gap-5 border-t-[1px] pt-10 mt-10 md:mt-20 border-[#8f9d5c]'>
        <div className='w-full md:w-1/2'>
        <h1 className='text-5xl md:text-7xl'>Our Approach:</h1>
        <button className='flex uppercase gap-5 md:gap-10 items-center px-6 md:px-10 py-4 md:py-6 bg-zinc-900 mt-5 md:mt-10 rounded-full text-white text-sm md:text-base'>
          Read more
          <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
        </button>
        </div>
      <div className='w-full md:w-1/2 h-[40vh] md:h-[70vh] rounded-3xl bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg")] bg-cover bg-center'></div>
      </div>
    </div>
  )
}

export default About