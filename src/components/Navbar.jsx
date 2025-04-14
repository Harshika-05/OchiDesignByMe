import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full px-5 md:px-20 py-5 flex justify-between items-center fixed top-0 z-[999]'>
      <div className='bg-cover bg-center bg-[url("assets/ochi.png")]'>________</div>
      <div className='hidden md:flex gap-10 '>
        <a href="#" className='text-sm font-medium'>Services</a>
        <a href="#" className='text-sm font-medium'>Our work</a>
        <a href="#" className='text-sm font-medium'>About us</a>
        <a href="#" className='text-sm font-medium'>Insights</a>
        <a href="#" className='text-sm font-medium'>Contact us</a>
      </div>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className='md:hidden text-2xl'
      >
        {isOpen ? '×' : '☰'}
      </button>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-zinc-900 ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className='p-5'>
          <div className='flex justify-between items-center mb-10'>
            <div className='text-2xl font-bold'>OCHI</div>
            <button 
              onClick={() => setIsOpen(false)}
              className='text-2xl'
            >
              ×
            </button>
          </div>
          <div className='flex flex-col gap-5'>
            <a href="#" className='text-xl font-medium font-["Test Founders Grotesk X-Cnd Light"]'>Services</a>
            <a href="#" className='text-xl font-medium font-["Test Founders Grotesk X-Cnd Light"]'>Our work</a>
            <a href="#" className='text-xl font-medium font-["Test Founders Grotesk X-Cnd Light"]'>About us</a>
            <a href="#" className='text-xl font-medium font-["Test Founders Grotesk X-Cnd Light"]'>Insights</a>
            <a href="#" className='text-xl font-medium font-["Test Founders Grotesk X-Cnd Light"]'>Contact us</a>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
