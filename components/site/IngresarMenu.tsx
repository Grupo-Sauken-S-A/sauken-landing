"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronDown, Lock } from "lucide-react"
import { Boton } from "../Boton"
import { INGRESAR_ITEMS } from "@/constants/accesos"

export default function IngresarMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <Boton variant="secondary" onClick={() => setOpen(!open)} aria-expanded={open} aria-haspopup="true">
        Ingresar <ChevronDown size={16} className={`ml-1 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </Boton>
      {open && (
        <ul className="absolute right-0 top-full mt-2 w-72 bg-white text-c1 shadow-lg z-50 py-2">
          {INGRESAR_ITEMS.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                {...(item.external ? { target: "_blank", rel: item.nofollow ? "noopener noreferrer nofollow" : "noopener noreferrer" } : {})}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between gap-3 px-5 py-3 text-sm hover:bg-[#EDF1FF]"
              >
                {item.title}
                {item.badge && (
                  <span className="shrink-0 inline-flex items-center gap-1 bg-c1 text-white text-xs px-2 py-0.5">
                    <Lock size={11} aria-hidden="true" />{item.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
          <li className="border-t border-lightblue mt-2 pt-2">
            <Link href="/#accesos" onClick={() => setOpen(false)} className="block px-5 py-3 text-sm font-medium text-c2 hover:bg-[#EDF1FF]">
              Ver todos los accesos
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}
