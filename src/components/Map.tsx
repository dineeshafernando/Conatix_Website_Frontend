"use client"

import { useState } from "react"
import {MapPin} from "lucide-react"

interface OfficeLocationData {
  title: string;
  region: string,
  company: string;
  addressLines: string[];
  phone: string;
  mobile?: string;
  fax?: string;
  iframeSrc: string;
}

const officeLocations: OfficeLocationData[] = [
  {
    title: "WASHINGTO",
    region: "(BELTWAY)",
    company: "Conatix Corp.",
    addressLines: [
      "46175 Westlake Drive",
      "Suite 320",
      "Potomac Falls VA 20165",
      "USA",
    ],
    phone: "+1 (703) 651-1073",
    fax: "+1 (703) 552-8224",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.170656653787!2d-77.40562535941535!3d39.03422823873642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b639949e19cb47%3A0xadf98206def7b5f1!2s46175%20Westlake%20Dr%20%23320%2C%20Potomac%20Falls%2C%20VA%2020165!5e0!3m2!1sen!2sus!4v1786112695651!5m2!1sen!2sus",
  },
  {
    title: "NEW YORK",
    region: "(NOMAD",
    company: "Cysana Inc.",
    addressLines: [
      "1178 Broadway",
      "3rd Floor #659",
      "New York NY 10001",
      "USA",
    ],
    phone: "+1 (917) 920-6336",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.7630402015125!2d-73.99076075934622!3d40.74523933569889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a60fc4b4af%3A0x761778219aea7e87!2s1178%20Broadway%203rd%20Floor%20%23659%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1786112552886!5m2!1sen!2sus",
  },
  {
    title: "MONTREAL",
    region: "(MILE END)",
    company: "Conatix du Nord Inc.",
    addressLines: [
      "4388 Rue Saint-Denis",
      "Suite 200 #550",
      "Montreal QC H2J 2L1",
      "CANADA",
    ],
    phone: "+1 (514) 447-2807",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.3533979592703!2d-73.5839064591384!3d45.523093529627346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bd1ee3d5bed%3A0xb5c13725e30f53c1!2s4388%20R.%20Saint-Denis%20200%20550%2C%20Montr%C3%A9al%2C%20QC%20H2J%202L1%2C%20Canada!5e0!3m2!1sen!2sus!4v1786112484617!5m2!1sen!2sus",
  },
  {
    title: "LONDON (SHOREDITCH)",
    region: "(SHOREDITCH)",
    company: "Conatix UK Ltd",
    addressLines: [
      "66 Paul Street",
      "London England",
      "EC2A 4NA",
      "UK",
    ],
    phone: "+44 (20) 3769 1113",
    mobile: "+44 (7) 4183 50090",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.3539857973096!2d-0.08642025884904901!3d51.525066909529656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761caf8cf433b1%3A0xe5a7ea0b9af52390!2s66%20Paul%20St%2C%20London%20EC2A%204NA%2C%20UK!5e0!3m2!1sen!2sus!4v1786112294865!5m2!1sen!2sus",
  },
  {
    title: "BERLIN",
    region: "(MITTE",
    company: "Cysana Berlin UG",
    addressLines: [
      "Rheinsberger Str. 76/77",
      "D-10115 Berlin",
      "GERMANY",
    ],
    phone: "+49 (30) 4669 0239",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9707.20278894336!2d13.384279534114413!3d52.53704005655498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851f1197344db%3A0x823f64799865f4d3!2sRheinsberger%20Str.%2076%2F77%2C%2010115%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1786035701532!5m2!1sen!2sus",
  },
];

export default function Map() {
  const berlinLocation = officeLocations[0] // default location stored in location, which is what's rendered when user visits the location page
  const [location, setLocation] = useState(berlinLocation)

  const handleLocation = (selectedLocation:OfficeLocationData) => {
    if (location.title != selectedLocation.title) setLocation(selectedLocation);
  }

  const locations = officeLocations.map((office:OfficeLocationData) => {
    const currentMapLocation: boolean = location.title == office.title

    return (
      <li key={office.title} className="text-xl">
        <div className="flex gap-1">
          <MapPin />
          <h4 className="font-bold">{office.title}</h4>
        </div>
        <p>{office.company}</p>
        <p>{office.region}</p>
        <ul>
          {office.addressLines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p>Tel: {office.phone}</p>
        {office.mobile && <p>Mob: {office.mobile}</p>}
        {office.fax && <p>Fax: {office.fax}</p>}
        <button 
          onClick={() => handleLocation(office)} 
          className={location.title == office.title ? "" : "hover-effect hover:underline text-electric-blue"}
          disabled={currentMapLocation}
          >
            {currentMapLocation ? "Current location" : "Switch map to this location"}
        </button>
      </li>
    )
  })

  return (
    <section>
      <div className="invert-[90%] hue-rotate-180">
        <iframe 
          title={`Map showing location of ${location.company} - ${location.title}`}
          src={location.iframeSrc}
          className="w-full h-[450px] "
          allowFullScreen
          loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <ul className="flex flex-wrap justify-center gap-10 mt-10">
        {locations}
      </ul>
    </section>
  )
}
