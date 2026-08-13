import Image from "next/image";

export default function Home() {
  return (
   <main>
    <header className="flex flex-col lg:flex-row items-center justify-center gap-2">
      <div className="flex flex-col items-center">
        <Image src="/images/cat.png" width={800} height={800} alt="cat image" className="min-w-xl" />
        <span className="italic">The caracal is a wild cat in the jungle known for its oversized ears for detecting <br /> and its ruthlessness in pursuing its prey. </span>
      </div>
      <div className="flex flex-col gap-2 text-2xl max-w-3xl">
        <h1 className="h1 text-left text-7xl">Skilled in detection and prevention</h1>
        <p>Conatix protects againt the most critical threats and vulnerabilities on your organization’s IT network – malware, ransomware ad insider fraud.</p>
        <p>We catch them in real time or we stop them before they start. </p>
        <p>Better.  Faster.  Earlier.  Zero Trust and Zero Day. </p>
        <p>Conatix brings together multiple frontier technologies for cybersecurity – deep learning and gen AI, dynamic 3D network visualization, and our own patented anti-encryption technology. </p>
      </div>
    </header>
   </main>
  );
}
