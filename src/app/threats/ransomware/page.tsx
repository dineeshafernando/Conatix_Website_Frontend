import AlternatingSection from "@/components/layout/AlternatingSection"
import { ransomwarePageData } from "@/lib/threats"

export default function RansomwarePage() {
  return (
    <main>
      <h1 className="h1">Ransomware Threat</h1>
      <AlternatingSection data={ransomwarePageData} />
    </main>
  )
}