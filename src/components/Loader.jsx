import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

function Loader() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-screen bg-black z-[999] flex items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white text-4xl font-['Founders Grotesk'] mb-4"
        >
          OCHI
        </motion.h1>
        <div className="text-white text-xl font-['Founders Grotesk']">
          Loading: {count}%
        </div>
      </div>
    </motion.div>
  )
}

export default Loader 