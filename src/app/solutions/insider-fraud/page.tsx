import Image from "next/image"

interface InsiderFraudData {
  description: string,
  imgUrl: string,
  imgWidth?: number,
  imgHeight?: number,
  altText?: string,
}

const insiderfraudData: InsiderFraudData[] = [
    {
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    imgUrl: "/animations/insider-fraud/contextual_2.gif"
  }, {
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    imgUrl: "/animations/insider-fraud/isolated_2.gif"
  },
  {
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    imgUrl: "/animations/insider-fraud/insider-fraud-1.gif"
  }, {
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    imgUrl: "/animations/insider-fraud/insider-fraud-2.gif"
  },
  {
    description: "Insider fraud can also threaten your IoT, field, or critical infrastructure network. Any connected vehicle that receives a software update from the manufacturer is susceptible to insider fraud.",
    imgUrl: "/images/threats/van-top-v4.png",
    imgWidth: 800,
    imgHeight: 450,
    altText: "Top view of an ambulance image",
  }
]

export default function InsiderFraudPage() {

  const visualizationEntries = insiderfraudData.map(({description, imgUrl, imgWidth, imgHeight, altText}:InsiderFraudData, i) => {
    return (
      <div key={i} className="max-w-[800px]">
        <p className="mb-5 text-xl">{description}</p>
        <Image src={imgUrl} width={imgWidth ?? 800} height={imgHeight ?? 800} alt={altText ?? "insider fraud visualizations"} />
      </div>
    )
  })


  return (
    <main>
      <h1 className="h1">Insider Fraud</h1>
      <div className="flex flex-col items-center gap-16">
        {visualizationEntries}
      </div>
    </main>
  )
}