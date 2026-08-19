import { ThreatsPageData } from "@/lib/threats"
import OneColumnLayout from "@/components/layout/OneColumnLayout"
import Image from "next/image"

export default function ThreatsPage() {
  return (
    <main className="text-xl">
      <h1 className="h1">Threats</h1>

      <section className="flex flex-col gap-3 items-center justify-center mb-5">
        <p>Ransomware, still one of the most pervasive and costly cyber threats.</p>
        <div className="flex items-end gap-2">
          <Image src="/images/threats/ransomware_table.png" height={600} width={600} alt="ransomware data table image" />
          <Image src="/images/threats/ransomware_cost.png" height={150} width={150} alt="ransomware data table image" />
        </div>
        <p>Ransomware is now present in nearly half of all breaches.</p>
      </section>

      <OneColumnLayout data={ThreatsPageData} />
    </main>
  )
}