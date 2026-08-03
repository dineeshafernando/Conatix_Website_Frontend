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
  { label: "Solutions", href: "/solutions"},
  { label: "Tech", href: "/tech"},
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