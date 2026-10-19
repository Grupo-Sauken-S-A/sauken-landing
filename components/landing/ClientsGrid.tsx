"use client"
import { CLIENTES } from "@/constants"
import Image from "next/image";
import StaggeredEntrance from "../animations/StaggeredEntrance";

export const ClientsGrid = () => {
   const logos = CLIENTES;

   return (
      <StaggeredEntrance className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-y-8 my-8 lg:my-16">

         {logos.map((logo, clientIndex) => {
            const image = <Image src={logo.img} width={290} height={151} alt={logo.name} className="block mx-auto" />
            return (
               <div key={clientIndex} className="border">
                  {logo.link ? (
                     <a href={logo.link} target="_blank" rel="noopener noreferrer" aria-label={`${logo.name} (abre en una pestaña nueva)`} className="block transition-opacity hover:opacity-80">
                        {image}
                     </a>
                  ) : image}
               </div>
            )
         })}

      </StaggeredEntrance>
   )
}
