import Image from "next/image"
import { ThreatsPageDataProps, supplierPageDataProps } from "@/lib/threats"
import { malewarePageDataProps, ransomwarePageDataProps } from "@/lib/solutions"

interface OneColData {
  data: (ThreatsPageDataProps | supplierPageDataProps | malewarePageDataProps | ransomwarePageDataProps)[]
}

export default function OneColumnLayout({data}:OneColData) {

  const dataRows = data.map(({description, imageUrl, imgWidth, imgHeight, maxWidth, altText, headingAboveImage}:ThreatsPageDataProps | supplierPageDataProps | malewarePageDataProps | ransomwarePageDataProps, i) => {
    return (
      <div key={i} className="w-full" style={{ maxWidth: maxWidth ?? 800 }}>
        {description && <p className="mb-10 text-xl font-normal text-[#c4c4c4] leading-snug">{description}</p>}
        {headingAboveImage && (
          <h2 className="text-xl font-bungee-hairline text-electric-blue [-webkit-text-stroke:1.5px_currentColor] mb-2 text-left">
            {headingAboveImage}
          </h2>
        )}
        <Image src={imageUrl} width={imgWidth ?? 800} height={imgHeight ?? 800} alt={altText} className="w-full h-auto" />
      </div>
    )
  })

  return (
    <section className="flex flex-col items-center gap-20">
      {dataRows}
    </section>
  )
}