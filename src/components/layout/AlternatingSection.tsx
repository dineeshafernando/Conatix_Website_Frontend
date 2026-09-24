import Image from "next/image"
import { malewarePageDataProps, ransomwarePageDataProps, insiderFraudPageData } from "@/lib/threats"
import { CyberomicsPageDataProps } from "@/lib/cyberomics"

interface AlternationSectionProps {
  data: malewarePageDataProps[] | ransomwarePageDataProps[] | insiderFraudPageData[] | CyberomicsPageDataProps[]
}

export default function AlternatingSection({data}:AlternationSectionProps) {

  const dataRows = data.map(({imageUrl, imgWidth, imgHeight, altText, description, textBelowImage, captionOffsetPx, headingAboveImage, highlightWord}:malewarePageDataProps | ransomwarePageDataProps | insiderFraudPageData | CyberomicsPageDataProps, i) => {
    const descriptionParts = highlightWord
      ? description.split(new RegExp(`(\\b${highlightWord}\\b)`, "g"))
      : [description];
    const isReversed = i % 2 !== 0;
    return (
      <div
        key={i}
        className={`w-full max-w-5xl mx-auto flex flex-col items-center gap-8 md:gap-12 ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className={`w-full md:w-1/2 flex flex-col justify-center gap-2 ${headingAboveImage ? "items-start" : "items-center"}`}>
          {headingAboveImage && (
            <h2 className="text-xl font-bungee-hairline text-electric-blue [-webkit-text-stroke:1.5px_currentColor] mb-2 text-left">
              {headingAboveImage}
            </h2>
          )}
          <Image
            src={imageUrl} 
            width={imgWidth ?? 500} 
            height={imgHeight ?? 500} 
            alt={altText} 
            className="object-contain max-h-[380px] w-auto" 
          />
          {textBelowImage && (
            <p
              className="text-center text-light-grey"
              style={captionOffsetPx ? { transform: `translateX(${captionOffsetPx}px)` } : undefined}
            >
              {textBelowImage}
            </p>
          )}
        </div>
        <div className={`w-full md:w-1/2 flex flex-col justify-center ${isReversed ? "md:pl-16 lg:pl-24" : "md:pr-6"}`}>
          <p className="text-xl font-normal text-[#c4c4c4] text-center md:text-left leading-snug">
            {descriptionParts.map((part, partIndex) =>
              highlightWord && part === highlightWord ? (
                <span key={partIndex} className="text-[hsl(52,85%,62%)] font-normal">{part}</span>
              ) : (
                part
              )
            )}
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