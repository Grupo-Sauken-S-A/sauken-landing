"use client"

import { MENU_ITEMS } from "@/constants"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { LuMenu, LuX } from "react-icons/lu"
import { SocialIcons } from "../SocialIcons"
import Image from "next/image"
import StaggeredEntrance from "../animations/StaggeredEntrance"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick)
      document.addEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "visible"
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
      document.removeEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = "visible"
    }
  }, [isOpen])

  const menuVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  }

  return (
    <>
      <button onClick={toggleMenu} className="text-[40px] text-white z-40 relative">
        {isOpen ? <LuX /> : <LuMenu />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full sm:w-96 h-screen bg-c2 overflow-y-auto z-40 flex flex-col items-end justify-between"
          >
            <div className="p-8 pb-2 top-0 absolute z-50 bg-c2 flex justify-end">
              <button onClick={closeMenu} className="text-[40px] text-white">
                <LuX />
              </button>
            </div>
            <div className="p-8 pt-28">
              <Link href="/" onClick={closeMenu} className="block w-fit ml-auto">
                <Image src="/images/iso-white.svg" width={58} height={58} alt="Sauken Desarrollo de Software" />
              </Link>
            </div>
            <nav className="p-8 pt-0">
              <StaggeredEntrance className="flex flex-col items-end">
                {MENU_ITEMS.map((item,mobNavIndex) => (
                  <Link
                    key={mobNavIndex}
                    href={item.url}
                    className="mobile-menu-item block py-3 text-3xl text-white"
                    onClick={closeMenu}
                  >
                    {item.title}
                  </Link>
                ))}
              </StaggeredEntrance>
            </nav>
            <div className="p-8 pt-0">
              <SocialIcons />
            </div>
            {/* Add padding at the bottom to ensure last items are reachable */}
            <div className="h-20"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}