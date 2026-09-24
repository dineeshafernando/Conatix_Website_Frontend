"use client"

import { useState } from "react"

interface OfficeLocationData {
  city: string;
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
    city: "WASHINGTON",
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
    city: "NEW YORK",
    region: "(NOMAD)",
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
    city: "MONTREAL",
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
    city: "LONDON",
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
    city: "BERLIN",
    region: "(MITTE)",
    company: "Cysana Berlin UG",
    addressLines: [
      "Torstraße 105",
      "D-10119 Berlin",
      "GERMANY",
    ],
    phone: "+49 (30) 4669 0239",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.1831049664775!2d13.403432800000001!3d52.530121199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8511cd42ce94b%3A0xa0a807fc30e16318!2sVirtual%20Office%20Berlin%20-%20Gesch%C3%A4ftsadresse%20mieten%20%7C%20MANA!5e0!3m2!1sen!2sus!4v1787330666414!5m2!1sen!2sus",
  },
];

export default function Map() {
  const berlinLocation = officeLocations[0] // default location stored in location, which is what's rendered when user visits the location page
  const [location, setLocation] = useState(berlinLocation)

  const handleLocation = (selectedLocation:OfficeLocationData) => {
    if (location.city != selectedLocation.city) setLocation(selectedLocation);
  }

  const locations = officeLocations.map((office:OfficeLocationData) => {
    const currentMapLocation: boolean = location.city == office.city

    return (
      <li key={office.city} className="text-sm">
        <div className="text-electric-blue font-bungee-hairline [-webkit-text-stroke:2px_currentColor]">
          <button
            onClick={() => handleLocation(office)}
            className={`relative group w-fit text-left cursor-pointer disabled:cursor-default hover:text-white transition-colors ${currentMapLocation ? "text-white" : ""}`}
            disabled={currentMapLocation}
          >
            {office.city} <br />
            {office.region}
            <span className="nav-hover-animation"></span>
          </button>
        </div>
        <p>{office.company}</p>
        <ul>
          {office.addressLines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p>Tel: {office.phone}</p>
        {office.mobile && <p>Mob: {office.mobile}</p>}
        {office.fax && <p>Fax: {office.fax}</p>}
      </li>
    )
  })

  return (
    <section className="font-light text-lg text-light-grey">
      <div className="invert-[90%] hue-rotate-180">
        <iframe 
          title={`Map showing location of ${location.company} - ${location.city}`}
          src={location.iframeSrc}
          className="w-full h-[450px] "
          allowFullScreen
          loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-5 max-w-6xl mx-auto gap-y-5 mt-10 px-4 md:translate-x-12 lg:translate-x-16 xl:translate-x-20 2xl:translate-x-40">
        {locations}
      </ul>
    </section>
  )
}
