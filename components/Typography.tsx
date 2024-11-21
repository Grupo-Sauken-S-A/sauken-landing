import { cn } from "@/lib/utils";
import { ReactNode } from "react"

interface TypographyProps {
   children: ReactNode;
   className?: string;
}

export const H1 = ( { children, className } : TypographyProps ) => {
  return (
    <h1 className={cn("text-5xl text-c1 font-semibold",className)}>{children}</h1>
  )
}

export const H2 = ( { children, className } : TypographyProps ) => {
   return (
     <h2 className={cn("text-4xl font-medium",className)}>{children}</h2>
   )
 }

 export const H3 = ( { children, className } : TypographyProps ) => {
   return (
     <h3 className={cn("text-3xl font-medium",className)}>{children}</h3>
   )
 }

 export const H4 = ( { children, className } : TypographyProps ) => {
  return (
    <h4 className={cn("text-2xl font-normal",className)}>{children}</h4>
  )
}

export const H5 = ( { children, className } : TypographyProps ) => {
  return (
    <h5 className={cn("text-xl font-medium",className)}>{children}</h5>
  )
}