import React, { ReactNode } from "react";
import { H4 } from "./Typography";

interface ServicioCardProps {
   children: ReactNode
   title: string
   image?: ReactNode
}

export const ServicioCard = ({title,children,image}:ServicioCardProps) => {
  return (
    <div className="flex flex-col lg:block lg:ml-24 xl:ml-0 text-c2 sm:pr-8 lg:pr-8 xl:pr-16 relative">
      <H4 as="h3" className="mb-5">{title}</H4>
      <div className="space-y-4 text-sm">
         {children}
      </div>
      {image && <div className="order-first mb-4 lg:mb-0 lg:absolute lg:m-0 lg:top-0 lg:left-[-98px]" aria-hidden="true">{image}</div>}
    </div>
  )
}