import { ArrowUpRight, Lock } from "lucide-react"
import Link from "next/link"
import { ACCESOS } from "@/constants/accesos"
import { H4 } from "@/components/Typography"

export const Accesos = () => {
   return (
      <div className="space-y-16">
         {ACCESOS.map((grupo) => (
            <div key={grupo.title}>
               <H4 as="h3" className="text-c1 mb-6">{grupo.title}</H4>
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                  {grupo.items.map((item) => (
                     <Link
                        key={item.title}
                        href={item.href}
                        {...(item.external ? { target: "_blank", rel: item.nofollow ? "noopener noreferrer nofollow" : "noopener noreferrer" } : {})}
                        className="group flex flex-col justify-between border border-lightblue p-6 text-c2 transition-colors hover:bg-[#EDF1FF] focus-visible:outline-2 focus-visible:outline-c2"
                     >
                        <div>
                           <div className="flex items-start justify-between gap-4">
                              <h4 className="text-xl font-medium text-c1">{item.title}</h4>
                              {item.badge && (
                                 <span className="shrink-0 inline-flex items-center gap-1 bg-c1 text-white text-xs px-2 py-1">
                                    <Lock size={12} aria-hidden="true" />{item.badge}
                                 </span>
                              )}
                           </div>
                           <p className="mt-3 text-sm">{item.description}</p>
                        </div>
                        <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-c2 group-hover:underline underline-offset-4">
                           {item.cta} <ArrowUpRight size={16} aria-hidden="true" />
                        </span>
                     </Link>
                  ))}
               </div>
            </div>
         ))}
      </div>
   )
}
