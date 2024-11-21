import { cn } from "@/lib/utils"
import { H2 } from "@/components/Typography"
import { InnerContainer } from "./InnerContainer"
import Reveal from "../animations/Reveal"

interface SectionHEadingProps {
   title: string
   className?: string
   children?: React.ReactNode
   id?: string
}

export const SectionHeading = ({title, children, className, id}:SectionHEadingProps) => {
  return (
   <section className={cn('py-12 lg:py-20',className)} >
      <div className="container" {...(id ? { id } : {})} >
         <InnerContainer>
            <Reveal>
            <H2>{title}</H2>
            {children ? <div className="pt-10">{children}</div> : null}
            </Reveal>
         </InnerContainer>
      </div>    
   </section>
  )
}