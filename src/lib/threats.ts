/* stores data for the threat and threat subpages */

// Threat homepage
export interface ThreatsPageDataProps {
  description: string,
  imageUrl: string,
  altText: string,
  imgWidth?: number,
  imgHeight?: number,
  maxWidth?: number,
}

export const ThreatsPageData: ThreatsPageDataProps[] = [
  {
    description: "Insider fraud can threaten your enterprise IT network",
    imageUrl: "/images/threats/bank_building.png",
    altText: "Bank build image",
  },
  {
    description: "Insider fraud can threaten your IoT, field, or critical infrastructure network",
    imageUrl: "/images/threats/van-side.png",
    altText: "Side view of an ambulance image",
  },
  {
    description: "Any connected vehicle that receives software update from the manufacturer is susceptible to insider fraud",
    imageUrl: "/images/threats/van-top.png",
    altText: "Top view of an ambulance image",
  },
];

// Malware subpage
export interface malewarePageDataProps {
  imageUrl: string,
  altText: string,
  description: string,
  textBelowImage?: string,
  imgWidth?: number,
  imgHeight?: number,
  maxWidth?: number,
}

export const malewarePageData: malewarePageDataProps[] = [
  {
    imageUrl: "/images/threats/colored_pixel.png",
    altText: "colored pixel image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    imgWidth: 300,
    imgHeight: 300,
  },
  {
    imageUrl: "/images/threats/cartoon_benign.png",
    altText: "benign cartoon image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    imgWidth: 650,
    imgHeight: 400,
  },
  {
    imageUrl: "/images/threats/cartoon_malicious.png",
    altText: "malicious cartoon image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    imgWidth: 650,
    imgHeight: 400,
  },
  {
    imageUrl: "/images/threats/cartoon_obfuscated.png",
    altText: "obfuscated cartoon image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    imgWidth: 650,
    imgHeight: 400,
  },
]

// Ransomware subpage
export interface ransomwarePageDataProps {
  imageUrl: string,
  altText: string,
  description: string,
  textBelowImage?: string,
  imgWidth?: number,
  imgHeight?: number,
  maxWidth?: number,
}

export const ransomwarePageData: ransomwarePageDataProps[] = [
  {
    imageUrl: "/images/threats/cartoon_benign.png",
    altText: "cartoon benign image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    imgWidth: 650,
    imgHeight: 400,
  },
  {
    imageUrl: "/images/threats/cartoon_ransomware.png",
    altText: "cartoon ransomware image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    imgWidth: 650,
    imgHeight: 400,
  },
]

export interface insiderFraudPageData {
  imageUrl: string,
  altText: string,
  description: string,
  textBelowImage?: string,
  imgWidth?: number,
  imgHeight?: number,
  maxWidth?: number,
}


export const insiderFraudPageData: insiderFraudPageData[] = [
  {
    imageUrl: "/images/threats/insider_careless.png",
    altText: "insider careless image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    textBelowImage: "Careless Insider"
  },
  {
    imageUrl: "/images/threats/insider_malicious.png",
    altText: "insider malicious image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    textBelowImage: "Malicious Insider"
  },
  {
    imageUrl: "/images/threats/insider_deepfake.png",
    altText: "insider deepfake image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    textBelowImage: "Deepfake Employee"
  },
  {
    imageUrl: "/images/threats/insider_smart.png",
    altText: "insider deepfake image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    textBelowImage: "Smart Malware"
  },
  {
    imageUrl: "/images/threats/insider_agent.png",
    altText: "insider agent image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    textBelowImage: "AI Agent"
  },
];

export interface supplierPageDataProps {
  imageUrl: string,
  altText: string,
  description: string,
  imgWidth?: number,
  imgHeight?: number,
  maxWidth?: number,
}

export const supplierPageData: supplierPageDataProps[] = [
  {
    imageUrl: "/images/threats/supplier.png",
    altText: "supplier image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
  },
];

