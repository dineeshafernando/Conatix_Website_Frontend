import AlternatingSection from "@/components/layout/AlternatingSection"
import { cyberomicsPageData } from "@/lib/cyberomics"

export default function CyberomicsPage() {
  return (
    <main>
      <h1 className="h1">Cyberomics</h1>
      <p>#1: Simultaneous mapping and monitoring of the totality of a network and its constituent cells (biology)…or of servers, connections, endpoints and software code (computing)</p>
      <p>#2: Real-time analytics on the most massive fast continuous streaming messy unstructured real-time data we can get!​</p>
      <AlternatingSection data={cyberomicsPageData} />
    </main>
  )
}