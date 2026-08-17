import Link from "next/link"
import Image from "next/image"
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
    <nav className="bg-dark-grey text-nav-grey flex justify-between p-5 font-denson-bold sticky top-0 z-50">
      <Link href="/">
        <Image src="/images/logos/conatix.png" alt="company logo" width={150} height={150} />
      </Link>
      <ul className="flex items-center gap-6 text-md">
        {navigations}
      </ul>
    </nav>
  )
}