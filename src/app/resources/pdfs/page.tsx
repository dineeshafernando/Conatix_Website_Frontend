import Image from "next/image";
import { Download } from "lucide-react";
import { resourcesList } from "@/lib/resources";

export default function PdfsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 min-h-[75vh]">
      <h1 className="h1 mb-3 text-center">Documents</h1>
      <p className="text-xl text-center text-light-grey mb-12 max-w-2xl mx-auto font-light">
        Download our latest white papers, technical briefs, and partner documentation to learn more about our cybersecurity software.
      </p>

      {/* Grid List of Resources */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {resourcesList.map((resource) => (
          <div
            key={resource.pdfUrl}
            className="bg-dark-grey border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-electric-blue/40 transition duration-200"
          >
            <div className="p-6 pb-4">
              <h2 className="text-xl font-bold font-catamaran text-electric-blue leading-snug min-h-[3.5rem] flex items-center">
                {resource.title}
              </h2>
            </div>

            <div className="relative w-full aspect-[600/850] max-w-[70%] mx-auto mb-4 rounded-lg overflow-hidden border border-white/10">
              <Image
                src={resource.thumbnailUrl}
                alt={`${resource.title} thumbnail`}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 pt-0 flex flex-col flex-1 justify-between">
              <div>
                <span className="text-xs text-electric-blue font-bold tracking-wider uppercase font-mono">
                  PDF • {resource.fileSize}
                </span>
                <p className="text-sm text-light-grey font-light leading-relaxed mt-2 mb-6">
                  {resource.description}
                </p>
              </div>

              <a
                href={resource.pdfUrl}
                download
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded bg-khaki hover:bg-khaki-bright text-white font-bold text-sm transition cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
