/* stores data for the solution and solution subpages */

export interface SolutionsPageDataProps {
  description: string,
  imageUrl: string,
  altText: string,
}

export const SolutionsPageData: SolutionsPageDataProps[] = [
  {
    description: "Conatix cybersecurity software can monitor all of your endpoints and your entire network – giving you unprecedented visibility, security and control",
    imageUrl: "/images/solutions/security_cycle.png",
    altText: "Security cycle image",
  },
  {
    description: "Why do we intervene?",
    imageUrl: "/images/solutions/cysana_intervene_table.png",
    altText: "Cysana intervene table image",
  },
];