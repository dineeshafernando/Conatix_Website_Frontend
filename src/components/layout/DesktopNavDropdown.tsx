"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { NavSection, NavItem } from "@/lib/navigation"

interface DesktopNavDropdownProps {
  navItem: NavSection
}

export default function DesktopNavDropdown({navItem}:DesktopNavDropdownProps){
  const {label, href, children} = navItem;

  return (
    <div className="relative group/nav">
      <Link href={href} className="flex items-center">
        <span className="relative nav-hover-text">
          {label}
          <span className="nav-hover-animation group-hover/nav:scale-x-100"></span>
        </span>
        <ChevronDown className="absolute left-[98%] top-1/2 -translate-y-1/2 transition-transform duration-300 group-hover/nav:rotate-180 pointer-events-none" />
      </Link>
      <ul className="absolute top-full left-1/2 -translate-x-1/2 w-max mt-1 hidden bg-dark-grey shadow-md rounded-xl p-4 z-50 group-hover/nav:block">
        {children?.map(({label, href}:NavItem) => {
          return (
            <li key={label} className="mb-2">
              <Link href={href} className="relative group/item nav-hover-text">
                {label}
                <span className="nav-hover-animation group-hover/item:scale-x-100"></span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}