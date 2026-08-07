import Link from "next/link"
import Image from "next/image"
import { navigation, NavSection } from "@/lib/navigation"
import { IconType } from "react-icons"
import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


type SocialLinkProps = {
  href: string;
  icon: IconType; // Tells typescript to expect a React Icon component
  label: string;
}

export default function Footer() {

  const socialLinksData = [
    { 
      href: "https://www.linkedin.com/company/conatix/", 
      icon: FaLinkedin, // icon component reference
      label: "LinkedIn" 
    },
    { 
      href: "https://www.youtube.com/@conatix-admin", 
      icon: FaYoutube, 
      label: "YouTube" 
    },
    { 
      href: "https://x.com/conatix", 
      icon: BsTwitterX, 
      label: "X (Twitter)" 
    },
    { 
      href: "https://www.instagram.com/conatix1/", 
      icon: FaInstagram, 
      label: "Instagram" 
    },
  ];

  const socialLinkElements = socialLinksData.map(({href, icon:Icon, label}:SocialLinkProps) => {
    return (
      <a key={label} href={href} target="_blank"><Icon className="footer-icon hover-effect" /></a>
    )
  })

  const navigationElements = navigation.slice(1).map(({label, href, children}:NavSection) => {

    const childNavs = children ? children.map(({label, href}:NavSection) => {
      return <Link key={label} href={href!} className="footer-nav">{label}</Link>
    }) : null

    return (
      <div key={label} className="flex flex-col items-start gap-2">
        <Link href={href} className="text-electric-blue footer-nav">{label}</Link>
        {childNavs}
      </div>
    )
  })

  return (
    <footer className="bg-grey p-5 gap-4 text-xl flex justify-center">
      <div className=" flex flex-col gap-4">
        <Link href="/"><Image src="/logo-2.png" width={100} height={100} alt="company logo"></Image></Link>
        <p>© Conatix. All rights reserved.</p>
        <div className="flex gap-4">
          {socialLinkElements}
        </div>
      </div>
      <div className="flex gap-4 text-left">
        {navigationElements}
      </div>
    </footer>
  )
}