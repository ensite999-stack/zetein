import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zetein - Domain Search & Management",
  description:
    "Search, understand, and manage your domains with Zetein. Fast, simple, and private domain tools.",
  keywords: [
    "domain search",
    "domain management",
    "domain lookup",
    "DNS lookup",
    "domain registrar",
    "domain information",
  ],
  openGraph: {
    type: "website",
    siteName: "Zetein",
    locale: "en_US",
    url: "https://zetein.com",
    title: "Zetein - Domain Search & Management",
    description:
      "Fast, simple, and private domain search and management.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zetein",
      },
    ],
  },
  authors: [
    {
      name: "Zetein",
    },
  ],
  creator: "Zetein",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
