import { InnerContainer } from "@/components/site/InnerContainer"
import { H3, H4 } from "@/components/Typography"
import Image from "next/image"

export const Slide5 = () => {
   return (
      <div className="h-full bg-c7 text-white pb-[100px] pt-[68px] relative">
         <div className="container">
            <InnerContainer>
               <InnerContainer className="pt-[68px] bg-[url('/images/vertical-line.svg')] bg-left-top bg-no-repeat">
                  <div className="slide-content">
                     <H3 className=" pr-24">Gestión Integral de Recupero de Deudas.</H3>
                     <H4 className="mt-7">La respuesta a la gestión de recupero de deudas.</H4>
                     <div className="space-y-6">
                        <p>Gestionar el seguimiento de expedientes y las cobranzas judiciales y extrajudiciales es sencillo gracias a S-LAW.</p>
                        <p>Nuestra aplicación ofrece una solución completa y especializada para la gestión integral de recupero de deudas, permitiéndote recuperar tu capital de forma eficiente y segura.</p>
                     </div>
                  </div>
               </InnerContainer>
               <Image src="/images/s-law.svg" width={584} height={98} alt="S-COD" className="slide-logo mt-12" />
            </InnerContainer>
            <Image src="/images/slide-bg.svg" width={341} height={196}  alt="" className="absolute right-0 bottom-[80px] z-10" style={{ objectFit: 'none', objectPosition: 'center' }} />
         </div>
      </div>
   )
}