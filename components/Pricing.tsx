"use client";

import React from "react";
import Link from "next/link";

// إعادة تعريف واجهة الترجمة (Dictionary Interface) لتشمل النصوص الجديدة
interface PricingDict {
  pricing: {
    title: string;
    subtitle: string;
    t1_badge: string;
    t1_title: string;
    t1_specs: string;
    t1_desc: string;
    t1_f1: string;
    t1_f2: string;
    t1_f3: string;
    t1_f4: string;
    t1_f5: string;
    t1_wa: string;

    t2_badge: string;
    t2_tag: string;
    t2_title: string;
    t2_specs: string;
    t2_desc: string;
    t2_f1: string;
    t2_f1_tag: string;
    t2_f2: string;
    t2_f3: string;
    t2_f4: string;
    t2_f5: string;
    t2_wa: string;

    t3_badge: string;
    t3_title: string;
    t3_specs: string;
    t3_desc: string;
    t3_f1: string;
    t3_f1_tag: string;
    t3_f2: string;
    t3_f3: string;
    t3_f4: string;
    t3_f5: string;
    t3_wa: string;

    btn_order: string;
    calc_title: string;
    calc_desc: string;
    calc_btn: string;
    lbl_specs: string;
    lbl_devices: string;
  };
}

interface PricingProps {
  dict: PricingDict;
  isRtl: boolean; // تمرير اتجاه اللغة لضبط الأيقونات والمحاذاة
}

export const Pricing: React.FC<PricingProps> = ({ dict, isRtl }) => {
  const WHATSAPP_NUMBER = "249123766000";

  const getWhatsAppLink = (packageCode: string) => {
    // رسالة الواتساب تتغير بناءً على اللغة
    const message = isRtl
      ? `مرحباً سودا لار، أريد الاستفسار وطلب (${packageCode}) للوحدات السكنية. الرجاء تزويدي بعرض السعر المالي وتفاصيل التركيب.`
      : `Hello Sudan Solar, I would like to inquire about ordering the (${packageCode}) residential package. Please provide a quotation and installation details.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="pricing-section"
      className="py-16 md:py-24 px-4 md:px-10 bg-surface-container border-b-[3px] border-primary scroll-mt-24"
    >
      <div className="text-center mb-16 md:mb-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[40px] font-black uppercase mb-4 text-primary tracking-tight">
          {dict.pricing.title}
        </h2>
        <div className="h-1.5 w-32 bg-primary mx-auto"></div>
        <p className="mt-4 text-on-surface-variant font-bold max-w-2xl mx-auto">
          {dict.pricing.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center md:items-stretch mb-12">
        {/* Tier 1: Economy */}
        <div className="bg-surface-container-lowest border-[4px] border-primary shadow-neo flex flex-col p-6 md:p-8 h-full">
          <div className="font-mono text-xs mb-4 uppercase text-on-surface-variant font-bold">
            [ {dict.pricing.t1_badge} ]
          </div>
          <div className="text-3xl md:text-[40px] font-black mb-4 text-primary leading-none">
            {dict.pricing.t1_title}
          </div>
          <div className="bg-surface-container p-4 border-[2px] border-primary mb-6 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-primary">
              {dict.pricing.lbl_specs}
            </span>
            <p
              className={`text-sm font-bold text-on-surface-variant leading-relaxed ${!isRtl && "font-mono"}`}
            >
              {dict.pricing.t1_desc}
            </p>
          </div>

          <div className="flex-grow flex flex-col gap-3">
            <span className="font-black text-primary border-b-[2px] border-primary pb-2 mb-2">
              {dict.pricing.lbl_devices}
            </span>
            <ul className="flex flex-col gap-3 text-sm font-bold text-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="text-secondary-container">✔</span>{" "}
                {dict.pricing.t1_f1}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary-container">✔</span>{" "}
                {dict.pricing.t1_f2}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary-container">✔</span>{" "}
                {dict.pricing.t1_f3}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary-container">✔</span>{" "}
                {dict.pricing.t1_f4}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary-container">✔</span>{" "}
                {dict.pricing.t1_f5}
              </li>
            </ul>
          </div>

          <a
            href={getWhatsAppLink(dict.pricing.t1_wa)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full py-4 bg-surface-container-lowest border-[3px] border-primary font-black text-base md:text-lg uppercase shadow-neo hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-primary text-center block"
          >
            {dict.pricing.btn_order}
          </a>
        </div>

        {/* Tier 2: Popular */}
        <div className="bg-secondary-container border-[4px] border-primary shadow-neo-lg flex flex-col p-6 md:p-8 h-full relative z-10 md:scale-105">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-secondary-container px-6 py-1.5 text-sm uppercase border-[3px] border-primary italic font-black whitespace-nowrap shadow-neo">
            {dict.pricing.t2_tag}
          </div>
          <div className="font-mono text-xs mb-4 uppercase text-black font-black">
            [ {dict.pricing.t2_badge} ]
          </div>
          <div className="text-3xl md:text-[40px] font-black mb-4 text-primary leading-none">
            {dict.pricing.t2_title}
          </div>
          <div className="bg-primary/10 p-4 border-[2px] border-primary mb-6 flex flex-col gap-2">
            <span className="text-xs font-mono font-black text-primary">
              {dict.pricing.lbl_specs}
            </span>
            <p
              className={`text-sm font-black text-black leading-relaxed ${!isRtl && "font-mono"}`}
            >
              {dict.pricing.t2_desc}
            </p>
          </div>

          <div className="flex-grow flex flex-col gap-3">
            <span className="font-black text-primary border-b-[2px] border-primary pb-2 mb-2">
              {dict.pricing.lbl_devices}
            </span>
            <ul className="flex flex-col gap-3 text-sm font-black text-black">
              <li className="flex items-start gap-2">
                <span className="text-primary">✔</span> {dict.pricing.t2_f1}{" "}
                <span className="text-xs font-bold text-gray-700 bg-white px-1 rtl:ml-1 ltr:mr-1">
                  {dict.pricing.t2_f1_tag}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✔</span> {dict.pricing.t2_f2}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✔</span> {dict.pricing.t2_f3}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✔</span> {dict.pricing.t2_f4}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✔</span> {dict.pricing.t2_f5}
              </li>
            </ul>
          </div>

          <a
            href={getWhatsAppLink(dict.pricing.t2_wa)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full py-4 bg-primary text-secondary-container border-[3px] border-primary font-black text-base md:text-lg uppercase shadow-neo-gold hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-gold-lg active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-center block"
          >
            {dict.pricing.btn_order}
          </a>
        </div>

        {/* Tier 3: Luxury */}
        <div className="bg-surface-container-lowest border-[4px] border-primary shadow-neo flex flex-col p-6 md:p-8 h-full">
          <div className="font-mono text-xs mb-4 uppercase text-on-surface-variant font-bold">
            [ {dict.pricing.t3_badge} ]
          </div>
          <div className="text-3xl md:text-[40px] font-black mb-4 text-primary leading-none">
            {dict.pricing.t3_title}
          </div>
          <div className="bg-surface-container p-4 border-[2px] border-primary mb-6 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-primary">
              {dict.pricing.lbl_specs}
            </span>
            <p
              className={`text-sm font-bold text-on-surface-variant leading-relaxed ${!isRtl && "font-mono"}`}
            >
              {dict.pricing.t3_desc}
            </p>
          </div>

          <div className="flex-grow flex flex-col gap-3">
            <span className="font-black text-primary border-b-[2px] border-primary pb-2 mb-2">
              {dict.pricing.lbl_devices}
            </span>
            <ul className="flex flex-col gap-3 text-sm font-bold text-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="text-secondary-container">✔</span>{" "}
                {dict.pricing.t3_f1}{" "}
                <span className="text-xs font-bold text-white bg-primary px-1 rtl:ml-1 ltr:mr-1">
                  {dict.pricing.t3_f1_tag}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary-container">✔</span>{" "}
                {dict.pricing.t3_f2}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary-container">✔</span>{" "}
                {dict.pricing.t3_f3}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary-container">✔</span>{" "}
                {dict.pricing.t3_f4}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary-container">✔</span>{" "}
                {dict.pricing.t3_f5}
              </li>
            </ul>
          </div>

          <a
            href={getWhatsAppLink(dict.pricing.t3_wa)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full py-4 bg-surface-container-lowest border-[3px] border-primary font-black text-base md:text-lg uppercase shadow-neo hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-primary text-center block"
          >
            {dict.pricing.btn_order}
          </a>
        </div>
      </div>

      {/* Calculator Banner */}
      <div className="max-w-7xl mx-auto">
        <div className="border-[4px] border-primary bg-primary p-6 md:p-8 shadow-neo flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:rtl:text-right md:ltr:text-left flex-col md:flex-row">
            <div className="bg-secondary-container text-primary p-3 border-[2px] border-primary flex items-center justify-center shadow-neo">
              <span className="material-symbols-outlined text-[32px] font-bold">
                calculate
              </span>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                {dict.pricing.calc_title}
              </h4>
              <p className="text-gray-300 font-bold text-sm mt-2">
                {dict.pricing.calc_desc}
              </p>
            </div>
          </div>

          <Link href="/calculator" className="w-full md:w-auto">
            <button className="w-full md:w-auto bg-secondary-container text-primary font-black border-[3px] border-primary px-8 py-4 shadow-neo-gold hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-gold-lg active:translate-x-0 active:translate-y-0 transition-all text-base tracking-wider uppercase italic whitespace-nowrap flex items-center justify-center gap-2">
              {dict.pricing.calc_btn}
              <span className="rtl:rotate-180">←</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
