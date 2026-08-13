import type { Metadata } from "next";
import { Bungee } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css";

import NavBar from "@/components/layout/DesktopNavBar"
import MobileNav from "@/components/layout/MobileNav"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Conatix Website",
  description: "Conatix central website",
  icons: {
    icon: '/images/logos/favicon.ico' // points to public/fav-icon.ico
  }
};

const bungeeStandard = Bungee({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bungee-reg' // creates a variable to be used in globals.css
})

const bungeeHairline = localFont({
  src: '../../public/fonts/BungeeHairline.ttf',
  variable: '--font-bungee-hairline',
})

const densonBold = localFont({
  src: '../../public/fonts/Denson-BoldRound.ttf',
  variable: '--font-denson-bold',
})

const catamaran = localFont({
  src: [
    {
      path: '../../public/fonts/Catamaran-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Catamaran-Bold.ttf',
      weight: '700',
      style: 'normal',
    }],
    variable: '--font-catamaran',
})

const fonts = `${catamaran.variable} ${bungeeStandard.variable} ${bungeeHairline.variable} ${densonBold.variable}` // this allows us to style our fonts using Tailwind class method as define in globals.css

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts}>
      <body className="min-h-screen flex flex-col bg-grey font-catamaran text-white">
        {/*navbar conditional rendering using tailwind styling */}
        <div className="hidden md:block">
          <NavBar />
        </div>
        <div className="block md:hidden">
          <MobileNav />
        </div>
        <main className="flex-1 mx-6 my-10">{children}</main>
        <Footer /> 
      </body>
    </html>
  );
}
