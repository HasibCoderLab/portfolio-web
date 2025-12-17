import React from 'react'
import { useScrollReveal } from "../../hooks/useScrollReveal";
const ScrollReveal = (
  children, 
  animation = 'fadeUp',
  delay = 0, 
  duration = 700,
  
) => {
  const {ref , isVasible} = useScrollReveal({   threshold : 0.1 })
  return (
    <div>
      
    </div>
  )
}

export default ScrollReveal