import { companyAwards, Award } from "@/lib/awards"
import Image from "next/image"

export default function AwardsPage() {
  // Award cards
  const awards = companyAwards.map(({company, logo, description, max_width, whiteBg}:Award) => {
    return (
      <div key={company} className="w-full bg-dark-grey text-xl p-5 rounded-lg">
        <div className="flex justify-center items-center gap-4 mb-2">
          {logo.map((logoPath) => (
            <Image
              key={logoPath}
              src={logoPath}
              width={125}
              height={125}
              alt={`${company} image`}
              className={`w-auto h-[125px] max-w-[${max_width ? max_width : 50}%] object-contain ${whiteBg ? "bg-white rounded p-2" : ""}`}
            />
          ))}
        </div>
        <div className="text-electric-blue">
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