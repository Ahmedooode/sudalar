"use client";

import React, { useState } from "react";
import { Hero } from "../components/Hero";
import { StatsBar } from "../components/StatsBar";
import { Infrastructure } from "../components/Infrastructure";
import { Pricing } from "../components/Pricing";
import { ProjectsBanner } from "../components/ProjectsBanner";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

// 1. Define strict TypeScript interfaces to prevent ESLint 'any' errors
interface Dictionary {
  nav: {
    title: string;
    stations: string;
    metrics: string;
    infrastructure: string;
    cta: string;
  };
  hero: {
    title1: string;
    title2: string;
    description: string;
    cta_deploy: string;
    cta_view: string;
  };
  stats: {
    uptime_val: string;
    uptime_label: string;
    capacity_val: string;
    capacity_label: string;
    latency_val: string;
    latency_label: string;
    reliability_val: string;
    reliability_label: string;
  };
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
  projects: { title: string; subtitle: string };
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

// 2. The Dictionaries Database
const dictionaries: { en: Dictionary; ar: Dictionary } = {
  en: {
    nav: {
      title: "SUDAN SOLAR",
      stations: "STATIONS",
      metrics: "METRICS",
      infrastructure: "INFRASTRUCTURE",
      cta: "GET STARTED",
    },
    hero: {
      title1: "EMPOWER",
      title2: "YOUR LIFE",
      description:
        "Raw power meets industrial precision. Sudan Solar provides the most resilient solar infrastructure for the harshest environments on Earth. No fluff, just voltage.",
      cta_deploy: "DEPLOY SYSTEM",
      cta_view: "VIEW GRID",
    },
    stats: {
      uptime_val: "98.4%",
      uptime_label: "UPTIME EFFICIENCY",
      capacity_val: "12.5 GW",
      capacity_label: "GRID CAPACITY",
      latency_val: "0.02ms",
      latency_label: "SWITCH LATENCY",
      reliability_val: "INF",
      reliability_label: "RELIABILITY RATING",
    },
    infrastructure: {
      tag: "CORE TECH",
      title: "INDUSTRIAL CORE",
      description:
        "Heavy-duty hardware designed to withstand thermal expansion and high-velocity wind loads.",
      card1_title: "ARMORED CASING",
      card1_desc:
        "Reinforced concrete foundations with 10mm steel plating for critical junctions.",
      card1_f1: "IP68 WATERPROOF",
      card1_f2: "HEAT-SHIELDED",
      card2_title: "DIRECT INJECT",
      card2_desc:
        "Zero-loss transmission technology using high-purity copper conduits.",
      card2_f1: "400V DC OUTPUT",
      card2_f2: "REAL-TIME BALANCING",
      card3_title: "LOGIC CORE",
      card3_desc:
        "On-site computational units for automated load-shedding and predictive maintenance.",
      card3_f1: "EDGE COMPUTING",
      card3_f2: "OFFLINE SYNC",
    },
    pricing: {
      title: "SELECT UNIT CAPACITY",
      t1_model: "MODEL: ALPHA-01",
      t1_cap: "5kW",
      t1_desc: "Base industrial unit for single-terminal operations.",
      t1_btn: "GET QUOTE",
      t2_badge: "MOST POPULAR",
      t2_model: "MODEL: DELTA-05",
      t2_cap: "15kW",
      t2_desc: "Standard operator array for field-ready grid infrastructure.",
      t2_btn: "ORDER NOW",
      t3_model: "MODEL: OMEGA-GRID",
      t3_cap: "50kW+",
      t3_desc: "Custom high-density arrays for regional distribution.",
      t3_btn: "CONSULT TEAM",
      lbl_capacity: "CAPACITY",
      lbl_storage: "STORAGE",
      lbl_warranty: "WARRANTY",
      lbl_logic: "AI LOGIC",
      lbl_monitoring: "MONITORING",
    },
    projects: {
      title: "PROVEN OPERATIONS",
      subtitle:
        "Heavy-duty hardware array deployments successfully operating across various configurations in Sudan.",
    },
    cta: {
      title: "READY FOR IMPACT?",
      subtitle:
        "Join the infrastructure revolution. Secure your energy independence today.",
      s1_title: "STEP 01",
      s1_desc: "SITE EVALUATION & GRID MAPPING",
      s2_title: "STEP 02",
      s2_desc: "HARDWARE DEPLOYMENT & SYNC",
      s3_title: "STEP 03",
      s3_desc: "FULL GRID AUTONOMY ACHIEVED",
    },
  },
  ar: {
    nav: {
      title: "سودان سولار",
      stations: "المحطات",
      metrics: "المقاييس",
      infrastructure: "البنية التحتية",
      cta: "ابدأ الآن",
    },
    hero: {
      title1: "امـتـلـك",
      title2: "الطاقة المستدامة",
      description:
        "قوة حقيقية تلتقي مع الدقة الهندسية. نقدم أكثر منظومات الطاقة الشمسية متانة وتحملاً للبيئات القاسية في السودان. بدون تعقيدات، فقط كفاءة كهربائية عالية.",
      cta_deploy: "تنفيذ المنظومة",
      cta_view: "عرض الشبكة",
    },
    stats: {
      uptime_val: "98.4%",
      uptime_label: "كفاءة التشغيل",
      capacity_val: "12.5 GW",
      capacity_label: "سعة الشبكة",
      latency_val: "0.02ms",
      latency_label: "سرعة التحويل",
      reliability_val: "INF",
      reliability_label: "معدل الموثوقية",
    },
    infrastructure: {
      tag: "التقنية الأساسية",
      title: "الهيكل الصناعي",
      description: "أجهزة مصممة لتحمل التمدد الحراري وسرعة الرياح العالية.",
      card1_title: "غلاف مدرع",
      card1_desc: "قواعد خرسانية مدعمة بطبقات فولاذية لحماية المحولات.",
      card1_f1: "مقاوم للماء IP68",
      card1_f2: "درع حراري",
      card2_title: "حقن مباشر",
      card2_desc: "تكنولوجيا نقل طاقة بدون فاقد باستخدام كابلات نحاسية نقية.",
      card2_f1: "مخرج 400V DC",
      card2_f2: "موازنة فورية",
      card3_title: "النواة المنطقية",
      card3_desc: "وحدات معالجة مدمجة لفصل الأحمال تلقائياً والصيانة الوقائية.",
      card3_f1: "معالجة طرفية",
      card3_f2: "مزامنة بدون إنترنت",
    },
    pricing: {
      title: "اختر سعة المنظومة",
      t1_model: "الموديل: ALPHA-01",
      t1_cap: "5kW",
      t1_desc: "وحدة صناعية أساسية للمنشآت المستقلة المحدودة.",
      t1_btn: "اطلب تسعيرة",
      t2_badge: "الأكثر طلباً",
      t2_model: "الموديل: DELTA-05",
      t2_cap: "15kW",
      t2_desc: "منظومة قياسية جاهزة للتشغيل الميداني للمنازل الكبيرة.",
      t2_btn: "اطلب الآن",
      t3_model: "الموديل: OMEGA-GRID",
      t3_cap: "+50kW",
      t3_desc: "مصفوفات طاقة مخصصة للمزارع والمشاريع الكبرى.",
      t3_btn: "استشر فريقنا",
      lbl_capacity: "السعة",
      lbl_storage: "التخزين",
      lbl_warranty: "الضمان",
      lbl_logic: "الذكاء الاصطناعي",
      lbl_monitoring: "المراقبة",
    },
    projects: {
      title: "مشاريعنا السابقة",
      subtitle:
        "فخورون بتشغيل المنشآت الحيوية والزراعية بأعلى كفاءة في مختلف بقاع السودان.",
    },
    cta: {
      title: "مستعد للتغيير؟",
      subtitle:
        "انضم لثورة البنية التحتية. اضمن استقلالية طاقتك اليوم مع أنظمة سودان سولار.",
      s1_title: "الخطوة 01",
      s1_desc: "تقييم الموقع وتخطيط الشبكة",
      s2_title: "الخطوة 02",
      s2_desc: "تركيب المعدات والمزامنة",
      s3_title: "الخطوة 03",
      s3_desc: "استقلالية تامة للشبكة",
    },
  },
};

export default function Home() {
  // Application State
  const [lang, setLang] = useState<"en" | "ar">("en");

  // Set to true initially so the modal mounts open on first load without a cascading render
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const selectLanguage = (selectedLang: "en" | "ar") => {
    setLang(selectedLang);
    setIsModalOpen(false);
  };

  const dict = dictionaries[lang];
  const isRtl = lang === "ar";

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className={`min-h-screen bg-background text-on-background selection:bg-secondary-container selection:text-black ${
        isRtl ? "font-arabic" : "font-body-md"
      }`}
    >
      {/* 1. Header Navigation */}
      <header className="bg-surface-container-lowest border-b-[4px] border-primary fixed top-0 left-0 w-full z-50 h-20">
        <div className="flex justify-between items-center w-full px-4 md:px-10 h-full max-w-7xl mx-auto">
          <div className="text-xl md:text-2xl font-black tracking-tighter text-primary">
            {dict.nav.title}
          </div>
          <nav className="hidden md:flex gap-8 items-center h-full">
            <a
              className="text-primary font-bold border-b-2 border-primary pb-1 text-sm uppercase tracking-wider"
              href="#"
            >
              {dict.nav.stations}
            </a>
            <a
              className="text-on-surface-variant font-medium hover:bg-secondary-container px-2 py-1 text-sm uppercase tracking-wider transition-all"
              href="#"
            >
              {dict.nav.metrics}
            </a>
            <a
              className="text-on-surface-variant font-medium hover:bg-secondary-container px-2 py-1 text-sm uppercase tracking-wider transition-all"
              href="#"
            >
              {dict.nav.infrastructure}
            </a>
          </nav>
          <button className="bg-secondary-container text-primary font-bold border-[3px] border-primary px-4 md:px-6 py-2 shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-xs md:text-sm uppercase">
            {dict.nav.cta}
          </button>
        </div>
      </header>

      {/* 2. Main Content Flow */}
      <main className="pt-20">
        <Hero dict={dict} />
        <StatsBar dict={dict} />
        <Infrastructure dict={dict} />
        <Pricing dict={dict} />
        <ProjectsBanner dict={dict} />
        <CTA dict={dict} />
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* 4. Language Gate Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          dir="rtl"
        >
          <div className="w-full max-w-md border-[4px] border-primary bg-surface-container-lowest p-8 shadow-neo-lg text-center font-arabic">
            <div className="mb-4 text-primary flex justify-center">
              <span className="material-symbols-outlined text-[48px] text-secondary-container animate-pulse">
                language
              </span>
            </div>
            <h2 className="text-2xl font-black text-primary mb-2">
              تفضيلات اللغة / Language
            </h2>
            <p className="text-on-surface-variant text-sm mb-6 font-medium">
              الرجاء اختيار لغة تصفح موقع سودان سولار لإعداد البنى التحتية
              للمنظومات الشمسيّة.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => selectLanguage("ar")}
                className="w-full py-3 bg-secondary-container text-primary font-bold border-[3px] border-primary shadow-neo hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 transition-all text-base"
              >
                المتابعة بالعربية
              </button>
              <button
                onClick={() => selectLanguage("en")}
                className="w-full py-3 bg-surface-container-lowest text-primary font-bold border-[3px] border-primary shadow-neo hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 transition-all text-base font-sans"
              >
                English Version
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
