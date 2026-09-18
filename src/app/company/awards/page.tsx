import { companyAwards } from "@/lib/awards"
import Image from "next/image"

export default function AwardsPage() {
  const awards = companyAwards.map(({ company, logo, description, logoBounds, logoCanvas, logoWidth }) => {
    const [x, y, artworkWidth, artworkHeight] = logoBounds
    const [canvasWidth, canvasHeight] = logoCanvas ?? [600, 200]
    // Each width is tuned visually; retain the original artwork proportions.
    const ratio = logoWidth / artworkWidth

    return (
      <div key={company} className="w-full min-h-[250px] bg-dark-grey p-6 rounded-lg flex flex-col items-center">
        <div className="flex justify-center items-center gap-4 w-full h-[130px] shrink-0 mb-5">
          {logo.map((logoPath) => (
            <div
              key={logoPath}
              className="relative shrink-0 overflow-hidden"
              style={{ width: artworkWidth * ratio, height: artworkHeight * ratio }}
            >
              <div
                className="absolute"
                style={{
                  width: `${canvasWidth / artworkWidth * 100}%`,
                  height: `${canvasHeight / artworkHeight * 100}%`,
                  left: `${-x / artworkWidth * 100}%`,
                  top: `${-y / artworkHeight * 100}%`,
                }}
              >
                <Image
                  src={logoPath}
                  fill
                  sizes={`${Math.ceil(canvasWidth * ratio)}px`}
                  alt={`${company} logo`}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-electric-blue font-catamaran text-center text-base leading-snug w-full">
          {description.map((text) => (<p key={text}>{text}</p>))}
        </div>
      </div>
    )
  })

  return (
    <main>
      <h1 className="h1">Awards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
        {awards}
      </div>
    </main>
  )
}
