import Image from "next/image"
import { malewarePageDataProps } from "@/lib/solutions"

interface AlternationSectionProps {
  data: malewarePageDataProps[] 
}

export default function AlternatingSection({data}:AlternationSectionProps) {

  const dataRow = data.map(({imageUrl, altText, description}:malewarePageDataProps, i) => {
    return (
      <div key={i} className={`flex flex-col items-center md:items-start md:justify-center gap-4 ${i % 2 != 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <Image src={imageUrl} height={500} width={500} alt={altText}></Image>
        <p className="text-xl text-center md:text-left md:max-w-2xl">{description}</p>
      </div>
    )
  })

  return (
    <section className="flex flex-col gap-16">
      {dataRow}
    </section>
  )
}