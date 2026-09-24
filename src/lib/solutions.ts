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
    description: "Conatix cybersecurity software can monitor all of your endpoints and your entire network in real-time - giving you unprecedented visibility, security and control.",
    imageUrl: "/images/solutions/security_cycle_v4.png",
    altText: "Security cycle image",
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
  headingAboveImage?: string,
}

export const malwarePageData: malewarePageDataProps[] = [
  {
    dataId: "malware-dataflow",
    imageUrl: "/images/solutions/binary_types.png",
    altText: "Binary types image",
    imgWidth: 460,
    imgHeight: 220,
  },
  {
    dataId: "malware-dataflow",
    imageUrl: "/images/solutions/binary_code_v2.png",
    altText: "Binary code image",
    imgWidth: 280,
    imgHeight: 220,
  },
  {
    dataId: "malware-dataflow",
    imageUrl: "/images/threats/colored_pixel.png",
    altText: "Colored pixel image",
    imgWidth: 226,
    imgHeight: 220,
  },
  {
    dataId: "malware-detector",
    description: "The CYSANA malware detector applies multiple filters to your application and graphics file: running each file through multiple AI models as well as conventional curated signature matching. This multiphase analysis enables a probabilistic view of whether a file may be malicious or not.",
    imageUrl: "/animations/malware/Malware Detector.gif",
    altText: "Malware detector animation",
    headingAboveImage: "MALWARE DETECTOR",
    maxWidth: 1000,
  },
];

export interface ransomwarePageDataProps {
  description: string,
  imageUrl: string,
  altText: string,
  imgWidth?: number,
  imgHeight?: number,
  maxWidth?: number,
  headingAboveImage?: string,
}

export const ransomwarePageData: ransomwarePageDataProps[] = [
  {
    description: "Our patented method of blocking access to your own encryption keys to generate random numbers prevents would-be ransomware from strongly encrypting your data.",
    imageUrl: "/animations/ransomware/Ransomware Detector.gif",
    altText: "Ransomware detector animation",
    headingAboveImage: "RANSOMWARE BLOCKER",
    maxWidth: 1000,
  },
];