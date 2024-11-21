"use client"

import { useState, useRef} from "react"
import Image from "next/image"
import Link from "next/link"

interface Logo {
  img: string
  link?: string
}

interface LogoCarouselProps {
  logos: Logo[]
  logoWidth?: number
  logoHeight?: number
  direction?: "ltr" | "rtl"
  speed?: number
  gap?: number
}

export default function ClientsCarousel({
  logos,
  logoWidth = 210,
  logoHeight = 109,
  direction = "ltr",
  speed = 80,
  gap = 10,
}: LogoCarouselProps) {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const totalWidth = logos.length * (logoWidth + gap)
  const duration = totalWidth / speed

  const LogoWrapper = ({ logo }: { logo: Logo; index: number }) => {
    const content = (
      <div
        className="logo-wrapper flex-shrink-0 transition-transform duration-300 ease-in-out"
        style={{ width: `${logoWidth}px` }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Image
          src={logo.img}
          alt=""
          width={logoWidth}
          height={logoHeight}
          loading="eager"
          className="transition-filter duration-300 ease-in-out grayscale hover:grayscale-0"
        />
      </div>
    )

    return logo.link ? (
      <Link href={logo.link} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    ) : content
  }

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={containerRef}
        className={`flex ${isPaused ? 'pause-animation' : ''}`}
        style={{
          gap: `${gap}px`,
          width: `${totalWidth * 2}px`,
          animation: `scroll${direction.toUpperCase()} ${duration}s linear infinite`,
          willChange: 'transform',
        }}
      >
        {[...logos, ...logos].map((logo, logoIndex) => (
          <LogoWrapper key={logoIndex} logo={logo} index={logoIndex} />
        ))}
      </div>
      <style jsx global>{`
        @keyframes scrollLTR {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRTL {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .pause-animation {
          animation-play-state: paused;
        }
        .logo-wrapper:hover {
          z-index: 10;
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-wrapper, .logo-wrapper img {
            transition: none;
          }
        }
      `}</style>
    </div>
  )
}