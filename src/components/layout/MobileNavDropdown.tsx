"use client"

import {NavSection, NavItem} from "@/lib/navigation"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"

interface MobileNavDropdownProps {
  navItem: NavSection,
  activeNav: string | null,
  toggleNav: (activeNav:string) => void,
}

export default function MobileNavDropdown({navItem, activeNav, toggleNav}:MobileNavDropdownProps) {
  const {label, children} = navItem;

  return (
    <div className="relative flex flex-col items-center gap-2">
        <button onClick={() => toggleNav(label)} className="flex items-center gap-1 hover-effect">
          {label}
          {label == activeNav ? <ChevronUp /> : <ChevronDown />}
        </button>
      {label == activeNav && <ul>
        {children?.map(({label, href}:NavItem) => {
          return (
            <li className="mb-2"><Link href={href} className="hover-effect">{label}</Link></li>
          )
        })}
      </ul>}
    </div>
  )
}