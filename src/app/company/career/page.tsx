export default function CareerPage() {
  const leftRoles = [
    "Frontend/Backend/Fullstack Software Developer",
    "Windows .NET Development",
    "AI Scientist",
    "AI Engineer",
    "UI/UX Design",
    "Cybersecurity",
    "Network Engineer",
  ]
  const rightRoles = [
    "Malware Analyst",
    "Software Tester",
    "Product and Project Management",
    "Video Editor",
    "Marketing and Sales",
    "Operations and Administration",
    "Finance and Accounting",
  ]

  const listClass = "list-disc list-outside pl-5 space-y-2 marker:text-electric-blue text-left"

  return (
    <main className="text-xl">
      <h1 className="h1">Career</h1>
      <section className="flex flex-col gap-6 items-center justify-center max-w-4xl mx-auto text-center">
        <p>
          Conatix hires interns year-round on a rolling basis for remote roles including:
        </p>

        <div className="flex flex-col sm:flex-row gap-x-16 gap-y-2">
          <ul className={listClass}>
            {leftRoles.map((role) => (
              <li key={role} className="pl-1">{role}</li>
            ))}
          </ul>
          <ul className={listClass}>
            {rightRoles.map((role) => (
              <li key={role} className="pl-1">{role}</li>
            ))}
          </ul>
        </div>

        <p>
          Please email a resume or c.v. as a PDF attachment, with any cover letter either in the body of the email or as a PDF attachment, to:{" "}
          <a href="mailto:team@conatix.com" className="text-electric-blue hover-effect hover:underline">
            team@conatix.com
          </a>
        </p>
      </section>
    </main>
  )
}
