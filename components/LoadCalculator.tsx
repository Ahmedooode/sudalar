"use client";

import React, { useState } from "react";

// Strict structure for appliance consumption attributes
interface ApplianceItem {
  id: string;
  nameAr: string;
  nameEn: string;
  watts: number;
  count: number;
}

export const LoadCalculator: React.FC = () => {
  const [appliances, setAppliances] = useState<ApplianceItem[]>([
    {
      id: "ac_freon",
      nameAr: "مكيف فريون (1.5 طن)",
      nameEn: "AC Freon 1.5 TON",
      watts: 2000,
      count: 0,
    },
    {
      id: "ac_desert",
      nameAr: "مكيف صحراوي",
      nameEn: "Desert Air Cooler",
      watts: 400,
      count: 0,
    },
    {
      id: "fridge",
      nameAr: "ثلاجة / ديب فريزر",
      nameEn: "Refrigerator/Freezer",
      watts: 350,
      count: 0,
    },
    {
      id: "tv",
      nameAr: "شاشة تلفزيون",
      nameEn: "Television Set",
      watts: 100,
      count: 0,
    },
    {
      id: "fans_lights",
      nameAr: "مراوح وإضاءة (مجموعة غرف)",
      nameEn: "Fans & Lighting Network",
      watts: 300,
      count: 0,
    },
  ]);

  const updateCount = (id: string, delta: number) => {
    setAppliances((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(0, item.count + delta) }
          : item,
      ),
    );
  };

  // Compute aggregated real-time baseline metrics
  const totalPeakLoadWatts = appliances.reduce(
    (sum, item) => sum + item.watts * item.count,
    0,
  );
  const totalPeakLoadKw = (totalPeakLoadWatts / 1000).toFixed(2);

  // Derive estimated structural asset configuration requirement recommendations
  const recommendedSystemSizeKw = Math.ceil(parseFloat(totalPeakLoadKw) * 1.35);

  return (
    <div className="bg-surface-container-lowest border-[4px] border-primary p-6 md:p-8 shadow-neo-lg text-right max-w-3xl mx-auto">
      <div className="bg-primary text-white px-4 py-2 mb-6 border-b-[3px] border-primary inline-block font-mono text-xs uppercase">
        LOAD CAP_BUILDER // V1.0
      </div>

      <h3 className="text-2xl font-black uppercase text-primary mb-2">
        تخصيص وتقدير حجم المنظومة
      </h3>
      <p className="text-on-surface-variant text-sm mb-8">
        قم بتحديد أعداد الأجهزة الكهربائية التي ترغب في تشغيلها لحساب ذروة الحمل
        الكهربائي المطلوب لمنزلك أو منشأتك.
      </p>

      <div className="space-y-4 mb-8">
        {appliances.map((app) => (
          <div
            key={app.id}
            className="flex flex-col sm:flex-row items-center justify-between border-[2px] border-primary bg-surface-container-low p-4 gap-4"
          >
            <div className="text-center sm:text-right w-full sm:w-auto">
              <div className="font-bold text-base text-primary">
                {app.nameAr}
              </div>
              <div className="font-mono text-[11px] text-on-surface-variant">
                {app.watts} WATTS BASE
              </div>
            </div>

            {/* Tactile Counter Incrementor Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => updateCount(app.id, -1)}
                className="w-10 h-10 bg-surface-container-lowest text-primary font-bold border-[2px] border-primary shadow-neo active:translate-x-0 active:translate-y-0 transition-transform font-mono"
              >
                -
              </button>
              <span className="font-data-display text-2xl text-primary w-12 text-center select-none bg-white py-1 border border-black/10">
                {app.count}
              </span>
              <button
                onClick={() => updateCount(app.id, 1)}
                className="w-10 h-10 bg-secondary-container text-primary font-bold border-[2px] border-primary shadow-neo active:translate-x-0 active:translate-y-0 transition-transform font-mono"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Industrial Read-out Telemetry Block */}
      <div className="bg-primary text-white p-6 border-[3px] border-primary shadow-neo-gold text-center sm:text-right">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="font-mono text-xs text-secondary-container uppercase tracking-wider mb-1">
              TOTAL PEAK LOAD REQUIREMENT
            </div>
            <div className="font-data-display text-3xl text-white">
              {totalPeakLoadKw} kW
            </div>
          </div>
          <div className="border-t sm:border-t-0 sm:border-r border-white/20 pt-4 sm:pt-0 sm:pr-6">
            <div className="font-mono text-xs text-secondary-container uppercase tracking-wider mb-1">
              MINIMUM RECOMMENDED STATION CAPACITY
            </div>
            <div className="font-data-display text-3xl text-secondary-container">
              {recommendedSystemSizeKw} kWp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
