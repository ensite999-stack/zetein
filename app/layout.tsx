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

};


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
        className={`${geistSans.className} antialiased`}
      >

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >

          {children}

        </ThemeProvider>

      </body>

    </html>

  );

}
