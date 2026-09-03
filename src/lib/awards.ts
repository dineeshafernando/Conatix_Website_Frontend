export interface Award {
  company: string;
  logo: string[];
  description: string[];
  max_width?: number;
  whiteBg?: boolean;
  softGrayscale?: boolean;
  scale?: number;
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
    description: ["Named one of the 15 most innovative startups in NYC for NYTech week demo night"],
  },
  {
    company: "UK Dept. for Culture, Media & Sport",
    logo: ["/images/awards/dep_culture_media_sport.png"],
    description: ["Named one of the most cybersecurity startups in the UK, 2 years in a row"],
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
  },
  {
    company: "Desjardins",
    logo: ["/images/awards/desjardins.png"],
    description: ["Top 5 fintech cybersecurity finalists, Canada"],
  },
  {
    company: "EIT Digital",
    logo: ["/images/awards/eit_digital_v2.png"],
    description: ["Major EU innovation grant"],
  },
  {
    company: "Scale AI",
    logo: ["/images/awards/scale_ai_v2.png"],
    description: ["Canada Digital Supercluster AI R&D grant"],
  },
  {
    company: "UK Research and Innovation",
    logo: ["/images/awards/ukri_v2.png"],
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
    description: ["ISV Partners National Summit Germany, first prize business innovation"],
  },
  {
    company: "TD Canada Trust",
    logo: ["/images/awards/td-canada-trust_v2.png"],
    description: ["First Prize Startup Elevator Pitch"],
  },
  {
    company: "Products That Count",
    logo: ["/images/awards/products_awards_combined.png"],
    description: ["Most Innovative Product", "AI and Software Category Winner"],
  },
  {
    company: "FCA",
    logo: ["/images/awards/fca.svg"],
    description: ["UK Financial Conduct Authority"],
  },
  {
    company: "CISPA",
    logo: ["/images/awards/cispa.svg"],
    description: ["CISPA Saarbrücken, Germany"],
  },
  {
    company: "Accenture",
    logo: ["/images/awards/accenture.png"],
    description: ["Profiled and cited in multiple reports to F500 CEOs on AI for business by the Chief Economist and CTO"],
  },
];