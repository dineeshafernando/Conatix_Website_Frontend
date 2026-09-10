import OneColumnLayout from "@/components/layout/OneColumnLayout"
import { ransomwarePageData } from "@/lib/solutions"

export default function RansomwarePage() {
  return (
    <main>
      <h1 className="h1">Ransomware Threat</h1>
      <OneColumnLayout data={ransomwarePageData} />
    </main>
  )
}