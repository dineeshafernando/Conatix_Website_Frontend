/* data for the cyberomics page */


export interface CyberomicsPageDataProps {
  imageUrl: string,
  altText: string,
  description: string,
  imgWidth?: number,
  imgHeight?: number,
}

export const cyberomicsPageData: CyberomicsPageDataProps[] = [
  {
    imageUrl: "/images/cyberomics/network.png",
    altText: "cyberomics network image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    imgWidth: 350,
    imgHeight: 350,
  },
  {
    imageUrl: "/images/cyberomics/endpoint.png",
    altText: "cyberomics endpoint image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    imgWidth: 350,
    imgHeight: 350,
  },
  {
    imageUrl: "/images/cyberomics/code_v2.png",
    altText: "cyberomics code image",
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    imgWidth: 350,
    imgHeight: 350,
  },
];