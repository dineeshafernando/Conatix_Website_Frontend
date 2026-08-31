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
    name: "Santhosh Parampottupadam",
    role: "Generative AI",
    image: "/images/team/core-santhosh-parampottupadam.png",
  },
  {
    name: "Olha Chala",
    role: "Deep Learning",
    image: "/images/team/core-olha-chala.png",
  },
  {
    name: "Doreen Duoduaah",
    role: "Machine Learning",
    image: "/images/team/core-doreen-duoduaah.jpg",
  },
  {
    name: "Dineesha Fernando",
    role: "Data Science",
    image: "/images/team/core-dineesha-fernando.jpg",
  },
  {
    name: "Cara Chandramohan",
    role: "Data Visualization",
    image: "/images/team/core-cara-chandramohan.png",
  },
  {
    name: "Rashed Hasan",
    role: "Scrum Master",
    image: "/images/team/core-rashed-hasan.png",
  },
  {
    name: "Anirudh",
    role: "AI",
    image: "/images/team/core-anirudh.jpg",
  },
];
