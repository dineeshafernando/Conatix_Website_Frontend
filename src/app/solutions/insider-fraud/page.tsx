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
    description: "Conatix Omniskia insider fraud detection software continuously monitors every device on your network for suspicious activity: logs, mpackets, security, communication traffic, content and behavior.",
    imgUrl: "/images/threats/van-top-v4.png",
    imgWidth: 800,
    imgHeight: 450,
    altText: "Top view of an ambulance image",
  },
  {
    description: "This is a second line of text.",
    imgUrl: "/animations/insider-fraud/isolated_2.gif",
    altText: "Isolated video loop",
  },
  {
    description: "This is a third line of text.",
    imgUrl: "/animations/insider-fraud/contextual_2.gif",
    altText: "Contextual 3D video loop",
  },
  {
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    imgUrl: "/animations/insider-fraud/insider-fraud-1.gif",
    altText: "Insider fraud visualization 1",
  },
  {
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    imgUrl: "/animations/insider-fraud/insider-fraud-2.gif",
    altText: "Insider fraud visualization 2",
  },
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
      <h1 className="h1">Insider Solution</h1>
      <div className="flex flex-col items-center gap-16">
        {visualizationEntries}
      </div>
    </main>
  )
}