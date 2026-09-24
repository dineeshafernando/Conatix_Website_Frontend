import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="text-xl">
      <h1 className="h1">Contact</h1>
      <section className="flex flex-col gap-6 items-center justify-center max-w-3xl mx-auto text-center">
        <p>
          For press inquiries, email{" "}
          <a href="mailto:david.lehrer@conatix.com" className="text-electric-blue hover-effect hover:underline">
            david.lehrer@conatix.com
          </a>{" "}
          and cc to{" "}
          <a href="mailto:conatix-admin@conatix.com" className="text-electric-blue hover-effect hover:underline">
            conatix-admin@conatix.com
          </a>
        </p>
        <p>
          For career inquiries, email{" "}
          <a href="mailto:team@conatix.com" className="text-electric-blue hover-effect hover:underline">
            team@conatix.com
          </a>
        </p>
        <p>
          For admin, vendor and partner inquiries, email{" "}
          <a href="mailto:conatix-admin@conatix.com" className="text-electric-blue hover-effect hover:underline">
            conatix-admin@conatix.com
          </a>
        </p>
        <p>
          For customer inquiries, email{" "}
          <a href="mailto:inquiry@conatix.com" className="text-electric-blue hover-effect hover:underline">
            inquiry@conatix.com
          </a>
        </p>
        <p>
          If you are not a customer, you can also fill out the{" "}
          <Link href="/contact/inquiry" className="text-electric-blue hover-effect hover:underline">
            Inquiry form
          </Link>{" "}
          on this menu. If you are a customer, you can fill out the{" "}
          <Link href="/contact/support" className="text-electric-blue hover-effect hover:underline">
            Support form
          </Link>{" "}
          on this menu to create a Support Ticket.
        </p>
        <p>
          If you would like to be a customer,{" "}
          <a href="https://calendar.conatix.com/david-lehrer" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover-effect">
            click here
          </a>{" "}
          to schedule a demo with the Conatix team.
        </p>
      </section>
    </main>
  )
}
