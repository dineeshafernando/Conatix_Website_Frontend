/* Core team — hardcoded (not Strapi-managed) */

export interface CoreMember {
  name: string,
  role: string,
  image: string,
}

export const coreTeam: CoreMember[] = [
  {
    name: "David Lehrer",
    role: "CEO",
    image: "/images/team/core-david-lehrer.png",
  },
  {
    name: "Santhosh",
    role: "Generative AI",
    image: "/images/team/core-santhosh-parampottupadam.png",
  },
  {
    name: "Dineesha Fernando",
    role: "Data Science",
    image: "/images/team/core-dineesha-fernando-v2.png",
  },
  {
    name: "Prathamesh",
    role: "Database",
    image: "/images/team/core-prathamesh-v2.png",
  },
  {
    name: "Anirudh",
    role: "AI",
    image: "/images/team/core-anirudh-v3.png",
  },
  {
    name: "Doreen Duoduaah",
    role: "Machine Learning",
    image: "/images/team/core-doreen-duoduaah.jpg",
  },
  {
    name: "Thein Htike Zaw",
    role: "AI Engineer",
    image: "/images/team/core-thein-htike-zaw.jpg",
  },
];
