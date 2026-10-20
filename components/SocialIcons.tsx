import { cn } from "@/lib/utils"
import { BsFacebook, BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs"
import type { IconType } from "react-icons"
import Reveal from "./animations/Reveal"
import { SOCIAL } from "@/constants/site"

const REDES: { name: string; href: string | null; Icon: IconType }[] = [
  { name: "LinkedIn", href: SOCIAL.linkedin, Icon: BsLinkedin },
  { name: "X", href: SOCIAL.x, Icon: BsTwitterX },
  { name: "Facebook", href: SOCIAL.facebook, Icon: BsFacebook },
  { name: "GitHub", href: SOCIAL.github, Icon: BsGithub },
]

export const SocialIcons = ({className} : {className?: string}) => {
  return (
    <div className={cn("flex gap-x-8 text-xl items-center",className)}>
      {REDES.map(({ name, href, Icon }, i) => (
        <Reveal key={name} delay={0.25 * (i + 1)}>
          {href ? (
            <a href={href} aria-label={`Sauken en ${name}`} rel="noopener noreferrer" target="_blank">
              <Icon />
            </a>
          ) : (
            // Sin cuenta todavía: el ícono se ve pero el clic no lleva a ninguna parte
            <span role="img" aria-label={`${name} (próximamente)`} title="Próximamente" className="cursor-default">
              <Icon />
            </span>
          )}
        </Reveal>
      ))}
    </div>
  )
}
