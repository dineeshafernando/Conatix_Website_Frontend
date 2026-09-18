/* Core team — hardcoded (not Strapi-managed) */

export interface CoreMember {
  name: string,
  role: string,
  image: string,
}

export const coreTeam: CoreMember[] = [
  {
    name: "David",
    role: "CEO +\nCustomer Success",
    image: "/images/team/core-david-lehrer-v2.png",
  },
  {
    name: "Santhosh",
    role: "Cybersecurity +\nCustomer Success",
    image: "/images/team/core-santhosh-parampottupadam-v3.png",
  },
  {
    name: "Dineesha",
    role: "Fullstack Dev +\nCustomer Success",
    image: "/images/team/core-dineesha-fernando-v2.png",
  },
  {
    name: "Bhranti",
    role: "Machine Learning +\nCustomer Success",
    image: "", // pending photo
  },
  {
    name: "Anirudh",
    role: "Gen AI +\nCustomer Success",
    image: "/images/team/core-anirudh-v3.png",
  },
  {
    name: "Doreen",
    role: "Deep Learning +\nCustomer Success",
    image: "/images/team/core-doreen-duoduaah.jpg",
  },
  {
    name: "Prathamesh",
    role: "Data Science +\nCustomer Success",
    image: "/images/team/core-prathamesh-v2.png",
  },
];
