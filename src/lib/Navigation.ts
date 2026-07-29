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
  {
    label: "Company",
    children: [
      { label: "Team", href: "/company/team" },
      { label: "Customer Stories", href: "/company/customer-stories" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Cysana", href: "/services/cysana" },
      { label: "Insider Fraud", href: "/services/insider-fraud" },
    ],
  },
  { label: "Shop", href: "/shop" },
  { label: "Blogs", href: "/blogs" },
];