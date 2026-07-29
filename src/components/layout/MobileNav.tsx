"use client"

import {useState} from "react"

import Link from "next/link"
import Image from "next/image"
import { navigation } from "@/lib/Navigation"
import {ChevronDown, Menu, X} from "lucide-react"

export default function MobileNav() {

  const [isHamburger, setIsHamburger] = useState(true)

  function toggleHamburger() {
    setIsHamburger(prev => !prev)
  }

  const navigations = navigation.map((nav) => {
    return (
      <li key={nav.label}>
        {nav.children? (
          <div className="group text-center">
            <div className="relative flex items-center justify-center hover-effect">
              <button>{nav.label}</button>
              <ChevronDown className="absolute right-0" />
            </div>
            <ul className="group-hover:block hidden">
              {nav.children.map(child => 
                <li key={child.label}>
                  <Link href={child.href} className="hover-effect">{child.label}</Link>
                </li>
                )
              }
            </ul>
          </div>
        )
      : <Link href={nav.href!} className="hover-effect">{nav.label}</Link>}
      </li>
    )
  })

  return (
    <nav className="bg-grey relative flex justify-between p-5 mb-5 font-denson-bold sticky top-0">
      <Link href="/">
        <Image src="/logo-2.png" alt="company logo" width={100} height={100} />
      </Link>
      <button onClick={toggleHamburger}>{isHamburger ? <Menu size={48} className="cursor-pointer" /> : <X size={48} className="cursor-pointer"/>}</button>
      {isHamburger ? null : 
      <div className="bg-grey z-1000 p-5 pt-0 absolute text-xl top-full left-0 w-full text-center">
        <ul className="flex-col">{navigations}</ul>
      </div>
      }
    </nav>
  )
}