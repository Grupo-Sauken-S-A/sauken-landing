import { InnerContainer } from "@/components/site/InnerContainer"
import { H3, H4 } from "@/components/Typography"
import Image from "next/image"
import { Boton } from "../Boton"

export const Slide1 = () => {
  return (
    <div className="h-full bg-c1 text-white pb-[100px] pt-[68px] relative">
      <div className="container">
         <InnerContainer>
            <InnerContainer className="pt-[68px] bg-[url('/images/vertical-line.svg')] bg-left-top bg-no-repeat">
               <div className="slide-content">
                  <H3 className=" pr-24">Gestión de Certificados de Origen de Comercio Exterior.</H3>
                  <H4 className="mt-7">Tu aliado para la gestión de Certificados de Origen y Firma Digital.</H4>
                  <div className="space-y-6 mt-12">
                     <p>Con más de 15 entidades y cámaras exportadoras utilizando nuestro sistema,S-COD se ha convertido en la solución líder para la generación y validaciónde Certificados de Origen, tanto en formato impreso como en versión digital.</p>
                     <p>Te permite simplificar y agilizar tus procesos de exportación,mejorando la eficiencia y seguridad.</p>
                  </div>

                     <div className="sm:flex items-center mt-8">
                        <p className="text-lg font-semibold">Conoce más e ingresa a los portales habilitados</p>
                        <a href="">
                           <Boton className="mt-4 sm:ml-6 sm:mt-0" variant="secondary">Ingresar</Boton>
                        </a>
                     </div>
               </div>

            </InnerContainer>
            <Image src="/images/s-cod.svg" width={506} height={98} alt="S-COD" className="slide-logo" />
         </InnerContainer>
         <Image src="/images/slide-bg.svg" width={341} height={196}  alt="" className="absolute right-0 bottom-[80px] z-10" style={{ objectFit: 'none', objectPosition: 'center'}} />
      </div>
    </div>
  )
}