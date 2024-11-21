'use client'

import { useState, useRef, ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from "@/lib/utils"

interface StaggeredEntranceProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export default function StaggeredEntrance({
  children,
  className,
  staggerDelay = 0.1
}: StaggeredEntranceProps) {
  const [isAnimationStarted, setIsAnimationStarted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  // Start animation after 0.5s delay when component enters viewport
  if (isInView && !isAnimationStarted) {
    setTimeout(() => setIsAnimationStarted(true), 500)
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden", className)}
      initial="hidden"
      animate={isAnimationStarted ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={itemVariants}>{children}</motion.div>
      }
    </motion.div>
  )
}