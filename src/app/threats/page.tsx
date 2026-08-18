import { ThreatsPageData } from "@/lib/threats"
import OneColumnLayout from "@/components/layout/OneColumnLayout"

export default function ThreatsPage() {
  return (
    <main className="text-xl">
      <h1 className="h1">Threats</h1>
      <OneColumnLayout data={ThreatsPageData} />
    </main>
  )
}