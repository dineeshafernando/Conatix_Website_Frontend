import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";


import NavBar from "@/components/layout/NavBar"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Conatix Website",
  description: "Conatix central website",
  icons: {
    icon: '/favicon.ico' // points to public/fav-icon.ico
  }
};

const bungee = localFont({
  src: '../../public/fonts/BungeeHairline-Regular.ttf',
  variable: '--font-bungee-reg',
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

const fonts = `${catamaran.variable} ${bungee.variable} ${densonBold.variable}` // this allows us to style our fonts using Tailwind class method as define in globals.css

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts}>
      <body className="min-h-screen flex flex-col bg-dark-grey text-white font-catamaran">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer /> 
      </body>
    </html>
  );
}
