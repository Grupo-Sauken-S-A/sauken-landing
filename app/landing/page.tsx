import { Boton } from "@/components/Boton"
import { ClientsGrid } from "@/components/landing/ClientsGrid"
import { Footer } from "@/components/landing/Footer"
import { Header } from "@/components/landing/Header"
import { Hero } from "@/components/landing/Hero"
import { InnerContainer } from "@/components/site/InnerContainer"
import { H2, H3 } from "@/components/Typography"
import Image from "next/image"
import Link from "next/link"

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <section>
        <div className="container">
          <InnerContainer symetric={true}>
            <H2 className="mb-7">Entidades</H2>
            <p className="text-xl text-c2 font-[400]">Habilitadas para emitir Certificados de Origen:</p>
            <ClientsGrid />
          </InnerContainer>
        </div>
      </section>
      <section className="bg-[#EDF1FF] py-24">
        <div className="container">
          <InnerContainer symetric={true}>
            <H3 className="text-alternative-title">Conocé nuestra aplicación open source:</H3>
            <Image src="/images/landing/ds-cod-logo.svg" alt="DS COD" width={708} height={137} className="mt-8 mx-auto" />
            <div className="max-w-[740px]">
              <p className="text-2xl text-c2 py-[64px] font-[500] leading-[1.4]">DS-COD es una aplicación gratuita y de código abierto que te permite aplicar y validar Firmas Digitales en Certificados de Origen Digital (COD) de ALADI y MERCOSUR en formato XML.</p>

            </div>
            <div className="w-full md:flex gap-x-8 items-stretch">
              <div className="basis-[63%]"><p className="text-c2 text-xl font-[400]">Se trata de una opción confiable y segura que utiliza algoritmos de criptografía de última generación para garantizar la integridad y autenticidad.</p></div>
              <div className="basis-[37%] bg-[url(/images/landing/bottom-bg.svg)] bg-no-repeat bg-left-bottom bg-[size:100%_auto] text-right pr-[3rem] mt-8 md:mt-0 pb-8 lg:pb-0">
                <Link href="https://sauken.com.ar/sauken/tmp/6360_dscod_122_2023.zip" passHref target="_blank"><Boton variant="secondary">Descargar aquí</Boton></Link>
              </div>
            </div>
          </InnerContainer>
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default LandingPage