export interface DemoDataProps {
  id: string;
  description: string;
  src: string;
  alt: string;
}


export const demoData: DemoDataProps[] = [
  {
    id: "insider-fraud",
    description: "Omniskia Insider Fraud Demo",
    src: "/videos/Insider_Fraud_Detector_Demo.mp4",
    alt: "Insider fraud demo video",
  },
];