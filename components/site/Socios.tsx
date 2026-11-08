import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { H4 } from "@/components/Typography"
import { SOCIOS } from "@/constants/socios"

export const Socios = () => (
   <div>
      <p className="text-lead text-c2 max-w-4xl">Empresas y productos con los que trabajamos y en los que participamos.</p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
         {SOCIOS.map((s) => (
            <a
               key={s.name}
               href={s.href}
               target="_blank"
               rel="noopener noreferrer"
               className="group flex flex-col bg-c1 text-white p-6 lg:p-8 transition-colors hover:bg-c6 focus-visible:outline-2 focus-visible:outline-c2"
            >
               <div className="flex items-center justify-between gap-4">
                  <Image src={s.logo} alt={s.name} width={s.logoWidth} height={s.logoHeight} className="h-12 w-auto max-w-[70%]" />
                  <span className="shrink-0 border border-white/40 px-2 py-1 text-xs uppercase tracking-wide">{s.tipo}</span>
               </div>
               <H4 as="h3" className="sr-only">{s.name}</H4>
               <p className="mt-6 text-sm leading-relaxed opacity-90">{s.description}</p>
               <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium group-hover:underline underline-offset-4">
                  {s.cta} <ArrowUpRight size={16} aria-hidden="true" />
               </span>
            </a>
         ))}
      </div>
   </div>
)
