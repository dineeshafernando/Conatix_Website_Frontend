export interface DemoDataProps {
  id: string;
  description: string;
  src: string;
  alt: string;
}


export const demoData: DemoDataProps[] = [
  {
    id: "malware",
    description: "Malware Demo",
    src: "",
    alt: "Malware demo video",
  },
  {
    id: "insider-fraud",
    description: "Insider Fraud Demo",
    src: "",
    alt: "Insider fraud demo video",
  },
];