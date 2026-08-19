export default function DemoPage() {

  const tempData = [
    {
      id: "malware",
      title: "Malware Demo",
    },
    {
      id: "insider-fraud",
      title: "Insider Fraud Demo",
    },
    {
      id: "cysana",
      title: "Cysana Demo",
    },
    {
      id: "omniskia",
      title: "Omniskia Demo",
    },
  ];

  return (
    <main className="text-xl">
      <h1 className="h1">Demo</h1>
      <p className="text-xl w-full max-w-2xl mx-auto">Please take a look at our product demo videos and technical whitepapers below. <br /> There’s nothing better than a person-to-person online demo. <br /> Our team would love to show you what our cybersecurity software can do.</p>

      {/* demos placeholder */}
      <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto p-4">
      {tempData.map((item) => (
        <div key={item.id} className="flex flex-col gap-3">
          {/* Text content above video box */}
          <div>
            <h3 className="text-xl text-white">{item.title}</h3>
          </div>

          {/* Video Placeholder Box */}
          <div className="w-full aspect-video border-2 border-khaki-gold rounded-xl bg-dark-grey flex items-center justify-center text-sm">
            Video Placeholder
          </div>
        </div>
      ))}
    </div>

      <p className="text-center">Click here (link to contact form and calendar) to schedule. </p>
    </main>
  )
}