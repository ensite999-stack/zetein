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
  description: "Search domains and manage your digital assets.",
  keywords: [
    "domain",
    "domain search",
    "Zetein",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};


export const viewport: Viewport = {

  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#e8faf8",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#08111f",
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
