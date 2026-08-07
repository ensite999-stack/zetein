import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const viewport: Viewport = {
  themeColor: "#22c7d8",
};


export const metadata: Metadata = {

  title: "Zetein - Find your domain",

  description:
    "Search domains and manage your digital assets.",


  keywords: [
    "domain",
    "domains",
    "domain search",
    "Zetein",
  ],


  openGraph: {

    type: "website",

    title: "Zetein - Find your domain",

    description:
      "Search domains and manage your digital assets.",

  },


  icons: {

    icon: "/favicon.ico",

  },


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

className={`${geistSans.variable} ${geistSans.className} antialiased`}

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
