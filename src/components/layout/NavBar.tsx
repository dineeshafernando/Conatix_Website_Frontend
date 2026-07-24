import Link from "next/link"
import Image from "next/image"
import { navigation } from "@/lib/Navigation"
import {ChevronDown} from "lucide-react"

export default function NavBar() {

  const navigations = navigation.map((nav) => {
    return (
      <li key={nav.label}>
        {nav.children? (
          <div className="group relative">
            <div className="flex items-center hover-effect">
              <button>{nav.label}</button>
              <ChevronDown />
            </div>
            <ul className="group-hover:block hidden absolute">
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
    <nav className="bg-grey flex justify-between p-5 mb-5 font-denson-bold sticky top-0">
      <Link href="/">
        <Image src="/logo-2.png" alt="company logo" width={100} height={100} />
      </Link>
      <ul className="flex items-center gap-6">
        {navigations}
      </ul>
    </nav>
  )
}