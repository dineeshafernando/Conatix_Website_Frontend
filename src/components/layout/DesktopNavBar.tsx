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
    <nav className="bg-dark-grey text-light-grey flex justify-start items-center gap-8 p-5 pr-7 font-denson-bold">
      <Logo />
      <ul className="flex-1 flex items-center justify-between text-lg">
        {navigations}
      </ul>
    </nav>
  )
}