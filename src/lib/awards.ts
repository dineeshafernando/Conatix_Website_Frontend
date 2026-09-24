export interface Award {
  company: string;
  logo: string[];
  description: string[];
  // Visible artwork bounds, excluding the transparent margins: x, y, width, height.
  logoBounds: [number, number, number, number];
  // Most existing PNGs use a 600 x 200 canvas; SVGs specify their viewBox dimensions.
  logoCanvas?: [number, number];
  // Optical width in CSS pixels, tuned for lettering weight and logo shape against IBM.
  logoWidth: number;
}

export const companyAwards: Award[] = [
  {
    company: "CyberTech 100",
    logoWidth: 125,
    logo: ["/images/awards/cybertech100.png"],
    logoBounds: [181, 15, 238, 170],
    description: ["Top 100 Global cybersecurity startups for banking"],
  },
  {
    company: "NYTechWeek",
    logoWidth: 90,
    logo: ["/images/awards/demo_nyc_night.png"],
    logoBounds: [215, 15, 170, 170],
    description: ["Named 1 of the 15 most innovative NYC startups for NYTechWeek opening demo night"],
  },
  {
    company: "UK Dept. for Culture, Media & Sport",
    logoWidth: 128,
    logo: ["/images/awards/dep_culture_media_sport.svg"],
    logoBounds: [0.5, 0.5, 62, 45],
    logoCanvas: [62.69995, 45.9],
    description: ["Named 1 of the most innovative UK startups, 2 years in a row by UK govt"],
  },
  {
    company: "City of London / Microsoft",
    logoWidth: 66,
    logo: ["/images/awards/microsoft-city-of-london.png"],
    logoBounds: [250, 10, 99, 180],
    description: ["Selected 1 of top 5 UK SMEs for supplier risk management"],
  },
  {
    company: "World Economic Forum",
    logoWidth: 135,
    logo: ["/images/awards/world_economic.png"],
    logoBounds: [186, 30, 227, 140],
    description: ["Partnering Against Corruption Initiative", "Tech4Integrity Community"],
  },
  {
    company: "U.S. Dept. of Homeland Security",
    logoWidth: 92,
    logo: ["/images/awards/us_department.png"],
    logoBounds: [215, 15, 170, 170],
    description: ["“Appropriately builds on prior research.”"],
  },
  {
    company: "Citi",
    logoWidth: 84,
    logo: ["/images/awards/citi.png"],
    logoBounds: [187, 32, 226, 135],
    description: ["Selected in top 10% of Technology for Integrity startups globally"],
  },
  {
    company: "Desjardins",
    logoWidth: 185,
    logo: ["/images/awards/desjardins.png"],
    logoBounds: [40, 56, 408, 87],
    description: ["Top 5 fintech cybersecurity startups in Canada"],
  },
  {
    company: "EIT Digital",
    logoWidth: 150,
    logo: ["/images/awards/eit_digital_v2.png"],
    logoBounds: [160, 35, 280, 129],
    description: ["Major EU innovation grant"],
  },
  {
    company: "Scale AI",
    logoWidth: 175,
    logo: ["/images/awards/scale_ai_v2.png"],
    logoBounds: [56, 49, 489, 102],
    description: ["Canadian national Digital SuperclusterAI R&D grant"],
  },
  {
    company: "UK Research and Innovation",
    logoWidth: 60,
    logo: ["/images/awards/ukri_v2.png"],
    logoBounds: [223, 15, 154, 170],
    description: ["Transformative technologies grant"],
  },
  {
    company: "Gartner",
    logoWidth: 132,
    logo: ["/images/awards/gartner.png"],
    logoBounds: [75, 49, 450, 102],
    description: ["Multiple analyst vendor briefings on insider fraud"],
  },
  {
    company: "IBM",
    logoWidth: 120,
    logo: ["/images/awards/ibm.png"],
    logoBounds: [140, 36, 320, 128],
    description: ["ISV National Summit Germany, 1st Prize business innovation"],
  },
  {
    company: "TD Canada Trust",
    logoWidth: 215,
    logo: ["/images/awards/td-canada-trust_v2.png"],
    logoBounds: [40, 53, 520, 93],
    description: ["1st Prize Startup Elevator Pitch"],
  },
  {
    company: "Products That Count",
    logoWidth: 225,
    logo: ["/images/awards/products_awards_combined.png"],
    logoBounds: [137, 25, 325, 150],
    description: ["Winner, Most Innovative Product in the AI and Software Category"],
  },
  {
    company: "FCA",
    logoWidth: 85,
    logo: ["/images/awards/fca.svg"],
    logoBounds: [2, 35.5, 140, 81],
    logoCanvas: [210, 153.47],
    description: ["Selected for multiple anti-fraud TechSprints by Financial Conduct Authority UK"],
  },
  {
    company: "CISPA",
    logoWidth: 160,
    logo: ["/images/awards/cispa.svg"],
    logoBounds: [0, 596, 3000, 1000.5],
    logoCanvas: [3000, 2192.3],
    description: ["Inaugural startup founder speaker for largest EU Cybersecurity research center"],
  },
  {
    company: "Accenture",
    logoWidth: 175,
    logo: ["/images/awards/accenture-white.svg"],
    logoBounds: [1, 1, 135.5, 57.5],
    logoCanvas: [137.4, 60],
    description: ["Profiled in multiple reports to F500 CEOs on AI for business by Chief Economist and CTO"],
  },
];
