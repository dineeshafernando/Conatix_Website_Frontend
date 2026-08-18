import Image from "next/image"
import { malewarePageDataProps, ransomwarePageDataProps } from "@/lib/threats"

interface AlternationSectionProps {
  data: malewarePageDataProps[] | ransomwarePageDataProps[]
}

export default function AlternatingSection({data}:AlternationSectionProps) {

  const dataRows = data.map(({imageUrl, altText, description}:malewarePageDataProps, i) => {
    return (
      <div key={i} className={`flex flex-col items-center md:justify-center gap-4 ${i % 2 != 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <Image src={imageUrl} width={500} height={500} alt={altText} className="h-[500px] object-cover" />
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