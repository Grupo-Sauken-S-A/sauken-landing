import type { Metadata } from "next"
import Link from "next/link"
import { Boton } from "@/components/Boton"
import { InnerContainer } from "@/components/site/InnerContainer"
import { H1, H2, H3 } from "@/components/Typography"
import { JsonLd } from "@/components/seo/JsonLd"
import { ORGANIZATION, SITE_NAME, SITE_URL } from "@/constants/site"
import {
   INFRA_CLIENTE, INFRA_FAQ, INFRA_IA, INFRA_PILARES, INFRA_SERVICIOS, INFRA_TRABAJO, INFRA_VULN,
} from "@/constants/infraestructura"

const TITLE = "Infraestructura gestionada con IA, en Córdoba"
const DESCRIPTION = "Operamos tu infraestructura desde Córdoba, Argentina, con inteligencia artificial y supervisión humana: seguridad, copias de seguridad y monitoreo permanente."

export const metadata: Metadata = {
   title: TITLE,
   description: DESCRIPTION,
   alternates: { canonical: "/infraestructura" },
   openGraph: { type: "website", siteName: SITE_NAME, locale: "es_AR", url: "/infraestructura", title: TITLE, description: DESCRIPTION, images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sauken" }] },
   twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og-image.png"] },
}

const InfraestructuraPage = () => {
   return (
      <main>
         <JsonLd data={{
            "@context": "https://schema.org",
            "@graph": [
               {
                  "@type": "Service",
                  name: "Infraestructura gestionada",
                  serviceType: "Alojamiento y operación de infraestructura de aplicaciones",
                  description: DESCRIPTION,
                  url: `${SITE_URL}/infraestructura`,
                  areaServed: "AR",
                  provider: { "@type": "Organization", name: ORGANIZATION.name, url: SITE_URL },
               },
               {
                  "@type": "FAQPage",
                  mainEntity: INFRA_FAQ.map((f) => ({
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
                  <p className="text-sm uppercase tracking-wide opacity-80 mb-6">Infraestructura</p>
                  <H1 className="text-white max-w-4xl">Infraestructura que se cuida sola… y con personas atentas detrás.</H1>
                  <p className="text-lead mt-8 max-w-3xl">Operamos, vigilamos y documentamos la plataforma donde corren las aplicaciones de nuestros clientes, con asistencia de inteligencia artificial y supervisión de personas.</p>
                  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                     <div className="border border-white/30 p-5">
                        <h2 className="text-xl font-medium mb-1">Vigilada de forma permanente</h2>
                        <p className="text-sm opacity-90">Bases, servicios, máquinas virtuales y aplicaciones, con alertas.</p>
                     </div>
                     <div className="border border-white/30 p-5">
                        <h2 className="text-xl font-medium mb-1">Copias en otro equipo</h2>
                        <p className="text-sm opacity-90">En equipos distintos del original y con informe del resultado.</p>
                     </div>
                  </div>
               </InnerContainer>
            </div>
         </section>

         {/* Pilares */}
         <section className="py-16 lg:py-24">
            <div className="container">
               <InnerContainer symetric={true}>
                  <p className="text-sm uppercase tracking-wide text-c2 mb-4">Cómo operamos</p>
                  <H2>Cuatro pilares para que la tecnología simplemente funcione</H2>
                  <p className="text-lead text-c2 mt-6 max-w-4xl">Servidores, redes y servicios gestionados con método: cada decisión se planifica, cada cambio se registra y cada falla se detecta antes de que la note un usuario.</p>
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                     {INFRA_PILARES.map((p) => (
                        <div key={p.title} className="border border-lightblue p-6 lg:p-8 text-c2">
                           <H3 className="text-c1 mb-4 text-2xl">{p.title}</H3>
                           <p className="text-base mb-4">{p.lead}</p>
                           <ul className="space-y-2 text-sm list-disc pl-5">
                              {p.items.map((i) => <li key={i}>{i}</li>)}
                           </ul>
                        </div>
                     ))}
                  </div>
               </InnerContainer>
            </div>
         </section>

         {/* Seguridad y vulnerabilidades */}
         <section className="bg-[#EDF1FF] py-16 lg:py-24">
            <div className="container">
               <InnerContainer symetric={true}>
                  <p className="text-sm uppercase tracking-wide text-c2 mb-4">Seguridad y vulnerabilidades</p>
                  <H2>Las vulnerabilidades, bajo control estricto.</H2>
                  <p className="text-lead text-c2 mt-6 max-w-4xl">{INFRA_VULN.intro}</p>
                  <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                     {INFRA_VULN.pasos.map((s, i) => (
                        <li key={s.title} className="bg-white p-6 lg:p-8 text-c2">
                           <span className="text-4xl font-semibold text-c5" aria-hidden="true">{i + 1}</span>
                           <H3 className="text-c1 mt-2 mb-3 text-2xl">{s.title}</H3>
                           <p className="text-sm">{s.text}</p>
                        </li>
                     ))}
                  </ol>
                  <p className="mt-8 text-c1 font-medium max-w-4xl">{INFRA_VULN.nota}</p>
               </InnerContainer>
            </div>
         </section>

         {/* IA */}
         <section id="ia" className="bg-c1 text-white py-16 lg:py-24 scroll-mt-8">
            <div className="container">
               <InnerContainer symetric={true}>
                  <p className="text-sm uppercase tracking-wide opacity-80 mb-4">Inteligencia artificial</p>
                  <H2 className="text-white max-w-4xl">{INFRA_IA.title}</H2>
                  <p className="text-lead mt-6 max-w-4xl">{INFRA_IA.lead}</p>
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                     {INFRA_IA.items.map((i) => (
                        <div key={i.title}>
                           <H3 className="text-xl mb-2">{i.title}</H3>
                           <p className="text-sm opacity-90">{i.text}</p>
                        </div>
                     ))}
                  </div>
                  <p className="mt-10 text-base"><Link href="/como-operamos-con-ia" className="underline underline-offset-4">Leé cómo operamos con IA y supervisión humana</Link>.</p>
               </InnerContainer>
            </div>
         </section>

         {/* Cómo trabajamos y qué notás como cliente */}
         <section className="py-16 lg:py-24">
            <div className="container">
               <InnerContainer symetric={true}>
                  <H2>Cómo trabajamos</H2>
                  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {INFRA_TRABAJO.map((t) => (
                        <div key={t.title} className="text-c2">
                           <H3 className="text-c1 text-xl mb-2">{t.title}</H3>
                           <p className="text-sm">{t.text}</p>
                        </div>
                     ))}
                  </div>

                  <H2 className="mt-20">Lo que vas a notar como cliente</H2>
                  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {INFRA_CLIENTE.map((t) => (
                        <div key={t.title} className="border border-lightblue p-6 text-c2">
                           <H3 className="text-c1 text-xl mb-2">{t.title}</H3>
                           <p className="text-sm">{t.text}</p>
                        </div>
                     ))}
                  </div>
               </InnerContainer>
            </div>
         </section>

         {/* Qué hacemos por vos */}
         <section className="bg-[#EDF1FF] py-16 lg:py-24">
            <div className="container">
               <InnerContainer symetric={true}>
                  <H2>Qué hacemos por vos</H2>
                  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {INFRA_SERVICIOS.map((s) => (
                        <div key={s.title} className="bg-white p-6 text-c2">
                           <H3 className="text-c1 text-xl mb-2">{s.title}</H3>
                           <p className="text-sm">{s.text}</p>
                        </div>
                     ))}
                  </div>
               </InnerContainer>
            </div>
         </section>

         {/* Preguntas frecuentes */}
         <section className="py-16 lg:py-24">
            <div className="container">
               <InnerContainer symetric={true}>
                  <H2>Preguntas frecuentes</H2>
                  <div className="mt-10 max-w-4xl divide-y divide-lightblue border-y border-lightblue">
                     {INFRA_FAQ.map((f) => (
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
                  <H2 className="text-white max-w-3xl">¿Querés conocer cómo operamos tu infraestructura?</H2>
                  <p className="text-lead mt-6 max-w-3xl">Escribinos y te contamos cómo podemos cuidar la tuya.</p>
                  <div className="mt-10 sm:flex items-center gap-x-8">
                     <Link href="/#contacto">
                        <Boton variant="secondary">Consultanos</Boton>
                     </Link>
                     <p className="mt-4 sm:mt-0 text-base">También podés escribir a <a href="mailto:info@sauken.com.ar" className="underline underline-offset-4">info@sauken.com.ar</a>.</p>
                  </div>
                  <p className="mt-10 text-sm opacity-80">¿Ya sos cliente y necesitás ayuda? Escribí a <a href="mailto:soporte@sauken.com.ar" className="underline underline-offset-4">soporte@sauken.com.ar</a>.</p>
               </InnerContainer>
            </div>
         </section>
      </main>
   )
}
export default InfraestructuraPage
