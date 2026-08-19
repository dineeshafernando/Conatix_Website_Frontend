import { ThreatsPageData } from "@/lib/threats"
import OneColumnLayout from "@/components/layout/OneColumnLayout"
import Image from "next/image"

export default function ThreatsPage() {
  return (
    <main className="text-xl">
      <h1 className="h1">Threats</h1>

      <section className="mb-5">
        <div className="flex gap-2 justify-center items-end">
          <div>
            <p className="text-center">Ransomware, still one of the most pervasive and costly cyber threats.</p>
            <Image src="/images/threats/ransomware_table.png" height={600} width={600} alt="ransomware data table image" />
          </div>
          <div>
            <Image src="/images/threats/ransomware_cost.png" height={150} width={150} alt="ransomware data table image" />
            <p>Ransomware is now present in nearly half of all breaches.</p>
          </div>
        </div>
      </section>

      <OneColumnLayout data={ThreatsPageData} />
    </main>
  )
}