import OneColumnLayout from "@/components/layout/OneColumnLayout"
import { ransomwarePageData } from "@/lib/solutions"

export default function RansomwarePage() {
  return (
    <main>
      <h1 className="h1">Ransomware Solution</h1>
      <p className="w-full max-w-[1000px] mx-auto mb-8 text-xl font-light text-light-grey text-center">
        The Conatix CYSANA software blocks any malicious file from using the encryption keys on your own computer to encrypt your data.
      </p>
      <OneColumnLayout data={ransomwarePageData} />
    </main>
  )
}