import OneColumnLayout from "@/components/layout/OneColumnLayout"
import { ransomwarePageData } from "@/lib/solutions"

export default function RansomwarePage() {
  return (
    <main>
      <OneColumnLayout data={ransomwarePageData} />
    </main>
  )
}