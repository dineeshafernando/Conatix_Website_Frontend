import { companyAwards, Award } from "@/lib/awards"
import Image from "next/image"

export default function AwardsPage() {
  const awards = companyAwards.map(({logo, description}:Award) => {
    return (
      <div className="max-w-[250px] flex flex-col items-center justify-center gap-2 text-xl">
        <Image src={logo} width={100} height={100} alt={`${description} image`} className="w-[100px] h-[100px] object-contain" /> 
        <p className="text-center">{description}</p>
      </div>
    )
  })

  return (
    <main>
      <h1 className="h1">Awards</h1>
      <div className="flex flex-wrap gap-10">
        {awards}
      </div>
    </main>
  )
}