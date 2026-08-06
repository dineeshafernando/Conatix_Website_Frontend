/* stores data for the solution and solution subpages */

export interface malewarePageDataProps {
  imageUrl: string,
  altText: string,
  description: string,
}

export const malewarePageData: malewarePageDataProps[] = [
  {
    imageUrl: "/images/colored_pixel.png",
    altText: "colored pixel image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
  },
  {
    imageUrl: "/images/cartoon_benign.png",
    altText: "benign cartoon image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
  },
  {
    imageUrl: "/images/cartoon_malicious.png",
    altText: "malicious cartoon image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
  },
  {
    imageUrl: "/images/cartoon_obfuscated.png",
    altText: "obfuscated cartoon image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
  },
]

export interface ransomwarePageDataProps {
  imageUrl: string,
  altText: string,
  description: string,
}

export const ransomwarePageData: ransomwarePageDataProps[] = [
  {
    imageUrl: "/images/cartoon_benign.png",
    altText: "cartoon benign image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
  },
  {
    imageUrl: "/images/cartoon_ransomware.png",
    altText: "cartoon ransomware image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
  },
]