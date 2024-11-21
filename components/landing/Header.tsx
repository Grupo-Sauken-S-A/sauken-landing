import Link from "next/link"
import Image from "next/image"

export const Header = () => {
  return (
    <header className="absolute w-full top-0 left-0">

      <div className="container">
         
         <div className="flex items-center justify-start py-16 sm:py-[84px] text-white gap-x-16 lg:gap-x-24 xl:gap-x-36">
            <div>
               <Link href="/">
               <Image src="/images/logo-light.svg" alt="Sauken" width={219} height={32}  />
               </Link>
            </div>
            <Image src="/images/landing/chevron-left.svg" alt="" width={15} height={31} className="hidden sm:block" />
         </div>
         
      </div>
   </header>
  )
}