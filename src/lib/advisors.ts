/* Senior Business Advisory Team — hardcoded (not Strapi-managed) */

export interface Advisor {
  name: string,
  role: string,
  image: string,
}

export const advisors: Advisor[] = [
  {
    name: "Greg",
    role: "Product Mgmt +\nCustomer Success",
    image: "/images/team/advisor-greg-prickril.jpg",
  },
  {
    name: "Michael",
    role: "Cybersec Marketing +\nCustomer Success",
    image: "/images/team/advisor-michael-hiskey.jpg",
  },
  {
    name: "Ian",
    role: "Sales Canada +\nCustomer Success",
    image: "/images/team/advisor-ian-wugalter.jpg",
  },
  {
    name: "Tony",
    role: "Sales USA +\nCustomer Success",
    image: "/images/team/advisor-tony-degonia-v3.png",
  },
  {
    name: "John",
    role: "Sales UK & EU +\nCustomer Success",
    image: "/images/team/advisor-john-cassidy.jpg",
  },
  {
    name: "Maria",
    role: "Public Relations +\nCustomer Success",
    image: "/images/team/advisor-maria-rosati.jpg",
  },
  {
    name: "Andreas",
    role: "MSP & CISO +\nCustomer Success",
    image: "/images/team/advisor-andreas-lindenblatt.jpg",
  },
];
