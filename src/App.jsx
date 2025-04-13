import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Landing from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Loader from './components/Loader'

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.8,
      class: 'is-revealed',
      reloadOnContextChange: true,
      touchMultiplier: 2,
      smoothMobile: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      }
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <AnimatePresence mode='wait'>
      <Loader />
      <div ref={scrollRef} data-scroll-container className="w-full bg-zinc-900 text-white">
        <Navbar />
        <Landing />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
        <Cards />
        <Footer />
      </div>
    </AnimatePresence>
  )
}

export default App
