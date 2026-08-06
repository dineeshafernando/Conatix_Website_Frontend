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
    imageUrl: "/images/benign.png",
    altText: "benign cartoon image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
  },
  {
    imageUrl: "/images/malicious.png",
    altText: "malicious cartoon image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
  },
  {
    imageUrl: "/images/obfuscated.png",
    altText: "obfuscated cartoon image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
  },
]
