import AlternatingSection from "@/components/layout/AlternatingSection"
import { cyberomicsPageData } from "@/lib/cyberomics"

export default function CyberomicsPage() {
  return (
    <main>
      <h1 className="h1">Cyberomics</h1>
      <div className="max-w-5xl mx-auto mb-10 text-2xl font-medium text-[#c4c4c4] space-y-4">
        <p>1: Simultaneous mapping and monitoring of the totality of a network and its constituent cells (biology)…or of servers, connections, endpoints and software code (computing)</p>
        <p>2: Real-time analytics on the most massive fast continuous streaming messy unstructured real-time data we can get!​</p>
      </div>
      <AlternatingSection data={cyberomicsPageData} />
    </main>
  )
}