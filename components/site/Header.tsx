import Link from "next/link"
import { Boton } from "../Boton"
import Navigation from "./Navigation"
import Image from "next/image"
import MobileMenu from "./MobileMenu"

export const Header = () => {
  return (
    <header>
      <div className="w-full flex flex-wrap sm:flex-nowrap items-center justify-between px-[calc(2rem+3%)] py-8 sm:p-8   text-white bg-c1 relative">
         <div className="hidden lg:order-2 lg:block">
         <Navigation />

         </div>
         <div className="lg:hidden sm:order-3 flex flex-col items-center">
         <MobileMenu />

         </div>
         <div className="actions sm:order-2 lg:order-3 sm:max-lg:ml-auto sm:max-lg:mr-8">
            <Link href="https://sauken.com.ar/cgi-bin/wspd_cgi.sh/WService=Sauken/app/login.html?app=brm" target="_blank">
               <Boton variant="secondary">Ingresar</Boton>
            </Link>
         </div>
         <div className="lg:order-1 w-full sm:w-auto mt-12 sm:mt-0">
            <Link href="/">
            <Image src="/images/logo-light.svg" alt="Sauken" width={219} height={32} className="w-[800px] sm:w-[219px]" />
            </Link>
         </div>
      </div>
      
   </header>
  )
}