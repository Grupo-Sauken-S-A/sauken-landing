import Image from "next/image"
import StaggeredEntrance from "./animations/StaggeredEntrance"
import { TECHSTACK } from "@/constants"

export const Stack = () => {

   return (
      <StaggeredEntrance className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-12 gap-y-8 xl:gap-y-12 mt-12">
         {TECHSTACK.map((tech, index) => (
            <div key={index} className="flex items-center justify-center h-16">
               <Image
                  src={tech.src}
                  alt={tech.alt}
                  width={tech.width}
                  height={tech.height}
                  className="max-w-full max-h-full object-contain"
               />
            </div>
         ))}
      </StaggeredEntrance>
   )
}