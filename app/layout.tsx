import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";


const geistSans = Geist({

  variable:

    "--font-geist-sans",

  subsets:

    ["latin"],

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


    "Zetein is a .xyz domain discovery platform that helps users search domain availability, explore domain information and find meaningful digital identities with fast and accurate results.",




  keywords:


  [

    "xyz domain",

    "xyz domain search",

    "available xyz domains",

    "buy xyz domain",

    "domain availability checker",

    "domain finder",

    "domain name search",

    "startup domains",

    "AI domains",

    "digital identity",

    "new domain extensions",

  ],





  authors:


  [

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





  alternates:


  {


    canonical:

      "https://zetein.xyz",


  },






  icons:


  {


    icon:


    [

      {

        url:

          "/icon.ico",


      },


      {

        url:

          "/icon.png",


        type:

          "image/png",


      },


    ],



    shortcut:


      "/icon.ico",



    apple:


      "/icon.png",



  },







  robots:


  {


    index:

      true,



    follow:

      true,



    googleBot:


    {


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








  openGraph:


  {


    title:

      "Zetein - Explore the world of .xyz",



    description:


      "Search and explore .xyz domains with Zetein. Get domain availability, insights and digital identity discovery in a fast and clean experience.",



    url:

      "https://zetein.xyz",



    siteName:

      "Zetein",



    locale:

      "en_US",



    type:

      "website",




    images:


    [

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









  twitter:


  {


    card:

      "summary_large_image",



    title:

      "Zetein - Explore the world of .xyz",



    description:


      "Explore .xyz domains, check availability and discover your next digital identity with Zetein.",



    images:


    [

      "/og-image.png"

    ],



  },






  other:


  {


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


  children:

    React.ReactNode;


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
