import Image from "next/image"
import { malewarePageDataProps, ransomwarePageDataProps } from "@/lib/threats"

interface AlternationSectionProps {
  data: malewarePageDataProps[] | ransomwarePageDataProps[]
}

export default function AlternatingSection({data}:AlternationSectionProps) {

  const dataRows = data.map(({imageUrl, imgWidth, imgHeight, altText, description, textBelowImage}:malewarePageDataProps | ransomwarePageDataProps, i) => {
    const isReversed = i % 2 !== 0;
    return (
      <div
        key={i}
        className={`w-full max-w-5xl mx-auto flex flex-col items-center gap-8 md:gap-12 ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-2">
          <Image 
            src={imageUrl} 
            width={imgWidth ?? 500} 
            height={imgHeight ?? 500} 
            alt={altText} 
            className="object-contain max-h-[380px] w-auto" 
          />
          {textBelowImage && <p className="text-center text-light-grey">{textBelowImage}</p>}
        </div>
        <div className={`w-full md:w-1/2 flex flex-col justify-center ${isReversed ? "md:pl-16 lg:pl-24" : "md:pr-6"}`}>
          <p className="text-xl font-light text-light-grey text-center md:text-left leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    )
  })

  return (
    <section className="flex flex-col gap-20 my-8">
      {dataRows}
    </section>
  )
}