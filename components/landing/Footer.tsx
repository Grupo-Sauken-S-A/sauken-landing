import Image from "next/image"
import { SocialIcons } from "../SocialIcons"
import { InnerContainer } from "@/components/site/InnerContainer"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-c3 pt-10 pb-16">
      <div className="container relative">
        <InnerContainer >
          <div className="grid grid-cols-6 gap-y-12 ">
            <div className="flex col-span-6 lg:col-span-2 lg:order-2 items-center ">
              <div className="bg-[url(/images/footer-bg-1.svg)] bg-cover aspect-square bg-no-repeat p-16">
                <Link href="/">
                  <Image src="/images/iso-white.svg" width={58} height={58} alt="Sauken Desarrollo de Software" />
                </Link>
              </div>
            </div>
            <div className="flex col-span-6 md:col-span-3 lg:col-span-2 items-center lg:order-1">
              <div>
                <p className="leading-[1.75] text-base">+ <span className="text-lg tracking-wide">54 9 351519 1003</span><br />
                  <a href="mailto:info@sauken.com.ar"><b>info@sauken.com.ar</b></a><br />
                  Gral. Alvear 84, 4º Piso, Oficina C <br />
                  Ciudad de Córdoba, Argentina</p>
                <SocialIcons className="text-base mt-10" />
              </div>
            </div>
            <div className="flex col-span-6 md:col-span-3 lg:col-span-2  flex-col justify-end h-full lg:order-3">
              <div className="text-xs pt-12"><b className="uppercase">2024 Sauken</b> &copy; All Rights Reserved</div>
            </div>
          </div>
        </InnerContainer>
        <a href="http://qr.afip.gob.ar/?qr=MkTuqQtDKqN5MJ3D2hDPZQ,," target="_F960AFIPInfo" className="absolute right-[30px] bottom-0"><Image src="/images/data-fiscal.jpg" width={51} height={70} alt="data fiscal" className="" /></a>
      </div>
    </footer>
  )
}