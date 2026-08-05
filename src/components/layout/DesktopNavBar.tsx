import Link from "next/link"
import Image from "next/image"
import DesktopNavDropdown from "@/components/layout/DesktopNavDropdown"
import { navigation, NavSection } from "@/lib/navigation"

export default function NavBar() {

  const navigations = navigation.map((nav:NavSection) => {
    return (
      <li key={nav.label}>
        {nav.children ? <DesktopNavDropdown navItem={nav} />
      : <Link href={nav.href!} className="hover-effect relative group">
          {nav.label}
          <span className="nav-hover-animation"></span>
        </Link>}
      </li>
    )
  })

  return (
    <nav className="bg-grey flex justify-between p-5 font-denson-bold sticky top-0">
      <Link href="/">
        <Image src="/logo-2.png" alt="company logo" width={100} height={100} />
      </Link>
      <ul className="flex items-center gap-6 text-xl">
        {navigations}
      </ul>
    </nav>
  )
}