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
  dict: TranslationDict; // Replaced 'any' with the specific interface
}

export const Hero: React.FC<HeroProps> = ({ dict }) => {
  return (
    <section className="relative bg-surface-container-low border-b-[3px] border-primary overflow-hidden">
      <div className="grid grid-cols-12 w-full px-4 md:px-10 py-16 md:py-24 gap-6 md:gap-8 items-center max-w-7xl mx-auto">
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-6 md:gap-8 order-2 lg:order-1 text-right">
          <h1 className="font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-[1.1] tracking-tighter text-primary">
            {dict.hero.title1}
            <br />
            {dict.hero.title2}
          </h1>
          <p className="text-base md:text-lg text-on-surface-variant max-w-xl border-r-[6px] border-secondary-container pr-6 py-2 bg-transparent">
            {dict.hero.description}
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 mt-4">
            <button className="bg-secondary-container text-primary font-bold border-[3px] border-primary px-6 md:px-10 py-3 md:py-4 text-sm md:text-base transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-gold-lg active:translate-x-0 active:translate-y-0 active:shadow-none shadow-neo-gold shadow-black uppercase italic">
              {dict.hero.cta_deploy}
            </button>
            <button className="bg-surface-container-lowest text-primary font-bold border-[3px] border-primary px-6 md:px-10 py-3 md:py-4 text-sm md:text-base transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo active:translate-x-0 active:translate-y-0 active:shadow-none shadow-neo uppercase">
              {dict.hero.cta_view}
            </button>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
          <div className="border-[4px] border-primary bg-primary shadow-neo-lg aspect-video lg:aspect-square overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container to-black flex flex-col items-center justify-center p-6 text-center select-none">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary-container rounded-full border-[3px] border-primary flex items-center justify-center shadow-neo cursor-pointer transform transition-transform hover:scale-105 active:scale-95 group-hover:bg-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-primary ml-1 rtl:mr-1 rtl:ml-0"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="mt-4 font-mono text-xs md:text-sm text-secondary-container tracking-widest uppercase">
                [ SYSTEM VIDEO COMING SOON ]
              </span>
            </div>
            <div className="absolute inset-0 border-[12px] md:border-[20px] border-primary pointer-events-none opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
