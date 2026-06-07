"use client";

import React from "react";
import Link from "next/link";

export const Pricing: React.FC = () => {
  // قم بتغيير هذا الرقم إلى رقم مبيعات الشركة الفعلي
  const WHATSAPP_NUMBER = "249123766000";

  const getWhatsAppLink = (packageName: string) => {
    const message = `مرحباً سودا لار، أريد الاستفسار وطلب (*${packageName}*) للوحدات السكنية. الرجاء تزويدي بعرض السعر المالي وتفاصيل التركيب.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-10 bg-surface-container border-b-[3px] border-primary">
      <div className="text-center mb-16 md:mb-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[40px] font-black uppercase mb-4 text-primary tracking-tight">
          الباقات السكنية الجاهزة
        </h2>
        <div className="h-1.5 w-32 bg-primary mx-auto"></div>
        <p className="mt-4 text-on-surface-variant font-bold max-w-2xl mx-auto">
          اختر الباقة التي تناسب حجم استهلاك منزلك. جميع الباقات مصممة لتحمل
          درجات الحرارة العالية في السودان.
        </p>
      </div>

      {/* شبكة الباقات الثلاث الأساسية */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center md:items-stretch mb-12">
        {/* الباقة الأولى (الاقتصادية) */}
        <div className="bg-surface-container-lowest border-[4px] border-primary shadow-neo flex flex-col p-6 md:p-8 h-full">
          <div className="font-mono text-xs mb-4 uppercase text-on-surface-variant font-bold">
            [ باقة الأساسيات ]
          </div>
          <div className="text-3xl md:text-[40px] font-black mb-4 text-primary leading-none">
            الباقة الأولى
          </div>
          <div className="bg-surface-container p-4 border-[2px] border-primary mb-6 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-primary">
              المواصفات الهندسية:
            </span>
            <p className="text-sm font-bold text-on-surface-variant leading-relaxed">
              انفرتر 4.2kW | بطارية 5kWh | 4 ألواح شمسية
            </p>
          </div>

          <div className="flex-grow flex flex-col gap-3">
            <span className="font-black text-primary border-b-[2px] border-primary pb-2 mb-2">
              الأجهزة التي تشغلها الباقة:
            </span>
            <ul className="flex flex-col gap-3 text-sm font-bold text-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="text-secondary-container">✔</span> ثلاجة عادية
                (تعمل 24 ساعة)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary-container">✔</span> مكيف ماء
                (نسمة)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary-container">✔</span> 3 إلى 4
                مراوح سقف
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary-container">✔</span> شاشة تلفزيون
                + إنترنت
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary-container">✔</span> إضاءة المنزل
                بالكامل
              </li>
            </ul>
          </div>

          <a
            href={getWhatsAppLink("الباقة الأولى - الأساسيات")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full py-4 bg-surface-container-lowest border-[3px] border-primary font-black text-base md:text-lg uppercase shadow-neo hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-primary text-center block"
          >
            طلب الباقة عبر الواتساب
          </a>
        </div>

        {/* الباقة الثانية (الأكثر طلباً) */}
        <div className="bg-secondary-container border-[4px] border-primary shadow-neo-lg flex flex-col p-6 md:p-8 h-full relative z-10 md:scale-105">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-secondary-container px-6 py-1.5 text-sm uppercase border-[3px] border-primary italic font-black whitespace-nowrap shadow-neo">
            الأكثر طلباً ومبيعاً
          </div>
          <div className="font-mono text-xs mb-4 uppercase text-black font-black">
            [ باقة العائلة ]
          </div>
          <div className="text-3xl md:text-[40px] font-black mb-4 text-primary leading-none">
            الباقة الثانية
          </div>
          <div className="bg-primary/10 p-4 border-[2px] border-primary mb-6 flex flex-col gap-2">
            <span className="text-xs font-mono font-black text-primary">
              المواصفات الهندسية:
            </span>
            <p className="text-sm font-black text-black leading-relaxed">
              انفرتر 6.0kW | بطارية 10kWh | 6 ألواح شمسية
            </p>
          </div>

          <div className="flex-grow flex flex-col gap-3">
            <span className="font-black text-primary border-b-[2px] border-primary pb-2 mb-2">
              الأجهزة التي تشغلها الباقة:
            </span>
            <ul className="flex flex-col gap-3 text-sm font-black text-black">
              <li className="flex items-start gap-2">
                <span className="text-primary">✔</span> مكيف فريون (1.5 طن){" "}
                <span className="text-xs font-bold text-gray-700 bg-white px-1 ml-1">
                  نهاري/مسائي
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✔</span> ثلاجة عادية (تعمل 24
                ساعة)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✔</span> مكيف ماء إضافي
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✔</span> موتور مياه
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✔</span> غسالة ملابس + مراوح
                وشاشات
              </li>
            </ul>
          </div>

          <a
            href={getWhatsAppLink("الباقة الثانية - العائلة (الأكثر طلباً)")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full py-4 bg-primary text-secondary-container border-[3px] border-primary font-black text-base md:text-lg uppercase shadow-neo-gold hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-gold-lg active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-center block"
          >
            طلب الباقة عبر الواتساب
          </a>
        </div>

        {/* الباقة الثالثة (الرفاهية) */}
        <div className="bg-surface-container-lowest border-[4px] border-primary shadow-neo flex flex-col p-6 md:p-8 h-full">
          <div className="font-mono text-xs mb-4 uppercase text-on-surface-variant font-bold">
            [ باقة الرفاهية والتشغيل الممتد ]
          </div>
          <div className="text-3xl md:text-[40px] font-black mb-4 text-primary leading-none">
            الباقة الثالثة
          </div>
          <div className="bg-surface-container p-4 border-[2px] border-primary mb-6 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-primary">
              المواصفات الهندسية:
            </span>
            <p className="text-sm font-bold text-on-surface-variant leading-relaxed">
              انفرتر 6.0kW | بطارية 15kWh | 8 ألواح شمسية
            </p>
          </div>

          <div className="flex-grow flex flex-col gap-3">
            <span className="font-black text-primary border-b-[2px] border-primary pb-2 mb-2">
              الأجهزة التي تشغلها الباقة:
            </span>
            <ul className="flex flex-col gap-3 text-sm font-bold text-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="text-secondary-container">✔</span> مكيفين فريون{" "}
                <span className="text-xs font-bold text-white bg-primary px-1 ml-1">
                  بالتناوب
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary-container">✔</span> ديب فريزر +
                ثلاجة (24 ساعة)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary-container">✔</span> تشغيل ليلي
                ممتد بفضل البطارية الضخمة
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary-container">✔</span> موتور مياه
                ومكواة غسيل
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary-container">✔</span> كافة
                الأساسيات (شاشات، مراوح، إضاءة)
              </li>
            </ul>
          </div>

          <a
            href={getWhatsAppLink("الباقة الثالثة - الرفاهية")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full py-4 bg-surface-container-lowest border-[3px] border-primary font-black text-base md:text-lg uppercase shadow-neo hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-lg active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-primary text-center block"
          >
            طلب الباقة عبر الواتساب
          </a>
        </div>
      </div>

      {/* لافتة حاسبة الأحمال التفاعلية */}
      <div className="max-w-7xl mx-auto">
        <div className="border-[4px] border-primary bg-primary p-6 md:p-8 shadow-neo flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-right flex-col md:flex-row">
            <div className="bg-secondary-container text-primary p-3 border-[2px] border-primary flex items-center justify-center shadow-neo">
              <span className="material-symbols-outlined text-[32px] font-bold">
                calculate
              </span>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                أحمالك مختلفة أو لديك منشأة تجارية/زراعية؟
              </h4>
              <p className="text-gray-300 font-bold text-sm mt-2">
                لا تعتمد على التخمين. استخدم حاسبة الأحمال الذكية لإنشاء باقة
                مخصصة ومطابقة لاحتياجك الفعلي بالواط.
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
