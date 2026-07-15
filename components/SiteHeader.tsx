"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`font-bold text-sm uppercase tracking-wider ${
        pathname === href
          ? "border-b-2 border-primary pb-1 text-primary"
          : "text-on-surface-variant hover:bg-secondary-container px-2 py-1 transition-all"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="bg-surface-container-lowest border-b-[4px] border-primary fixed top-0 left-0 w-full z-50 h-20">
      <div className="flex justify-between items-center w-full px-4 md:px-10 h-full max-w-7xl mx-auto">
        <Link href="/" className="overflow-hidden h-full flex items-center">
          <Image
            src="/assets/images/photon-05.png"
            alt="Photon"
            width={220}
            height={220}
            className="w-[140px] md:w-[220px] h-auto flex-shrink-0"
            priority
          />
        </Link>

        <nav className="hidden md:flex gap-8 items-center h-full">
          {navLink("/", "الرئيسية")}
          {navLink("/viability", "الجدوى الكلية")}
          {navLink("/calculator", "حاسبة الأحمال")}
          {navLink("/grid", "خريطة الشبكة")}
          {navLink("/catalog", "الكتالوج")}
        </nav>

        <Link
          href="/calculator"
          className="bg-secondary-container text-primary font-bold border-[3px] border-primary px-4 md:px-6 py-2 shadow-neo text-xs md:text-sm uppercase inline-block text-center hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
        >
          ابدأ الآن
        </Link>
      </div>
    </header>
  );
}
