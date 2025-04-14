import { motion,  useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import {Power4} from "gsap/all"
function Featured() {
  const cards = [useAnimation() , useAnimation() , useAnimation(),  useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation() ];

  const handleHover = (index)=>
  {
    cards[index].start({y: "0"})
  }
  const handleHoverEnd = (index)=>
    {
      cards[index].start({y: "100%"})
    }
  return (
    <div className='w-full py-10 md:py-20'>
        <div className='w-full px-5 md:px-20 border-b-[1px] border-zinc-700 pb-10 md:pb-20'>
            <h1 className='text-4xl md:text-6xl font-["Neue Montreal"] tracking-tight'>Featured Projects</h1>
        </div>

      <div className='px-5 md:px-20'>
      <div className='cards w-full flex flex-col md:flex-row gap-10 mt-10 md:mt-25'>
        <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={() => handleHoverEnd(0)}  className='cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[75vh]'>
        <h1 className='absolute top-1/2 left-1/2 md:left-full -translate-x-1/2 md:-translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-4xl md:text-6xl font-["Founders Grotesk"] font-semibold flex overflow-hidden text-[#CDEA68] whitespace-nowrap uppercase'>
        {"salience_labs".split('').map((item , index) => <motion.span key={`salience-${index}`} initial = {{y:"100%"}} animate = {cards[0]} transition={{ease : [0.22 , 1 , 0.36 , 1] , delay : index*.05}} className='inline-block'>{item}</motion.span>)}
        </h1>
        <div className='card w-full h-full rounded-xl overflow-hidden'>
          <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt ="" />
        </div>
        </motion.div>
        <motion.div  onHoverStart={()=>handleHover(1)} onHoverEnd={() => handleHoverEnd(1)}  className='cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[75vh]'>
        <div className='card w-full h-full rounded-xl overflow-hidden'>
        <h1 className='absolute top-1/2 left-1/2 md:left-auto md:right-full -translate-x-1/2 md:translate-x-1/2 -translate-y-1/2 z-[10] leading-none tracking-tighter text-4xl md:text-6xl font-["Founders Grotesk"] font-semibold flex overflow-hidden text-[#CDEA68] whitespace-nowrap uppercase'>
        {"cardboard_spaceship".split('').map((item , index) => <motion.span key={`cardboard-${index}`} initial = {{y:"100%"}} animate = {cards[1]} transition={{ease : [0.22 , 1 , 0.36 , 1] , delay : index*.05}} className='inline-block'>{item}</motion.span>)}
        </h1>
        <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt = ""/>
        </div>
        </motion.div>
      </div>
      </div>


      <div className='px-5 md:px-20'>
      <div className='cards w-full flex flex-col md:flex-row gap-10 mt-10 md:mt-25'>
        <motion.div onHoverStart={()=>handleHover(2)} onHoverEnd={() => handleHoverEnd(2)}   className='cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[75vh]'>
        <h1 className='absolute top-1/2 left-1/2 md:left-full -translate-x-1/2 md:-translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-4xl md:text-6xl font-["Founders Grotesk"] font-semibold flex overflow-hidden text-[#CDEA68] whitespace-nowrap uppercase'>
        {"ah2_&_matt_horn".split('').map((item , index) =><motion.span key={`ah2-${index}`} initial = {{y:"100%"}} animate = {cards[2]} transition={{ease : [0.22 , 1 , 0.36 , 1] , delay : index*.05}} className='inline-block'>{item}</motion.span>)}
        </h1>
        <div className='card w-full h-full rounded-xl overflow-hidden'>
          <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt ="" />
        </div>
        </motion.div>
        <motion.div onHoverStart={()=>handleHover(3)} onHoverEnd={() => handleHoverEnd(3)}   className='cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[75vh]'>
        <div className='card w-full h-full rounded-xl overflow-hidden'>
        <h1 className='absolute top-1/2 left-1/2 md:left-auto md:right-full -translate-x-1/2 md:translate-x-1/2 -translate-y-1/2 z-[10] leading-none tracking-tighter text-4xl md:text-6xl font-["Founders Grotesk"] font-semibold flex overflow-hidden text-[#CDEA68] whitespace-nowrap uppercase'>
        {"fyde".split('').map((item , index) => <motion.span key={`fyde-${index}`} initial = {{y:"100%"}} animate = {cards[3]} transition={{ease : [0.22 , 1 , 0.36 , 1] , delay : index*.05}} className='inline-block'>{item}</motion.span>)}
        </h1>
        <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" alt = ""/>
        </div>
        </motion.div>
      </div>
      </div>

      <div className='px-5 md:px-20'>
      <div className='cards w-full flex flex-col md:flex-row gap-10 mt-10 md:mt-25'>
        <motion.div onHoverStart={()=>handleHover(4)} onHoverEnd={() => handleHoverEnd(4)}   className='cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[75vh]'>
        <h1 className='absolute top-1/2 left-1/2 md:left-full -translate-x-1/2 md:-translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-4xl md:text-6xl font-["Founders Grotesk"] font-semibold flex overflow-hidden text-[#CDEA68] whitespace-nowrap uppercase'>
        {"vise".split('').map((item , index) => <motion.span key={`vise-${index}`} initial = {{y:"100%"}} animate = {cards[4]} transition={{ease : [0.22 , 1 , 0.36 , 1] , delay : index*.05}} className='inline-block'>{item}</motion.span>)}
        </h1>
        <div className='card w-full h-full rounded-xl overflow-hidden'>
          <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png" alt ="" />
        </div>
        </motion.div>
        <motion.div onHoverStart={()=>handleHover(5)} onHoverEnd={() => handleHoverEnd(5)}   className='cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[75vh]'>
        <div className='card w-full h-full rounded-xl overflow-hidden'>
        <h1 className='absolute top-1/2 left-1/2 md:left-auto md:right-full -translate-x-1/2 md:translate-x-1/2 -translate-y-1/2 z-[10] leading-none tracking-tighter text-4xl md:text-6xl font-["Founders Grotesk"] font-semibold flex overflow-hidden text-[#CDEA68] whitespace-nowrap uppercase'>
        {"all_things_go".split('').map((item , index) => <motion.span key={`atg-${index}`} initial = {{y:"100%"}} animate = {cards[5]} transition={{ease : [0.22 , 1 , 0.36 , 1] , delay : index*.05}} className='inline-block'>{item}</motion.span>)}
        </h1>
        <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png" alt = ""/>
        </div>
        </motion.div>
      </div>
      </div>

      <div className='px-5 md:px-20'>
      <div className='cards w-full flex flex-col md:flex-row gap-10 mt-10 md:mt-25'>
        <motion.div onHoverStart={()=>handleHover(6)} onHoverEnd={() => handleHoverEnd(6)}   className='cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[75vh]'>
        <h1 className='absolute top-1/2 left-1/2 md:left-full -translate-x-1/2 md:-translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-4xl md:text-6xl font-["Founders Grotesk"] font-semibold flex overflow-hidden text-[#CDEA68] whitespace-nowrap uppercase'>
        {"trawa".split('').map((item , index) => <motion.span key={`trawa-${index}`} initial = {{y:"100%"}} animate = {cards[6]} transition={{ease : [0.22 , 1 , 0.36 , 1] , delay : index*.05}} className='inline-block'>{item}</motion.span>)}
        </h1>
        <div className='card w-full h-full rounded-xl overflow-hidden'>
          <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt ="" />
        </div>
        </motion.div>
        <motion.div onHoverStart={()=>handleHover(7)} onHoverEnd={() => handleHoverEnd(7)}   className='cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[75vh]'>
        <div className='card w-full h-full rounded-xl overflow-hidden'>
        <h1 className='absolute top-1/2 left-1/2 md:left-auto md:right-full -translate-x-1/2 md:translate-x-1/2 -translate-y-1/2 z-[10] leading-none tracking-tighter text-4xl md:text-6xl font-["Founders Grotesk"] font-semibold flex overflow-hidden text-[#CDEA68] whitespace-nowrap uppercase'>
        {"black book".split('').map((item , index) => <motion.span key={`black_book-${index}`} initial = {{y:"100%"}} animate = {cards[7]} transition={{ease : [0.22 , 1 , 0.36 , 1] , delay : index*.05}} className='inline-block'>{item}</motion.span>)}
        </h1>
        <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1101.jpg" alt = ""/>
        </div>
        </motion.div>
      </div>
      </div>

    </div>
  )
}

export default Featured
