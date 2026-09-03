/* Senior Business Advisory Team — hardcoded (not Strapi-managed) */

export interface Advisor {
  name: string,
  role: string,
  image: string,
}

export const advisors: Advisor[] = [
  {
    name: "Greg Prickril",
    role: "Product Management",
    image: "/images/team/advisor-greg-prickril.jpg",
  },
  {
    name: "Michael Hiskey",
    role: "Cybersecurity Marketing",
    image: "/images/team/advisor-michael-hiskey.jpg",
  },
  {
    name: "Ian Wugalter",
    role: "Sales\nCanada",
    image: "/images/team/advisor-ian-wugalter.jpg",
  },
  {
    name: "Tony DeGonia",
    role: "Sales\nUSA",
    image: "/images/team/advisor-tony-degonia-v3.png",
  },
  {
    name: "John Cassidy",
    role: "Sales\nUK & EU",
    image: "/images/team/advisor-john-cassidy.jpg",
  },
  {
    name: "Maria Rosati",
    role: "Public Relations",
    image: "/images/team/advisor-maria-rosati.jpg",
  },
  {
    name: "Andreas Lindenblatt",
    role: "MSP CISO",
    image: "/images/team/advisor-andreas-lindenblatt.jpg",
  },
];
