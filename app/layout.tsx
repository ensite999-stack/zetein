import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {

  title: "Zetein",

  description:
    "Find and manage your domains.",


  keywords: [
    "Domain Search",
    "Domain Management",
    "DNS",
    "Registrar",
    "Zetein",
  ],


  robots: {
    index: true,
    follow: true,
  },


  icons: {
    icon: "/favicon.ico",
  },


  openGraph: {

    title: "Zetein",

    description:
      "Find and manage your domains.",

    type: "website",

  },

};



// 控制手机浏览器顶部颜色

export const viewport: Viewport = {

  themeColor: "#dff7f7",

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
