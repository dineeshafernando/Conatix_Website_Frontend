import Link from "next/link"
import { demoData, DemoDataProps } from "@/lib/demo"

export default function DemoPage() {
  return (
    <main>
      <h1 className="h1">Demo</h1>
      <p className="text-2xl font-medium text-[#c4c4c4] w-full max-w-2xl mx-auto">Nothing beats a person-to-person live or online demo. Book one below. <br /> In the meantime, check out our product demo video to see what our cybersecurity software can do.</p>

      <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto p-4">
      {demoData.map((item) => (
        <div key={item.id} className="flex flex-col gap-3">
          <p className="text-xl font-bungee-hairline text-electric-blue [-webkit-text-stroke:1.5px_currentColor] text-center">{item.description}</p>
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
      <p className="text-center mt-10">
        <Link href="/contact/inquiry" className="text-electric-blue hover-effect hover:underline">Click here</Link> to schedule a demo with the Conatix team.
      </p>
    </main>
  )
}