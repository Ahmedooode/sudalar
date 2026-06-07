"use client";
import React from "react";
import Link from "next/link"; // استيراد Link للتنقل السلس والذكي في Next.js

// Define the exact shape of the translation dictionary object
interface TranslationDict {
  hero: {
    title1: string;
    title2: string;
    description: string;
    cta_deploy: string;
    cta_view: string;
  };
}

interface HeroProps {
  dict: TranslationDict;
}

export const Hero: React.FC<HeroProps> = ({ dict }) => {
  // فحص ذكي لتحديد لغة التصفح الحالية لتقديم أفضل العناوين التسويقية (High-Conversion Labels)
  const isArabic = dict.hero.title1.includes("طـاقـة");

  // العناوين الجديدة المحسّنة لتجربة مستخدم خارقة (UX)
  const primaryLabel = isArabic
    ? "احسب أحمال منزلك وابدأ الآن"
    : "Calculate Your Loads & Start";
  const secondaryLabel = isArabic
    ? "تصفح الباقات السكنية الجاهزة"
    : "View Ready Solar Packages";

  return (
    // Height optimized to h-[calc(100dvh-80px)] to perfectly eliminate initial layout scrolling
    <section className="relative h-[calc(100dvh-80px)] w-full flex items-center overflow-hidden border-b-[6px] border-primary bg-black">
      {/* 1. Background Video Segment */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale brightness-[0.4]"
        >
          <source src="/assets/videos/sudalar-hero.mp4" type="video/mp4" />
        </video>

        {/* Heavy Grid Overlay (Brutalist Style) */}
        <div className="absolute inset-0 bg-[radial-gradient(#fed01b_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>

        {/* Dark solid overlay for contrast */}
        <div className="absolute inset-0 bg-primary/30"></div>

        {/* Deep bottom shadow gradient to seamlessly mask and hide the Gemini watermark */}
        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black via-black/95 to-transparent z-10" />
      </div>

      {/* 2. Hero Content */}
      <div className="relative z-10 w-full px-4 md:px-10 py-6 md:py-10 max-w-7xl mx-auto flex items-center h-full">
        <div className="max-w-4xl flex flex-col gap-4 md:gap-6 text-right rtl:text-right ltr:text-left w-full">
          <h1 className="font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-[1.1] tracking-tighter text-white drop-shadow-md">
            <span className="text-secondary-container">{dict.hero.title1}</span>
            <br />
            {dict.hero.title2}
          </h1>

          {/* Brutalist Text Box */}
          <div className="max-w-2xl bg-black/80 backdrop-blur-sm rtl:border-r-[8px] ltr:border-l-[8px] border-secondary-container p-5 md:p-6 shadow-neo shadow-black">
            <p className="text-sm md:text-lg font-bold text-white leading-relaxed">
              {dict.hero.description}
            </p>
          </div>

          {/* Action Buttons - OPTIMIZED HIGH-CONVERSION UX */}
          <div className="flex flex-wrap gap-4 mt-2">
            {/* Primary Action: Directs the user to the interactive load calculator page */}
            <Link
              href="/calculator"
              className="bg-secondary-container text-primary font-black border-[4px] border-primary px-6 md:px-8 py-3 md:py-4 text-xs md:text-base transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-gold-lg active:translate-x-0 active:translate-y-0 active:shadow-none shadow-neo-gold shadow-black uppercase italic flex items-center gap-2 group"
            >
              <span>{primaryLabel}</span>
              {/* Dynamic arrow that shifts on hover to prompt an action */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ltr:rotate-0 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>

            {/* Secondary Action: Triggers a smooth scroll to the pricing anchor on the same page */}
            <Link
              href="#pricing-section"
              className="bg-surface-container-lowest text-primary font-black border-[4px] border-primary px-6 md:px-8 py-3 md:py-4 text-xs md:text-base transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-0 active:translate-y-0 active:shadow-none shadow-neo shadow-black uppercase flex items-center gap-2 group"
            >
              {/* Package/Grid Box icon to give context before clicking */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <span>{secondaryLabel}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Absolute Bottom Corner Accent */}
      <div className="absolute bottom-16 right-12 rtl:left-12 rtl:right-auto bg-secondary-container p-5 border-[4px] border-primary shadow-neo-lg z-20 hidden lg:flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.16-.28L11.5 2H13l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 15.55 11 21 11 21z" />
        </svg>
      </div>
    </section>
  );
};
