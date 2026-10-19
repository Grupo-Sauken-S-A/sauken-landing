import type { Metadata } from "next"
import { Boton } from "@/components/Boton"
import { ClientsGrid } from "@/components/landing/ClientsGrid"
import { Footer } from "@/components/landing/Footer"
import { Header } from "@/components/landing/Header"
import { Hero } from "@/components/landing/Hero"
import { InnerContainer } from "@/components/site/InnerContainer"
import { H2, H3 } from "@/components/Typography"
import Image from "next/image"
import { getSfideVersion } from "@/lib/sfide"
import { SFIDE_DOC_TECNICO_URL, SFIDE_DOC_USUARIO_URL, SFIDE_NOVEDADES, SFIDE_PAGES_URL, SFIDE_RELEASES_URL, SFIDE_REPO_URL } from "@/constants/sfide"

export const metadata: Metadata = {
  title: "S-COD y S-FiDE | Certificados de Origen y Firma Digital | Sauken",
  description: "S-COD, plataforma de Certificados de Origen Digital, y S-FiDE, suite libre de firma digital de documentos XML y PDF. Entidades habilitadas y descargas.",
}

// Revalida la versión de S-FiDE (GitHub) cada 3 horas
export const revalidate = 10800

const ALCANCES = [
  {
    title: "Firmar",
    items: [
      "Documentos XML y PDF.",
      "Con token o tarjeta criptográfica (PKCS#11), archivo de certificado (PKCS#12) o almacén de certificados de Windows.",
      "Firma visible o invisible en PDF, con posición a elección y revisión previa.",
      "Firmas sucesivas y firma de cierre para bloquear el documento aprobado.",
    ],
  },
  {
    title: "Verificar",
    items: [
      "Firmas de documentos XML y PDF, incluso las hechas con otros programas.",
      "Validación de la estructura de un XML contra su esquema XSD.",
      "Estado de revocación del certificado, con avisos claros para no técnicos.",
    ],
  },
  {
    title: "Gestionar certificados",
    items: [
      "Listar los certificados de un token o del almacén de Windows.",
      "Exportar un certificado a .pem e informar si fue dado de baja.",
    ],
  },
  {
    title: "Comercio exterior",
    items: [
      "Soporte especializado para Certificados de Origen Digital y Declaraciones Juradas de Origen (COD, CODEH, DJO y DJOEH).",
      "Firma en dos etapas y reglas de fecha y huso horario por tipo de elemento.",
    ],
  },
]

const CUALIDADES = [
  { title: "Modular", text: "Cada capacidad es un programa autónomo: usás solo lo que necesitás." },
  { title: "Fácil de integrar", text: "Código de salida 0 es éxito y 1 es error. Una sola línea de comando para firmar o verificar." },
  { title: "En español, sin jerga", text: "Los errores se explican en palabras claras, pensados para quien gestiona firmas sin ser desarrollador." },
  { title: "Estándares abiertos", text: "XMLDSig y PDF firmado, revocación por OCSP y CRL, y bloqueo de documentos con AES-256." },
  { title: "Compatible", text: "Verifica firmas de terceros, incluso con SHA-1, y los PDF firmados se abren sin modificaciones en Adobe Acrobat." },
  { title: "Privado y seguro", text: "Las contraseñas se guardan solo en memoria. El actualizador verifica la descarga y revierte si algo falla." },
]

const ESTANDARES = [
  { title: "Ley 25.506", text: "Firma digital conforme a la ley argentina de Firma Digital." },
  { title: "XML-DSig (W3C)", text: "Estándar abierto de firma para documentos XML." },
  { title: "CMS/PKCS#7 ≈ PAdES", text: "Firma de PDF detached, equivalente a PAdES (ETSI EN 319 142)." },
  { title: "ALADI/MERCOSUR", text: "Verificación contra el esquema oficial de ALADI y validación de revocación por elemento." },
]

const PARA_QUIEN = [
  "Empresas y estudios que firman facturas, contratos y documentos todos los días.",
  "Despachantes y exportadores que gestionan certificados de origen digitales.",
  "Equipos de desarrollo que necesitan sumar firma digital a sus sistemas sin depender de un servicio externo.",
  "Cualquier persona con un certificado digital que quiera usarlo de forma simple y segura.",
]

const LandingPage = async () => {
  const version = await getSfideVersion()
  const mostrarNovedades = !version || version === SFIDE_NOVEDADES.version

  return (
    <div>
      <Header />
      <Hero />
      <section id="entidades" className="scroll-mt-8">
        <div className="container">
          <InnerContainer symetric={true}>
            <H2 className="mb-7">Entidades</H2>
            <p className="text-xl text-c2 font-[400]">Habilitadas para emitir Certificados de Origen:</p>
            <ClientsGrid />
          </InnerContainer>
        </div>
      </section>

      <section id="s-fide" className="bg-c4 text-white py-24 scroll-mt-8">
        <div className="container">
          <InnerContainer symetric={true}>
            <Image src="/images/s-fide.png" alt="S-FiDE" width={1200} height={222} className="w-full max-w-[460px]" />
            {version && <span className="inline-block mt-6 border border-white/40 px-3 py-1 text-xs tracking-wide uppercase">Versión {version} · Software libre GPL v2 o posterior</span>}
            <H3 className="text-alternative-title mt-10">Sistema de Firma Digital Extendido</H3>
            <p className="text-2xl py-8 font-[500] leading-[1.4] max-w-[820px]">Firmá y verificá documentos XML y PDF con tu certificado digital. Software libre, sin intermediarios y listo para integrar.</p>

            <div className="max-w-[820px] space-y-4 text-xl font-[400]">
              <p>S-FiDE es una suite de programas de Grupo Sauken S.A. para firmar y verificar firmas digitales en documentos XML y PDF. También extrae e inspecciona certificados digitales desde tokens criptográficos, archivos PKCS#12 o el almacén de certificados de Windows.</p>
              <p>Cuenta con una interfaz gráfica simple para quien prefiere hacer clic. Cada función también se puede invocar por línea de comandos para integrarla en sistemas propios.</p>
            </div>

            {mostrarNovedades && (
              <div className="mt-12 max-w-[820px] bg-white/10 p-8">
                <h4 className="text-xl font-medium mb-4">Novedades de la versión {SFIDE_NOVEDADES.version}</h4>
                <ul className="space-y-2 text-base list-disc pl-5">
                  {SFIDE_NOVEDADES.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
                <a href={SFIDE_PAGES_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 underline underline-offset-4 text-base">Ver todas las novedades</a>
              </div>
            )}

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              {ALCANCES.map((a) => (
                <div key={a.title} className="border border-white/30 p-8">
                  <h4 className="text-2xl font-medium mb-4">{a.title}</h4>
                  <ul className="space-y-2 text-base list-disc pl-5">
                    {a.items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-base opacity-80">Plataformas: Windows, Linux y macOS. No requiere instalar Java.</p>

            <h4 className="text-2xl font-medium mt-20 mb-8">Cualidades técnicas</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
              {CUALIDADES.map((c) => (
                <div key={c.title}>
                  <h5 className="text-xl font-medium mb-2">{c.title}</h5>
                  <p className="text-base opacity-90">{c.text}</p>
                </div>
              ))}
            </div>

            <h4 className="text-2xl font-medium mt-20 mb-8">Estándares y marco normativo</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
              {ESTANDARES.map((e) => (
                <div key={e.title}>
                  <h5 className="text-xl font-medium mb-2">{e.title}</h5>
                  <p className="text-base opacity-90">{e.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-base opacity-80">Catorce módulos de línea de comandos, cada uno invocable como proceso propio, más la interfaz gráfica S-FiDE GUI que los agrupa.</p>

            <h4 className="text-2xl font-medium mt-20 mb-6">Para quién es</h4>
            <ul className="space-y-2 text-lg list-disc pl-5 max-w-[820px]">
              {PARA_QUIEN.map((p) => <li key={p}>{p}</li>)}
            </ul>

            <div className="mt-16">
              <a href={SFIDE_RELEASES_URL} target="_blank" rel="noopener noreferrer">
                <Boton variant="secondary">Descargar última versión{version ? ` (${version})` : ""}</Boton>
              </a>
              <p className="mt-4 text-base opacity-80">Incluye su propio entorno de ejecución: ZIP para Windows y Linux (x64) y paquetes para macOS (Apple Silicon e Intel).</p>
              <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-lg">
                <li><a href={SFIDE_DOC_USUARIO_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Guía de usuario (interfaz gráfica)</a></li>
                <li><a href={SFIDE_DOC_TECNICO_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Manual técnico de integración</a></li>
                <li><a href={SFIDE_PAGES_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Novedades de cada versión</a></li>
                <li><a href={SFIDE_REPO_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Código fuente en GitHub</a></li>
              </ul>
            </div>
          </InnerContainer>
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default LandingPage
