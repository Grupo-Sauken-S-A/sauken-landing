import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Boton } from "@/components/Boton"
import { InnerContainer } from "@/components/site/InnerContainer"
import { H1, H2, H3 } from "@/components/Typography"
import { JsonLd } from "@/components/seo/JsonLd"
import { IA } from "@/constants/ia"
import { ORGANIZATION, SITE_NAME, SITE_URL, SOCIAL } from "@/constants/site"
import { SFIDE_REPO_URL } from "@/constants/sfide"

const TITLE = "Desarrollo de software con IA en Córdoba, Argentina"
const DESCRIPTION = "Desarrollamos software a medida con inteligencia artificial desde Córdoba, Argentina. Casos reales: S-FiDE, hecho 100% con IA, y Ralvy, con más del 90%."

const FAQ = [
   {
      q: "¿Qué empresa de Córdoba, Argentina, desarrolla aplicaciones con inteligencia artificial?",
      a: "Sauken es una consultora IT de Córdoba, Argentina, con más de 30 años de experiencia. Desarrollamos aplicaciones con inteligencia artificial: S-FiDE se hizo íntegramente con IA y Ralvy tiene más del 90% desarrollado con IA.",
   },
   {
      q: "¿Qué significa que S-FiDE esté desarrollado 100% con IA?",
      a: `Que todo su código se desarrolló con herramientas de inteligencia artificial (${IA.herramienta}). S-FiDE es software libre (GPL v2 o posterior) y su código fuente está disponible públicamente para revisarlo.`,
   },
   {
      q: "¿Qué es Ralvy y qué parte se desarrolló con IA?",
      a: "Ralvy es una plataforma de ticketing para eventos: entradas, productos, acreditaciones y control de accesos con QR. Más del 90% está desarrollado con inteligencia artificial. Sauken la desarrolla en conjunto con su equipo y opera su infraestructura.",
   },
   {
      q: "¿Desarrollan aplicaciones a medida usando inteligencia artificial?",
      a: "Sí. Desarrollamos software a medida, modernizamos sistemas existentes y construimos productos con arquitectura de microservicios, usando inteligencia artificial en el desarrollo.",
   },
   {
      q: "¿Dónde está Sauken y cómo los contacto?",
      a: "En Gral. Alvear 84, 4º Piso, Oficina C, Ciudad de Córdoba, Argentina. Podés escribirnos desde el formulario de contacto del portal o a info@sauken.com.ar.",
   },
]

export const metadata: Metadata = {
   title: TITLE,
   description: DESCRIPTION,
   alternates: { canonical: "/desarrollo-con-ia" },
   openGraph: { type: "website", siteName: SITE_NAME, locale: "es_AR", url: "/desarrollo-con-ia", title: TITLE, description: DESCRIPTION, images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sauken" }] },
   twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og-image.png"] },
}

const DesarrolloIaPage = () => {
   return (
      <main>
         <JsonLd data={{
            "@context": "https://schema.org",
            "@graph": [
               {
                  "@type": "Service",
                  name: "Desarrollo de software con inteligencia artificial",
                  serviceType: "Desarrollo de software a medida",
                  description: DESCRIPTION,
                  url: `${SITE_URL}/desarrollo-con-ia`,
                  areaServed: "AR",
                  provider: {
                     "@type": "Organization",
                     name: ORGANIZATION.name,
                     url: SITE_URL,
                     address: { "@type": "PostalAddress", ...ORGANIZATION.address },
                  },
               },
               {
                  "@type": "FAQPage",
                  mainEntity: FAQ.map((f) => ({
                     "@type": "Question",
                     name: f.q,
                     acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
               },
            ],
         }} />

         {/* Portada */}
         <section className="bg-c1 text-white py-16 lg:py-28">
            <div className="container">
               <InnerContainer symetric={true}>
                  <p className="text-sm uppercase tracking-wide opacity-80 mb-6">Córdoba, Argentina</p>
                  <H1 className="text-white max-w-4xl">Desarrollo de software con inteligencia artificial, desde Córdoba.</H1>
                  <p className="text-lead mt-8 max-w-3xl">Somos una consultora IT con más de 30 años de experiencia. Hoy desarrollamos aplicaciones con inteligencia artificial, y lo demostramos con productos propios y reales.</p>
                  <div className="mt-10">
                     <Link href="/#contacto"><Boton variant="secondary">Consultanos</Boton></Link>
                  </div>
               </InnerContainer>
            </div>
         </section>

         {/* Dos productos */}
         <section className="py-16 lg:py-24">
            <div className="container">
               <InnerContainer symetric={true}>
                  <p className="text-sm uppercase tracking-wide text-c2 mb-4">Casos reales</p>
                  <H2>Dos productos, desarrollados con IA</H2>
                  <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                     <div className="border border-lightblue p-6 lg:p-8 text-c2 flex flex-col">
                        <Image src="/images/s-fide.png" alt="S-FiDE" width={1200} height={222} className="h-12 w-auto self-start bg-c4 p-2" />
                        <span className="mt-6 inline-block self-start bg-c1 text-white text-xs uppercase tracking-wide px-2 py-1">{IA.sfide}</span>
                        <H3 className="text-c1 mt-4 mb-3 text-2xl">S-FiDE · Sistema de Firma Digital Extendido</H3>
                        <p className="text-base">Suite de software libre para firmar y verificar documentos XML y PDF con certificado digital. Se desarrolló íntegramente con inteligencia artificial ({IA.herramienta}) y su código fuente está disponible para revisarlo.</p>
                        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
                           <Link href="/landing#s-fide" className="inline-flex items-center gap-1 hover:underline underline-offset-4">Conocer S-FiDE <ArrowUpRight size={16} aria-hidden="true" /></Link>
                           <a href={SFIDE_REPO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline underline-offset-4">Código fuente <ArrowUpRight size={16} aria-hidden="true" /></a>
                        </div>
                     </div>
                     <div className="border border-lightblue p-6 lg:p-8 text-c2 flex flex-col">
                        <Image src="/images/socios/ralvy.svg" alt="Ralvy" width={160} height={64} className="h-12 w-auto self-start bg-c1 p-3" />
                        <span className="mt-6 inline-block self-start bg-c1 text-white text-xs uppercase tracking-wide px-2 py-1">{IA.ralvy}</span>
                        <H3 className="text-c1 mt-4 mb-3 text-2xl">Ralvy · Plataforma de ticketing para eventos</H3>
                        <p className="text-base">Entradas, productos, acreditaciones y control de accesos con QR. La desarrollamos en conjunto con su equipo y operamos su infraestructura. Más del 90% está desarrollado con inteligencia artificial.</p>
                        <div className="mt-6 text-sm font-medium">
                           <a href="https://ralvy.io/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline underline-offset-4">Conocer Ralvy <ArrowUpRight size={16} aria-hidden="true" /></a>
                        </div>
                     </div>
                  </div>
               </InnerContainer>
            </div>
         </section>

         {/* Qué ofrecemos */}
         <section className="bg-[#EDF1FF] py-16 lg:py-24">
            <div className="container">
               <InnerContainer symetric={true}>
                  <H2>Qué podemos desarrollar con vos</H2>
                  <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div className="bg-white p-6 text-c2">
                        <H3 className="text-c1 text-xl mb-2">Software a medida</H3>
                        <p className="text-sm">Productos de software que se ajustan a tus requerimientos, desarrollados con inteligencia artificial.</p>
                     </div>
                     <div className="bg-white p-6 text-c2">
                        <H3 className="text-c1 text-xl mb-2">Modernización de sistemas</H3>
                        <p className="text-sm">Si tu sistema actual quedó obsoleto, nos ocupamos de modernizarlo.</p>
                     </div>
                     <div className="bg-white p-6 text-c2">
                        <H3 className="text-c1 text-xl mb-2">Productos modulares</H3>
                        <p className="text-sm">Arquitectura de microservicios: pequeños servicios que operan de forma independiente y se adaptan a tu negocio.</p>
                     </div>
                  </div>
                  <p className="mt-8 text-c2 max-w-3xl">Y si lo necesitás, también <Link href="/infraestructura" className="underline underline-offset-4">operamos la infraestructura</Link> donde corre tu aplicación, con asistencia de inteligencia artificial y supervisión de personas.</p>
               </InnerContainer>
            </div>
         </section>

         {/* Preguntas frecuentes */}
         <section className="py-16 lg:py-24">
            <div className="container">
               <InnerContainer symetric={true}>
                  <H2>Preguntas frecuentes</H2>
                  <div className="mt-10 max-w-4xl divide-y divide-lightblue border-y border-lightblue">
                     {FAQ.map((f) => (
                        <details key={f.q} className="group py-5 text-c2">
                           <summary className="cursor-pointer list-none flex items-start justify-between gap-4 text-lg font-medium text-c1 focus-visible:outline-2 focus-visible:outline-c2">
                              <h3 className="font-medium">{f.q}</h3>
                              <span aria-hidden="true" className="shrink-0 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                           </summary>
                           <p className="mt-3 text-base">{f.a}</p>
                        </details>
                     ))}
                  </div>
               </InnerContainer>
            </div>
         </section>

         {/* Llamado a la acción */}
         <section className="bg-c1 text-white py-16 lg:py-24">
            <div className="container">
               <InnerContainer symetric={true}>
                  <H2 className="text-white max-w-3xl">¿Tenés un proyecto en mente?</H2>
                  <p className="text-lead mt-6 max-w-3xl">Contanos qué necesitás y vemos cómo desarrollarlo.</p>
                  <div className="mt-10 sm:flex items-center gap-x-8">
                     <Link href="/#contacto"><Boton variant="secondary">Consultanos</Boton></Link>
                     <p className="mt-4 sm:mt-0 text-base">También podés escribir a <a href="mailto:info@sauken.com.ar" className="underline underline-offset-4">info@sauken.com.ar</a>.</p>
                  </div>
                  <p className="mt-10 text-sm opacity-80">Sauken en <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">LinkedIn</a> y <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">GitHub</a>.</p>
               </InnerContainer>
            </div>
         </section>
      </main>
   )
}
export default DesarrolloIaPage
