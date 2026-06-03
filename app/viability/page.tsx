"use client";

import React, { useState } from "react";

interface Dictionary {
  viability: {
    title: string;
    hero_desc: string;
    card1_title: string;
    card1_desc: string;
    card2_title: string;
    card2_desc: string;
  };
}

const dictionaries: { en: Dictionary; ar: Dictionary } = {
  en: {
    viability: {
      title: "FEASIBILITY & POWER GRID STABILITY ANALYSIS",
      hero_desc:
        "The national electricity network in Sudan suffers from severe structural deficits, resulting in load-shedding intervals exceeding 12 hours daily. Solar energy solutions deliver 100% voltage stability and complete protection for your heavy industrial and residential appliances.",
      card1_title: "Operational Cost Evaluation (Solar vs Diesel Generator)",
      card1_desc:
        "Generators demand continuous fuel logistics alongside constant maintenance overhauls every 250 running hours. A premium solar installation represents a one-time capital expenditure (CapEx) with virtually zero operational overheads (OpEx).",
      card2_title: "Return on Investment (ROI Timeline)",
      card2_desc:
        "Due to the exceptionally high solar irradiance metrics in Sudan, the recovery period for commercial, agricultural, and domestic configurations ranges between 18 to 24 months, transforming into pure free power for over 25 years.",
    },
  },
  ar: {
    viability: {
      title: "تحليل الجدوى واستقرار الطاقة الشمسية في السودان",
      hero_desc:
        "تعاني الشبكة القومية للكهرباء في السودان من فجوة إنتاجية ومشاكل هيكلية حادة تؤدي إلى قطوعات تتجاوز 12 ساعة يومياً. حلول الطاقة الشمسية توفر استقراراً في الجهد بنسبة 100% وحماية كاملة للمعدات الصناعية والمنزلية الثمينة.",
      card1_title: "مقارنة التكلفة التشغيلية (طاقة شمسية مقابل مولد ديزل)",
      card1_desc:
        "الاعتماد على المولدات يتطلب ميزانيات مستمرة للوقود (الجازولين) بجانب الصيانة الدورية وفلاتر الزيوت كل 250 ساعة تشغيل. منظومة الطاقة الشمسية تمثل تكلفة رأس مالية لمرة واحدة (CapEx) مع انعدام كامل للمصاريف التشغيلية (OpEx).",
      card2_title: "معدل استرداد الاستثمار (ROI Timeline)",
      card2_desc:
        "طبقاً للمعدلات الإشعاعية المرتفعة جداً في السودان، فإن متوسط كفاءة إنتاج الكيلوواط تضمن استرداد قيمة النظام للمصانع والمنشآت الزراعية خلال 18 إلى 24 شهراً كحد أقصى، لتتحول الطاقة بعدها إلى كهرباء مجانية بالكامل لـ 25 عاماً.",
    },
  },
};

export default function ViabilityPage() {
  const [lang] = useState<"en" | "ar">("ar");
  const dict = dictionaries[lang];
  const isRtl = lang === "ar";

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className={`min-h-screen bg-background text-on-background ${isRtl ? "font-arabic" : "font-body-md"}`}
    >
      {/* ADDED 'pt-28' TO PREVENT FIXED HEADER OVERLAP */}
      <main className="p-6 md:p-12 max-w-5xl mx-auto space-y-12 pt-28">
        <div className="border-[4px] border-primary bg-secondary-container p-8 shadow-neo-lg">
          <h1 className="text-3xl md:text-5xl font-black uppercase mb-4 text-primary">
            {dict.viability.title}
          </h1>
          <p className="text-base text-primary font-medium leading-relaxed">
            {dict.viability.hero_desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-[3px] border-primary bg-white p-6 shadow-neo">
            <h3 className="text-xl font-bold mb-4 text-primary">
              {dict.viability.card1_title}
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {dict.viability.card1_desc}
            </p>
          </div>

          <div className="border-[3px] border-primary bg-white p-6 shadow-neo">
            <h3 className="text-xl font-bold mb-4 text-primary">
              {dict.viability.card2_title}
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {dict.viability.card2_desc}
            </p>
          </div>
        </div>
      </main>
      <div className="bg-primary text-white py-8 border-t-[3px] border-primary text-center font-mono text-xs opacity-40">
        SUDAN SOLAR INDUSTRIAL SYSTEM FLOW
      </div>
    </div>
  );
}
