import Link from "next/link"
import Logo from "@/components/layout/Logo"
import DesktopNavDropdown from "@/components/layout/DesktopNavDropdown"
import { navigation, NavSection } from "@/lib/navigation"

export default function NavBar() {

  const navigations = navigation.map((nav:NavSection) => {
    return (
      <li key={nav.label}>
        {nav.children ? <DesktopNavDropdown navItem={nav} />
      : <Link href={nav.href!} className="relative group nav-hover-text">
          {nav.label}
          <span className="nav-hover-animation"></span>
        </Link>}
      </li>
    )
  })

  return (
    <nav className="bg-dark-grey text-light-grey flex justify-between py-5 px-2 font-denson-bold sticky top-0 z-50">
      <Logo />
      <ul className="flex items-center gap-6 text-md">
        {navigations}
      </ul>
    </nav>
  )
}