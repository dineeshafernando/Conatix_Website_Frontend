import { ExternalLink } from "lucide-react";
import { pressList } from "@/lib/resources";

const greyShades = [
  "#a0a0a0", // 1. Light Grey (matching Threats page text)
  "#c4c4c4", // 2. Light Silver Grey
  "#8a8a8a", // 3. Medium Slate Grey
  "#d6d6d6", // 4. Soft Grey
  "#737373", // 5. Dimmer Slate Grey
];

export default function PressPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 min-h-[75vh]">
      <h1 className="h1 mb-3 text-center">Press</h1>
      <p className="text-xl text-center text-light-grey mb-12 max-w-2xl mx-auto font-light">
        Media coverage and third-party recognition of Conatix's work in cybersecurity.
      </p>

      <div className="flex flex-col gap-4">
        {pressList.map((item, index) => (
          <a
            key={item.title}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-dark-grey border border-white/10 rounded-xl p-6 flex flex-col gap-1 hover:border-electric-blue/40 transition duration-200"
          >
            <span className="text-xs text-electric-blue font-bold tracking-wider uppercase font-mono">
              {item.source} • {item.date}
            </span>
            <span 
              style={{ color: greyShades[index % greyShades.length] }}
              className="flex items-center gap-2 text-lg font-bold font-catamaran group-hover:!text-electric-blue transition-colors"
            >
              {item.title}
              <ExternalLink className="w-4 h-4 shrink-0" />
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}
