import { InnerContainer } from "@/components/site/InnerContainer"
import { H3, H4 } from "@/components/Typography"
import Image from "next/image"

export const Slide3 = () => {
   return (
      <div className="h-full bg-c4 text-white pb-14 pt-10 sm:pb-[100px] sm:pt-[68px] relative">
         <div className="container">
            <InnerContainer>
               <InnerContainer className="pt-8 sm:pt-[68px] bg-[url('/images/vertical-line.svg')] bg-left-top bg-no-repeat">
                  <div className="slide-content">
                     <H3 className="pr-2 sm:pr-24">Business Relationship Management.</H3>
                     <H4 className="mt-4 sm:mt-7">La solución para fortalecer las relaciones comerciales.</H4>
                     <div className="space-y-3 sm:space-y-6 mt-6 sm:mt-12">
                        
                     <p>Fortalecer las relaciones comerciales es la clave del éxito empresarial. S-BRM te permite centralizarlas y optimizarlas, administrando tus contactos de forma eficiente y facilitando la búsqueda de nuevos clientes y proveedores.</p>
                     <p>Genera nuevas oportunidades de manera estratégica con nuestra plataforma, que ya reúne a más de 12.000 personas y 7.900 empresas y entidades registradas, y más de 330 reuniones de negocios organizadas.</p>
                     </div>
                  </div>
                  </InnerContainer>
               <Image src="/images/s-brm.svg" width={588} height={98} alt="S-COD" className="slide-logo" />
            </InnerContainer>
            <Image src="/images/slide-bg.svg" width={341} height={196} alt="" aria-hidden="true" className="pointer-events-none hidden sm:block absolute right-0 bottom-[80px] z-10" style={{ objectFit: 'none', objectPosition: 'center'}} />
         </div>
      </div>
  )
}