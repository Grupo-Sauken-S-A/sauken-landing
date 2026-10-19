import { InnerContainer } from "@/components/site/InnerContainer"
import { H3, H4 } from "@/components/Typography"
import Image from "next/image"
import Link from "next/link"
import { Boton } from "../Boton"

export const SlideFide = () => {
  return (
    <div className="h-full bg-c4 text-white pb-[100px] pt-[68px] relative">
      <div className="container">
         <InnerContainer>
            <InnerContainer className="pt-[68px] bg-[url('/images/vertical-line.svg')] bg-left-top bg-no-repeat">
               <div className="slide-content">
                  <H3 className=" pr-24">Sistema de Firma Digital Extendido.</H3>
                  <H4 className="mt-7">Firmá y verificá documentos XML y PDF con tu certificado digital.</H4>
                  <div className="space-y-6 mt-12">
                     <p>S-FiDE es una suite de software libre para firmar y verificar documentos con token, archivo de certificado o almacén de Windows. Incluye interfaz gráfica, comandos para integrar a tus sistemas y soporte especializado para certificados de origen ALADI/MERCOSUR.</p>
                  </div>

                  <div className="sm:flex items-center gap-x-6 mt-8">
                     <Link href="/landing#s-fide">
                        <Boton className="mt-4 sm:mt-0" variant="secondary">Conocé más</Boton>
                     </Link>
                     <a href="https://github.com/Grupo-Sauken-S-A/S-FIDE" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 sm:mt-0 text-lg font-semibold underline underline-offset-4">
                        Descargalo gratis
                     </a>
                  </div>
               </div>
            </InnerContainer>
            <Image src="/images/s-fide.png" width={1200} height={222} alt="S-FiDE" className="slide-logo" />
         </InnerContainer>
         <Image src="/images/slide-bg.svg" width={341} height={196} alt="" className="absolute right-0 bottom-[80px] z-10" style={{ objectFit: 'none', objectPosition: 'center'}} />
      </div>
    </div>
  )
}
