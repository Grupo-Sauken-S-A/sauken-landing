import type { Metadata } from "next"
import Link from "next/link"
import { Boton } from "@/components/Boton"
import { InnerContainer } from "@/components/site/InnerContainer"
import { H1, H2, H3 } from "@/components/Typography"
import { JsonLd } from "@/components/seo/JsonLd"
import { IA } from "@/constants/ia"
import { ORGANIZATION, SITE_NAME, SITE_URL } from "@/constants/site"
import { SFIDE_REPO_URL } from "@/constants/sfide"

const TITLE = "Cómo operamos con IA y supervisión humana"
const DESCRIPTION = "Cómo usamos inteligencia artificial en el desarrollo de software y en la operación de infraestructura, y por qué cada acción sobre producción la decide una persona."
const PUBLICADO = "2026-11-08"

const FAQ = [
   {
      q: "¿La inteligencia artificial toma decisiones sobre los sistemas de producción?",
      a: "No. La IA asiste, pero cada acción sobre producción es responsabilidad de una persona y queda registrada.",
   },
   {
      q: "¿Qué partes de sus productos se desarrollaron con IA?",
      a: `S-FiDE se desarrolló íntegramente con inteligencia artificial (${IA.herramienta}). Ralvy tiene más del 90% desarrollado con inteligencia artificial.`,
   },
   {
      q: "¿Se puede revisar el código de lo que desarrollan con IA?",
      a: "El código fuente de S-FiDE es público y se distribuye bajo licencia GPL v2 o posterior, de modo que cualquiera puede revisarlo, estudiarlo y modificarlo.",
   },
   {
      q: "¿Qué pasa si la IA se equivoca?",
      a: "Por eso nada se toca sin un plan y una forma de volver atrás, los cambios disruptivos se hacen solo en ventanas acordadas y cada acción sobre producción pasa por una persona responsable y queda registrada.",
   },
]

export const metadata: Metadata = {
   title: TITLE,
   description: DESCRIPTION,
   alternates: { canonical: "/como-operamos-con-ia" },
   openGraph: { type: "article", siteName: SITE_NAME, locale: "es_AR", url: "/como-operamos-con-ia", title: TITLE, description: DESCRIPTION, images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sauken" }] },
   twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og-image.png"] },
}

const ComoOperamosConIaPage = () => {
   return (
      <main>
         <JsonLd data={{
            "@context": "https://schema.org",
            "@graph": [
               {
                  "@type": "Article",
                  headline: "Cómo operamos con inteligencia artificial y supervisión humana",
                  description: DESCRIPTION,
                  inLanguage: "es-AR",
                  datePublished: PUBLICADO,
                  dateModified: PUBLICADO,
                  mainEntityOfPage: `${SITE_URL}/como-operamos-con-ia`,
                  image: `${SITE_URL}/og-image.png`,
                  author: { "@type": "Organization", name: ORGANIZATION.name, url: SITE_URL },
                  publisher: { "@type": "Organization", name: ORGANIZATION.name, url: SITE_URL, logo: { "@type": "ImageObject", url: ORGANIZATION.logo } },
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

         <article className="py-16 lg:py-24">
            <div className="container">
               <InnerContainer symetric={true}>
                  <div className="max-w-3xl text-c2">
                     <p className="text-sm uppercase tracking-wide mb-4">Sauken · Córdoba, Argentina</p>
                     <H1>Cómo operamos con inteligencia artificial y supervisión humana</H1>
                     <p className="text-lead mt-8">Usamos inteligencia artificial en dos frentes: para desarrollar software y para operar infraestructura. En los dos la regla es la misma: la IA asiste y las personas deciden.</p>
                     <p className="text-sm mt-4 opacity-80">Publicado en noviembre de 2026.</p>

                     <div className="mt-12 bg-[#EDF1FF] p-6 lg:p-8">
                        <H2 className="text-2xl text-c1 mb-4">En resumen</H2>
                        <ul className="space-y-2 text-base list-disc pl-5">
                           <li>Desarrollamos software con IA: S-FiDE, 100% desarrollado con inteligencia artificial, y Ralvy, con más del 90%.</li>
                           <li>Operamos infraestructura con asistencia de IA para analizar, documentar y automatizar tareas rutinarias.</li>
                           <li>Cada acción sobre producción es responsabilidad de una persona y queda registrada.</li>
                           <li>Nada se toca sin un plan y una forma de volver atrás.</li>
                        </ul>
                     </div>

                     <H2 className="mt-16 mb-6">Desarrollo de software con IA</H2>
                     <div className="space-y-4 text-base">
                        <p>Hoy desarrollamos nuestros productos con inteligencia artificial. <Link href="/landing#s-fide" className="underline underline-offset-4">S-FiDE</Link>, la suite de software libre para firmar y verificar documentos XML y PDF con certificado digital, se desarrolló íntegramente con IA, usando {IA.herramienta}. Su <a href={SFIDE_REPO_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">código fuente es público</a> y se distribuye bajo licencia GPL v2 o posterior, para que cualquiera pueda revisarlo.</p>
                        <p><a href="https://ralvy.io/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Ralvy</a>, la plataforma de ticketing para eventos que desarrollamos en conjunto con su equipo, tiene más del 90% desarrollado con inteligencia artificial. Además, nosotros operamos su infraestructura.</p>
                        <p>Si querés saber cómo podemos aplicarlo a tu proyecto, mirá <Link href="/desarrollo-con-ia" className="underline underline-offset-4">desarrollo de software con IA</Link>.</p>
                     </div>

                     <H2 className="mt-16 mb-6">Operación de infraestructura con IA</H2>
                     <p className="text-base">La infraestructura donde corren las aplicaciones de nuestros clientes también se opera con asistencia de inteligencia artificial, en cuatro usos concretos:</p>
                     <div className="mt-8 space-y-8">
                        <div>
                           <H3 className="text-xl text-c1 mb-2">Análisis asistido</H3>
                           <p className="text-base">La IA ayuda a revisar el estado de cada servidor, interpretar cambios inesperados y resolver incidentes con rapidez.</p>
                        </div>
                        <div>
                           <H3 className="text-xl text-c1 mb-2">Documentación viva</H3>
                           <p className="text-base">El inventario y los procedimientos se mantienen al día con asistencia de IA.</p>
                        </div>
                        <div>
                           <H3 className="text-xl text-c1 mb-2">Tareas rutinarias automatizadas</H3>
                           <p className="text-base">Verificaciones que antes eran manuales hoy corren solas.</p>
                        </div>
                        <div>
                           <H3 className="text-xl text-c1 mb-2">Supervisión humana, siempre</H3>
                           <p className="text-base">Cada acción sobre producción es responsabilidad de una persona y queda registrada.</p>
                        </div>
                     </div>
                     <p className="mt-8 text-base">El detalle de cómo operamos está en <Link href="/infraestructura#ia" className="underline underline-offset-4">infraestructura gestionada</Link>.</p>

                     <H2 className="mt-16 mb-6">Nuestros límites</H2>
                     <p className="text-base">La IA no reemplaza el criterio de las personas. Por eso trabajamos con reglas simples:</p>
                     <ul className="mt-4 space-y-2 text-base list-disc pl-5">
                        <li>Nada se toca sin un plan y una forma de volver atrás.</li>
                        <li>Los cambios disruptivos se hacen solo en ventanas acordadas, con aviso previo.</li>
                        <li>Todo queda documentado: inventario, procedimientos y decisiones.</li>
                        <li>La operación no depende de una sola persona.</li>
                     </ul>

                     <H2 className="mt-16 mb-6">Qué significa para un cliente</H2>
                     <p className="text-base">Te avisamos antes de cada mantenimiento, con fecha y horario por correo, y te escribimos de nuevo cuando todo vuelve a estar operativo. Recibís un informe semanal del estado de tu servicio, sin tener que pedirlo. Y siempre hay una persona responsable: si necesitás ayuda, escribís a <a href="mailto:soporte@sauken.com.ar" className="underline underline-offset-4">soporte@sauken.com.ar</a>.</p>

                     <H2 className="mt-16 mb-6">Preguntas frecuentes</H2>
                     <div className="divide-y divide-lightblue border-y border-lightblue">
                        {FAQ.map((f) => (
                           <details key={f.q} className="group py-5">
                              <summary className="cursor-pointer list-none flex items-start justify-between gap-4 text-lg font-medium text-c1 focus-visible:outline-2 focus-visible:outline-c2">
                                 <h3 className="font-medium">{f.q}</h3>
                                 <span aria-hidden="true" className="shrink-0 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                              </summary>
                              <p className="mt-3 text-base">{f.a}</p>
                           </details>
                        ))}
                     </div>

                     <div className="mt-16 border border-lightblue p-6 lg:p-8">
                        <H2 className="text-2xl text-c1">¿Querés conversarlo?</H2>
                        <p className="mt-3 text-base">Contanos qué necesitás y te respondemos desde Córdoba.</p>
                        <div className="mt-6 sm:flex items-center gap-x-6">
                           <Link href="/#contacto"><Boton variant="outline" className="bg-c1 text-white hover:bg-c2">Consultanos</Boton></Link>
                           <p className="mt-4 sm:mt-0 text-sm">o escribí a <a href="mailto:info@sauken.com.ar" className="underline underline-offset-4">info@sauken.com.ar</a></p>
                        </div>
                     </div>
                  </div>
               </InnerContainer>
            </div>
         </article>
      </main>
   )
}
export default ComoOperamosConIaPage
