import { InnerContainer } from "@/components/site/InnerContainer"
import { H3, H4 } from "@/components/Typography"
import Image from "next/image"

export const Slide3 = () => {
   return (
      <div className="h-full bg-c4 text-white pb-[100px] pt-[68px] relative">
         <div className="container">
            <InnerContainer>
               <InnerContainer className="pt-[68px] bg-[url('/images/vertical-line.svg')] bg-left-top bg-no-repeat">
                  <div className="slide-content">
                     <H3 className=" pr-24">Business Relationship Management.</H3>
                     <H4 className="mt-7">La solución para fortalecer las relaciones comerciales.</H4>
                     <div className="space-y-6 mt-12">
                        
                     <p>Fortalecer las relaciones comerciales es la clave del éxito empresarial.S-BRM te permite centralizarlas y optimizarlas, administrando tus contactosde forma eficiente y facilitando la búsqueda de nuevos clientes y proveedores.</p>
                     <p>Genera nuevas oportunidades de manera estratégica con nuestra plataforma.</p>
                     </div>
                  </div>
                  </InnerContainer>
               <Image src="/images/s-brm.svg" width={588} height={98} alt="S-COD" className="slide-logo" />
            </InnerContainer>
            <Image src="/images/slide-bg.svg" width={341} height={196} alt="" className="absolute right-0 bottom-[80px] z-10" style={{ objectFit: 'none', objectPosition: 'center'}} />
         </div>
      </div>
  )
}