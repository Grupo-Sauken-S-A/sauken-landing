import type { Metadata } from 'next'
import StaggeredEntrance from "@/components/animations/StaggeredEntrance"
import { Boton } from "@/components/Boton"
import { H3 } from "@/components/Typography"
import Link from "next/link"
import { FaRegCircleCheck } from "react-icons/fa6";


export const metadata: Metadata = {
  title: 'Gracias por su consulta | Sauken',
  description: 'Agradecemos su contacto y nos pondremos en contacto con usted pronto.',
  robots: 'noindex,nofollow',
}


const PageGracias = () => {
  return (
    <main>
      <section>
        <div className="container py-24 xl:py-60 flex items-center justify-center">
          <StaggeredEntrance className="px-10 space-y-6 text-center">
            <FaRegCircleCheck className="text-slate-400 text-[2.5rem] mx-auto" />
            <H3>Recibimos su consulta</H3>
            <p>A la brevedad estaremos en contacto con ud.</p>
            <Boton>
              <Link href="/">Volver al sitio</Link>
            </Boton>
          </StaggeredEntrance>
        </div>
      </section>
    </main>
  )
}
export default PageGracias