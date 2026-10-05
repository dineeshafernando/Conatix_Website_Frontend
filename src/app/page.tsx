import Image from "next/image";

export default function Home() {
  return (
   <main>
      <header className="flex flex-col gap-6 text-2xl max-w-5xl mx-auto">
        <h1 className="h1">Skilled in detection and prevention</h1>
        <div className="flex flex-col gap-6 text-xl font-normal text-[#c4c4c4] leading-snug">
          <p>Conatix cybersecurity suite software tools stream, capture and analyze more detailed granular data than any other from endpoints, devices and networks in real time – without slowing you down.</p>
          <p>We detect malware and insider threats that others miss, earlier and faster.</p>
          <p>We prevent the most dangerous kind of ransomware.</p>
          <p>Patented in 15 countries.</p>
          <p>Leading university and scientific institute partners.</p>
          <p>Military tested.</p>
          <p>Built for business.</p>
        </div>
        <div className="w-full max-w-[800px] mx-auto mt-10 mb-2 flex flex-col gap-2">
          <Image
            src="/images/cat-new.png"
            width={1793}
            height={877}
            alt="Conatix Caracal cat"
            className="w-full h-auto object-contain"
            priority
          />
          <p className="text-[17px] font-light text-white text-left pl-[2.34%]">The caracal is a desert cat known for its big ears for detecting and its speed in overtaking its prey.</p>
        </div>
      </header>
   </main>
  );
}
