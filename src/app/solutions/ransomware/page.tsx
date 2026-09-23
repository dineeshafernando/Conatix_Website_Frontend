import OneColumnLayout from "@/components/layout/OneColumnLayout"
import { ransomwarePageData } from "@/lib/solutions"

export default function RansomwarePage() {
  return (
    <main>
      <h1 className="h1">Ransomware Solution</h1>
      <p className="w-full max-w-[1000px] mx-auto mb-8 text-2xl font-medium text-[#c4c4c4] text-center">
        The Conatix CYSANA software blocks any malicious file from using the encryption keys on your own computer to encrypt your data.
      </p>
      <h2 className="text-xl font-bungee-hairline text-electric-blue [-webkit-text-stroke:1.5px_currentColor] mb-4 text-center">
        RANSOMWARE BLOCKER
      </h2>
      <OneColumnLayout data={ransomwarePageData} />
    </main>
  )
}