import { demoData, DemoDataProps } from "@/lib/demo"

export default function DemoPage() {
  return (
    <main>
      <h1 className="h1">Demo</h1>
      <p className="text-xl w-full max-w-2xl mx-auto">Please take a look at our product demo videos and technical whitepapers below. <br /> There’s nothing better than a person-to-person online demo. <br /> Our team would love to show you what our cybersecurity software can do.</p>

      <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto p-4">
      {demoData.map((item) => (
        <div key={item.id} className="flex flex-col gap-3">
          <p className="text-xl">{item.description}</p>
          {item.src ? (
            <video
              src={item.src}
              controls
              aria-label={item.alt}
              className="w-full aspect-video border-2 border-khaki-gold rounded-xl bg-dark-grey"/>
          ) : (
            <div
              aria-label={`${item.alt} placeholder`}
              className="w-full aspect-video border-2 border-khaki-gold rounded-xl bg-dark-grey flex items-center justify-center text-sm">
              Video Placeholder
            </div>
          )}
        </div>
      ))}
    </div>
      <p className="text-center mt-10">Click here (link to contact form and calendar) to schedule. </p>
    </main>
  )
}