export default function ConatixTPRMSuitePage() {
  return (
    <main>
      <h1 className="h1">Third-Party Risk Management Suite</h1>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[1000px] flex flex-col gap-6 text-center">
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            The Conatix Third-Party Risk Management Suite integrates our CYSANA antimalware antiransomware and our Omniskia insider fraud monitoring products into a single suite that provides unprecedented visibility and control into what your vendors, suppliers and other privileged third parties are doing on your IT network.
          </p>
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            Control and the ability to intervene in real time.
          </p>
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            You can still fill out compliance forms every few months.
          </p>
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            Now you will also have a zero trust tool for controlling security outcomes in real time.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <a
          href="https://calendar.conatix.com/david-lehrer"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-md bg-electric-blue text-white font-bold hover:bg-electric-blue/80 transition duration-200"
        >
          BOOK A DEMO
        </a>
      </div>
    </main>
  )
}