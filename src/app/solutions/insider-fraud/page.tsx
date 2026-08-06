import Image from "next/image"

export default function InsiderFraudPage() {
  return (
    <main>
      <div className="flex justify-center flex-wrap gap-10">
        <Image src="/animations/insider-fraud-1.gif" height={800} width={800} alt="insider fraud demo gif"></Image>
        <Image src="/animations/insider-fraud-2.gif" height={800} width={800} alt="insider fraud demo gif"></Image>
      </div> 
    </main>
  )
}