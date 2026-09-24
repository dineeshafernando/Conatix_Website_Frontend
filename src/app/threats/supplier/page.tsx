import { supplierPageData } from "@/lib/threats"
import OneColumnLayout from "@/components/layout/OneColumnLayout"

export default function SupplierPage() {
  return (
    <main>
      <h1 className="h1">Supplier Threat</h1>
      <div className="mt-8">
        <OneColumnLayout data={supplierPageData} />
      </div>
    </main>
  )
}