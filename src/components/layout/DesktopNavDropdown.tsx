"use client"


import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"
import { NavSection, NavItem } from "@/lib/navigation"

interface DesktopNavDropdownProps {
  navItem: NavSection
}

export default function DesktopNavDropdown({navItem}:DesktopNavDropdownProps){
  const {label, children} = navItem;

  return (
    <div className="relative group">
      <button className="hover-effect flex">
        {label}
        <ChevronDown className="pointer-events-none" />
      </button>
      <ul className="absolute top-full left-1/2 -translate-x-1/2 w-max hidden bg-grey shadow-md rounded-xl p-4 z-50 group-hover:block">
        {children?.map(({label, href}:NavItem) => {
          return (
            <li key={label}><Link href={href}>{label}</Link></li>
          )
        })}
      </ul>
    </div>
  )
}