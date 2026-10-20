import Image from "next/image"
import type { IconType } from "react-icons"
import { SiApache, SiApacheguacamole, SiDovecot, SiGrafana, SiLetsencrypt, SiNextcloud, SiNextdotjs, SiNodedotjs, SiQemu, SiReact, SiTypescript } from "react-icons/si"
import StaggeredEntrance from "./animations/StaggeredEntrance"
import { TECHSTACK } from "@/constants"

// Tecnologías de infraestructura y plataforma (fuente: documentación de infraestructura de Sauken)
const TECH_ICONS: { label: string; Icon?: IconType; color?: string }[] = [
   { label: "Apache HTTP Server", Icon: SiApache, color: "#D22128" },
   { label: "Postfix" },
   { label: "Dovecot", Icon: SiDovecot, color: "#1F2B50" },
   { label: "Nextcloud", Icon: SiNextcloud, color: "#0082C9" },
   { label: "Apache Guacamole", Icon: SiApacheguacamole, color: "#578B34" },
   { label: "Grafana", Icon: SiGrafana, color: "#F46800" },
   { label: "Let's Encrypt", Icon: SiLetsencrypt, color: "#003A70" },
   { label: "KVM / QEMU", Icon: SiQemu, color: "#FF6600" },
   { label: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
   { label: "Next.js", Icon: SiNextdotjs, color: "#000000" },
   { label: "React", Icon: SiReact, color: "#0E7490" },
   { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
]

export const Stack = () => {

   return (
      <>
         <StaggeredEntrance className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-4 sm:gap-x-12 gap-y-8 xl:gap-y-12 mt-12">
            {TECHSTACK.map((tech, index) => (
               <div key={index} className="flex items-center justify-center h-16">
                  <Image
                     src={tech.src}
                     alt={tech.alt}
                     width={tech.width}
                     height={tech.height}
                     className="max-w-full max-h-full object-contain"
                  />
               </div>
            ))}
         </StaggeredEntrance>

         <p className="text-c2 text-lg mt-16">Y en nuestra infraestructura y plataformas:</p>
         <StaggeredEntrance className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 mt-8">
            {TECH_ICONS.map(({ label, Icon, color }) => (
               <div key={label} className="flex items-center gap-3 h-12 text-c1 font-medium">
                  {Icon && <Icon size={30} color={color} aria-hidden="true" className="shrink-0" />}
                  <span className="text-base leading-tight">{label}</span>
               </div>
            ))}
         </StaggeredEntrance>
      </>
   )
}
