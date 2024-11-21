import { cn } from "@/lib/utils"
import { BsFacebook, BsLinkedin, BsTwitterX } from "react-icons/bs"
import Reveal from "./animations/Reveal"

export const SocialIcons = ({className} : {className?: string}) => {
  return (
    <div className={cn("flex gap-x-8 text-xl items-center",className)}>
      <Reveal delay={0.25}>
      <a href="https://www.linkedin.com/company/grupo-sauken-s.a" rel="noopener noreferrer" target="_blank">
        <BsLinkedin />
      </a>
      </Reveal>
      <Reveal delay={0.5}>
      <a href="#" rel="noopener noreferrer" target="_blank">
      <BsTwitterX />
      </a>
      </Reveal>
      <Reveal delay={0.75}>
      <a href="https://www.facebook.com/GrupoSauken/" rel="noopener noreferrer" target="_blank">
      <BsFacebook />
      </a>
      </Reveal>
    </div>
  )
}