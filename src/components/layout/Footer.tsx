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
      <a key={label} href={href} target="_blank"><Icon className="w-5 h-5 hover-effect" /></a>
    )
  })

  const navigationElements = navigation.map(({label, href, children}:NavSection) => {
    if (!children) return null;

    const childNavs = children.map(({label, href}:NavSection) => {
      let displayLabel = label;
      if (label === "Cysana MSP/MSSP") displayLabel = "CYSANA MSP";
      else if (label === "Cysana Enterprise") displayLabel = "CYSANA FNT";
      else if (label === "Omniskia Enterprise") displayLabel = "OMNISKIA ENT";
      else if (label === "Omniskia VSDN") displayLabel = "OMNISKIA VSDN";
      else if (label === "TPRM Suite") displayLabel = "TPRM SUITE";

      return (
        <Link key={label} href={href!} className="relative group tracking-tight hover:text-white transition-colors">
          {displayLabel}
          <span className="nav-hover-animation"></span>
        </Link>)
    })

    return (
      <div key={label} className="flex flex-col items-start gap-2 text-electric-blue">
        {childNavs}
      </div>
    )
  })

  return (
    <footer className="bg-dark-grey p-5 gap-4 text-xs flex justify-center font-bungee-hairline [-webkit-text-stroke:1px_currentColor]">
      <div className=" flex flex-col gap-2">
        <Link href="/"><Image src="/images/logos/conatix.png" width={100} height={100} alt="company logo"></Image></Link>
        <p className="text-electric-blue">Copyright © 2026 Conatix</p>
        <p className="text-electric-blue">All rights reserved.</p>
        <div className="flex gap-4">
          {socialLinkElements}
        </div>
      </div>
      <div className="flex gap-3 text-left">
        {navigationElements}
      </div>
    </footer>
  )
}