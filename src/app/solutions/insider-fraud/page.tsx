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
    description: "Conatix Omniskia insider fraud detection software continuously monitors every device on your enterprise, field or IoT network for suspicious activity: logs, packets, security, communication traffic, content and behavior.",
    imgUrl: "/images/threats/van-top-v4.png",
    imgWidth: 800,
    imgHeight: 450,
    altText: "Top view of an ambulance image",
  },
  {
    description: "What good is automated 24/7 discovery and monitoring of all the assets and traffic on your network if you can’t see what is happening at a glance? The Omniskia 3D network visualization dashboard shows you clusters of suspicious activity as they occur and where they sit in context in large or small networks, so you can act to remediate them in real time.",
    imgUrl: "/animations/insider-fraud/insider-fraud-2.gif",
    altText: "Insider fraud 3D visualization dashboard",
  },
]

export default function InsiderFraudPage() {

  const visualizationEntries = insiderfraudData.map(({description, imgUrl, imgWidth, imgHeight, altText}:InsiderFraudData, i) => {
    return (
      <div key={i} className="max-w-[800px]">
        {i === 1 && (
          <h2 className="text-xl font-bungee-hairline text-electric-blue [-webkit-text-stroke:1.5px_currentColor] mb-4 text-center">
            INSIDER FRAUD 3D VISUALIZATION DASHBOARD
          </h2>
        )}
        {description && <p className="mb-5 text-2xl font-medium text-[#c4c4c4]">{description}</p>}
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