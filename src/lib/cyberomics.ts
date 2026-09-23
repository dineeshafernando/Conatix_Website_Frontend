/* data for the cyberomics page */


export interface CyberomicsPageDataProps {
  imageUrl: string,
  altText: string,
  description: string,
  imgWidth?: number,
  imgHeight?: number,
  headingAboveImage?: string,
  textBelowImage?: string,
  captionOffsetPx?: number,
  highlightWord?: string,
}

export const cyberomicsPageData: CyberomicsPageDataProps[] = [
  {
    imageUrl: "/images/cyberomics/network.png",
    altText: "cyberomics network image",
    description: "Genomics, metabolomics and other omics in medicine refer to mapping and monitoring the functioning of the parts and the whole simultaneously – the tissues and the cells – in real time.",
    imgWidth: 350,
    imgHeight: 350,
    headingAboveImage: "Networks",
    highlightWord: "omics",
  },
  {
    imageUrl: "/images/cyberomics/endpoint.png",
    altText: "cyberomics endpoint image",
    description: "Conatix takes the same approach to cybersecurity and the health of your IT network, capturing the most detailed, granular data available from the network, the endpoints, and the software code that powers them, all the way down to the atomic level of bits and bytes – to show you everything that is happening on your network, both the forest and the trees.",
    imgWidth: 350,
    imgHeight: 350,
    headingAboveImage: "Endpoints and Devices",
  },
  {
    imageUrl: "/images/cyberomics/code_v2.png",
    altText: "cyberomics code image",
    description: "This continuous real-time cyberomic monitoring of every key event on your network 24/7 without slowing down the network or any of its parts, lets our software spot suspicious activity so you can deal with it as it happens – not after the fact.",
    imgWidth: 350,
    imgHeight: 350,
    headingAboveImage: "The Code Inside",
  },
];