export interface Award {
  company: string,
  logo: string[];
  description: string[];
  max_width?: number,
}
export const companyAwards: Award[] = [
  {
    company: "CyberTech 100",
    logo: ["/images/awards/cybertech100.png"],
    description: ["Global cybersecurity startups, Top 100"],
  },
  {
    company: "NYTechWeek",
    logo: ["/images/awards/demo_nyc_night.png"],
    description: ["Most Innovative Startups"],
  },
  {
    company: "UK Dept. for Culture, Media & Sport",
    logo: ["/images/awards/dep_culture_media_sport.png"], 
    description: ["Two years in a row"],
  },
  {
    company: "City of London / Microsoft",
    logo: ["/images/awards/microsoft-city-of-london.png"],
    description: ["Top 5 UK SMEs for supplier risk management"],
  },
  {
    company: "World Economic Forum",
    logo: ["/images/awards/world_economic.png"],
    description: ["Partnering against corruption initiatives"],
  },
  {
    company: "U.S. Dept. of Homeland Security",
    logo: ["/images/awards/us_department.png"],
    description: ["“Appropriately builds on prior research”"],
  },
  {
    company: "Citi",
    logo: ["/images/awards/citi.png"],
    description: ["Top 10% globally, Citi Cyber Fintech"],
    max_width: 30,
  },
  {
    company: "Desjardins",
    logo: ["/images/awards/desjardins.png"],
    description: ["Top 5 fintech cybersecurity finalists, Canada"],
  },
  {
    company: "EIT Digital",
    logo: ["/images/awards/eit_digital.png"],
    description: ["Major EU innovation grant"],
  },
  {
    company: "Scale AI",
    logo: ["/images/awards/scale_ai.png"],
    description: ["Canada Digital Supercluster AI R&D grant"],
  },
  {
    company: "UK Research and Innovation",
    logo: ["/images/awards/ukri.png"], 
    description: ["Transformative technologies grant"],
  },
  {
    company: "Gartner",
    logo: ["/images/awards/gartner.png"],
    description: ["Multiple analysts vender briefings​ on insider fraud"],
  },
  {
    company: "IBM",
    logo: ["/images/awards/ibm.png"],
    description: ["ISV Partners National Summit Germany", "First Prize Business Innovation"],
  },
  {
    company: "TD Canada Trust",
    logo: ["/images/awards/td_canada.png"], 
    description: ["First Prize Startup Elevator Pitch"],
  },
  {
    company: "Products That Count",
    logo: ["/images/awards/products_awards_2024.png", "/images/awards/products_awards_2026.png"], 
    description: ["Most Innovative Product","AI and Software Category Winner"],
  },
];