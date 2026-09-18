import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="text-xl">
      <h1 className="h1">About</h1>
      <section className="flex flex-col gap-6 items-center justify-center max-w-4xl mx-auto text-center">
        <p>
          Conatix was founded to apply frontier technologies to cybersecurity monitoring and detection.
        </p>
        <p>
          Our goal is to build products that are fast, lightweight, easy to use and thorough, while bringing unprecedented depth of analysis of massive data from each customer.
        </p>
        <p>
          We provide this granularity of coverage and unprecedented visibility into your own network, with full compliance with GDPR, California Privacy and all other major privacy legislation.
        </p>
        <p>
          Our software suite offers you not only full visibility but also full control of your own users, suppliers and network.
        </p>
        <Image
          src="/images/company/magnifying_glasses.png"
          width={1362}
          height={765}
          alt="Two magnifying glasses examining binary code"
          className="w-full max-w-2xl h-auto mt-6"
        />
      </section>
    </main>
  )
}
