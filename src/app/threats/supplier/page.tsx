import { supplierPageData } from "@/lib/threats"
import OneColumnLayout from "@/components/layout/OneColumnLayout"

export default function SupplierPage() {
  return (
    <main>
      <h1 className="h1">Supplier Threat</h1>
      <OneColumnLayout data={supplierPageData} />
    </main>
  )
}