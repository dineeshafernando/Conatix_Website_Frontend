import { ThreatsPageData } from "@/lib/threats";
import OneColumnLayout from "@/components/layout/OneColumnLayout";

const ransomwareStats = [
  { year: "2025", frequency: "8.0", cost: "$57 Billion" },
  { year: "2026", frequency: "7.0", cost: "$74 Billion" },
  { year: "2027", frequency: "6.0", cost: "$97 Billion" },
  { year: "2028", frequency: "5.0", cost: "$125 Billion" },
  { year: "2029", frequency: "4.0", cost: "$163 Billion" },
  { year: "2030", frequency: "3.0", cost: "$177 Billion" },
  { year: "2031", frequency: "2.0", cost: "$265 - $275 Billion" },
];

export default function ThreatsPage() {
  return (
    <main className="text-xl">
      <h1 className="h1">Threats</h1>

      <section className="flex flex-col gap-4 items-center justify-center mb-15">
        <p className="w-full max-w-[1000px] mx-auto text-left text-xl font-light text-light-grey">
          Ransomware, like malware, is still one of the most pervasive and costly cyber threats…and is present in nearly half of all breaches.
        </p>

        {/* Text-based Data Table and 374X Callout with Catamaran lining numbers */}
        <div 
          style={{ fontVariantNumeric: "lining-nums tabular-nums", fontFeatureSettings: '"lnum" 1, "tnum" 1' }}
          className="w-full max-w-[1000px] mx-auto my-4 flex flex-col lg:flex-row items-center justify-between gap-8 py-2 font-catamaran"
        >
          {/* Left: Table */}
          <div className="w-full lg:w-[72%] overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-2 md:border-spacing-y-3 font-catamaran">
              <thead>
                <tr className="text-electric-blue text-xl font-light">
                  <th className="font-light pb-2 pr-6">Year</th>
                  <th className="font-light pb-2 pr-6">Attack Frequency</th>
                  <th className="font-light pb-2">Projected Annual Global Cost</th>
                </tr>
              </thead>
              <tbody className="text-xl font-light">
                {ransomwareStats.map((row) => (
                  <tr key={row.year} className="text-white">
                    <td className="font-light pr-6 whitespace-nowrap">{row.year}</td>
                    <td className="pr-6 whitespace-nowrap font-light">
                      1 attack every {row.frequency} seconds
                    </td>
                    <td className="text-khaki font-light whitespace-nowrap">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right: 374X Callout */}
          <div className="w-full lg:w-[28%] flex flex-col items-center justify-center text-center font-catamaran">
            <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-khaki tracking-tight leading-none mb-2">
              374<span className="inline-block relative top-[0.1em]">X</span>
            </span>
            <p className="text-electric-blue text-base md:text-lg font-light leading-snug">
              Projected total increase in<br />
              ransomware cost:<br />
              <span>2025 &rarr; 2031</span>
            </p>
          </div>
        </div>

        <p className="w-full max-w-[1000px] mx-auto text-left text-xl font-light text-light-grey">
          Ransomware is now present in nearly half of all breaches.
        </p>
      </section>

      <OneColumnLayout data={ThreatsPageData} />
    </main>
  );
}