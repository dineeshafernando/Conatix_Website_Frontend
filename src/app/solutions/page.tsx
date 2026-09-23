import SecurityCycleDiagram from "@/components/solutions/SecurityCycleDiagram";
import CyberKillChainTable from "@/components/solutions/CyberKillChainTable";

export default function SolutionsPage() {
  return (
    <main className="text-xl">
      <h1 className="h1 mb-10">Solutions</h1>
      <div className="w-full max-w-[1350px] mx-auto mt-4 mb-10">
        <p className="text-left text-2xl font-medium text-[#c4c4c4] pl-4 md:pl-8">
          Conatix cybersecurity software can monitor all of your endpoints and devices – your entire network – in real-time. Giving you unprecedented visibility, security and control.
        </p>
      </div>

      <section className="flex flex-col items-center gap-8">
        <div className="w-full max-w-[800px]">
          <SecurityCycleDiagram />
        </div>
      </section>

      <div className="w-full max-w-[1350px] mx-auto mt-12 mb-16">
        <p className="mb-5 text-2xl font-medium text-[#c4c4c4]">When do we intervene?</p>
        <CyberKillChainTable />
      </div>
    </main>
  );
}