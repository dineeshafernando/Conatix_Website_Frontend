import { companyAwards, Award } from "@/lib/awards"
import Image from "next/image"

export default function AwardsPage() {
  // Award cards
  const awards = companyAwards.map(({company, logo, description}:Award) => {
    return (
      <div key={description} className="w-[350px] bg-dark-grey text-xl p-5 rounded-lg">
        <div className="flex justify-around items-center mb-2">
          <p>{company}</p>
          <Image src={logo} width={125} height={125} alt={`${description} image`} className="w-[125px] h-[125px] object-contain" /> 
        </div>
        <p className="text-center">{description}</p>
      </div>
    )
  })

  return (
    <main>
      <h1 className="h1">Awards</h1>
      <div className="flex flex-wrap gap-5 max-w-[1100px] mx-auto">
        {awards}
      </div>
    </main>
  )
}