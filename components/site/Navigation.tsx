"use client";
import Link from "next/link";

import { MENU_ITEMS } from "@/constants";
import StaggeredEntrance from "../animations/StaggeredEntrance";

const Navigation = () => {

  return (
    <StaggeredEntrance className="navigation space-x-10 flex">
      {MENU_ITEMS.map((item, navIndex) => {
        return (
          <Link key={navIndex} href={item.url} className="menu-item text-sm font-medium inline-block">
            {item.title}
          </Link>
        )
      }
      )}
    </StaggeredEntrance>
  )
}
export default Navigation