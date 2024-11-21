import React, { ReactNode } from "react";
import { H4 } from "./Typography";

interface ServicioCardProps {
   children: ReactNode
   title: string
   image?: ReactNode
}

export const ServicioCard = ({title,children,image}:ServicioCardProps) => {
  return (
    <div className="ml-24 xl:ml-0  text-c2 sm:pr-8 lg:pr-8 xl:pr-16 relative">
      <H4 className="mb-5">{title}</H4>
      <div className="space-y-4 text-sm">
         {children}
      </div>
      {image && <div className="absolute m-0 top-0 left-[-98px]">{image}</div>}
    </div>
  )
}