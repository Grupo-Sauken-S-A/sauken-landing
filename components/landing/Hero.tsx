import Image from "next/image"
import { InnerContainer } from "../site/InnerContainer"
import Link from "next/link"
import Reveal from "../animations/Reveal"

export const Hero = () => {
   return (
      <>
         <section className="text-white bg-c1 pb-24">

            <div className="pt-10 sm:pt-[100px]">
               <div className="container relative sm:bg-[url(/images/landing/hero-bg-2.svg)] bg-no-repeat bg-[position:calc(100%-2rem)_0%] bg-[size:10%_auto] sm:bg-[size:35%_auto] lg:bg-[size:55%_auto]">
                  <InnerContainer symetric={true} className="flex justify-center pt-[144px] ">

                     <div className="w-full sm:w-[80%] lg:w-[70%] sm:pl-0">
                        <Reveal>
                           <Image src="/images/landing/s-cod-logo.svg" alt="Gestión de Certificados de Origen" width={708} height={137} className="mb-[100px] sm:max-md:max-w-[300px] mx-auto" />
                        </Reveal>

                        <Reveal delay={0.3}>
                           <h1 className="mt-8 text-alternative-title text-white font-[400] pl-[70px] sm:pl-4 md:pl-0"><b className="font-[600]">Gestioná tus Certificados de Origen</b> con nuestra Plataforma de Visados de Comercio Exterior.</h1>
                        </Reveal>
                     </div>

                  </InnerContainer>
                  <Image src="/images/landing/hero-bg-1.svg" alt="" width={86} height={187} className="absolute bottom-4 lg:bottom-0 left-[2rem] w-[48px] sm:w-[70px] xl:scale-100" />
               </div>
            </div>
         </section>
         <section>
            <div className="container relative mb-14">
               <InnerContainer symetric={true} className="flex flex-col items-center justify-center">
                  <div className="w-[70%]">
                     <p className="text-2xl text-c2 py-[86px] font-[500]">Nuestros Certificados de Origen Digital (COD) cuentan con la homologación de la Dirección de Origen de Mercadería, AFIP, Aduana Argentina y ALADI.</p>
                  </div>
               </InnerContainer>
               <div className="flex items-center justify-end w-full">
               <div className="text-xs text-c2 text-right sm:text-left"><b className="uppercase">2024 Sauken </b>&nbsp;<span className="block sm:inline-block"> &copy; All Rights Reserved</span></div>
               </div>
               <Link href="" className="absolute bottom-[5px] left-[50%] -translate-x-1/2">
                  <Image src="/images/landing/chevron-down.svg" alt="" width={77} height={39} />
               </Link>
            </div>

         </section>
      </>
   )
}