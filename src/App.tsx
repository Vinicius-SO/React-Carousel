import { motion } from 'framer-motion' 
import { useRef, useEffect, useState } from 'react'
import {images}  from './images'
import './global.css'

export const App = () => {
  const [width, setWidth] = useState(0)
  const carousel = useRef();

  useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[])
  return(
    <div className="App">
      <div className='text'>
        <h1>Images Carousel</h1>
      </div>
      <motion.div ref={carousel} className='carousel' whileTap={{cursor:'grabbing'}}>
        <motion.div drag="x" dragConstraints={{right:0, left:-width}} className='inner-carousel'>
          {images.map(image => (
           <motion.div className='item' key={image}>
             <img src={image} alt="a" />
           </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>  
  )
}