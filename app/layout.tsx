import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";


const geistSans = Geist({

  variable: "--font-geist-sans",

  subsets: ["latin"],

});



export const metadata: Metadata = {


  title: {

    default:
      "Zetein - Find Your Perfect .xyz Domain",

    template:
      "%s | Zetein",

  },



  description:

    "Discover, search and find your perfect .xyz domain name with Zetein. Fast, accurate and advertising-free domain discovery.",



  keywords: [

    "xyz domain",

    "xyz domain search",

    "buy xyz domain",

    "find xyz domain",

    "available xyz domains",

    "best xyz domains",

    "domain name search",

    "domain discovery",

    "domain finder",

    "startup domains",

    "AI domain names",

    "digital identity",

    "web domain search",

  ],



  authors: [

    {

      name: "Zetein",

    },

  ],



  creator: "Zetein",



  publisher: "Zetein",



  metadataBase:

    new URL("https://zetein.xyz"),



  alternates: {

    canonical:

      "https://zetein.xyz",

  },



  robots: {


    index: true,

    follow: true,


    googleBot: {


      index: true,

      follow: true,


      "max-image-preview":

        "large",


      "max-snippet":

        -1,


      "max-video-preview":

        -1,


    },


  },





  openGraph: {


    title:

      "Zetein - Find Your Perfect .xyz Domain",


    description:

      "Search and discover available .xyz domains with a fast and clean domain discovery experience.",


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

      "Discover your next digital identity with Zetein.",


  },





  category:

    "Domain Search",


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
