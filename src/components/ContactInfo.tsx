import {MapPin, Mail} from "lucide-react"

export default function ContactInfo() {
  return (
    <section className="flex flex-col gap-3">
      <h3 className="text-khaki-gold font-bold">Contact Us</h3>
      <p>Interested in deploying Conatix for your network analytics or security operations? Get in touch with our team today.</p>
      <div className="flex items-center">
        <MapPin size={25} />
        <h4 className="font-bold">Address</h4>
      </div>
      <p>Cysana Berlin UG <br />Rheinsberger Str. 76/77 <br />10115 Berlin GERMANY</p>
      <div className="flex items-center gap-1">
        <Mail size={25} />
        <h4 className="font-bold">Email</h4>
      </div>
      <p>info@conatix.com</p>
    </section>
  )
}