import Image from "next/image";

export default function Home() {
  return (
   <main>
      <header className="flex flex-col gap-6 text-2xl max-w-5xl mx-auto">
        <h1 className="h1">Skilled in detection and prevention</h1>
        <div className="w-full max-w-[800px] mx-auto my-2">
          <Image
            src="/images/cat-new.png"
            width={1793}
            height={877}
            alt="Conatix Caracal cat"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
        <p className="text-xl font-light text-light-grey text-left">The caracal is a wild jungle cat known for its oversized ears for detecting and its ruthlessness in pursuing its prey</p>
        <p>Conatix protects against the most critical threats and vulnerabilities on your organization’s IT network – malware, ransomware and insider fraud.</p>
        <div>
          <p>We catch malicious files and suspicious events in real time or stop them before they start.</p>
          <p>Better. Faster. Earlier. Zero Trust. Zero Day.</p>
        </div>
        <p>Conatix has pioneered applying and combining multiple frontier technologies for cybersecurity monitoring, detection and prevention: technologies like our own patented anti-encryption method; dynamic <span className="font-sans">3D</span> network visualization; deep learning; machine learning; and gen AI. Even <span className="text-[hsl(52,85%,62%)] font-normal">before</span> it was cool.</p>
      </header>
   </main>
  );
}
