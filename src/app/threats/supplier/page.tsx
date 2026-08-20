import { supplierPageData } from "@/lib/threats"
import OneColumnLayout from "@/components/layout/OneColumnLayout"

export default function SupplierPage() {
  return (
    <main>
      <OneColumnLayout data={supplierPageData} />
    </main>
  )
}