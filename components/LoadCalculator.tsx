"use client";

import React, { useState } from "react";

type Sector = "residential" | "agricultural" | "commercial";

// تم فصل الساعات إلى نهارية وليلية لدقة هندسية أعلى
interface LoadItem {
  name: string;
  watts: number;
  quantity: number;
  hoursDay: number;
  hoursNight: number;
}

export const LoadCalculator: React.FC = () => {
  const [sector, setSector] = useState<Sector>("residential");
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // 1. القطاع السكني
  const [residentialLoads, setResidentialLoads] = useState<LoadItem[]>([
    {
      name: "مكيف ماء (نسمة)",
      watts: 300,
      quantity: 0,
      hoursDay: 4,
      hoursNight: 8,
    },
    {
      name: "مكيف فريون (سبليت 1.5 طن)",
      watts: 1500,
      quantity: 0,
      hoursDay: 4,
      hoursNight: 4,
    },
    {
      name: "ثلاجة أو ديب فريزر",
      watts: 250,
      quantity: 0,
      hoursDay: 12,
      hoursNight: 12,
    },
    {
      name: "مروحة سقف / عمودية",
      watts: 80,
      quantity: 0,
      hoursDay: 6,
      hoursNight: 12,
    },
    {
      name: "إضاءة / لمبات (LED)",
      watts: 15,
      quantity: 0,
      hoursDay: 0,
      hoursNight: 8,
    },
    {
      name: "شاشة تلفزيون وريسيفر",
      watts: 100,
      quantity: 0,
      hoursDay: 4,
      hoursNight: 6,
    },
    {
      name: "مضخة مياه (موتور)",
      watts: 750,
      quantity: 0,
      hoursDay: 1,
      hoursNight: 0,
    },
    {
      name: "مكواة ملابس",
      watts: 1500,
      quantity: 0,
      hoursDay: 1,
      hoursNight: 0,
    },
    {
      name: "غسالة ملابس (حوضين)",
      watts: 400,
      quantity: 0,
      hoursDay: 2,
      hoursNight: 0,
    },
    {
      name: "غلاية / مايكروويف",
      watts: 1500,
      quantity: 0,
      hoursDay: 0,
      hoursNight: 1,
    },
    {
      name: "إنترنت (Starlink/راوتر)",
      watts: 70,
      quantity: 0,
      hoursDay: 12,
      hoursNight: 12,
    },
  ]);

  // 2. القطاع الزراعي
  const [agriculturalLoads, setAgriculturalLoads] = useState<LoadItem[]>([
    {
      name: "مضخة غاطسة (Submersible)",
      watts: 5500,
      quantity: 0,
      hoursDay: 6,
      hoursNight: 0,
    },
    {
      name: "منظومة تقليب وتسميد",
      watts: 1100,
      quantity: 0,
      hoursDay: 4,
      hoursNight: 0,
    },
    {
      name: "إضاءة غرف الحرس",
      watts: 150,
      quantity: 0,
      hoursDay: 0,
      hoursNight: 10,
    },
    {
      name: "مبرد تمور أو حظائر",
      watts: 2200,
      quantity: 0,
      hoursDay: 6,
      hoursNight: 6,
    },
  ]);

  // 3. القطاع التجاري
  const [commercialLoads, setCommercialLoads] = useState<LoadItem[]>([
    {
      name: "مكيفات فريون (محلات)",
      watts: 2000,
      quantity: 0,
      hoursDay: 8,
      hoursNight: 2,
    },
    {
      name: "إضاءة داخلية (لمبات LED)",
      watts: 20,
      quantity: 0,
      hoursDay: 4,
      hoursNight: 8,
    },
    {
      name: "إضاءة لوحات إعلانية خارجية",
      watts: 400,
      quantity: 0,
      hoursDay: 0,
      hoursNight: 12,
    },
    {
      name: "شاشات عرض تجارية",
      watts: 150,
      quantity: 0,
      hoursDay: 8,
      hoursNight: 6,
    },
    {
      name: "ثلاجة عرض وتبريد",
      watts: 600,
      quantity: 0,
      hoursDay: 12,
      hoursNight: 12,
    },
    {
      name: "أنظمة محاسبة وكاميرات",
      watts: 350,
      quantity: 0,
      hoursDay: 12,
      hoursNight: 12,
    },
  ]);

  const currentLoads =
    sector === "residential"
      ? residentialLoads
      : sector === "agricultural"
        ? agriculturalLoads
        : commercialLoads;

  const updateLoad = (index: number, field: keyof LoadItem, value: number) => {
    const updated = [...currentLoads];
    updated[index] = { ...updated[index], [field]: value };
    if (sector === "residential") setResidentialLoads(updated);
    else if (sector === "agricultural") setAgriculturalLoads(updated);
    else setCommercialLoads(updated);
  };

  // الهندسة الجديدة: حساب منفصل لليل والنهار
  const calculateResults = () => {
    let totalDayWh = 0;
    let totalNightWh = 0;
    let peakConnectedWatts = 0;

    currentLoads.forEach((item) => {
      if (item.quantity > 0) {
        // الاستهلاك النهاري
        totalDayWh += item.watts * item.quantity * item.hoursDay;
        // الاستهلاك الليلي
        totalNightWh += item.watts * item.quantity * item.hoursNight;
        // الحمل الأقصى اللحظي
        peakConnectedWatts += item.watts * item.quantity;
      }
    });

    const totalDailyWh = totalDayWh + totalNightWh;
    const totalKwh = totalDailyWh / 1000;
    const totalNightKwh = totalNightWh / 1000;

    // العاكس: يتحمل كامل الحمل اللحظي + 30% أمان
    const recommendedInverterKw = parseFloat(
      ((peakConnectedWatts * 1.3) / 1000).toFixed(1),
    );

    // الألواح: تغذي استهلاك النهار بالكامل + تشحن البطاريات لاستهلاك الليل (على 5.5 ساعات شمس)
    const recommendedSolarKw = parseFloat(((totalKwh / 5.5) * 1.25).toFixed(1));

    // البطاريات: تحسب فقط لتغطية أحمال الليل، مقسومة على 0.8 (DoD لبطاريات الليثيوم 80%)
    const recommendedBatteryKwh = parseFloat((totalNightKwh / 0.8).toFixed(1));

    return {
      totalKwh,
      recommendedInverterKw,
      recommendedSolarKw,
      recommendedBatteryKwh,
    };
  };

  const results = calculateResults();

  const getWhatsAppLink = () => {
    const phoneNumber = "249123766000";
    const sectorAr =
      sector === "residential"
        ? "سكني"
        : sector === "agricultural"
          ? "زراعي"
          : "تجاري";

    let message = `مرحباً سودا لار للطاقة الشمسية، لقد قمت بحساب الأحمال المبدئية عبر موقعكم لقطاع (*${sectorAr}*) وهي كالتالي:\n\n`;
    currentLoads.forEach((item) => {
      if (item.quantity > 0) {
        message += `• ${item.name}: العدد (${item.quantity}) - العمل (${item.hoursDay} نهاراً / ${item.hoursNight} ليلاً)\n`;
      }
    });
    message += `\n*التقرير الفني المقدر:*\n`;
    message += `- إجمالي الاستهلاك السنوي: ${results.totalKwh.toFixed(1)} كيلوواط/يوم\n`;
    message += `- حجم العاكس المقترح: ${results.recommendedInverterKw} كيلوواط\n`;
    message += `- حجم الألواح المقترح: ${results.recommendedSolarKw} كيلوواط\n`;
    message += `- سعة التخزين (لليل فقط): ${results.recommendedBatteryKwh} كيلوواط/ساعة\n\n`;
    message += `أرجو مراجعة التقرير وتزويدي بالتسعير المبدئي وتنسيق زيارة ميدانية للموقع المذكور.`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Brutalist Step Progress Indicator */}
      <div className="grid grid-cols-3 border-[3px] border-primary mb-10 text-center font-bold font-mono text-sm md:text-base shadow-neo bg-surface-container-lowest">
        <div
          className={`py-4 border-l-[3px] border-primary ${step === 1 ? "bg-secondary-container text-primary" : "text-gray-400"}`}
        >
          [01] اختيار القطاع
        </div>
        <div
          className={`py-4 border-l-[3px] border-primary ${step === 2 ? "bg-secondary-container text-primary" : "text-gray-400"}`}
        >
          [02] مدخلات الأحمال
        </div>
        <div
          className={`py-4 ${step === 3 ? "bg-secondary-container text-primary" : "text-gray-400"}`}
        >
          [03] التقرير والطلب
        </div>
      </div>

      {/* STEP 1: SECTOR SELECTION */}
      {step === 1 && (
        <div className="flex flex-col gap-6 animate-fadeIn">
          <div className="bg-primary text-white p-6 border-[3px] border-primary shadow-neo">
            <h2 className="text-xl md:text-2xl font-black mb-2 uppercase">
              مصفوفة تخصيص نوع المنظومة الشمسية
            </h2>
            <p className="text-sm text-gray-300">
              اختر القطاع المستهدف للحصول على قائمة أحمال مخصصة تناسب نمط
              الاستهلاك الفعلي في السودان.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            {[
              {
                id: "residential",
                title: "القطاع السكني",
                desc: "منازل، شقق، مجمعات سكنية ومكيفات مياه ونسمة.",
                icon: "home",
              },
              {
                id: "agricultural",
                title: "القطاع الزراعي",
                desc: "مزارع، مشاريع إنتاجية، مضخات ري وأعماق غاطسة بالحصان.",
                icon: "agriculture",
              },
              {
                id: "commercial",
                title: "القطاع التجاري",
                desc: "متاجر، مكاتب، مستودعات تبريد، ومكيفات فريون وصيانة.",
                icon: "storefront",
              },
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => setSector(item.id as Sector)}
                className={`border-[4px] border-primary p-6 shadow-neo cursor-pointer transition-all flex flex-col gap-4 select-none group ${sector === item.id ? "bg-secondary-container transform -translate-x-1 -translate-y-1 shadow-neo-gold-lg" : "bg-surface-container-lowest hover:bg-surface-container"}`}
              >
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center border-[2px] border-primary group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-black text-xl md:text-2xl uppercase">
                  {item.title}
                </h3>
                <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={() => setStep(2)}
              className="bg-primary text-white font-black border-[3px] border-primary px-10 py-4 shadow-neo hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-gold transition-all uppercase italic flex items-center gap-2"
            >
              الانتقال لجدول الأحمال{" "}
              <span className="material-symbols-outlined">arrow_left</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: LOAD INPUTS GRID */}
      {step === 2 && (
        <div className="flex flex-col gap-6 animate-fadeIn">
          <div className="bg-primary text-white p-6 border-[3px] border-primary shadow-neo flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-black uppercase">
                تحديد كميات وساعات تشغيل الأجهزة
              </h2>
              <p className="text-sm text-gray-300 mt-1">
                القدرة على فصل ساعات النهار عن الليل تضمن لك حساب بطاريات دقيق
                جداً وبأقل تكلفة.
              </p>
            </div>
            <button
              onClick={() => setStep(1)}
              className="border-[2px] border-white/40 text-white text-xs px-4 py-2 hover:bg-white/10 uppercase font-mono font-bold w-full md:w-auto transition-colors"
            >
              [ تغيير القطاع ]
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {currentLoads.map((item, index) => (
              <div
                key={index}
                className="border-[3px] border-primary p-5 bg-surface-container-lowest shadow-neo flex flex-col gap-5 hover:-translate-y-1 transition-transform"
              >
                <div className="font-black text-primary text-lg md:text-xl border-b-[2px] border-primary/20 pb-2">
                  {item.name}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Quantity Control */}
                  <div className="flex flex-col gap-1.5 col-span-2 md:col-span-1">
                    <span className="text-xs font-bold text-gray-500 uppercase">
                      العدد الحالي
                    </span>
                    <div className="flex items-center border-[2px] border-primary bg-white h-12">
                      <button
                        onClick={() =>
                          updateLoad(
                            index,
                            "quantity",
                            Math.max(0, item.quantity - 1),
                          )
                        }
                        className="w-10 h-full bg-gray-100 border-l border-primary font-black text-xl hover:bg-secondary-container active:bg-primary active:text-white transition-colors"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity === 0 ? "" : item.quantity}
                        placeholder="0"
                        onChange={(e) =>
                          updateLoad(
                            index,
                            "quantity",
                            e.target.value === ""
                              ? 0
                              : Math.max(0, parseInt(e.target.value) || 0),
                          )
                        }
                        className="w-full h-full text-center font-mono font-black text-lg border-none outline-none focus:bg-secondary-container"
                      />
                      <button
                        onClick={() =>
                          updateLoad(index, "quantity", item.quantity + 1)
                        }
                        className="w-10 h-full bg-gray-100 border-r border-primary font-black text-xl hover:bg-secondary-container active:bg-primary active:text-white transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Watts Control */}
                  <div className="flex flex-col gap-1.5 col-span-2 md:col-span-1">
                    <span className="text-xs font-bold text-gray-500 uppercase">
                      الواط لجهاز
                    </span>
                    <input
                      type="number"
                      value={item.watts === 0 ? "" : item.watts}
                      placeholder="0"
                      onChange={(e) =>
                        updateLoad(
                          index,
                          "watts",
                          e.target.value === ""
                            ? 0
                            : parseInt(e.target.value) || 0,
                        )
                      }
                      className="h-12 w-full bg-surface-container-high border-[2px] border-primary p-2 text-center font-mono font-bold focus:bg-secondary-container outline-none transition-colors"
                    />
                  </div>

                  {/* Hours Day Control */}
                  <div className="flex flex-col gap-1.5 col-span-1 md:col-span-1">
                    <span className="text-xs font-bold text-gray-500 uppercase">
                      ساعات نهاراً
                    </span>
                    <div className="relative">
                      <input
                        type="number"
                        max="12"
                        min="0"
                        value={item.hoursDay === 0 ? "" : item.hoursDay}
                        placeholder="0"
                        onChange={(e) =>
                          updateLoad(
                            index,
                            "hoursDay",
                            e.target.value === ""
                              ? 0
                              : Math.min(
                                  12,
                                  Math.max(0, parseInt(e.target.value) || 0),
                                ),
                          )
                        }
                        className="h-12 w-full bg-white border-[2px] border-primary p-2 text-center font-mono font-black text-lg focus:bg-secondary-container outline-none transition-colors"
                      />
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-primary opacity-50 pointer-events-none material-symbols-outlined text-sm">
                        light_mode
                      </span>
                    </div>
                  </div>

                  {/* Hours Night Control */}
                  <div className="flex flex-col gap-1.5 col-span-1 md:col-span-1">
                    <span className="text-xs font-bold text-gray-500 uppercase">
                      ساعات ليلاً
                    </span>
                    <div className="relative">
                      <input
                        type="number"
                        max="12"
                        min="0"
                        value={item.hoursNight === 0 ? "" : item.hoursNight}
                        placeholder="0"
                        onChange={(e) =>
                          updateLoad(
                            index,
                            "hoursNight",
                            e.target.value === ""
                              ? 0
                              : Math.min(
                                  12,
                                  Math.max(0, parseInt(e.target.value) || 0),
                                ),
                          )
                        }
                        className="h-12 w-full bg-white border-[2px] border-primary p-2 text-center font-mono font-black text-lg focus:bg-secondary-container outline-none transition-colors"
                      />
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-primary opacity-50 pointer-events-none material-symbols-outlined text-sm">
                        dark_mode
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col-reverse md:flex-row justify-between mt-4 gap-4">
            <button
              onClick={() => setStep(1)}
              className="bg-surface-container-lowest text-primary font-black border-[3px] border-primary px-6 py-4 shadow-neo hover:bg-surface-container transition-all text-center w-full md:w-auto"
            >
              رجوع للخلف
            </button>
            <button
              onClick={() => setStep(3)}
              className="bg-secondary-container text-primary font-black border-[3px] border-primary px-10 py-4 shadow-neo-gold-lg hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo shadow-black transition-all uppercase italic flex justify-center items-center gap-2 w-full md:w-auto"
            >
              توليد التقرير الهندسي{" "}
              <span className="material-symbols-outlined">analytics</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: RESULTS MATRIX */}
      {step === 3 && (
        <div className="flex flex-col gap-6 animate-fadeIn">
          <div className="bg-primary text-white p-6 border-[3px] border-primary shadow-neo">
            <h2 className="text-xl md:text-2xl font-black uppercase">
              التقرير الفني والحجم التقديري للمنظومة
            </h2>
            <p className="text-sm text-gray-300">
              بفضل فصل أحمال النهار عن الليل، سعة البطاريات المعروضة هي السعة
              الفعلية والمثالية المطلوبة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-[3px] border-primary p-6 bg-surface-container-lowest shadow-neo flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-gray-500 block mb-1">
                  TOTAL CONSUMPTION
                </span>
                <h4 className="font-black text-xl mb-4">
                  إجمالي استهلاك الطاقة اليومي
                </h4>
              </div>
              <div className="text-4xl font-mono font-black text-primary bg-surface-container p-4 border-[2px] border-primary text-center shadow-inner">
                {results.totalKwh.toFixed(1)}{" "}
                <span className="text-lg">kWh/يوم</span>
              </div>
            </div>

            <div className="border-[3px] border-primary p-6 bg-surface-container-lowest shadow-neo flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-gray-500 block mb-1">
                  RECOMMENDED INVERTER
                </span>
                <h4 className="font-black text-xl mb-4">
                  حجم العاكس (Inverter) المقترح
                </h4>
              </div>
              <div className="text-4xl font-mono font-black text-secondary-container bg-primary p-4 border-[2px] border-primary text-center shadow-inner">
                {results.recommendedInverterKw}{" "}
                <span className="text-lg text-white">kW</span>
              </div>
            </div>

            <div className="border-[3px] border-primary p-6 bg-surface-container-lowest shadow-neo flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-gray-500 block mb-1">
                  SOLAR PV ARRAY
                </span>
                <h4 className="font-black text-xl mb-4">
                  قدرة مصفوفة الألواح المطلوبة
                </h4>
              </div>
              <div className="text-4xl font-mono font-black text-primary bg-secondary-container p-4 border-[2px] border-primary text-center shadow-neo">
                {results.recommendedSolarKw} <span className="text-lg">kW</span>
              </div>
            </div>

            <div className="border-[3px] border-primary p-6 bg-surface-container-lowest shadow-neo flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -left-10 top-4 bg-secondary-container text-primary text-[10px] font-black px-10 py-1 rotate-[-45deg] uppercase">
                مُحسن لليل
              </div>
              <div>
                <span className="font-mono text-xs uppercase text-gray-500 block mb-1">
                  LITHIUM BATTERY BANK
                </span>
                <h4 className="font-black text-xl mb-4">
                  سعة بطاريات الليثيوم المقترحة
                </h4>
              </div>
              <div className="text-4xl font-mono font-black text-gray-700 bg-surface-container p-4 border-[2px] border-primary text-center shadow-inner">
                {results.recommendedBatteryKwh}{" "}
                <span className="text-lg">kWh</span>
              </div>
            </div>
          </div>

          <div className="mt-4 border-[4px] border-primary bg-secondary-container p-6 md:p-8 shadow-neo-lg shadow-black flex flex-col gap-6">
            <div className="text-primary">
              <h3 className="font-black text-2xl md:text-3xl uppercase mb-2">
                إرسال التقرير لبدء التصميم الهندسي
              </h3>
              <p className="text-sm md:text-base font-bold leading-relaxed">
                اضغط على الزر أدناه لنقل كافة البيانات الحسابية التي قمت
                بإدخالها مباشرة إلى المهندسين المختصين في شركة *سودا لار* عبر
                الواتساب.
              </p>
            </div>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-secondary-container font-black border-[3px] border-primary text-center py-5 text-lg md:text-xl shadow-neo shadow-black tracking-wider transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-gold-lg active:translate-x-0 active:translate-y-0 active:shadow-none uppercase italic flex items-center justify-center gap-3"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              إرسال جدول البيانات والتقرير عبر الواتساب
            </a>
          </div>

          <div className="flex justify-start mt-4">
            <button
              onClick={() => setStep(2)}
              className="bg-surface-container-lowest text-primary font-black border-[3px] border-primary px-6 py-4 shadow-neo hover:bg-surface-container transition-all"
            >
              تعديل الأحمال الحالية
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
