import Image from "next/image"

export default function SolutionsPage() {
  return (
    <main>
      <h1>Solutions Page</h1>
            <div className="flex flex-wrap gap-2 mb-10">
        <Image src="/images/cartoon_benign.png" width={300} height={300} alt="cartoon benign image"></Image>
        <Image src="/images/cartoon_malicious.png" width={300} height={300} alt="cartoon malicious image"></Image>
        <Image src="/images/cartoon_obfuscated.png" width={300} height={300} alt="cartoon obfuscated image"></Image>
        <Image src="/images/cartoon_ransomware.png" width={300} height={300} alt="cartoon ransomware image"></Image>
        <Image src="/images/benign.png" width={300} height={300} alt="benign image"></Image>
        <Image src="/images/malicious.png" width={300} height={300} alt="malicious image"></Image>
        <Image src="/images/obfuscated.png" width={300} height={300} alt="obfuscated image"></Image>
        <Image src="/images/ransomware.png" width={300} height={300} alt="ransomware image"></Image>
        <Image src="/images/cat.png" width={300} height={300} alt="cat image"></Image>
      </div>
      <div className="flex justify-center flex-wrap gap-10">
        <Image src="/animations/insider-fraud-1.gif" height={800} width={800} alt="insider fraud demo gif"></Image>
        <Image src="/animations/insider-fraud-2.gif" height={800} width={800} alt="insider fraud demo gif"></Image>
      </div>
    </main>
  )
}