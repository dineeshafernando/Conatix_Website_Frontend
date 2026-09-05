"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface LogoAttributes {
  src: string;
  alt: string;
  className?: string;
}

interface LogoDict {
  [pathname: string]: LogoAttributes;
}

// logo data stored in a dictionary 
const logoDict: LogoDict = {
  // Threats Routes
  "/threats/malware": { src: "/images/logos/conatix-cysana-orange-tight.png", alt: "Conatix Cysana logo", className: "h-[58px]" },
  "/threats/ransomware": { src: "/images/logos/conatix-cysana-orange-tight.png", alt: "Conatix Cysana logo", className: "h-[58px]" },
  "/threats/insider-fraud": { src: "/images/logos/conatix-omniskia.png", alt: "Conatix Omniskia logo", className: "h-[58px]" },
  "/threats/supplier": { src: "/images/logos/conatix-omniskia.png", alt: "Conatix Omniskia Logo", className: "h-[58px]" },

  // Solutions Routes
  "/solutions/malware": { src: "/images/logos/conatix-cysana-orange-tight.png", alt: "Conatix Cysana orange logo", className: "h-[58px]" },
  "/solutions/ransomware": { src: "/images/logos/conatix-cysana-orange-tight.png", alt: "Conatix Cysana orange logo", className: "h-[58px]" },
  "/solutions/insider-fraud": { src: "/images/logos/conatix-omniskia.png", alt: "Conatix Omniskia logo", className: "h-[58px]" },
  "/solutions/supplier": { src: "/images/logos/conatix-omniskia.png", alt: "Conatix Omniskia Logo", className: "h-[58px]" },
};

export default function Logo() {
  const pathname = usePathname();

  // Pick matching logo based on current URL or fall back to default Conatix logo
  const logo = logoDict[pathname] || {
    src: "/images/logos/conatix.png",
    alt: "Conatix logo",
    className: "h-[34px]",
  };

  return (
    <Link href="/" className="-ml-[4px] flex items-center justify-start h-[62px] w-[135px] shrink-0">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={135}
        height={58}
        className={`${logo.className || "h-[34px]"} w-auto object-contain max-h-[58px]`}
        priority
      />
    </Link>
  );
}