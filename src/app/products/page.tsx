export default function ProductsPage() {
  return (
    <main>
      <h1 className="h1">Products</h1>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[1000px] flex flex-col gap-6 text-center">
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            The key Conatix cybersecurity monitoring, detection and prevention tools are:
          </p>
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            CYSANA (CYberSecurity ANAlytics), our 2-in-1 malware detector and ransomware blocker, protects Windows computers and servers from malware and ransomware. Other operating systems coming soon.
          </p>
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            Omniskia, our insider fraud detector, can run directly on your enterprise IT network or on a virtual software-defined network that we can provide to give you even more visibility and control into your global network. It detects suspicious activity on the part of employees and also third parties (vendors and suppliers) with access to your network.
          </p>
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            Put the two products together and you have the Conatix Third-Party Risk Management Suite with special combined suite pricing. This enables you to check your suppliers’ computers for malware before they access your network, and monitor their activity on your network in real-time 24/7. The reporting can come directly to the host company sysadmin, CISO, MSP, MSSP and/or to the supplier at your option.
          </p>
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            Let us help find the right product and the right version for your organization.
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
