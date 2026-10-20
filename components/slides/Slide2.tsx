import { InnerContainer } from "@/components/site/InnerContainer"
import { H3, H4 } from "@/components/Typography"
import Image from "next/image"

export const Slide2 = () => {
  return (
    <div className="h-full bg-c5 text-white pb-14 pt-10 sm:pb-[100px] sm:pt-[68px] relative">
      <div className="container">
         <InnerContainer>
            <InnerContainer className="pt-8 sm:pt-[68px] bg-[url('/images/vertical-line.svg')] bg-left-top bg-no-repeat">
               <div className="slide-content">
                  <H3 className="pr-2 sm:pr-24">Event Manager Solution.</H3>
                  <H4 className="mt-4 sm:mt-7"> La herramienta ideal para la gestión de Rondas de Negocio.</H4>
                  <div className="space-y-3 sm:space-y-6 mt-6 sm:mt-12">
                     <p>Con S-EMS, no solo podrás planificar eventos empresariales sino también potenciar la vinculación a través de nuestra tecnología de matchmaking e inteligencia comercial.</p>
                     <p>Te permite organizar encuentros intersectoriales, conectar con potenciales clientes, acceder a información estratégica y generar oportunidades de negocio.</p>
                  </div>
               </div>
               </InnerContainer>
            <Image src="/images/s-ems.svg" width={591} height={98} alt="S-COD" className="slide-logo" />
         </InnerContainer>
         <Image src="/images/slide-bg.svg" width={341} height={196} alt="" aria-hidden="true" className="pointer-events-none hidden sm:block absolute right-0 bottom-[80px] z-10" style={{ objectFit: 'none', objectPosition: 'center'}} />
      </div>
    </div>
  )
}