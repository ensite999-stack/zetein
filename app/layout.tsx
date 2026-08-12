import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";


const geistSans = Geist({

  variable: "--font-geist-sans",

  subsets: ["latin"],

});



export const metadata: Metadata = {


  metadataBase:

    new URL("https://zetein.xyz"),



  title: {

    default:

      "Zetein - Explore the world of .xyz",

    template:

      "%s | Zetein",

  },



  description:

    "Zetein helps you discover meaningful .xyz domain names with a fast, accurate and advertising-free domain search experience.",



  keywords: [

    "xyz domain",

    "xyz domain search",

    "buy xyz domain",

    "available xyz domains",

    "domain finder",

    "domain name search",

    "startup domains",

    "AI domains",

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



  icons: {


    icon:

      "/icon.ico",


    shortcut:

      "/icon.ico",


    apple:

      "/icon.ico",


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

      "Zetein - Explore the world of .xyz",



    description:

      "Discover meaningful .xyz domains with a fast and clean domain search experience.",



    url:

      "https://zetein.xyz",



    siteName:

      "Zetein",



    locale:

      "en_US",



    type:

      "website",



    images: [

      {

        url:

          "/og-image.png",

        width:

          1200,

        height:

          630,

        alt:

          "Zetein - Explore the world of .xyz",

      },

    ],


  },





  twitter: {


    card:

      "summary_large_image",



    title:

      "Zetein - Explore the world of .xyz",



    description:

      "Discover your next .xyz domain with Zetein.",



    images:

      [

        "/og-image.png"

      ],


  },



  other: {


    "theme-color":

      "#050505",


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

    >


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
