"use client";
import React from "react";

interface CTADict {
  cta: {
    title: string;
    subtitle: string;
    s1_title: string;
    s1_desc: string;
    s2_title: string;
    s2_desc: string;
    s3_title: string;
    s3_desc: string;
  };
}

interface CTAProps {
  dict: CTADict;
}

export const CTA: React.FC<CTAProps> = ({ dict }) => {
  return (
    <section className="bg-primary text-white py-16 md:py-24 border-y-[6px] border-secondary-container">
      <div className="px-4 md:px-10 text-center max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 md:mb-8 italic">
          {dict.cta.title}
        </h2>
        <p className="text-lg md:text-xl text-secondary-container max-w-2xl mx-auto mb-12 uppercase font-black">
          {dict.cta.subtitle}
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
          <div className="p-8 border-[3px] border-secondary-container bg-primary-container max-w-xs text-start shadow-neo-gold w-full">
            <h4 className="text-2xl font-bold mb-2 text-secondary-container">
              {dict.cta.s1_title}
            </h4>
            <p className="font-mono text-xs uppercase font-bold text-white leading-relaxed">
              {dict.cta.s1_desc}
            </p>
          </div>

          <div className="p-8 border-[3px] border-secondary-container bg-primary-container max-w-xs text-start shadow-neo-gold w-full">
            <h4 className="text-2xl font-bold mb-2 text-secondary-container">
              {dict.cta.s2_title}
            </h4>
            <p className="font-mono text-xs uppercase font-bold text-white leading-relaxed">
              {dict.cta.s2_desc}
            </p>
          </div>

          <div className="p-8 border-[3px] border-secondary-container bg-primary-container max-w-xs text-start shadow-neo-gold w-full">
            <h4 className="text-2xl font-bold mb-2 text-secondary-container">
              {dict.cta.s3_title}
            </h4>
            <p className="font-mono text-xs uppercase font-bold text-white leading-relaxed">
              {dict.cta.s3_desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
