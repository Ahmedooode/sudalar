"use client";

import React from "react";
import Link from "next/link";

interface PricingDict {
  pricing: {
    title: string;
    t1_model: string;
    t1_cap: string;
    t1_desc: string;
    t1_btn: string;
    t2_badge: string;
    t2_model: string;
    t2_cap: string;
    t2_desc: string;
    t2_btn: string;
    t3_model: string;
    t3_cap: string;
    t3_desc: string;
    t3_btn: string;
    lbl_capacity: string;
    lbl_storage: string;
    lbl_warranty: string;
    lbl_logic: string;
    lbl_monitoring: string;
  };
}

interface PricingProps {
  dict: PricingDict;
}

export const Pricing: React.FC<PricingProps> = ({ dict }) => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-10 bg-surface-container border-b-[3px] border-primary">
      <div className="text-center mb-16 md:mb-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[40px] font-black uppercase mb-4 text-primary">
          {dict.pricing.title}
        </h2>
        <div className="h-1.5 w-32 bg-primary mx-auto"></div>
      </div>

      {/* شبكة الباقات الثلاث الأساسية */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center md:items-stretch mb-12">
        {/* الباقة الأولى */}
        <div className="bg-surface-container-lowest border-[4px] border-primary shadow-neo flex flex-col p-8 h-full">
          <div className="font-mono text-xs mb-6 uppercase text-on-surface-variant">
            {dict.pricing.t1_model}
          </div>
          <div className="text-[40px] font-black mb-4 text-primary">
            {dict.pricing.t1_cap}
          </div>
          <div className="bg-surface-container p-4 border-[2px] border-primary mb-8">
            <p className="text-sm font-bold text-on-surface-variant">
              {dict.pricing.t1_desc}
            </p>
          </div>
          <div className="flex-grow flex flex-col gap-4 font-mono text-[14px]">
            <div className="flex justify-between border-b-[2px] border-outline-variant pb-2">
              <span>{dict.pricing.lbl_capacity}</span>
              <span className="font-bold">5,000 W</span>
            </div>
            <div className="flex justify-between border-b-[2px] border-outline-variant pb-2">
              <span>{dict.pricing.lbl_storage}</span>
              <span className="font-bold">10kWh</span>
            </div>
            <div className="flex justify-between border-b-[2px] border-outline-variant pb-2">
              <span>{dict.pricing.lbl_warranty}</span>
              <span className="font-bold">15 سنة</span>
            </div>
          </div>
          <button className="mt-10 w-full py-4 bg-surface-container-lowest border-[3px] border-primary font-bold text-lg uppercase shadow-neo hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-primary">
            {dict.pricing.t1_btn}
          </button>
        </div>

        {/* الباقة الثانية - الأكثر طلباً */}
        <div className="bg-secondary-container border-[4px] border-primary shadow-neo-lg flex flex-col p-8 h-full relative z-10 md:scale-105">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-secondary-container px-6 py-2 text-sm uppercase border-[3px] border-primary italic font-black whitespace-nowrap">
            {dict.pricing.t2_badge}
          </div>
          <div className="font-mono text-xs mb-6 uppercase text-black font-bold">
            {dict.pricing.t2_model}
          </div>
          <div className="text-[40px] font-black mb-4 text-primary">
            {dict.pricing.t2_cap}
          </div>
          <div className="bg-primary/10 p-4 border-[2px] border-primary mb-8">
            <p className="text-sm font-bold text-black">
              {dict.pricing.t2_desc}
            </p>
          </div>
          <div className="flex-grow flex flex-col gap-4 font-mono text-[14px] text-black">
            <div className="flex justify-between border-b-[2px] border-primary pb-2">
              <span>{dict.pricing.lbl_capacity}</span>
              <span className="font-bold">15,000 W</span>
            </div>
            <div className="flex justify-between border-b-[2px] border-primary pb-2">
              <span>{dict.pricing.lbl_storage}</span>
              <span className="font-bold">40kWh</span>
            </div>
            <div className="flex justify-between border-b-[2px] border-primary pb-2">
              <span>{dict.pricing.lbl_warranty}</span>
              <span className="font-bold">25 سنة</span>
            </div>
            <div className="flex justify-between border-b-[2px] border-primary pb-2">
              <span>{dict.pricing.lbl_logic}</span>
              <span className="font-bold">مـفـعّـل</span>
            </div>
          </div>
          <button className="mt-10 w-full py-4 bg-primary text-white border-[3px] border-primary font-bold text-lg uppercase shadow-neo-gold hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-gold-lg active:translate-x-0 active:translate-y-0 active:shadow-none transition-all">
            {dict.pricing.t2_btn}
          </button>
        </div>

        {/* الباقة الثالثة */}
        <div className="bg-surface-container-lowest border-[4px] border-primary shadow-neo flex flex-col p-8 h-full">
          <div className="font-mono text-xs mb-6 uppercase text-on-surface-variant">
            {dict.pricing.t3_model}
          </div>
          <div className="text-[40px] font-black mb-4 text-primary">
            {dict.pricing.t3_cap}
          </div>
          <div className="bg-surface-container p-4 border-[2px] border-primary mb-8">
            <p className="text-sm font-bold text-on-surface-variant">
              {dict.pricing.t3_desc}
            </p>
          </div>
          <div className="flex-grow flex flex-col gap-4 font-mono text-[14px]">
            <div className="flex justify-between border-b-[2px] border-outline-variant pb-2">
              <span>{dict.pricing.lbl_capacity}</span>
              <span className="font-bold">قابل للتوسيع</span>
            </div>
            <div className="flex justify-between border-b-[2px] border-outline-variant pb-2">
              <span>{dict.pricing.lbl_storage}</span>
              <span className="font-bold">خزانات ميجاواط</span>
            </div>
            <div className="flex justify-between border-b-[2px] border-outline-variant pb-2">
              <span>{dict.pricing.lbl_monitoring}</span>
              <span className="font-bold">مراقبة 24/7</span>
            </div>
          </div>
          <button className="mt-10 w-full py-4 bg-surface-container-lowest border-[3px] border-primary font-bold text-lg uppercase shadow-neo hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-primary">
            {dict.pricing.t3_btn}
          </button>
        </div>
      </div>

      {/* لافتة حاسبة الأحمال التفاعلية باللغة العربية */}
      <div className="max-w-7xl mx-auto">
        <div className="border-[4px] border-primary bg-primary-container p-6 md:p-8 shadow-neo flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-right flex-col md:flex-row">
            <div className="bg-secondary-container text-primary p-3 border-[2px] border-primary flex items-center justify-center shadow-neo">
              <span className="material-symbols-outlined text-[32px] font-bold">
                calculate
              </span>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                لم تجد سعة مناسبة لاستهلاكك؟
              </h4>
              <p className="text-tertiary-fixed-dim font-mono text-xs md:text-sm mt-1 uppercase">
                قم بتحديد أعداد أجهزتك الكهربائية بدقة عبر حاسبة الأحمال
                المتطورة لبناء منظومة مخصصة.
              </p>
            </div>
          </div>

          <Link href="/calculator" className="w-full md:w-auto">
            <button className="w-full md:w-auto bg-secondary-container text-primary font-black border-[3px] border-primary px-8 py-4 shadow-neo-gold hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-gold-lg active:translate-x-0 active:translate-y-0 transition-all text-base tracking-wider uppercase italic whitespace-nowrap">
              بناء باقة مخصصة الآن ←
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
