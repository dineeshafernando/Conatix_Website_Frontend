/* stores data for the threat and threat subpages */

// Threat homepage
export interface ThreatsPageDataProps {
  description: string,
  imageUrl: string,
  altText: string,
}

export const insiderFraudThreatsData: ThreatsPageDataProps[] = [
  {
    description: "Insider fraud can threaten your enterprise IT network",
    imageUrl: "/images/threats/bank_building.png",
    altText: "Bank build image",
  },
  {
    description: "Insider fraud can threaten your IoT, field, or critical infrastructure network",
    imageUrl: "/images/threats/ambulance-side.jpg",
    altText: "Side view of an ambulance image",
  },
  {
    description: "Any connected vehicle that receives software update from the manufacturer is susceptible to insider fraud",
    imageUrl: "/images/threats/ambulance-top.jpg",
    altText: "Top view of an ambulance image",
  },
];

// Malware subpage
export interface malewarePageDataProps {
  imageUrl: string,
  altText: string,
  description: string,
}

export const malewarePageData: malewarePageDataProps[] = [
  {
    imageUrl: "/images/threats/colored_pixel.png",
    altText: "colored pixel image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
  },
  {
    imageUrl: "/images/threats/cartoon_benign.png",
    altText: "benign cartoon image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
  },
  {
    imageUrl: "/images/threats/cartoon_malicious.png",
    altText: "malicious cartoon image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
  },
  {
    imageUrl: "/images/threats/cartoon_obfuscated.png",
    altText: "obfuscated cartoon image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
  },
]

// Ransomware subpage
export interface ransomwarePageDataProps {
  imageUrl: string,
  altText: string,
  description: string,
}

export const ransomwarePageData: ransomwarePageDataProps[] = [
  {
    imageUrl: "/images/threats/cartoon_benign.png",
    altText: "cartoon benign image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
  },
  {
    imageUrl: "/images/threats/cartoon_ransomware.png",
    altText: "cartoon ransomware image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
  },
]
