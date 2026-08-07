import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";


const geistSans = Geist({

  variable: "--font-geist-sans",

  subsets: ["latin"],

});



export const metadata: Metadata = {


  title: "Zetein - Find Your Domain",


  description:
    "Search domains and manage your digital assets.",


  keywords: [

    "domain search",

    "domain management",

    "DNS",

    "registrar",

    "Zetein",

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


  themeColor: [

    {

      media: "(prefers-color-scheme: light)",

      color: "#22c7d8",

    },


    {

      media: "(prefers-color-scheme: dark)",

      color: "#06152f",

    },


  ],


};






export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html

      lang="en"

      suppressHydrationWarning

    >


      <body

        className={`

        ${geistSans.variable}

        ${geistSans.className}

        antialiased

        `}

      >



        <ThemeProvider


          attribute="class"


          defaultTheme="system"


          enableSystem


          disableTransitionOnChange


        >


          {children}


        </ThemeProvider>



      </body>


    </html>

  );

}
