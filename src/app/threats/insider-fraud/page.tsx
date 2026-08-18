import AlternatingSection from "@/components/layout/AlternatingSection"
import { insiderFraudPageData } from "@/lib/threats"

export default function InsiderFraudPage() {
  return (
    <main>
      <AlternatingSection data={insiderFraudPageData} />
    </main>
  )
}