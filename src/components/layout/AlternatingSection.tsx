import Image from "next/image"
import { malewarePageDataProps, ransomwarePageDataProps } from "@/lib/threats"

interface AlternationSectionProps {
  data: malewarePageDataProps[] | ransomwarePageDataProps[]
}

export default function AlternatingSection({data}:AlternationSectionProps) {

  const dataRows = data.map(({imageUrl, imgWidth, imgHeight, altText, description, textBelowImage}:malewarePageDataProps | ransomwarePageDataProps, i) => {
    return (
      <div key={i} className={`flex flex-col items-center md:justify-center gap-4 ${i % 2 != 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <div className="flex flex-col items-center gap-2">
        <Image 
            src={imageUrl} 
            width={imgWidth ?? 500} 
            height={imgHeight ?? 500} 
            alt={altText} 
            className="object-contain" 
          />
          {textBelowImage && <p className="text-center">{textBelowImage}</p>}
        </div>
        <p className="text-xl text-center md:text-left md:max-w-2xl">{description}</p>
      </div>
    )
  })

  return (
    <section className="flex flex-col gap-16">
      {dataRows}
    </section>
  )
}