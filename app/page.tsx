"use client";

import React, { useState } from "react";
import { Hero } from "../components/Hero";
import { StatsBar } from "../components/StatsBar";
import { Infrastructure } from "../components/Infrastructure";
import { Pricing } from "../components/Pricing";
// import { ProjectsBanner } from "../components/ProjectsBanner";
import { CTA } from "../components/CTA";

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
    subtitle: string;
    t1_badge: string;
    t1_title: string;
    t1_specs: string; // تمت الإضافة هنا
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
    t2_specs: string; // تمت الإضافة هنا
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
    t3_specs: string; // تمت الإضافة هنا
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
      title1: "AUTONOMOUS POWER",
      title2: "AGAINST COGNITIVE DECAY",
      description:
        "Escape the crumbling national energy infrastructure. Sudan Solar engineers tactical, heavy-duty solar installations designed to isolate your estate, agricultural operations, or facility from ongoing grid collapse. Raw voltage, zero compromises.",
      cta_deploy: "EXPLORE FEASIBILITY",
      cta_view: "GRID STABILITY MAP",
    },
    stats: {
      uptime_val: "98.4%",
      uptime_label: "SOLAR EXP_EFFICIENCY",
      capacity_val: "12.5 GW",
      capacity_label: "REGIONAL INFRASTRUCTURE",
      latency_val: "0.02ms",
      latency_label: "UPS AUTOMATED SWITCH",
      reliability_val: "CRITICAL",
      reliability_label: "NATIONAL GRID METRIC",
    },
    infrastructure: {
      tag: "GRID DECOUPLING",
      title: "THE VIABLE ALTERNATIVE",
      description:
        "Why solar isn't a luxury, but the ultimate infrastructure counter-measure against ongoing public grid dependency in Sudan.",
      card1_title: "TOTAL INDEPENDENCE",
      card1_desc:
        "Isolate your facility fully from volatile load-shedding intervals and frequent grid voltage spikes.",
      card1_f1: "24/7 FIXED VOLTAGE",
      card1_f2: "GRID-TIED ISOLATION",
      card2_title: "THERMAL RESILIENCE",
      card2_desc:
        "Industrial-grade hardware matrices optimized to function at maximum output even in desert temperatures exceeding 50°C.",
      card2_f1: "AUTOMATED COOLING",
      card2_f2: "HIGH-FLOW AIR DYNAMICS",
      card3_title: "FINANCIAL SUSTAINABILITY",
      card3_desc:
        "Recover 100% of deployment capital expenditures within 24 months by removing diesel generator running dependencies.",
      card3_f1: "ZERO FUEL OVERHEADS",
      card3_f2: "PREDICTIVE LIFE CYCLE",
    },
    pricing: {
      title: "Ready Residential Packages",
      subtitle:
        "Choose the package that fits your home's consumption. All packages are engineered to withstand Sudan's extreme temperatures.",
      lbl_specs: "Engineering Specs:",
      lbl_devices: "Devices Powered by this Package:",
      btn_order: "Order via WhatsApp",

      t1_badge: "Essential Package",
      t1_title: "Tier 1",
      t1_specs: "", // حقل إضافي ليتطابق مع الواجهة
      t1_desc: "4.2kW Inverter | 5kWh Battery | 4 Solar Panels",
      t1_f1: "Standard Refrigerator (24/7)",
      t1_f2: "Water Cooler (Nesma)",
      t1_f3: "3 to 4 Ceiling Fans",
      t1_f4: "TV Screen + Internet Router",
      t1_f5: "Full Home Lighting",
      t1_wa: "Tier 1 - Essential",

      t2_badge: "Family Package",
      t2_tag: "Most Popular & Best Seller",
      t2_title: "Tier 2",
      t2_specs: "", // حقل إضافي ليتطابق مع الواجهة
      t2_desc: "6.0kW Inverter | 10kWh Battery | 6 Solar Panels",
      t2_f1: "A/C Split Unit (1.5 Ton)",
      t2_f1_tag: "Day/Night",
      t2_f2: "Standard Refrigerator (24/7)",
      t2_f3: "Additional Water Cooler",
      t2_f4: "Water Pump (Siphon)",
      t2_f5: "Washing Machine + Fans & TVs",
      t2_wa: "Tier 2 - Family",

      t3_badge: "Luxury & Extended Runtime",
      t3_title: "Tier 3",
      t3_specs: "", // حقل إضافي ليتطابق مع الواجهة
      t3_desc: "6.0kW Inverter | 15kWh Battery | 8 Solar Panels",
      t3_f1: "Two A/C Split Units",
      t3_f1_tag: "Alternating",
      t3_f2: "Deep Freezer + Refrigerator (24/7)",
      t3_f3: "Extended Night Operation (Massive Battery)",
      t3_f4: "Water Pump & Ironing",
      t3_f5: "All Essentials (TVs, Fans, Lighting)",
      t3_wa: "Tier 3 - Luxury",

      calc_title: "Different loads or a commercial/agricultural facility?",
      calc_desc:
        "Don't rely on guesswork. Use our smart load calculator to build a custom package matched exactly to your wattage needs.",
      calc_btn: "Build Custom Package Now",
    },
    projects: {
      title: "ESTABLISHED OPERATIONAL STATIONS",
      subtitle:
        "Strategic solar arrays currently proving long-term electrical reliability across key zones in Sudan.",
    },
    cta: {
      title: "READY FOR IMPACT?",
      subtitle:
        "Join the infrastructure revolution. Secure your energy independence today.",
      s1_title: "PHASE 01",
      s1_desc: "LOAD CALCULATIONS & PROJECTIONS",
      s2_title: "PHASE 02",
      s2_desc: "HARDWARE ARMORING & ARRAY ALIGNMENT",
      s3_title: "PHASE 03",
      s3_desc: "FULL GRIDS INDEPENDENCE RECORDED",
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
      title1: "طـاقـة مـسـتـقـلـة",
      title2: "بديل للشبكة المترهلة",
      description:
        "تجاوز الانهيار المستمر في شبكة الكهرباء القومية. تؤمن أنظمة سودان سولار بنية تحتية ثقيلة وحلول طاقة شمسية استراتيجية لعزل منشأتك، مزرعتك، أو منزلك تماماً عن تذبذبات التيار. كهرباء مستقرة بلا انقطاع.",
      cta_deploy: "دراسة جدوى النظام",
      cta_view: "عرض حالة الشبكة",
    },
    stats: {
      uptime_val: "98.4%",
      uptime_label: "كفاءة المنظومات المستقلة",
      capacity_val: "12.5 GW",
      capacity_label: "السعة المركبة إقليمياً",
      latency_val: "0.02ms",
      latency_label: "التحويل التلقائي الآمن",
      reliability_val: "مترهل",
      reliability_label: "تقييم الشبكة القومية",
    },
    infrastructure: {
      tag: "عزل الشبكات",
      title: "جدوى البديل المستدام",
      description:
        "لماذا لم تعد الطاقة الشمسية رفاهية، بل أصبحت البنية التحتية الأساسية والوحيدة لضمان استمرار الأعمال والاستقرار في السودان.",
      card1_title: "استقلالية تامة",
      card1_desc:
        "اعزل منشأتك بالكامل عن قطوعات الكهرباء الطويلة وتذبذبات الجهد التي تدمر الأجهزة الحساسة.",
      card1_f1: "جهد ثابت 24/7",
      card1_f2: "أنظمة عزل ذكية",
      card2_title: "تحمل حراري أقصى",
      card2_desc:
        "مصفوفات ألواح ومحولات مجهزة صناعياً للعمل بكفاءة قصوى حتى في درجات حرارة البيئة التي تتجاوز 50 مئوية.",
      card2_f1: "تبريد تلقائي مدمج",
      card2_f2: "مقاومة الأتربة الكثيفة",
      card3_title: "الجدوى الاقتصادية",
      card3_desc:
        "استرداد كامل التكاليف الرأسمالية للمنظومة خلال عامين عبر التخلص النهائي من مصاريف وقود وصيانة المولدات.",
      card3_f1: "صفر تكلفة وقود",
      card3_f2: "عمر افتراضي ممتد",
    },
    pricing: {
      title: "الباقات السكنية الجاهزة",
      subtitle:
        "اختر الباقة التي تناسب حجم استهلاك منزلك. جميع الباقات مصممة لتحمل درجات الحرارة العالية في السودان.",
      lbl_specs: "المواصفات الهندسية:",
      lbl_devices: "الأجهزة التي تشغلها الباقة:",
      btn_order: "طلب الباقة عبر الواتساب",

      t1_badge: "باقة الأساسيات",
      t1_title: "الباقة الأولى",
      t1_specs: "", // حقل إضافي ليتطابق مع الواجهة
      t1_desc: "انفرتر 4.2kW | بطارية 5kWh | 4 ألواح شمسية",
      t1_f1: "ثلاجة عادية (تعمل 24 ساعة)",
      t1_f2: "مكيف ماء (نسمة/الرشيد)",
      t1_f3: "3 إلى 4 مراوح سقف",
      t1_f4: "شاشة تلفزيون + إنترنت",
      t1_f5: "إضاءة المنزل بالكامل",
      t1_wa: "الباقة الأولى - الأساسيات",

      t2_badge: "باقة العائلة",
      t2_tag: "الأكثر طلباً ومبيعاً",
      t2_title: "الباقة الثانية",
      t2_specs: "", // حقل إضافي ليتطابق مع الواجهة
      t2_desc: "انفرتر 6.0kW | بطارية 10kWh | 6 ألواح شمسية",
      t2_f1: "مكيف فريون (1.5 طن)",
      t2_f1_tag: "نهاري/مسائي",
      t2_f2: "ثلاجة عادية (تعمل 24 ساعة)",
      t2_f3: "مكيف ماء إضافي",
      t2_f4: "موتور مياه (سايفون)",
      t2_f5: "غسالة ملابس + مراوح وشاشات",
      t2_wa: "الباقة الثانية - العائلة (الأكثر طلباً)",

      t3_badge: "باقة الرفاهية والتشغيل الممتد",
      t3_title: "الباقة الثالثة",
      t3_specs: "", // حقل إضافي ليتطابق مع الواجهة
      t3_desc: "انفرتر 6.0kW | بطارية 15kWh | 8 ألواح شمسية",
      t3_f1: "مكيفين فريون",
      t3_f1_tag: "بالتناوب",
      t3_f2: "ديب فريزر + ثلاجة (24 ساعة)",
      t3_f3: "تشغيل ليلي ممتد بفضل البطارية الضخمة",
      t3_f4: "موتور مياه ومكواة غسيل",
      t3_f5: "كافة الأساسيات (شاشات، مراوح، إضاءة)",
      t3_wa: "الباقة الثالثة - الرفاهية",

      calc_title: "أحمالك مختلفة أو لديك منشأة تجارية/زراعية؟",
      calc_desc:
        "لا تعتمد على التخمين. استخدم حاسبة الأحمال الذكية لإنشاء باقة مخصصة ومطابقة لاحتياجك الفعلي بالواط.",
      calc_btn: "بناء باقة مخصصة الآن",
    },
    projects: {
      title: "مشاريعنا السابقة",
      subtitle:
        "فخورون بتشغيل المنشآت الحيوية والزراعية بأعلى كفاءة في مختلف بقاع السودان.",
    },
    cta: {
      title: "تريد تأمين طاقتك؟",
      subtitle:
        "امتلك قرار شبكتك الكهربائية الآن واحذر خسائر انقطاع التيار المتكرر.",
      s1_title: "الخطوة 01",
      s1_desc: "حساب الأحمال الكهربائية بدقة",
      s2_title: "الخطوة 02",
      s2_desc: "هندسة وتركيب المصفوفات والألواح",
      s3_title: "الخطوة 03",
      s3_desc: "تفعيل الاستقلال التام للطاقة",
    },
  },
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "ar">("ar");
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
      className={`w-full ${isRtl ? "font-arabic" : "font-body-md"}`}
    >
      <main className="pt-20">
        <Hero dict={dict} />
        <StatsBar dict={dict} />
        <Infrastructure dict={dict} />
        <Pricing dict={dict} isRtl={isRtl} />
        {/* <ProjectsBanner dict={dict} /> */}
        <CTA dict={dict} />
      </main>

      {/* Language Modal */}
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
              الرجاء اختيار لغة تصفح موقع سودان سولار لإعداد البنى التحتية.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => selectLanguage("ar")}
                className="w-full py-3 bg-secondary-container text-primary font-bold border-[3px] border-primary shadow-neo hover:-translate-x-1 hover:-translate-y-1 transition-all text-base"
              >
                المتابعة بالعربية
              </button>
              <button
                onClick={() => selectLanguage("en")}
                className="w-full py-3 bg-surface-container-lowest text-primary font-bold border-[3px] border-primary shadow-neo hover:-translate-x-1 hover:-translate-y-1 transition-all text-base font-sans"
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
