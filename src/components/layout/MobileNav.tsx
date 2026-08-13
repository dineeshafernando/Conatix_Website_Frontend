"use client"

import {useState} from "react"

import Link from "next/link"
import Image from "next/image"
import { navigation } from "@/lib/navigation"
import {Menu, X} from "lucide-react"
import MobileNavDropdown from "./MobileNavDropdown"

export default function MobileNav() {

  const [isHamburger, setIsHamburger] = useState<boolean>(true)
  const [activeDropdown, setAciveDropdown] = useState<string | null>(null)

  function toggleHamburger() {
    setIsHamburger(prev => !prev)
    setAciveDropdown(null)
  }

  function toggleNavSelector(activeNav:string | null) {
    setAciveDropdown((prevActive) => (prevActive === activeNav ? null : activeNav))
  }

  const navigations = navigation.map((nav) => {
    return (
      <li key={nav.label} className="mb-4">
        {nav.children? 
          <MobileNavDropdown navItem={nav} activeNav={activeDropdown} toggleNav={toggleNavSelector}  /> : 
          <Link href={nav.href!} className="hover-effect relative group">{nav.label}<span className="nav-hover-animation"></span></Link>}
      </li>
    )
  })

  return (
    <nav className="bg-dark-grey relative flex justify-between p-5 mb-5 font-denson-bold sticky top-0">
      <Link href="/">
        <Image src="/logo-2.png" alt="company logo" width={100} height={100} />
      </Link>
      <button onClick={toggleHamburger}>{isHamburger ? <Menu size={48} className="cursor-pointer" /> : <X size={48} className="cursor-pointer"/>}</button>
      {isHamburger ? null : 
      <div className="bg-grey opacity-90 z-1000 p-5 pt-0 absolute text-xl top-full left-0 w-full text-center">
        <ul>{navigations}</ul>
      </div>
      }
    </nav>
  )
}