import Link from "next/link";
import { Download } from "lucide-react";

const resourcesList = [
  {
    title: "Conatix Cybersecurity White Paper 2026",
    description: "An in-depth analysis of automated incident response protocols and AI-driven threat intelligence platforms.",
    fileSize: "2.4 MB",
    fileFormat: "PDF",
    downloadUrl: "#", // Placeholder link
  },
  {
    title: "Cysana Malware Detector Spec Sheet",
    description: "Detailed technical specifications, feature list, and deployment requirements for Cysana Enterprise and MSP solutions.",
    fileSize: "1.1 MB",
    fileFormat: "PDF",
    downloadUrl: "#", // Placeholder link
  },
  {
    title: "TPRM Suite Product Brief",
    description: "Overview of Third-Party Risk Management features, supplier risk questionnaires, and automated compliance tracking.",
    fileSize: "850 KB",
    fileFormat: "PDF",
    downloadUrl: "#", // Placeholder link
  }
];

export default function ResourcesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 min-h-[75vh]">
      <h1 className="h1 mb-3 text-center">Resources</h1>
      <p className="text-xl text-center text-light-grey mb-12 max-w-2xl mx-auto font-light">
        Download our latest white papers, technical spec sheets, and product documentation to learn more about our cybersecurity suites.
      </p>

      {/* Grid List of Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resourcesList.map((resource, index) => (
          <div 
            key={index}
            className="bg-dark-grey border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-electric-blue/40 transition duration-200"
          >
            <div>
              <span className="text-xs text-electric-blue font-bold tracking-wider uppercase font-mono">
                {resource.fileFormat} • {resource.fileSize}
              </span>
              <h2 className="text-xl font-bold text-white mt-2 mb-3 leading-snug">
                {resource.title}
              </h2>
              <p className="text-sm text-light-grey font-light leading-relaxed mb-6">
                {resource.description}
              </p>
            </div>
            
            <a 
              href={resource.downloadUrl}
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded bg-khaki-gold hover:bg-khaki-gold-bright text-white font-bold text-sm transition cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download White Paper
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
