import { SolutionsPageData } from "@/lib/solutions";
import OneColumnLayout from "@/components/layout/OneColumnLayout";
import CyberKillChainTable from "@/components/solutions/CyberKillChainTable";

export default function SolutionsPage() {
  return (
    <main className="text-xl">
      <h1 className="h1">Solutions</h1>
      <OneColumnLayout data={SolutionsPageData} />
      
      <div className="w-full max-w-[1350px] mx-auto mt-12 mb-16">
        <p className="mb-5 text-xl font-light text-light-grey">When do we intervene?</p>
        <CyberKillChainTable />
      </div>
    </main>
  );
}