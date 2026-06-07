"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Montserrat, Cairo } from "next/font/google";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html
      lang="ar"
      className={`scroll-smooth ${montserrat.variable} ${cairo.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="antialiased bg-background text-on-background min-h-screen pb-20 md:pb-0 font-arabic">
        {/* GLOBAL HEADER - AUTO SHOWS ON ALL PAGES ON DESKTOP */}
        <header className="bg-surface-container-lowest border-b-[4px] border-primary fixed top-0 left-0 w-full z-50 h-20">
          <div className="flex justify-between items-center w-full px-4 md:px-10 h-full max-w-7xl mx-auto">
            <div className="text-xl md:text-2xl font-black tracking-tighter text-primary">
              سودان سولار
            </div>

            <nav className="hidden md:flex gap-8 items-center h-full">
              <Link
                href="/"
                className={`font-bold text-sm uppercase tracking-wider ${pathname === "/" ? "border-b-2 border-primary pb-1 text-primary" : "text-on-surface-variant hover:bg-secondary-container px-2 py-1 transition-all"}`}
              >
                الرئيسية
              </Link>
              <Link
                href="/viability"
                className={`font-bold text-sm uppercase tracking-wider ${pathname === "/viability" ? "border-b-2 border-primary pb-1 text-primary" : "text-on-surface-variant hover:bg-secondary-container px-2 py-1 transition-all"}`}
              >
                الجدوى الكلية
              </Link>
              <Link
                href="/calculator"
                className={`font-bold text-sm uppercase tracking-wider ${pathname === "/calculator" ? "border-b-2 border-primary pb-1 text-primary" : "text-on-surface-variant hover:bg-secondary-container px-2 py-1 transition-all"}`}
              >
                حاسبة الأحمال
              </Link>
              <Link
                href="/grid"
                className={`font-bold text-sm uppercase tracking-wider ${pathname === "/grid" ? "border-b-2 border-primary pb-1 text-primary" : "text-on-surface-variant hover:bg-secondary-container px-2 py-1 transition-all"}`}
              >
                خريطة الشبكة
              </Link>
            </nav>

            {/* MODIFIED: Changed from button to Next.js Link for Scenario 01 */}
            <Link
              href="/calculator"
              className="bg-secondary-container text-primary font-bold border-[3px] border-primary px-4 md:px-6 py-2 shadow-neo text-xs md:text-sm uppercase inline-block text-center hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
            >
              ابدأ الآن
            </Link>
          </div>
        </header>

        {/* CURRENT ROUTE CONTENT */}
        {children}

        {/* GLOBAL BOTTOM NAV BAR - AUTO SHOWS ON ALL PAGES ON MOBILE */}
        <BottomNavBar />
      </body>
    </html>
  );
}
