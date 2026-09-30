export default function OmniskiaEnterprisePage() {
  return (
    <main>
      <h1 className="h1">Omniskia Enterprise</h1>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[1000px] flex flex-col gap-6 text-center">
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            The enterprise edition of our insider fraud detector runs directly on your network without slowing it down.
          </p>
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            It is easy to install and unobtrusive.
          </p>
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            It monitors all network devices on your enterprise IT network, your remote network, your field network, your IoT network including manufacturing facilities, critical infrastructure or connected vehicles.
          </p>
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            Omniskia Enterprise provides you unprecedented visibility into and control of your network and rapid decision-making with information from our 3D network visualization dashboard.
          </p>
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            Accredited users with a network username and password are not well monitored in most network environments. Whether the user came by their login credentials legitimately, or acquired them by fraud, force or otherwise, there are often few controls on what they do.
          </p>
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            Now you can see suspicious activity as it happens in real time, with explanations of the exploit.
          </p>
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            You can locate the source of the suspicious activity.
          </p>
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            You can kick the suspicious network device or user off your network or end their session in real-time or in egregious cases our software can do it automatically.
          </p>
          <p className="text-xl font-normal text-[#c4c4c4] leading-snug">
            You can see what is happening on your network 24/7, and you control your own data about your network. You can also use that data for additional forensic investigation and analysis after the incident.
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