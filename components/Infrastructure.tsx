"use client";
import React from "react";

interface InfraDict {
  infrastructure: {
    tag: string;
    title: string;
    description: string;
    card1_title: string;
    card1_desc: string;
    card1_f1: string;
    card1_f2: string;
    card2_title: string;
    card2_desc: string;
    card2_f1: string;
    card2_f2: string;
    card3_title: string;
    card3_desc: string;
    card3_f1: string;
    card3_f2: string;
  };
}

interface InfraProps {
  dict: InfraDict;
}

export const Infrastructure: React.FC<InfraProps> = ({ dict }) => {
  return (
    <section className="py-16 md:py-24 bg-surface-container-high border-b-[3px] border-primary">
      <div className="px-4 md:px-10 max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="bg-primary text-white px-3 py-1 font-mono text-xs uppercase mb-4 inline-block">
              {dict.infrastructure.tag}
            </span>
            <h2 className="text-4xl md:text-[40px] font-black uppercase leading-none text-primary">
              {dict.infrastructure.title}
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base text-on-surface-variant italic font-medium">
              {dict.infrastructure.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-surface-container-lowest border-[3px] border-primary p-8 shadow-neo hover:-translate-y-1 transition-transform">
            <div className="bg-primary w-16 h-16 flex items-center justify-center mb-8 border-[3px] border-secondary-container">
              <span className="material-symbols-outlined text-white text-[32px]">
                shield
              </span>
            </div>
            <h3 className="text-2xl font-bold uppercase mb-4 text-primary">
              {dict.infrastructure.card1_title}
            </h3>
            <p className="text-base text-on-surface-variant mb-6 min-h-[80px]">
              {dict.infrastructure.card1_desc}
            </p>
            <ul className="font-mono text-xs flex flex-col gap-3 font-bold">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary block"></span>{" "}
                {dict.infrastructure.card1_f1}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary block"></span>{" "}
                {dict.infrastructure.card1_f2}
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container-lowest border-[3px] border-primary p-8 shadow-neo-gold hover:-translate-y-1 transition-transform">
            <div className="bg-secondary-container w-16 h-16 flex items-center justify-center mb-8 border-[3px] border-primary">
              <span className="material-symbols-outlined text-primary text-[32px]">
                settings_input_component
              </span>
            </div>
            <h3 className="text-2xl font-bold uppercase mb-4 text-primary">
              {dict.infrastructure.card2_title}
            </h3>
            <p className="text-base text-on-surface-variant mb-6 min-h-[80px]">
              {dict.infrastructure.card2_desc}
            </p>
            <ul className="font-mono text-xs flex flex-col gap-3 font-bold">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary-container block border border-black"></span>{" "}
                {dict.infrastructure.card2_f1}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary-container block border border-black"></span>{" "}
                {dict.infrastructure.card2_f2}
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container-lowest border-[3px] border-primary p-8 shadow-neo hover:-translate-y-1 transition-transform">
            <div className="bg-primary w-16 h-16 flex items-center justify-center mb-8 border-[3px] border-secondary-container">
              <span className="material-symbols-outlined text-white text-[32px]">
                monitoring
              </span>
            </div>
            <h3 className="text-2xl font-bold uppercase mb-4 text-primary">
              {dict.infrastructure.card3_title}
            </h3>
            <p className="text-base text-on-surface-variant mb-6 min-h-[80px]">
              {dict.infrastructure.card3_desc}
            </p>
            <ul className="font-mono text-xs flex flex-col gap-3 font-bold">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary block"></span>{" "}
                {dict.infrastructure.card3_f1}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary block"></span>{" "}
                {dict.infrastructure.card3_f2}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
