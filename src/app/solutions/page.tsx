import { SolutionsPageData } from "@/lib/solutions"
import OneColumnLayout from "@/components/layout/OneColumnLayout"

export default function SolutionsPage() {
  return (
    <main className="text-xl">
      <h1 className="h1">Solutions</h1>
      <OneColumnLayout data={SolutionsPageData} />
    </main>
  )
}