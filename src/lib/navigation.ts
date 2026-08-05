export interface NavItem {
  label: string;
  href: string;
}

export interface NavSection {
  label: string;
  href?: string; // no href = dropdown only, not clickable itself
  children?: NavItem[];
}

export const navigation: NavSection[] = [
  { label: "Home", href: "/" },
  { label: "Solutions",
    href: "/solutions",
    children: [
      {label: "Malware", href: "solutions/malware"},
      {label: "Ransomware", href: "solutions/ransomware"},
      {label: "Insider Fraud", href: "solutions/insider-fraud"},
      {label: "Supplier/Third Party", href: "solutions/supplier-third-party"},
    ]
  },
  { label: "Demo", href: "/demo"},
  { label: "Cyberomics", href: "/cyberomics"},
  {
    label: "Company", href: "/company",
    // children: [
    //   { label: "Team", href: "/company/team" },
    //   { label: "Customer Stories", href: "/company/customer-stories" },
    //   { label: "Contact", href: "/company/contact" },
    // ],
  },
  { label: "News", href: "/news" },
  { label: "Shop", href: "/shop" },
];