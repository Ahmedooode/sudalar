"use client";

import React, { useState } from "react";
import { LoadCalculator } from "../../components/LoadCalculator";

export default function CalculatorPage() {
  const [lang] = useState<"en" | "ar">("ar");
  const isRtl = lang === "ar";

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className={`min-h-screen bg-background text-on-background ${isRtl ? "font-arabic" : "font-body-md"}`}
    >
      {/* ADDED 'pt-28' TO PREVENT FIXED HEADER OVERLAP */}
      <main className="p-4 md:p-12 pt-28">
        <LoadCalculator />
      </main>
      <div className="bg-primary text-white py-8 border-t-[3px] border-primary text-center font-mono text-xs opacity-40">
        SUDAN SOLAR LOAD ESTIMATOR MATRIX
      </div>
    </div>
  );
}
