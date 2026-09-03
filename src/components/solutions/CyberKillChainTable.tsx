import React from "react";

interface KillChainRow {
  phaseNum: number;
  phaseName: string;
  aptAction: string;
  exampleActivity: string;
  tag: {
    label: string;
    color: string; // Tailwind text & border color class
    bracketColor: string;
    rowSpan?: number;
  } | null;
}

const killChainData: KillChainRow[] = [
  {
    phaseNum: 1,
    phaseName: "Reconnaissance",
    aptAction: "Researches the target, users, technology, suppliers, and exposed services.",
    exampleActivity: "Identifies a VPN appliance, executive assistant, cloud tenant, or vulnerable internet-facing server.",
    tag: {
      label: "PRE-INGRESS\nACTIVITY",
      color: "text-[#cca827]",
      bracketColor: "border-[#cca827]",
      rowSpan: 2,
    },
  },
  {
    phaseNum: 2,
    phaseName: "Weaponization",
    aptAction: "Builds an attack package combining an access method with a loader, dropper, or implant.",
    exampleActivity: "Creates a malicious document, trojanized installer, exploit chain, or customized backdoor.",
    tag: null, // Covered by row 1's rowspan
  },
  {
    phaseNum: 3,
    phaseName: "Delivery",
    aptAction: "Gets the weaponized content to the target environment.",
    exampleActivity: "Spear-phishing attachment, malicious link, supply-chain update, drive-by download, or remote-service exploit attempt.",
    tag: {
      label: "INGRESS\nACTIVITY",
      color: "text-[#2fc4f3]",
      bracketColor: "border-[#2fc4f3]",
      rowSpan: 1,
    },
  },
  {
    phaseNum: 4,
    phaseName: "Exploitation",
    aptAction: "Causes attacker-controlled code to execute.",
    exampleActivity: "Exploits a vulnerability, abuses a macro, steals a session, or convinces the user to launch a file.",
    tag: {
      label: "PROPAGATE\nAND LOAD\nRANSOMWARE",
      color: "text-[#cca827]",
      bracketColor: "border-[#cca827]",
      rowSpan: 1,
    },
  },
  {
    phaseNum: 5,
    phaseName: "Installation",
    aptAction: "Deploys the malware and commonly establishes persistence.",
    exampleActivity: "A dropper decrypts and writes a payload; a loader downloads an implant; malware creates a service or scheduled task.",
    tag: {
      label: "DETECT\nMALWARE",
      color: "text-[#ef4444]",
      bracketColor: "border-[#ef4444]",
      rowSpan: 1,
    },
  },
  {
    phaseNum: 6,
    phaseName: "Command and Control",
    aptAction: "Establishes a communications channel between the implant and the attacker.",
    exampleActivity: "Periodic HTTPS/DNS beaconing, cloud-service abuse, tasking commands, or delivery of additional modules.",
    tag: {
      label: "ENCRYPT AND\nLOCK FILES",
      color: "text-[#cca827]",
      bracketColor: "border-[#cca827]",
      rowSpan: 1,
    },
  },
  {
    phaseNum: 7,
    phaseName: "Actions on Objectives",
    aptAction: "Uses the access to accomplish the campaign's purpose.",
    exampleActivity: "Credential theft, discovery, lateral movement, data collection, exfiltration, espionage, sabotage, or disruption.",
    tag: {
      label: "BLOCK\nENCRYPTION",
      color: "text-[#ef4444]",
      bracketColor: "border-[#ef4444]",
      rowSpan: 1,
    },
  },
];

export default function CyberKillChainTable() {
  return (
    <div className="w-full max-w-[1350px] mx-auto my-6 overflow-x-auto font-catamaran">
      <div className="min-w-[900px] border border-[#262626] rounded-lg overflow-hidden shadow-2xl bg-black">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              {/* Left bracket column header */}
              <th className="w-[12%] bg-black"></th>

              {/* Main headers */}
              <th className="w-[20%] bg-[#e5e5e5] text-black font-bold text-lg md:text-xl py-3 px-5 border-r border-[#d4d4d4]">
                Cyber Kill Chain Phases
              </th>
              <th className="w-[34%] bg-[#e5e5e5] text-black font-bold text-lg md:text-xl py-3 px-6 border-r border-[#d4d4d4]">
                What the APT does
              </th>
              <th className="w-[34%] bg-[#e5e5e5] text-black font-bold text-lg md:text-xl py-3 px-6">
                Example activity
              </th>
            </tr>
          </thead>
          <tbody>
            {killChainData.map((row, idx) => (
              <tr key={row.phaseNum} className="border-t border-[#1f1f1f]">
                {/* Left Tag Bracket Column */}
                {row.tag && (
                  <td
                    rowSpan={row.tag.rowSpan || 1}
                    className="bg-black align-middle text-right pr-3 py-2"
                  >
                    <div className="flex items-center justify-end gap-1.5 h-full">
                      <span
                        className={`${row.tag.color} font-bold text-xs tracking-wider uppercase whitespace-pre-line text-right leading-tight`}
                      >
                        {row.tag.label}
                      </span>
                      {/* Vertical bracket border line */}
                      <div
                        className={`w-1.5 self-stretch border-r-2 border-t-2 border-b-2 ${row.tag.bracketColor} rounded-r-sm my-1`}
                      />
                    </div>
                  </td>
                )}

                {/* Phase Column */}
                <td className="bg-[#7c6928] text-white font-bold text-base md:text-lg py-4 px-5 align-middle border-r border-[#695821]">
                  {row.phaseNum}. {row.phaseName}
                </td>

                {/* What the APT does Column */}
                <td className="bg-black text-white font-light text-sm md:text-base py-4 px-6 align-middle border-r border-[#1f1f1f] leading-relaxed">
                  {row.aptAction}
                </td>

                {/* Example activity Column */}
                <td className="bg-black text-white font-light text-sm md:text-base py-4 px-6 align-middle leading-relaxed">
                  {row.exampleActivity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
