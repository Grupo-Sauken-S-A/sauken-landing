import { InnerContainer } from "@/components/site/InnerContainer"
import { H3, H4 } from "@/components/Typography"
import Image from "next/image"

export const Slide2 = () => {
  return (
    <div className="h-full bg-c5 text-white pb-[100px] pt-[68px] relative">
      <div className="container">
         <InnerContainer>
            <InnerContainer className="pt-[68px] bg-[url('/images/vertical-line.svg')] bg-left-top bg-no-repeat">
               <div className="slide-content">
                  <H3 className=" pr-24">Event Manager Solution.</H3>
                  <H4 className="mt-7"> La herramienta ideal para la gestión de Rondas de Negocio.</H4>
                  <div className="space-y-6 mt-12">
                     <p>Con S-EMS, no solo podrás planificar eventos empresariales sino tambiénpotenciar la vinculación a través de nuestra tecnología de matchmakinge inteligencia comercial.</p>
                     <p>Te permite organizar encuentros intersectoriales, conectar con potencialesclientes, acceder a información estratégica y generar oportunidades de negocio.</p>
                  </div>
               </div>
               </InnerContainer>
            <Image src="/images/s-ems.svg" width={591} height={98} alt="S-COD" className="slide-logo" />
         </InnerContainer>
         <Image src="/images/slide-bg.svg" width={341} height={196} alt="" className="absolute right-0 bottom-[80px] z-10" style={{ objectFit: 'none', objectPosition: 'center'}} />
      </div>
    </div>
  )
}