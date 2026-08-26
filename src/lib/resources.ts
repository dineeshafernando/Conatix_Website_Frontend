/* stores the downloadable resource documents shown on the Resources page */

export interface ResourceItem {
  title: string,
  description: string,
  fileSize: string,
  pdfUrl: string,
  thumbnailUrl: string,
}

export const resourcesList: ResourceItem[] = [
  {
    title: "CYSANA Technical Brief",
    description: "The research behind CYSANA's pre-execution detection and independent anti-encryption defense.",
    fileSize: "2.5 MB",
    pdfUrl: "/resources/pdfs/cysana-technical-brief.pdf",
    thumbnailUrl: "/resources/thumbnails/cysana-technical-brief.png",
  },
  {
    title: "CYSANA Marketing Flyer",
    description: "A quick overview of CYSANA's malware detection and ransomware-blocking capabilities.",
    fileSize: "0.8 MB",
    pdfUrl: "/resources/pdfs/cysana-marketing-flyer.pdf",
    thumbnailUrl: "/resources/thumbnails/cysana-marketing-flyer.png",
  },
  {
    title: "CYSANA Marketechture",
    description: "A visual breakdown of the CYSANA platform's architecture and how its components fit together.",
    fileSize: "0.7 MB",
    pdfUrl: "/resources/pdfs/cysana-marketechture.pdf",
    thumbnailUrl: "/resources/thumbnails/cysana-marketechture.png",
  },
  {
    title: "Partner: FlockFire",
    description: "FlockFire AI's ruggedized tablet and static kiosk for deployable malware detection.",
    fileSize: "2.7 MB",
    pdfUrl: "/resources/pdfs/partner-flockfire.pdf",
    thumbnailUrl: "/resources/thumbnails/partner-flockfire.png",
  },
  {
    title: "The Security Solution for VSDNs",
    description: "How Conatix secures Vehicle Software Defined Networks against insider and remote threats.",
    fileSize: "0.6 MB",
    pdfUrl: "/resources/pdfs/security-solution-vsdns.pdf",
    thumbnailUrl: "/resources/thumbnails/security-solution-vsdns.png",
  },
  {
    title: "Partner: iQuila",
    description: "Overview of the Conatix and iQuila partnership for secure network connectivity.",
    fileSize: "0.8 MB",
    pdfUrl: "/resources/pdfs/partner-iquila.pdf",
    thumbnailUrl: "/resources/thumbnails/partner-iquila.png",
  },
];
