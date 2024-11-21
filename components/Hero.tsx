import { H1 } from "@/components/Typography";
import { SocialIcons } from "./SocialIcons";
import { InnerContainer } from "./site/InnerContainer";
import { SVGline1 } from "./animations/SVGline1";
import AnimatedText from "./animations/AnimatedText";

export const Hero = () => {
  return (
   <div className="hero">
      <div className="container pt-[60px] lg:pt-[100px]">
         <InnerContainer symetric={true} className="sm:bg-[url(/images/hero-bg-2.svg)] bg-no-repeat bg-right-top xl:pr-8 ">
            
            <div className="w-full sm:w-[75%] pt-[40px] md:pt-[60px] lg:pt-[80px] pr-[100px] relative">
               
                  <H1><AnimatedText>Impulsando tus resultados a través de la tecnología.</AnimatedText></H1>
               <SVGline1 />
            </div>

            <div className="py-[40px] sm:py-[50px] lg:py-[80px] grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-24 items-center">
               <div>
                  <p className="text-xl text-c2">Con una amplia trayectoria en el desarrollode aplicaciones y la provisión de servicios de soporte y consultoría, <b>somos expertos en software para optimizar tu negocio.</b></p>
               </div>
               
               <div className="border border-c2 p-8 lg:p-[50px] bg-rectangle">
                  <p className="text-c2">Nos especializamos en soluciones paralos rubros de retail, manufactura y logística, ayudando a empresas a optimizar sus procesos y alcanzar sus objetivos.</p>
               </div>
            </div>
            <div className="flex justify-between lg:justify-end items-center lg:gap-x-20">
               <SocialIcons className="text-c2" />
               <div className="text-xs text-c2 text-right sm:text-left"><b className="uppercase">2024 Sauken </b>&nbsp;<span className="block sm:inline-block"> &copy; All Rights Reserved</span></div>
            </div>
            
            <div className="absolute bottom-0 left-0 -rotate-90 origin-bottom-left"><a href="mailto:info@sauken.com.ar" className="text-c2 afterline block relative z-10 pr-[115px]">info@sauken.com.ar</a></div>
            
         </InnerContainer>
      </div>
   </div>
  )
}