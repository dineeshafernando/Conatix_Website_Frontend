import { companyAwards, Award } from "@/lib/awards"
import Image from "next/image"

export default function AwardsPage() {
  // Award cards
  const awards = companyAwards.map(({company, logo, description, max_width, whiteBg, softGrayscale, scale}:Award) => {
    return (
      <div key={company} className="w-full bg-dark-grey text-xl p-6 rounded-lg flex flex-col items-center">
        <div className="flex justify-center items-center gap-4 h-[80px] w-full mb-3">
          {logo.map((logoPath) => (
            <div key={logoPath} className="relative w-full max-w-[200px] h-[65px] flex items-center justify-center">
              <Image
                src={logoPath}
                fill
                alt={`${company} image`}
                style={scale ? { transform: `scale(${scale})` } : undefined}
                className={`object-contain ${whiteBg ? "bg-white rounded p-2" : ""}`}
              />
            </div>
          ))}
        </div>
        <div className="text-electric-blue font-catamaran text-center w-full">
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