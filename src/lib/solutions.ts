/* stores data for the solution and solution subpages */

export interface SolutionsPageDataProps {
  description: string,
  imageUrl: string,
  altText: string,
  imgWidth?: number,
  imgHeight?: number,
  maxWidth?: number,
}

export const SolutionsPageData: SolutionsPageDataProps[] = [
  {
    description: "Conatix cybersecurity software can monitor all of your endpoints and your entire network – giving you unprecedented visibility, security and control",
    imageUrl: "/images/solutions/security_cycle.png",
    altText: "Security cycle image",
  },
  {
    description: "When do we intervene?",
    imageUrl: "/images/solutions/cysana_intervene_table.png",
    altText: "Cysana intervene table image",
    maxWidth: 1100,
  },
];

export interface malewarePageDataProps {
  dataId: string, // this dataId field will be used to group array elements that are supposed to be used together in our website pages
  description?: string,
  imageUrl: string,
  altText: string,
  imgWidth?: number,
  imgHeight?: number,
  maxWidth?: number,
}

export const malwarePageData: malewarePageDataProps[] = [
  {
    dataId: "malware-dataflow",
    imageUrl: "/images/solutions/binary_types.png",
    altText: "Binary types image",
  },
  {
    dataId: "malware-dataflow",
    imageUrl: "/images/solutions/binary_code.png",
    altText: "Binary code image",
  },
  {
    dataId: "malware-dataflow",
    imageUrl: "/images/threats/colored_pixel.png",
    altText: "Colored pixel image",
    imgWidth: 200,
    imgHeight: 150,
  },
  {
    dataId: "malware-detector",
    description: "Cysana Malware Detector",
    imageUrl: "/animations/malware/Malware Detector.gif",
    altText: "Malware detector animation",
  },
];

export interface ransomwarePageDataProps {
  description: string,
  imageUrl: string,
  altText: string,
  imgWidth?: number,
  imgHeight?: number,
  maxWidth?: number,
}

export const ransomwarePageData: ransomwarePageDataProps[] = [
  {
    description: "Ransomware Detector",
    imageUrl: "/animations/ransomware/Ransomware Detector.gif",
    altText: "Ransomware detector animation",
  },
];