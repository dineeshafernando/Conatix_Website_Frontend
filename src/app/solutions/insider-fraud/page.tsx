import Image from "next/image"

interface InsiderFraudData {
  description: string,
  imgUrl: string,
}

const insiderfraudData: InsiderFraudData[] = [
    {
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    imgUrl: "/insider-fraud/contextual_2.gif"
  }, {
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    imgUrl: "/insider-fraud/isolated_2.gif"
  },
  {
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    imgUrl: "/insider-fraud/insider-fraud-1.gif"
  }, {
    description: "This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.",
    imgUrl: "/insider-fraud/insider-fraud-2.gif"
  }
]

export default function InsiderFraudPage() {

  const visualizationEntries = insiderfraudData.map(({description, imgUrl}:InsiderFraudData, i) => {
    return (
      <div key={i} className="max-w-[800px]">
        <p className="mb-5 text-xl">{description}</p>
        <Image src={imgUrl} width={800} height={800} alt="insider fraud visualizations" />
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