import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
function LandingPage() {
  motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full min-h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-32 md:mt-52 px-5 md:px-20'>
            {["We Create" , "Eye Opening" , "Presentations"].map((item , index) =>{
                return (
                  <div className='masker'>
                    <div className='w-fit flex items-end overflow-hidden '> 
                      {index === 1 && (<motion.div initial={{width:0}} animate={{width : "9vw"}} transition={{ease : [0.76 , 0 , 0.24 , 1] , duration : 8 , speed : -1}} className=' mr-5 rounded-md -top-[-0.2vw] w-[8vw] h-[5.5vw] relative bg-[url("assets/image.png")] bg-cover bg-center'></motion.div>)}
                <h1 className="flex items-center uppercase text-[12vw] md:text-[7vw] tracking-tighter h-full leading-[10vw] md:leading-[6vw] font-['Test Founders Grotesk X-Cnd Light'] font-bold">
                  {item}</h1>

                    </div>
                     </div>
                );
            })}
            
           
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-20 md:mt-28 flex flex-col md:flex-row justify-between items-center py-5 px-5 md:px-20 gap-5 md:gap-0'>
          {["For public and private companies" , "From the first pitch to IPO"].map((item , index)=> (
          <p className='text-sm md:text-md font-light tracking-tight leading-none text-center md:text-left'>{item}</p>
        ))}
        <div className='start flex items-center gap-2'>
          <div className='px-3 py-2 border-[1px] border-zinc-400 rounded-full font-light text-sm text-md'>START THE PROJECT</div>
          <div className='w-9 h-9 flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
          <GoArrowUpRight />
          </div>
        </div>
        </div>
    </div>
  )
}

export default LandingPage
