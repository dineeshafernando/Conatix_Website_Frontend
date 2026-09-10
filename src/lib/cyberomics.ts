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
    description: "Genomics, metabolomics and other omics in medicine mean mapping and monitoring the functioning of the parts and the whole simultaneously - the tissues and the cells - in real time. Conatix takes the same approach to cybersecurity and the health of your living network, capturing the most detailed, granular data available from the network, the endpoints, and the software code that powers them down to the atomic level of bits and bytes - to show you everything that is happening on your network, both the forest and the trees. Continuous real-time monitoring of every key event on your network 24/7 enables our software to spot suspicious activity so you can deal with it as it is happening - not after the fact.",
    imgWidth: 350,
    imgHeight: 350,
  },
  {
    imageUrl: "/images/cyberomics/endpoint.png",
    altText: "cyberomics endpoint image",
    description: "Endpoint text",
    imgWidth: 350,
    imgHeight: 350,
  },
  {
    imageUrl: "/images/cyberomics/code_v2.png",
    altText: "cyberomics code image",
    description: "Code and Keys. We also operate inside endpoints and network devices at the most granular level of bits and bytes of code.",
    imgWidth: 350,
    imgHeight: 350,
  },
];