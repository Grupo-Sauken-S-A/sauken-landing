import { InnerContainer } from "@/components/site/InnerContainer"
import { H3, H4 } from "@/components/Typography"
import Image from "next/image"

export const Slide4 = () => {
   return (
      <div className="h-full bg-c6 text-white pb-14 pt-10 sm:pb-[100px] sm:pt-[68px] relative">
         <div className="container">
            <InnerContainer>
               <InnerContainer className="pt-8 sm:pt-[68px] bg-[url('/images/vertical-line.svg')] bg-left-top bg-no-repeat">
                  <div className="slide-content">
                     <H3 className="pr-2 sm:pr-24">Customer Relationship Management.</H3>
                     <H4 className="mt-4 sm:mt-7">La llave maestra para la fidelización de tus clientes.</H4>
                     <div className="space-y-3 sm:space-y-6 mt-6 sm:mt-12">
                        <p>La plataforma S-CRM convierte la gestión de las relaciones con tus clientes en una experiencia fluida, eficiente y personalizada.</p>
                        <p>Su arquitectura flexible te da la libertad de integrarla con las herramientas que ya utilizas, como procesadores de texto, hojas de cálculo, correo electrónico y navegadores web.</p>
                     </div>
                  </div>
               </InnerContainer>
               <Image src="/images/s-crm.svg" width={582} height={98} alt="S-COD" className="slide-logo" />
            </InnerContainer>
            <Image src="/images/slide-bg.svg" width={341} height={196}  alt="" aria-hidden="true" className="pointer-events-none hidden sm:block absolute right-0 bottom-[80px] z-10" style={{ objectFit: 'none', objectPosition: 'center'}} />
         </div>
      </div>
   )
}