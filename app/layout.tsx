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

      "Zetein - Explore .xyz Domains",



    template:

      "%s | Zetein",


  },



  description:


    "Explore the world of .xyz domains with Zetein. Discover, search, and register the perfect domain for your next idea.",





  keywords:


  [

    "xyz domain",

    "xyz domains",

    "xyz domain search",

    "available xyz domains",

    "buy xyz domain",

    "domain availability checker",

    "domain finder",

    "domain name search",

    "startup domains",

    "AI domains",

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

          "/favicon.ico",


      },


      {

        url:

          "/icon.png",


        type:

          "image/png",


        sizes:

          "512x512",


      },


    ],




    shortcut:


      "/favicon.ico",




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

      "Zetein - Explore .xyz Domains",



    description:


      "Explore the world of .xyz domains with Zetein. Discover, search, and register the perfect domain for your next idea.",



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

          "Zetein - Explore .xyz Domains",


      },


    ],


  },









  twitter:


  {


    card:

      "summary_large_image",



    title:

      "Zetein - Explore .xyz Domains",



    description:


      "Explore the world of .xyz domains with Zetein. Discover, search, and register the perfect domain for your next idea.",



    images:


    [

      "/og-image.png",

    ],


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
