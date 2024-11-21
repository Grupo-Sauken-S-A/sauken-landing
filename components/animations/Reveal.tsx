"use client";
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react";

interface RevealProps {
   children: React.ReactNode
   delay?: number
   className?: string
}

const Reveal = ({ children, delay = 0.2, className}: RevealProps) => {

   const ref = useRef(null)
   const isInView = useInView(ref, {once: true});
   const mainControls = useAnimation();

   useEffect(() => {
      if(isInView) {
         mainControls.start("visible")
      }
   }, [isInView, mainControls])

   return (
      <motion.div
         className={className}
         ref={ref}
         variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
         }}
         initial="hidden"
         animate={mainControls}
         transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      >{children}
      </motion.div>
   )
}
export default Reveal