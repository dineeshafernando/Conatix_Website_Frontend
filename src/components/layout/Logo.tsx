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
  // Threats Routes
  "/threats/malware": { src: "/images/logos/conatix-cysana-orange.png", alt: "Conatix Cysana logo" },
  "/threats/ransomware": { src: "/images/logos/conatix-cysana-orange.png", alt: "Conatix Cysana logo" },
  "/threats/insider-fraud": { src: "/images/logos/conatix-omniskia.png", alt: "Conatix Omniskia logo" },
  "/threats/supplier": { src: "/images/logos/conatix-omniskia.png", alt: "Conatix Omniskia Logo" },

  // Solutions Routes
  "/solutions/malware": { src: "/images/logos/conatix-cysana-orange.png", alt: "Conatix Cysana orange logo" },
  "/solutions/ransomware": { src: "/images/logos/conatix-cysana-orange.png", alt: "Conatix Cysana orange logo" },
  "/solutions/insider-fraud": { src: "/images/logos/conatix-omniskia.png", alt: "Conatix Omniskia logo" },
  "/solutions/supplier": { src: "/images/logos/conatix-omniskia.png", alt: "Conatix Omniskia Logo" },
};

export default function Logo() {
  const pathname = usePathname();

  // Pick matching logo based on current URL or fall back to default Conatix logo
  const logo = logoDict[pathname] || {
    src: "/images/logos/conatix.png",
    alt: "Conatix logo",
  };

  return (
    <Link href="/" className="-ml-[4px]">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={125}
        height={125}
        // className="w-[125px] h-[50px] object-contain" <-- use if we want the image box to always maintain a certain size despite image height
      />
    </Link>
  );
}