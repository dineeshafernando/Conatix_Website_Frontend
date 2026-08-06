import AlternatingSection from "@/components/layout/AlternatingSection"
import { ransomwarePageData } from "@/lib/solutions"

export default function RansomwarePage() {
  return (
    <main>
      <AlternatingSection data={ransomwarePageData} />
    </main>
  )
}