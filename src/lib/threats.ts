/* stores data for the threat and threat subpages */

// Threat homepage
export interface ThreatsPageDataProps {
  description: string,
  imageUrl: string,
  altText: string,
  imgWidth?: number,
  imgHeight?: number,
  maxWidth?: number,
}

export const ThreatsPageData: ThreatsPageDataProps[] = [
  {
    description: "Insider fraud can threaten your enterprise IT network.",
    imageUrl: "/images/threats/bank_building_v13.png",
    altText: "Bank build image",
    maxWidth: 1000,
  },
  {
    description: "Insider fraud can also threaten your IoT, field, or critical infrastructure network. Any connected vehicle that receives a software update from the manufacturer is susceptible to insider fraud!",
    imageUrl: "/images/threats/van-side-v3.png",
    altText: "Side view of an ambulance image",
    maxWidth: 1000,
  },
];

// Malware subpage
export interface malewarePageDataProps {
  imageUrl: string,
  altText: string,
  description: string,
  textBelowImage?: string,
  imgWidth?: number,
  imgHeight?: number,
  maxWidth?: number,
  captionOffsetPx?: number,
  headingAboveImage?: string,
  highlightWord?: string,
}

export const malewarePageData: malewarePageDataProps[] = [
  {
    imageUrl: "/images/threats/colored_pixel.png",
    altText: "colored pixel image",
    description: "Imagine we could visualize the code inside each software application you download as an image. How would it look? Well, something like this. Conatix peeks inside each executable and graphics file you download all the way down to the atomic level of 0s and 1s, and then maps each bit and byte to pixels to create an image.",
    imgWidth: 300,
    imgHeight: 300,
  },
  {
    imageUrl: "/images/threats/cartoon_benign.png",
    altText: "benign cartoon image",
    description: "It turns out that files with malicious code inside look different than benign files with no malicious code inside, and our deep learning AI image-recognition model can tell the difference instantly. This is an example of a benign file with no malicious code in it in the wild.",
    imgWidth: 650,
    imgHeight: 400,
  },
  {
    imageUrl: "/images/threats/cartoon_malicious.png",
    altText: "malicious cartoon image",
    description: "And this is a file that does have malicious code inside. See the differences? Our model can. It’s more scattered, more patterns, more heterogeneous. Imagine being able to tell that a file is malicious instantly upon download, without installing it, opening it, running it, sandboxing it, observing its behavior or its effects. Imagine quarantining it within milliseconds without incurring any of the risks of dynamic analysis that other malware detectors and antivirus softwares do. Now you can.",
    imgWidth: 650,
    imgHeight: 400,
  },
  {
    imageUrl: "/images/threats/cartoon_obfuscated.png",
    altText: "obfuscated cartoon image",
    description: "What about the frontier of adversarial malware that uses AI to further disguise, camouflage, obfuscate malicious code embedded in files to fool detectors like ours? Obfuscated malware is coming, and we are ready for it. We are adding the features and model adjustments needed so our “good AI” can also detect malware that has been disguised to be unseeable by bad actors using “bad AI.” Our good AI detector can see right through it. So you are covered.",
    imgWidth: 650,
    imgHeight: 400,
  },
]

// Ransomware subpage
export interface ransomwarePageDataProps {
  imageUrl: string,
  altText: string,
  description: string,
  textBelowImage?: string,
  imgWidth?: number,
  imgHeight?: number,
  maxWidth?: number,
  captionOffsetPx?: number,
  headingAboveImage?: string,
  highlightWord?: string,
}

export const ransomwarePageData: ransomwarePageDataProps[] = [
  {
    imageUrl: "/images/threats/cartoon_benign.png",
    altText: "cartoon benign image",
    description: "Ransomware is just malware that locks up your data and holds it for ransom once it gets into your computer and activates. This specific type of malware remains one of the biggest and fastest-growing threats to global business today. A special kind of problem like this deserves its own special solution. But most EDR, antivirus, antimalware software available today treat ransomware as just another malware file, offering no special prevention or detection measures.",
    imgWidth: 650,
    imgHeight: 400,
  },
  {
    imageUrl: "/images/threats/cartoon_ransomware.png",
    altText: "cartoon ransomware image",
    description: "Not Conatix CYSANA. Alongside and in parallel with our malware detector, our ransomware blocker uses our patented anti-encryption technology to prevent any would-be ransomware file from encrypting your data. Even if our detector did not spot a file’s malicious intent, our ransomware blocking technology independently prevents it from doing its dirty work.",
    imgWidth: 650,
    imgHeight: 400,
  },
]

export interface insiderFraudPageData {
  imageUrl: string,
  altText: string,
  description: string,
  textBelowImage?: string,
  imgWidth?: number,
  imgHeight?: number,
  maxWidth?: number,
  captionOffsetPx?: number, // shifts textBelowImage horizontally to sit under a specific part of the image (e.g. the person, not the whole graphic)
  headingAboveImage?: string,
  highlightWord?: string,
}


export const insiderFraudPageData: insiderFraudPageData[] = [
  {
    imageUrl: "/images/threats/insider_careless_v1.png",
    altText: "insider careless image",
    description: "In any organization, the insider threat is all around you. It is not only the fired employee with ill-intent, it is every employee who clicks on a phishing link, shares a password, circumvents a policy rule or does something similar without a second thought. Careless Insiders create openings and opportunities for Malicious Outsiders in even the most well-managed networks. Most external network breaches nowadays have an insider component.",
    textBelowImage: "Careless Insider"
  },
  {
    imageUrl: "/images/threats/insider_malicious.png",
    altText: "insider malicious image",
    description: "Then there is the malicious employee, who actively seeks to steal data or money or to gum up the works. External threat actors actually spend significant resources observing and trying to cultivate potential malicious insiders in target organizations – more resources than organizations themselves spend protecting against them.",
    textBelowImage: "Malicious Insider",
    captionOffsetPx: -65
  },
  {
    imageUrl: "/images/threats/insider_deepfake_v5.png",
    altText: "insider deepfake image",
    description: "In the age of AI, a new insider threat actor has emerged – the employee who gets hired under false pretences, using deepfake technology to disguise their identity. The most sophisticated companies have been fooled into hiring North Korean state-sponsored deepfake employees who disguise their resume, their face, their voice to get through interviews, and then spend months pretending to work for the company, earning paychecks and exfiltrating data all the while.",
    textBelowImage: "Deepfake Employee",
    captionOffsetPx: -30
  },
  {
    imageUrl: "/images/threats/insider_smart.png",
    altText: "insider deepfake image",
    description: "The insider threat space continues to expand in the age of AI, including now smart AI-enabled malware that gets into your computer and stays there, learning to mimic the behavior of insiders such as, for example, by only exfiltrating data from your network at busy, high-traffic times of day.",
    textBelowImage: "Smart Malware"
  },
  {
    imageUrl: "/images/threats/insider_agent.png",
    altText: "insider agent image",
    description: "And a further AI-based insider threat is now agentic AI. Many companies seek to use AI agents to replace traditional workflows and even employees and teams – but who is monitoring what those agents do? Agents have been known to band together in unexpected ways, to circumvent policy and governance and security controls. If you want to use agents to replace employees, then treat agents as employees and monitor them like any other insider threat.",
    textBelowImage: "AI Agent"
  },
];

export interface supplierPageDataProps {
  imageUrl: string,
  altText: string,
  description: string,
  imgWidth?: number,
  imgHeight?: number,
  maxWidth?: number,
}

export const supplierPageData: supplierPageDataProps[] = [
  {
    imageUrl: "/images/threats/Supplier_v7.png",
    altText: "supplier image",
    description: "The supplier threat is as real as the employee threat, and technically similar to detect. Many organizations give their vendors and suppliers privileged access to their own enterprise IT networks, yet do nothing to monitor what those third-parties are doing on those networks. Regular compliance checks cannot do the job of real-time, 24/7 zero-trust monitoring and detection of third-parties on your network for suspicious activity.",
  },
];
