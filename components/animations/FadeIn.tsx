"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FadeInProps {
   children: React.ReactNode
   className?: string
   to?: "up" | "right" | "left"
}

const FadeIn = ({ children, className, to = "up" }: FadeInProps) => {

   const variants = {
      right: { opacity: 0, x: -100 },
      left: { opacity: 0, x: 100 },
      up: { opacity: 0, y: 100 }
   }


   return (
      <motion.div
         initial={variants[to]}
         transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
         viewport={{ once: true, amount: "some" }}
         whileInView={{ opacity: 1, y: 0, x: 0 }}
         className={cn("fade-in", className)}>{children}
      </motion.div>
   )
}

export default FadeIn