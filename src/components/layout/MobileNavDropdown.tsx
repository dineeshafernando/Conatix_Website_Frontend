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
    <div className="flex flex-col items-center gap-2">
      <button onClick={() => toggleNav(label)} className="relative group nav-hover-text">
        {label}
        {label == activeNav ? <ChevronUp className="nav-chevron-inline" /> : <ChevronDown className="nav-chevron-inline" />}
        <span className="nav-hover-animation"></span>
      </button>
      {label == activeNav && <ul>
        {newNavChildren!.map(({label, href}:NavItem) => {
          return (
            <li className="mb-2" key={label}>
              <Link href={href} className="relative group nav-hover-text">
                {label}
                <span className="nav-hover-animation"></span>
              </Link>
            </li>
          )
        })}
      </ul>}
    </div>
  )
}