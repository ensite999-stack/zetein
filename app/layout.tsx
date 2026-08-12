import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";


const geistSans = Geist({

  variable: "--font-geist-sans",

  subsets: ["latin"],

});



export const metadata: Metadata = {


  metadataBase:
    new URL("https://zetein.xyz"),



  title: {

    default:
      "Zetein - Find Your Perfect .xyz Domain",

    template:
      "%s | Zetein",

  },



  description:

    "Zetein helps you discover, search and find the perfect .xyz domain name. Fast, accurate and advertising-free domain discovery.",



  keywords: [

    "xyz domain",

    "xyz domain search",

    "buy xyz domain",

    "available xyz domains",

    "find xyz domain",

    "domain name search",

    "domain finder",

    "best xyz domains",

    "premium xyz domains",

    "startup domain names",

    "AI domain names",

    "digital identity",

    "new domain extensions",

  ],



  authors: [

    {

      name:
        "Zetein",

    },

  ],



  creator:
    "Zetein",



  publisher:
    "Zetein",



  applicationName:
    "Zetein",



  category:
    "Domain Search",




  alternates: {

    canonical:
      "https://zetein.xyz",

  },





  robots: {


    index:
      true,


    follow:
      true,



    googleBot: {


      index:
        true,


      follow:
        true,


      maxImagePreview:
        "large",


      maxSnippet:
        -1,


      maxVideoPreview:
        -1,


    },


  },






  openGraph: {


    title:

      "Zetein - Find Your Perfect .xyz Domain",



    description:

      "Discover available .xyz domains with a fast and clean domain search experience.",



    url:

      "https://zetein.xyz",



    siteName:

      "Zetein",



    locale:

      "en_US",



    type:

      "website",



  },







  twitter: {


    card:

      "summary_large_image",



    title:

      "Zetein - Find Your Perfect .xyz Domain",



    description:

      "Search and discover your next .xyz domain with Zetein.",


  },




};








export const viewport: Viewport = {


  width:

    "device-width",



  initialScale:

    1,



  themeColor:

    "#050505",



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


          defaultTheme="dark"


          enableSystem={false}


          disableTransitionOnChange


        >


          {children}


        </ThemeProvider>


      </body>


    </html>

  );


}
