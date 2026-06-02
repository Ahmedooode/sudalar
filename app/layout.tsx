import type { Metadata } from "next";
import { Montserrat, Cairo } from "next/font/google";
import "./globals.css";

// Load Montserrat for primary English typography
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body-md",
  display: "swap",
});

// Load Cairo for premium, clean Arabic typography
const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

// Essential SEO Metadata base setup
export const metadata: Metadata = {
  title: "Sudan Solar | Industrial Solar Energy Solutions",
  description:
    "Providing the most resilient, heavy-duty solar infrastructure and unit capabilities for residential, commercial, and agricultural grids in Sudan.",
  keywords: [
    "Solar Energy Sudan",
    "Sudan Solar",
    "Solar systems Khartoum",
    "طاقة شمسية في السودان",
  ],
  authors: [{ name: "Sudan Solar Industrial Corp" }],
  openGraph: {
    title: "Sudan Solar | Industrial Solar Energy Solutions",
    description:
      "Resilient solar infrastructure built for extreme environments.",
    url: "https://sudansolar.com", // Replace with your production domain later
    siteName: "Sudan Solar",
    images: [
      {
        url: "/og-image.jpg", // Place your OpenGraph cover image in the public folder later
        width: 1200,
        height: 630,
        alt: "Sudan Solar Industrial Array",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Set default language to English, injecting both font variables
    <html lang="en" className={`${montserrat.variable} ${cairo.variable}`}>
      <head>
        {/* Material Symbols Outlined Icon Font integration */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
