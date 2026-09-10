import AlternatingSection from "@/components/layout/AlternatingSection"
import { insiderFraudPageData } from "@/lib/threats"

export default function InsiderFraudPage() {
  return (
    <main className="mt-4">
      <h1 className="h1">Insider Threat</h1>
      <AlternatingSection data={insiderFraudPageData} />
    </main>
  )
}