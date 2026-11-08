import Link from "next/link"
import { Boton } from "@/components/Boton"
import { H4 } from "@/components/Typography"
import { INFRA_PILARES } from "@/constants/infraestructura"

// Resumen para el home; el detalle completo vive en /infraestructura
export const InfraestructuraResumen = () => (
   <div>
      <p className="text-lead text-c2 max-w-4xl">
         Operamos, vigilamos y documentamos la plataforma donde corren las aplicaciones de nuestros clientes: infraestructura que se cuida sola… y con personas atentas detrás. Trabajamos con asistencia de inteligencia artificial y supervisión humana en cada acción sobre producción. <Link href="/como-operamos-con-ia" className="underline underline-offset-4">Leé cómo</Link>.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
         {INFRA_PILARES.map((p) => (
            <div key={p.title} className="border border-lightblue p-6 text-c2">
               <H4 as="h3" className="text-c1 mb-3">{p.title}</H4>
               <p className="text-sm">{p.resumen}</p>
            </div>
         ))}
      </div>
      <div className="mt-10">
         <Link href="/infraestructura">
            <Boton variant="outline" className="bg-c1 text-white hover:bg-c2">Conocé cómo operamos</Boton>
         </Link>
      </div>
   </div>
)
