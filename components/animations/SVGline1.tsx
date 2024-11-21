'use client'
import { motion } from 'framer-motion'

export const SVGline1 = () => {
  return (
   <svg className="absolute top-0 right-0 -z-10" viewBox="0 0 100 70" overflow="visible" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <motion.path
         d="M 30 0 L 90 0 l 10 10 L 100 25"
         stroke="var(--c2)"
         strokeWidth="0.3"
         initial={{ pathLength: 0 }}
         animate={{ pathLength: 1 }}
         transition={{
            duration: 1.8,
            delay: 0.5
         }}
      />
   </svg>
  )
}