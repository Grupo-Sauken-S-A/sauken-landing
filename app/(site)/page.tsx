
import FadeIn from "@/components/animations/FadeIn";
import ClientsCarousel from "@/components/ClientsCarousel";
import ContactForm from "@/components/forms/ContactForm";
import { Hero } from "@/components/Hero";
import { ServicioCard } from "@/components/ServicioCard";
import { InnerContainer } from "@/components/site/InnerContainer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Slider } from "@/components/Slider";
import { getSfideVersion } from "@/lib/sfide";
import { Accesos } from "@/components/site/Accesos";
import { JsonLd } from "@/components/seo/JsonLd";
import { ORGANIZATION, SITE_NAME, SITE_URL } from "@/constants/site";
import { Stack } from "@/components/Stack";
import { CLIENTES } from "@/constants";
import Image from "next/image";

// Revalida la versión de S-FiDE (GitHub) cada 3 horas
export const revalidate = 10800;

export default async function Home() {
  const sfideVersion = await getSfideVersion();

  const clientes = CLIENTES;

  return (
    <main>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "Organization", "@id": `${SITE_URL}/#organization`, ...ORGANIZATION },
          { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME, inLanguage: "es-AR", publisher: { "@id": `${SITE_URL}/#organization` } },
        ],
      }} />
      <Hero />
      <SectionHeading title="Soluciones" id="soluciones"/>
      <Slider sfideVersion={sfideVersion} />

      <SectionHeading title="Accesos" id="accesos">
        <p className="text-lead text-c2 max-w-4xl mb-12">Ingresá a las plataformas y servicios de Sauken desde un solo lugar.</p>
        <Accesos />
      </SectionHeading>

      <SectionHeading title="Servicios" id="servicios" />

      <div className="container">
        <InnerContainer className="bg-[url(/images/servicios-bg-2.svg)]  bg-no-repeat bg-[position:100%_100%] bg-[size:92%_auto] relative pb-[200px] lg:pb-[80px]">
          <Image src="/images/servicios-bg-1.svg" width={298} height={170} alt="" className="absolute bottom-[10px] lg:bottom-[70px] right-[170px]" />
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-16">
            <ServicioCard title="Desarrollo de Software a medida"
              image={<Image src="/images/icon-dsm.svg" alt="Desarrollo de Software a Medida" width={70} height={56} />}
            >
              <p>Desarrollamos productos de software con tecnologías de vanguardia que se ajusten a tus requerimientos y te permitan impulsar tus proyectos.</p>
              <p>Si sientes que  tu sistema actual quedó obsoleto,nosotros nos ocupamos de modernizarlo.</p>
            </ServicioCard>

            <ServicioCard title="Arquitectura de Microservicios"
              image={<Image src="/images/icon-am.svg" alt="Arquitectura de Microservicios" width={70} height={70} />}
            >
              <p>Construímos productos modulares que se adaptena tus necesidades. Nuestra arquitectura basada en pequeños servicios garantiza flexibilidad y autonomía.</p>
              <p>Cada componente opera independientemente para abordar funcionalidades completas de tu negocio.</p>

            </ServicioCard>

            <ServicioCard title="Virtualización"
              image={<Image src="/images/icon-v.svg" alt="Virtualización" width={57} height={71} />}
            >
              <p>Proporcionamos servicios de virtualización mediante máquinas virtuales y redes privadas virtuales.</p>
              <p>Nuestro enfoque se adapta a las necesidades específicas de cada caso, utilizando tecnología de vanguardia para lograr los mejores resultados. Virtualiza tus aplicaciones, servicios y procesos para optimizar la eficiencia de tus operaciones y recursos.</p>
            </ServicioCard>

            <ServicioCard title="Consultoría en IT"
              image={<Image src="/images/icon-cit.svg" alt="Consultoría en IT" width={70} height={58} />}
            >
              <p>Proveemos servicios de asesoría personalizados en tecnologías de la información.</p>
              <p>Si su empresa está en busca de orientación tecnológica,capacitaciones, auditorías, acceso a conocimiento y experienciaprofesional, ayuda en proyectos en curso o requiere un interlocutor que hable el mismo lenguaje técnicode su industria, estamos para ayudarle.</p>
            </ServicioCard>

            <ServicioCard title="Datacenter"
              image={<Image src="/images/icon-d.svg" alt="Datacenter" width={70} height={61} />}
            >
              <p>En nuestro centro de procesamiento de datos, podrás alojar servidores dedicados y virtualizados tanto para nuestras aplicaciones como para las de terceros.</p>
              <p>Nuestra infraestructura se caracteriza por la redundancia en los sistemas de procesamiento, almacenamiento, conectividad y energía, garantizando la disponibilidad constante de los servicios.</p>
            </ServicioCard>

            <ServicioCard title="Firma Digital y Comercio Exterior"
              image={<Image src="/images/icon-fce.svg" alt="Firma Digital y Comercio Exterior" width={70} height={70} />}
            >
              <p>Plataformas de Certificados de Origen Digital (COD) y Declaraciones Juradas de Origen (DJO) para ALADI y MERCOSUR, con soporte del nuevo Régimen de Origen MERCOSUR e integración por archivos CSV y webservices SOAP.</p>
              <p>Con S-FiDE firmás y verificás documentos XML y PDF, y con los visualizadores de COD y DJO cualquier sistema puede mostrar sus documentos.</p>
            </ServicioCard>

            <ServicioCard title="Correo y Nube corporativa"
              image={<Image src="/images/icon-cn.svg" alt="Correo y Nube corporativa" width={70} height={70} />}
            >
              <p>Correo electrónico propio, con autenticación SPF, DKIM y DMARC, y un espacio de trabajo en la nube para archivos, calendario y colaboración.</p>
              <p>Todo se aloja en la infraestructura de Sauken, bajo tu control y sin depender de terceros.</p>
            </ServicioCard>

            <ServicioCard title="Acceso remoto seguro"
              image={<Image src="/images/icon-ar.svg" alt="Acceso remoto seguro" width={70} height={70} />}
            >
              <p>Escritorios remotos desde el navegador de cualquier computadora o celular, con tus aplicaciones y tus archivos, como si estuvieras frente al equipo.</p>
              <p>El acceso no se expone a Internet: se ingresa por VPN, con cuentas individuales y registro de accesos.</p>
            </ServicioCard>

            <ServicioCard title="Infraestructura gestionada y seguridad"
              image={<Image src="/images/icon-ig.svg" alt="Infraestructura gestionada y seguridad" width={70} height={70} />}
            >
              <p>Operamos y vigilamos la plataforma donde corren las aplicaciones de nuestros clientes: doble salida a Internet con equipos de respaldo y cada aplicación crítica en su propio entorno aislado.</p>
              <p>Los cambios disruptivos se hacen solo en ventanas acordadas, fuera del horario de trabajo y con aviso previo.</p>
            </ServicioCard>

            <ServicioCard title="Software libre"
              image={<Image src="/images/icon-sl.svg" alt="Software libre" width={70} height={70} />}
            >
              <p>Publicamos herramientas bajo licencia GPL, abiertas y auditables, como S-FiDE, COD-Viewer y DJO-Viewer.</p>
              <p>Podés usarlas, estudiarlas, adaptarlas e integrarlas a tus propios sistemas.</p>
            </ServicioCard>
          </div>
        </InnerContainer>
      </div>

      <SectionHeading title="Clientes" className="pt-20 pb-8">
        <p className="text-lead text-c2">Clientes que confían en nosotros:</p>
      </SectionHeading>

      <div className="carousel-wrap xl:mx-14 mt-4">
        <ClientsCarousel logos={clientes} />
      </div>

      <SectionHeading title="Nosotros" id="nosotros">
        <div className="space-y-4 lg:space-y-8 text-lead text-c2 max-w-4xl">
          <p>Con más de 30 años de experiencia, somos una consultora IT especializada en el desarrollo de aplicaciones comerciales y servicios informáticos. </p>

          <p>Desde Argentina, extendemos nuestro alcance hacia la región y el resto del mundo.</p>
        </div>
      </SectionHeading>

      <div className="container relative">
        <div className="relative w-full h-auto">
          <Image src="/images/nosotros.jpg"
            width={1400}
            height={0}
            style={{ width: '100%', height: 'auto' }}
            sizes="100vw"
            priority
            alt="Acerca de Sauken" />
          <InnerContainer className="absolute bottom-0 left-0" >
            <Image src="/images/logo-light.svg" alt="Sauken" width={341} height={50} />
          </InnerContainer>
        </div>
        <InnerContainer className="py-10" symetric={true}>
          <p className="text-c2 text-lg">Nuestro stack se compone de tecnologías líderes como:</p>
          <Stack />
        </InnerContainer>
      </div>

      <SectionHeading title="¡Contáctanos!" className="pb-8" id="contacto" />

      <div className="container bg-[url(/images/form-bg-3.svg)] bg-[position:1rem_100%] sm:bg-[position:2rem_calc(100%-2rem)] bg-no-repeat pb-[60px] mb-6">
        <InnerContainer>
          <div className="flex  justify-between gap-x-24">
            <div className="flex-grow">
              <ContactForm />
            </div>
            <FadeIn to="left" className="hidden lg:block">
              <Image src="/images/form-bg-2.svg" width={93} height={535} alt="" />
            </FadeIn>
          </div>
        </InnerContainer>
      </div>
    </main>
  );
}
