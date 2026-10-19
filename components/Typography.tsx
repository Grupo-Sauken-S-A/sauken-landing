import { cn } from "@/lib/utils";
import { ReactNode } from "react"

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

interface TypographyProps {
   children: ReactNode;
   className?: string;
   /** Nivel semántico del encabezado (no cambia el estilo visual). Por defecto, el del propio componente. */
   as?: HeadingTag;
}

export const H1 = ( { children, className, as: Tag = "h1" } : TypographyProps ) => {
  return (
    <Tag className={cn("text-5xl text-c1 font-semibold",className)}>{children}</Tag>
  )
}

export const H2 = ( { children, className, as: Tag = "h2" } : TypographyProps ) => {
   return (
     <Tag className={cn("text-4xl font-medium",className)}>{children}</Tag>
   )
 }

 export const H3 = ( { children, className, as: Tag = "h3" } : TypographyProps ) => {
   return (
     <Tag className={cn("text-3xl font-medium",className)}>{children}</Tag>
   )
 }

 export const H4 = ( { children, className, as: Tag = "h4" } : TypographyProps ) => {
  return (
    <Tag className={cn("text-2xl font-normal",className)}>{children}</Tag>
  )
}

export const H5 = ( { children, className, as: Tag = "h5" } : TypographyProps ) => {
  return (
    <Tag className={cn("text-xl font-medium",className)}>{children}</Tag>
  )
}
