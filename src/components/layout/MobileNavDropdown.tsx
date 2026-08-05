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
  const {label, href, children} = navItem;

  // adds the main navigation as one of the children dropdown but named ${label} Overview for better user experience on mobile view
  const newNavChildren = [
    {
    label: `${label} Overview`,
    href: href,
    },
    ...children!,
  ]

  return (
    <div className="relative flex flex-col items-center gap-2">
      <button onClick={() => toggleNav(label)} className="flex items-center gap-1 hover-effect">
        {label}
        {label == activeNav ? <ChevronUp /> : <ChevronDown />}
      </button>
      {label == activeNav && <ul>
        {newNavChildren!.map(({label, href}:NavItem) => {
          return (
            <li className="mb-2"><Link href={href} className="hover-effect">{label}</Link></li>
          )
        })}
      </ul>}
    </div>
  )
}