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
    title: "Network Solution for VSDNs",
    description: "How Conatix secures Virtual Software Defined Networks against insider and remote threats.",
    fileSize: "0.6 MB",
    pdfUrl: "/resources/pdfs/security-solution-vsdns.pdf",
    thumbnailUrl: "/resources/thumbnails/security-solution-vsdns.png",
  },
  {
    title: "Partner: iQuila",
    description: "Overview of the Conatix and iQuila Virtual partnership for secure network connectivity.",
    fileSize: "0.8 MB",
    pdfUrl: "/resources/pdfs/partner-iquila.pdf",
    thumbnailUrl: "/resources/thumbnails/partner-iquila.png",
  },
];

export interface PressItem {
  source: string,
  date: string,
  title: string,
  url: string,
}

export const pressList: PressItem[] = [
  {
    source: "UK Financial Conduct Authority",
    date: "September 2024",
    title: "Market Abuse Surveillance TechSprint",
    url: "https://www.fca.org.uk/publications/techsprints/market-abuse-surveillance",
  },
  {
    source: "CSO Magazine",
    date: "April 2024",
    title: "Top cybersecurity product news of the week: security orchestration, automation, and response",
    url: "#", // TODO: get real link from David/Steven
  },
  {
    source: "EurekAlert, American Association for the Advancement of Science (AAAS)",
    date: "April 2024",
    title: "Stopping ransomware in its tracks: New enterprise app integrates AI & University research",
    url: "#", // TODO: get real link from David/Steven
  },
  {
    source: "Le Devoir (Quebec)",
    date: "September 2023",
    title: "Le Québec, un précurseur en cybersécurité grâce à son expertise en...",
    url: "#", // TODO: get real link from David/Steven
  },
  {
    source: "City of London Cyber Innovation Challenge",
    date: "2022",
    title: "Cyber Innovation Challenge 2022 and 2023",
    url: "#", // TODO: get real link from David/Steven
  },
];
