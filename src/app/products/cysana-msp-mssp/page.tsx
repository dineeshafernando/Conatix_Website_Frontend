export default function CysanaMspPage() {
  return (
    <main>
      <h1 className="h1">Cysana MSP/MSSP</h1>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[1000px] flex flex-col gap-6 text-center">
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            The CYSANA malware detector and ransomware blocker is customized to the needs of Managed Service Providers and Managed Security Service Providers:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 marker:text-electric-blue text-left text-xl font-normal text-[#c4c4c4] leading-snug">
            <li className="pl-1">
              Multitenant capability that allows MSPs to monitor all of their client companies at once and to toggle from client to client as needed in real time.
            </li>
            <li className="pl-1">
              Remote control of user computers at each of your client sites enabling you to shut down the computers of problem users, end their session etc.
            </li>
            <li className="pl-1">
              Easy rollout of the product to all the endpoints in your client base networks.
            </li>
            <li className="pl-1">
              Integrations with major Remote Management and Monitoring (RMM) systems for ease of access and convenient alerts and functionality on a single pane of glass coming soon.
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
