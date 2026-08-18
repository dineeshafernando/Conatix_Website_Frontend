import Image from "next/image"
import { ThreatsPageDataProps } from "@/lib/threats"

interface OneColData {
  data: ThreatsPageDataProps[]
}

export default function OneColumnLayout({data}:OneColData) {

  const dataRows = data.map(({description, imageUrl, altText}:ThreatsPageDataProps, i) => {
    return (
      <div key={i} className="max-w-[800px]">
        <p className="mb-5 text-xl">{description}</p>
        <Image src={imageUrl} width={800} height={800} alt={altText} />
      </div>
    )
  })

  return (
    <section className="flex flex-col items-center gap-16">
      {dataRows}
    </section>
  )
}