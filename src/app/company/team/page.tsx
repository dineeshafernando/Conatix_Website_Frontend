import Image from "next/image"
import Teams from "@/components/Teams"
import { advisors } from "@/lib/advisors"
import { coreTeam } from "@/lib/core"

export default function TeamPage() {
  return (
    <main>
      <h1 className="h1 text-center">Team</h1>
      <Teams />

      <section className="mt-16 text-center">
        <h2 className="text-xl font-light font-catamaran text-light-grey mb-4">World-Class Tech Team</h2>
        <p className="text-light-grey font-light font-catamaran text-xl mb-2 max-w-3xl mx-auto">
          Many decades experience in cybersecurity, science, military, government, business, signals intelligence, machine learning, neural networks, large language models, full-stack agile software development and product innovation
        </p>
        <p className="text-light-grey font-light font-catamaran text-xl mb-8 max-w-3xl mx-auto">
          Plus multiple active cooperation agreements with leading universities in our fields
        </p>
        <div className="flex flex-wrap justify-center gap-16 text-2xl font-catamaran mb-16">
          {coreTeam.map((member) => (
            <div key={member.name} className="flex flex-col items-center w-[200px]">
              <Image src={member.image} height={200} width={200} alt={`${member.name} profile picture`} className="w-[200px] h-[200px] object-cover grayscale" />
              <div className="text-center mt-4 w-full">
                <p>{member.name}</p>
                {member.role && <p className="text-electric-blue">{member.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-xl font-light font-catamaran text-light-grey mb-4">SENIOR BUSINESS ADVISORY TEAM</h2>
        <p className="text-light-grey font-light font-catamaran text-xl mb-8 max-w-3xl mx-auto">
          Product management, technical sales, cybersecurity marketing, PR, network, antifraud and cybersec domain experience in US, Canada, UK and Europe
        </p>
        <div className="flex flex-wrap justify-center gap-16 text-2xl font-catamaran">
          {advisors.map((advisor) => (
            <div key={advisor.name} className="flex flex-col items-center w-[200px]">
              <Image src={advisor.image} height={200} width={200} alt={`${advisor.name} profile picture`} className="w-[200px] h-[200px] object-cover grayscale" />
              <div className="text-center mt-4 w-full">
                <p>{advisor.name}</p>
                <p className="text-electric-blue">{advisor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
