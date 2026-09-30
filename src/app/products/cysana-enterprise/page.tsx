export default function CysanaEnterprisePage() {
  return (
    <main>
      <h1 className="h1">Cysana Enterprise</h1>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[1000px] flex flex-col gap-6 text-center">
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            The CYSANA malware detector and ransomware blocker is adapted to the needs of CISOs and Sysadmins in large and small organizations:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 marker:text-electric-blue text-left text-xl font-normal text-[#c4c4c4] leading-snug">
            <li className="pl-1">
              Easy rollout to all of your employees and/or suppliers.
            </li>
            <li className="pl-1">
              Straightforward scaling for any size organization.
            </li>
            <li className="pl-1">
              Provides comprehensive control and visibility into the endpoints on your network.
            </li>
            <li className="pl-1">
              Lightweight and does not conflict with existing cybersecurity measures – can be used as extra protection against ransomware etc. in addition to your existing platform or antivirus tool.
            </li>
            <li className="pl-1">
              Real-time monitoring and instant quarantining without slowing down your network or endpoints.
            </li>
            <li className="pl-1">
              Integrations with major Managed Detection and Response (MDR) platforms coming soon.
            </li>
            <li className="pl-1">
              Availability on major cloud marketplaces for each purchase / procurement coming soon.
            </li>
          </ul>
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
  );
}
