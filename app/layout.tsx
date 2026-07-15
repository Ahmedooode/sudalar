import React from "react";
import type { Metadata } from "next";
import { Montserrat, Cairo } from "next/font/google";
import { SiteHeader } from "../components/SiteHeader";
import { BottomNavBar } from "../components/BottomNavBar";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body-md",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://photon-sd.com"),

  title: {
    default: "Photon | أنظمة الطاقة الشمسية في السودان — سكنية، زراعية، تجارية",
    template: "%s | Photon Solar السودان",
  },

  description:
    "Photon تقدم أنظمة طاقة شمسية متكاملة في السودان — الخرطوم، بحري، أم درمان، وسوق سعد قشرة. نصمم وننفذ منظومات سكنية وزراعية وتجارية بكفاءة عالية. كهرباء مستقلة وموثوقة بلا انقطاع.",

  keywords: [
    "طاقة شمسية السودان",
    "أنظمة طاقة شمسية الخرطوم",
    "منظومات سكنية شمسية",
    "منظومات زراعية شمسية",
    "منظومات تجارية شمسية",
    "سولار السودان",
    "طاقة شمسية بحري",
    "طاقة شمسية أم درمان",
    "سوق سعد قشرة بحري",
    "كهرباء شمسية الخرطوم",
    "انقطاع الكهرباء السودان",
    "عاكس شمسي السودان",
    "بطاريات شمسية السودان",
    "ألواح شمسية السودان",
    "photon solar sudan",
    "solar energy khartoum",
    "solar systems sudan",
    "off-grid solar sudan",
    "solar inverter sudan",
  ],

  authors: [{ name: "Photon Solar", url: "https://photon-sd.com" }],
  creator: "Photon Solar Sudan",
  publisher: "Photon Solar Sudan",

  openGraph: {
    type: "website",
    locale: "ar_SD",
    url: "https://photon-sd.com",
    siteName: "Photon Solar السودان",
    title: "Photon | أنظمة الطاقة الشمسية في السودان",
    description:
      "منظومات طاقة شمسية سكنية، زراعية، وتجارية في السودان. الخرطوم، بحري، سعد قشرة، وجميع الولايات. كهرباء مستقلة بلا انقطاع.",
    images: [
      {
        url: "/assets/images/photon-04.png",
        width: 1200,
        height: 630,
        alt: "Photon Solar — أنظمة الطاقة الشمسية في السودان",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Photon | أنظمة الطاقة الشمسية في السودان",
    description:
      "منظومات طاقة شمسية سكنية، زراعية، وتجارية في السودان. الخرطوم، بحري، سعد قشرة.",
    images: ["/assets/images/photon-04.png"],
  },

  alternates: {
    canonical: "https://photon-sd.com",
    languages: {
      "ar-SD": "https://photon-sd.com",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`scroll-smooth ${montserrat.variable} ${cairo.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="antialiased bg-background text-on-background min-h-screen pb-20 md:pb-0 font-arabic">
        <SiteHeader />
        {children}
        <BottomNavBar />
      </body>
    </html>
  );
}
