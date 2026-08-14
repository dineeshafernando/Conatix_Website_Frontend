import InputField from "@/components/contact/InputField"

const inquiryOptions = [
    { label: "Technical Support", value: "technical" },
    { label: "Billing", value: "billing" },
    { label: "General Question", value: "general" },
];

export default function ContactForm() {
  return (
    <section className="max-w-6xl mx-auto">
      <form action="" className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4">
          <InputField type="text" name="First Name" id="first-name" placeholder="First Name"  />
          <InputField type="text" name="Last Name" id="last-name" placeholder="Last Name"  />
          <InputField type="email" name="Email" id="email" placeholder="Email" isRequired={true} />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <InputField type="text" name="Company" id="company" placeholder="Company" />
          <InputField isSelect={true} options={inquiryOptions} name="Type of Inquiry" id="inquiry-type" />
        </div>
        <div>
          <InputField isTextArea={true} name="Message" id="message" placeholder="Message" />
        </div>
      </form>
    </section>
  )
}