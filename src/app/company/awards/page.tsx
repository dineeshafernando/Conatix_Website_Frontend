import { companyAwards, Award } from "@/lib/awards"
import Image from "next/image"

export default function AwardsPage() {
  // Award cards
  const awards = companyAwards.map(({company, logo, description, max_width, whiteBg, softGrayscale}:Award) => {
    return (
      <div key={company} className="w-full bg-dark-grey text-xl p-5 rounded-lg">
        <div className="flex justify-center items-center gap-4 mb-2">
          {logo.map((logoPath) => (
            <div key={logoPath} className="relative w-[130px] h-[95px]">
              <Image
                src={logoPath}
                fill
                alt={`${company} image`}
                className={`object-contain ${softGrayscale ? "grayscale" : "grayscale brightness-0 invert"} ${whiteBg ? "bg-white rounded p-2" : ""}`}
              />
            </div>
          ))}
        </div>
        <div className="text-electric-blue font-catamaran">
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