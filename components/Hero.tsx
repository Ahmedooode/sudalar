"use client";
import React from "react";

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
  return (
    // Changed to h-[calc(100dvh-80px)] to fit the exact remaining screen height and prevent layout scrolling
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

        {/* NEW: Deep bottom shadow gradient to seamlessly mask and hide the Gemini watermark */}
        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black via-black/95 to-transparent z-10" />
      </div>

      {/* 2. Hero Content */}
      {/* Adjusted padding (py-6 md:py-10) to optimize space and keep everything visible on smaller screens */}
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

          {/* Action Buttons - Now guaranteed to be above the fold */}
          <div className="flex flex-wrap gap-4 mt-2">
            <button className="bg-secondary-container text-primary font-black border-[4px] border-primary px-6 md:px-8 py-3 md:py-4 text-xs md:text-base transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-gold-lg active:translate-x-0 active:translate-y-0 active:shadow-none shadow-neo-gold shadow-black uppercase italic">
              {dict.hero.cta_deploy}
            </button>
            <button className="bg-surface-container-lowest text-primary font-black border-[4px] border-primary px-6 md:px-8 py-3 md:py-4 text-xs md:text-base transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-0 active:translate-y-0 active:shadow-none shadow-neo shadow-black uppercase">
              {dict.hero.cta_view}
            </button>
          </div>
        </div>
      </div>

      {/* Absolute Bottom Corner Accent */}
      {/* Moved up slightly (bottom-16) to clear the bottom watermark masking area beautifully */}
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
