import Image from "next/image"
import Teams from "@/components/Teams"
import { advisors } from "@/lib/advisors"
import { coreTeam } from "@/lib/core"

export default function TeamPage() {
  return (
    <main>
      <h1 className="h1 text-center">Team</h1>
      <Teams />

      <section className="text-center max-w-5xl mx-auto mt-6 mb-16">
        <p className="text-light-grey font-light font-catamaran text-xl">
          Our world-class tech team and senior commercial advisory board bring many decades of experience in cybersecurity, antifraud, science, military, government, business, signals intelligence, machine learning, deep learning, large language models, encryption, visualization, full-stack agile software development and product innovation.
        </p>
      </section>

      <section className="w-full max-w-[1286px] mx-auto mb-16">
        <h2 className="text-xl font-bungee-hairline text-electric-blue [-webkit-text-stroke:1.5px_currentColor] mb-4 text-left">
          LEADERSHIP AND TECH TEAM
        </h2>
        <div className="flex flex-nowrap justify-center gap-4 text-2xl font-catamaran">
          {coreTeam.map((member) => (
            <div key={member.name} className="flex flex-col items-center flex-1 min-w-0 max-w-[170px]">
              <div className="relative w-full aspect-square">
                {member.image ? (
                  <Image src={member.image} fill alt={`${member.name} profile picture`} className="object-cover grayscale" />
                ) : (
                  <div className="absolute inset-0 bg-dark-grey border border-white/10 rounded" />
                )}
              </div>
              <div className="text-center mt-4 w-full">
                <p className="text-base">{member.name}</p>
                {member.role && <p className="text-[#c4c4c4] text-base whitespace-pre-line">{member.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-[1286px] mx-auto mb-16">
        <h2 className="text-xl font-bungee-hairline text-electric-blue [-webkit-text-stroke:1.5px_currentColor] mb-4 text-left">
          SENIOR BUSINESS ADVISORS
        </h2>
        <div className="flex flex-nowrap justify-center gap-4 text-2xl font-catamaran">
          {advisors.map((advisor) => (
            <div key={advisor.name} className="flex flex-col items-center flex-1 min-w-0 max-w-[170px]">
              <div className="relative w-full aspect-square">
                {advisor.image ? (
                  <Image src={advisor.image} fill alt={`${advisor.name} profile picture`} className="object-cover grayscale" />
                ) : (
                  <div className="absolute inset-0 bg-dark-grey border border-white/10 rounded" />
                )}
              </div>
              <div className="text-center mt-4 w-full">
                <p className="text-base">{advisor.name}</p>
                {advisor.role && <p className="text-[#c4c4c4] text-base whitespace-pre-line">{advisor.role}</p>}
              </div>
            </div>
          ))}
        </div>
        <p className="text-light-grey font-light font-catamaran text-xl text-center mt-10">
          We also maintain active cooperation agreements with leading universities in our fields.
        </p>
      </section>
    </main>
  )
}
