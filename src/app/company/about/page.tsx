import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="text-xl">
      <h1 className="h1">About</h1>
      <section className="flex flex-col gap-6 items-center justify-center max-w-4xl mx-auto text-center">
        <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
          Conatix was founded to apply frontier technologies to cybersecurity monitoring and detection.
        </p>
        <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
          Our goal is to build products that are fast, lightweight and easy to use, while bringing unprecedented depth of analysis to each customer’s own massive real-time data.
        </p>
        <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
          We provide this granularity of coverage and unprecedented visibility into your own network, in full compliance with GDPR, California Privacy and all other major privacy legislation.
        </p>

        <div className="w-full max-w-2xl flex justify-between px-4 mt-6">
          <span className="text-xl font-bungee-hairline text-electric-blue [-webkit-text-stroke:1.5px_currentColor]">Less Granular</span>
          <span className="text-xl font-bungee-hairline text-electric-blue [-webkit-text-stroke:1.5px_currentColor]">More Granular</span>
        </div>
        <Image
          src="/images/company/magnifying_glasses.png"
          width={1362}
          height={765}
          alt="Two magnifying glasses examining binary code"
          className="w-full max-w-2xl h-auto"
        />
        <div className="w-full max-w-2xl flex justify-between px-4">
          <span className="text-xl font-catamaran font-bold text-[hsl(52,85%,62%)]">Good</span>
          <span className="text-xl font-catamaran font-bold text-[hsl(52,85%,62%)]">Better</span>
        </div>

        <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
          Our software suite offers you not only full visibility but also full control of your own users, suppliers and network.
        </p>
      </section>
    </main>
  )
}
