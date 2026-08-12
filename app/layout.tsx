import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {

  title: "Zetein - Find Your .xyz Domain",

  description:
    "Fast and accurate .xyz domain search.",

  keywords: [
    "xyz domain",
    "domain search",
    ".xyz",
    "Zetein",
    "ζητεῖν",
  ],

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

};


export const viewport: Viewport = {

  width: "device-width",

  initialScale: 1,

  themeColor: "#F5F1E8",

};


export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="en">

      <body
        className={`
          ${geistSans.variable}
          ${geistSans.className}
          antialiased
        `}
      >

        {children}

      </body>

    </html>

  );

}
