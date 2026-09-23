import Image from "next/image"
import { ThreatsPageDataProps, supplierPageDataProps } from "@/lib/threats"
import { malewarePageDataProps, ransomwarePageDataProps } from "@/lib/solutions"

interface OneColData {
  data: (ThreatsPageDataProps | supplierPageDataProps | malewarePageDataProps | ransomwarePageDataProps)[]
}

export default function OneColumnLayout({data}:OneColData) {

  const dataRows = data.map(({description, imageUrl, imgWidth, imgHeight, maxWidth, altText}:ThreatsPageDataProps | supplierPageDataProps | malewarePageDataProps | ransomwarePageDataProps, i) => {
    return (
      <div key={i} className="w-full" style={{ maxWidth: maxWidth ?? 800 }}>
        {description && <p className="mb-8 text-2xl font-medium text-[#c4c4c4]">{description}</p>}
        <Image src={imageUrl} width={imgWidth ?? 800} height={imgHeight ?? 800} alt={altText} className="w-full h-auto" />
      </div>
    )
  })

  return (
    <section className="flex flex-col items-center gap-12">
      {dataRows}
    </section>
  )
}