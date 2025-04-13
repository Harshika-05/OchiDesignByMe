import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 bg-[#004D43] rounded-3xl'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
      <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity , ease : "linear" , duration:10}} className='text-[17vw] leading-none font-["Founders Grotesk"] pt-10 tracking-tighter mb-10 font-semibold pr-2'>WE ARE OCHI</motion.h1>
      <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity , ease : "linear" , duration:10}} className='text-[17vw] leading-none font-["Founders Grotesk"] pt-10 tracking-tighter mb-10 font-semibold pr-2'>WE ARE OCHI</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
