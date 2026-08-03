import { companyAwards, Award } from "@/lib/awards"
import Image from "next/image"

export default function displayAwards() {
  const awards = companyAwards.map(({logo, description}:Award) => {
    return (
      <div className="flex gap-2 items-center text-xl">
        <Image src={logo} width={100} height={100} alt={`${description} image`} className="w-[100px] h-[100px] object-contain" /> 
        <p>{description}</p>
      </div>
    )
  })

  return (
    <section className="flex flex-col gap-2">{awards}</section>
  )
}