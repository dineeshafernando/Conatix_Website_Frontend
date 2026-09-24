export default function SupplierPage() {
  return (
    <main>
      <h1 className="h1">Supplier Solution</h1>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[1000px] flex flex-col gap-6">
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            Companies will continue to give third-party vendors and suppliers access to their IT networks. Compliance checks and filling out forms have their place, but they are not a complete solution.
          </p>
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            Often suppliers are smaller organizations than the network host company and so suppliers have smaller budgets for IT and less sophisticated cybersecurity hygiene. Supplier access can therefore become an Achilles’ heel for your network creating a vulnerability and a path vector for external hackers to get in.
          </p>
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            Before giving suppliers access to your network, you want to check their computers for malicious files, and once they are on your network you will want to monitor their behavior for suspicious activity in real time, 24 hours a day.
          </p>
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            This zero trust approach goes beyond forms and compliance and requires a suite of tools to certify that computers are clean before they start and to monitor their activity on the network at all times.
          </p>
        </div>
      </div>
    </main>
  )
}