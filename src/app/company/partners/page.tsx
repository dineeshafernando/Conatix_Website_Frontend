import Image from "next/image"
import { partners } from "@/lib/partners"

export default function PartnersPage() {
  const partnerCards = partners.map((partner) => (
    <div
      key={partner.id}
      className="aspect-square rounded-lg bg-dark-grey p-5 flex items-center justify-center"
    >
      {partner.logo ? (
        <Image
          src={partner.logo}
          width={300}
          height={300}
          alt={partner.id}
        />
      ) : (
        <div
          aria-label={`${partner.id} placeholder`}
          className="flex h-full w-full items-center justify-center border-2 border-dashed border-light-grey text-center text-sm text-light-grey p-2"
        >
          {partner.id}
        </div>
      )}
    </div>
  ))

  return (
    <main>
      <h1 className="h1">Partners List</h1>
      <div className="grid grid-cols-2 gap-5 max-w-6xl mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {partnerCards}
      </div>
    </main>
  )
}