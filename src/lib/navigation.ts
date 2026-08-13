export interface NavItem {
  label: string;
  href: string;
}

export interface NavSection {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavSection[] = [
  { label: "Home", href: "/" },
  { label: "Threats",
    href: "/threats",
    children: [
      {label: "Malware", href: "/threats/malware"},
      {label: "Ransomware", href: "/threats/ransomware"},
      {label: "Insider Fraud", href: "/threats/insider-fraud"},
      {label: "Supplier", href: "/threats/supplier"},
    ]
  },
  { label: "Solutions",
    href: "/solutions",
    children: [
      {label: "Malware", href: "/solutions/malware"},
      {label: "Ransomware", href: "/solutions/ransomware"},
      {label: "Insider Fraud", href: "/solutions/insider-fraud"},
      {label: "Supplier", href: "/solutions/supplier"},
    ]
  },
  { label: "Cyberomics", href: "/cyberomics"},
  { label: "Demo", href: "/demo"},
  {
    label: "Company", 
    href: "/company",
    children: [
      { label: "About", href: "/company/about" },
      { label: "Team", href: "/company/team" },
      { label: "Partners", href: "/company/partners" },
      { label: "Awards", href: "/company/awards" },
      { label: "Career", href: "/company/career" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Shop", href: "/shop" },
  { label: "Privacy", href: "/privacy" },
  { label: "Contact", 
    href: "/contact",
    children: [
      { label: "Inquiry", href: "/contact/inquiry" },
      { label: "Support", href: "/contact/support" },
      { label: "Locations", href: "/contact/locations" },
    ]
  }
];