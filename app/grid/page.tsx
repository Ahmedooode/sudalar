"use client";

import React, { useState } from "react";

interface Dictionary {
  grid: {
    title: string;
    metric1_lbl: string;
    metric1_val: string;
    metric2_lbl: string;
    metric2_val: string;
    map_title: string;
    map_zone1: string;
    map_zone2: string;
  };
}

const dictionaries: { en: Dictionary; ar: Dictionary } = {
  en: {
    grid: {
      title: "ESTIMATED NATIONAL POWER GRID LIVE METRICS",
      metric1_lbl: "Approximate Public Grid Deficit:",
      metric1_val: "1.6 GW DEFICIT",
      metric2_lbl: "Sudan Solar Array Generation Efficiency:",
      metric2_val: "98.4% OPTIMAL",
      map_title:
        "Autonomous Radiation & Solar Integration Topology Map - Sudan",
      map_zone1: "Primary Generation Zone: Northern State & River Nile",
      map_zone2: "Khartoum: Critical Peak Consumption Load Hub",
    },
  },
  ar: {
    grid: {
      title: "المقاييس الحية التقديرية للربط الكهربائي القومي",
      metric1_lbl: "العجز التقريبي في الشبكة العامة والمحطات:",
      metric1_val: "1.6 GW عجز",
      metric2_lbl: "كفاءة توليد مصفوفات ومحطات سودان سولار:",
      metric2_val: "98.4% كفاءة مثلى",
      map_title: "خارطة مراكز الإشعاع والربط الشمسي المستقل - السودان",
      map_zone1: "منطقة التوليد الكبرى المحددة: الولاية الشمالية ونهر النيل",
      map_zone2: "ولاية الخرطوم: ذروة استهلاك أحمال المنشآت",
    },
  },
};

export default function GridPage() {
  const [lang] = useState<"en" | "ar">("ar");
  const dict = dictionaries[lang];
  const isRtl = lang === "ar";

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className={`min-h-screen bg-background text-on-background ${isRtl ? "font-arabic" : "font-body-md"}`}
    >
      {/* ADDED 'pt-28' TO PREVENT FIXED HEADER OVERLAP */}
      <main className="p-6 md:p-12 max-w-4xl mx-auto space-y-8 pt-28">
        <div className="border-[3px] border-primary bg-surface-container-lowest p-6 shadow-neo">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 bg-red-600 border border-black rounded-full animate-pulse"></div>
            <h2 className="text-2xl font-black text-primary">
              {dict.grid.title}
            </h2>
          </div>
          <div className="space-y-4 font-mono text-sm md:text-base">
            <div className="flex justify-between border-b border-black/10 pb-2">
              <span>{dict.grid.metric1_lbl}</span>
              <span className="font-bold text-red-600">
                {dict.grid.metric1_val}
              </span>
            </div>
            <div className="flex justify-between border-b border-black/10 pb-2">
              <span>{dict.grid.metric2_lbl}</span>
              <span className="font-bold text-green-600">
                {dict.grid.metric2_val}
              </span>
            </div>
          </div>
        </div>

        <div className="border-[4px] border-primary bg-primary text-white p-2 shadow-neo-lg overflow-hidden">
          <div className="bg-surface-container p-4 border-b border-black text-primary font-bold">
            {dict.grid.map_title}
          </div>
          <div className="bg-neutral-800 h-64 flex items-center justify-center relative">
            <span className="material-symbols-outlined text-[64px] text-secondary-container opacity-40">
              map
            </span>
            <div className="absolute top-6 right-6 bg-primary border border-white text-xs p-2 max-w-xs text-center">
              {dict.grid.map_zone1}
            </div>
            <div className="absolute bottom-6 left-6 bg-secondary-container border border-black text-xs text-primary p-2 font-bold max-w-xs text-center">
              {dict.grid.map_zone2}
            </div>
          </div>
        </div>
      </main>
      <div className="bg-primary text-white py-8 border-t-[3px] border-primary text-center font-mono text-xs opacity-40">
        SUDAN SOLAR MAP FRAMEWORK
      </div>
    </div>
  );
}
