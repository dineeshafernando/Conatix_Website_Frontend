"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface LogoAttributes {
  src: string;
  alt: string;
}

interface LogoDict {
  [pathname: string]: LogoAttributes;
}

// logo data stored in a dictionary 
const logoDict: LogoDict = {
  "/threats/malware": { src: "/logos/conatix-cysana.png", alt: "Conatix Cysana logo" },
  "/threats/ransomware": { src: "/logos/conatix-cysana.png", alt: "Conatix Cysana logo" },
  "/threats/insider-fraud": { src: "/logos/conatix-omniskia.png", alt: "Conatix Omniskia logo" },
  "/threats/suppliers": { src: "/logos/conatix-omniskia.png", alt: "Conatix Omniskia Logo" },
};

export default function Logo() {
  const pathname = usePathname();

  // Pick matching logo based on current URL or fall back to default Conatix logo
  const logo = logoDict[pathname] || {
    src: "/logos/conatix.png",
    alt: "Conatix logo",
  };

  return (
    <Link href="/">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={150}
        height={150}
        priority
      />
    </Link>
  );
}