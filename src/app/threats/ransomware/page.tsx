import AlternatingSection from "@/components/layout/AlternatingSection"
import { ransomwarePageData } from "@/lib/threats"

export default function RansomwarePage() {
  return (
    <main>
      <AlternatingSection data={ransomwarePageData} />
    </main>
  )
}