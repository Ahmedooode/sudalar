"use client";

import { useState, useMemo } from "react";
import rawData from "../../solar_inverters_specs.json";

// ─── Types ────────────────────────────────────────────────────────────────────

type Primitive = string | number;
type SpecValue = Primitive | Record<string, Primitive> | Array<{ code: string; description: string }>;
type SpecSection = Record<string, SpecValue>;

interface FaultCode {
  code: string;
  description: string;
}

interface Inverter {
  brand: string;
  modelName: string;
  modelNumber: string;
  inverterCategory: string;
  pvInput: SpecSection;
  acOutput: SpecSection;
  acInput?: SpecSection;
  batteryManagement: SpecSection;
  generatorInput?: SpecSection;
  connectivityAndProtection: SpecSection;
  efficiency?: SpecSection;
  physical?: SpecSection;
  operationalData: {
    configurationSteps: string;
    faultAndErrorCodes: FaultCode[];
    wiringDiagramPorts: string;
  };
  dataSource: string;
  dataAccuracy: string;
}

const inverters = rawData as unknown as Inverter[];

// ─── Arabic key labels ────────────────────────────────────────────────────────

const KEY_LABELS: Record<string, string> = {
  maxPvInputPowerW: "أقصى طاقة PV",
  maxPvAccessPowerW: "أقصى طاقة وصول PV",
  maxPvVoltageV: "أقصى جهد PV",
  maxDcVoltageV: "أقصى جهد DC",
  nominalDcVoltageV: "الجهد الاسمي DC",
  ratedPvInputVoltageV: "الجهد الاسمي PV",
  mpptVoltageRangeV: "نطاق جهد MPPT",
  numberOfMppts: "عدد وحدات MPPT",
  maxPvInputCurrentA: "أقصى تيار PV",
  maxPvInputCurrentPerMpptA: "أقصى تيار لكل MPPT",
  maxShortCircuitCurrentA: "أقصى تيار قصر",
  maxShortCircuitCurrentPerMpptA: "أقصى تيار قصر لكل MPPT",
  startupVoltageV: "جهد بدء التشغيل",
  startVoltageV: "جهد بدء التشغيل",
  initialFeedingVoltageV: "جهد التغذية الابتدائية",
  minDcVoltageV: "أدنى جهد DC",
  mpptLayout: "تخطيط MPPT",
  mpptChargerRatingA: "تيار شاحن MPPT",
  maxDcAcRatio: "أقصى نسبة DC/AC",
  ratedPowerW: "الطاقة الاسمية",
  ratedPowerVA: "الطاقة الظاهرة الاسمية",
  ratedVoltageV: "الجهد الاسمي",
  maxApparentPowerVA: "أقصى طاقة ظاهرة",
  nominalOutputVoltageV: "الجهد الاسمي للخرج",
  outputVoltageV: "جهد الخرج",
  outputVoltageRangeV: "نطاق جهد الخرج",
  frequencyHz: "التردد",
  phases: "الأطوار",
  ratedOutputCurrentA: "تيار الخرج الاسمي",
  maxOutputCurrentA: "أقصى تيار خرج",
  powerFactor: "معامل الطاقة",
  powerFactorRange: "نطاق معامل الطاقة",
  thdi: "التشويه التوافقي للتيار (THDi)",
  thdv: "التشويه التوافقي للجهد (THDv)",
  maxConversionEfficiencyDcAc: "أقصى كفاءة تحويل DC/AC",
  efficiencyBatteryMode: "الكفاءة في وضع البطارية",
  outputWaveform: "شكل موجة الخرج",
  peakPowerOffGrid: "طاقة الذروة (مستقل)",
  maxAcPassthroughCurrentA: "أقصى تيار مرور AC",
  maxAcPassthroughA: "أقصى تيار مرور AC",
  surgePower: "طاقة الاندفاع",
  dualOutput: "خرج مزدوج",
  maxChargingPowerW: "أقصى طاقة شحن",
  transferTimeMs: "زمن التحويل",
  ratedOutputPowerPerPhaseW_and_CurrentA: "الطاقة والتيار لكل طور",
  ratedOutputCurrentPerPhaseA: "تيار الخرج لكل طور",
  dcInjectionCurrent: "تيار حقن DC",
  nominalInputVoltageV: "الجهد الاسمي للمدخل",
  inputVoltageRangeV: "نطاق جهد المدخل",
  inputFrequencyHz: "تردد المدخل",
  acStartupVoltageV: "جهد بدء التشغيل (AC)",
  autoRestartVoltageV: "جهد إعادة التشغيل التلقائي",
  acceptableInputVoltageRangeV: "نطاق جهد المدخل المقبول",
  maxAcInputCurrentA: "أقصى تيار مدخل AC",
  supportedBatteryTypes: "أنواع البطاريات المدعومة",
  batteryVoltageRangeV: "نطاق جهد البطارية",
  batteryVoltageV: "جهد البطارية",
  nominalBatteryVoltageV: "الجهد الاسمي للبطارية",
  ratedBatteryVoltageV: "الجهد الاسمي للبطارية",
  maxChargingVoltageV: "أقصى جهد شحن",
  maxChargingCurrentA: "أقصى تيار شحن",
  maxDischargingCurrentA: "أقصى تيار تفريغ",
  maxSolarChargingCurrentA: "أقصى تيار شحن شمسي",
  maxAcChargingCurrentA: "أقصى تيار شحن AC",
  maxTotalChargingCurrentA: "أقصى تيار شحن إجمالي",
  numberOfBatteryInputs: "عدد مداخل البطارية",
  chargingStrategy: "استراتيجية الشحن",
  constantCurrentChargeVoltageV: "جهد شحن التيار الثابت",
  floatingChargeVoltageV: "جهد شحن العوامة",
  forceWakeUpFromPV: "إيقاظ البطارية من PV",
  dcStartVoltageV: "جهد بدء DC",
  batteryEqualization: "موازنة البطاريات",
  communicationPorts: "منافذ الاتصال",
  ipRating: "درجة الحماية (IP)",
  display: "الشاشة",
  wifiBuiltIn: "واي-فاي مدمج",
  parallelCapability: "التوصيل التوازي",
  operatingModes: "أوضاع التشغيل",
  protections: "أنظمة الحماية",
  generatorPort: "منفذ المولّد",
  additionalFeatures: "ميزات إضافية",
  certifications: "الشهادات والتصاريح",
  unbalancedLoadSupport: "دعم الأحمال غير المتوازنة",
  mountingOptions: "خيارات التركيب",
  coolingMethod: "طريقة التبريد",
  maxEfficiency: "أقصى كفاءة",
  euroEfficiency: "الكفاءة الأوروبية",
  mpptEfficiency: "كفاءة MPPT",
  maxChargeDischargeEfficiency: "أقصى كفاءة شحن/تفريغ",
  dimensionsWxHxDmm: "الأبعاد مم",
  dimensionsDxWxHmm: "الأبعاد مم",
  dimensionsIn: "الأبعاد (بوصة)",
  weightKg: "الوزن (كجم)",
  weightLbs: "الوزن (رطل)",
  weightKgPerModel: "الوزن لكل موديل",
  operatingTempC: "درجة حرارة التشغيل",
  storageTempC: "درجة حرارة التخزين",
  humidity: "الرطوبة",
  maxAltitudeM: "أقصى ارتفاع",
  noiseDb: "مستوى الضوضاء",
  topology: "التوبولوجيا",
  warranty: "الضمان",
  ratedGenVoltageV: "الجهد الاسمي للمولّد",
  ratedGenFrequencyHz: "تردد المولّد",
  ratedGenInputCurrentA: "تيار مدخل المولّد",
  ratedGenInputPowerW: "طاقة مدخل المولّد",
};

// ─── Spec sections order ──────────────────────────────────────────────────────

const SPEC_SECTIONS: Array<{ key: keyof Inverter; label: string }> = [
  { key: "pvInput", label: "مدخل الطاقة الشمسية" },
  { key: "acOutput", label: "خرج التيار المتردد" },
  { key: "acInput", label: "مدخل التيار المتردد" },
  { key: "batteryManagement", label: "إدارة البطارية" },
  { key: "generatorInput", label: "مدخل المولّد" },
  { key: "connectivityAndProtection", label: "الاتصال والحماية" },
  { key: "efficiency", label: "الكفاءة" },
  { key: "physical", label: "المواصفات الفيزيائية" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getBrandShort(brand: string): string {
  if (brand.includes("Crown")) return "Crown Micro";
  if (brand.includes("Deye") || brand.includes("ديي")) return "Deye";
  if (brand.includes("GSB")) return "GSB Solar";
  if (brand.includes("GoodWe")) return "GoodWe";
  if (brand.includes("Megasun") || brand.includes("ميجاصن")) return "Megasun";
  return brand.split(" ")[0];
}

function getCategoryBadgeClass(category: string): string {
  if (category.includes("هجين ثلاثي") || category.includes("3P") || category.includes("3-أطوار"))
    return "bg-primary text-white";
  if (category.includes("هجين")) return "bg-secondary-container text-primary";
  if (category.includes("وتري") || category.includes("متصل بالشبكة")) return "bg-primary-container text-white";
  if (category.includes("مستقل")) return "bg-on-background text-white";
  return "bg-surface-container text-on-surface-variant";
}

function getCategoryShort(category: string): string {
  if (category.includes("هجين ثلاثي") || category.includes("3P")) return "هجين 3-طور";
  if (category.includes("هجين أحادي") || category.includes("هجين")) return "هجين أحادي";
  if (category.includes("وتري") || category.includes("متصل بالشبكة")) return "متصل بالشبكة";
  if (category.includes("مستقل")) return "مستقل عن الشبكة";
  if (category.includes("تعذّر")) return "غير متاح";
  return "هجين";
}

function extractNumber(s: string): number | null {
  const m = s.replace(/,/g, "").match(/[\d]+(?:\.\d+)?/);
  return m ? parseFloat(m[0]) : null;
}

function formatPower(val: unknown): string {
  if (!val || val === "غير متاح" || val === "لا ينطبق") return "—";
  const s = String(val);
  const n = extractNumber(s);
  if (n === null) return "—";
  if (n >= 1000) return `${Math.round(n / 1000)} ك‌و`;
  return `${n} و`;
}

function formatMppt(val: unknown): string {
  if (!val || val === "غير متاح") return "—";
  const s = String(val);
  const m = s.match(/^(\d+)/);
  return m ? m[1] : "—";
}

function formatIp(val: unknown): string {
  if (!val || val === "غير متاح") return "—";
  const m = String(val).match(/IP\s*\d+/i);
  return m ? m[0].replace(/\s/, "") : "—";
}

function formatEff(val: unknown): string {
  if (!val || val === "غير متاح") return "—";
  const m = String(val).match(/([\d]+\.?[\d]*)\s*%/);
  return m ? `${m[1]}%` : "—";
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCell({
  icon,
  label,
  value,
  hasBorder,
}: {
  icon: string;
  label: string;
  value: string;
  hasBorder?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-3 gap-0.5${
        hasBorder ? " border-r-[2px] border-primary" : ""
      }`}
    >
      <span
        className="material-symbols-outlined text-[18px] text-primary"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {icon}
      </span>
      <span className="font-mono text-[11px] font-black text-on-background leading-none mt-0.5">
        {value}
      </span>
      <span className="font-arabic text-[9px] text-on-surface-variant leading-none">
        {label}
      </span>
    </div>
  );
}

function SpecValueRenderer({ value }: { value: SpecValue }) {
  if (typeof value === "string" || typeof value === "number") {
    return <span className="font-arabic text-xs text-on-background">{String(value)}</span>;
  }
  if (Array.isArray(value)) {
    return (
      <div className="space-y-1">
        {value.map((item, i) => (
          <div key={i} className="font-arabic text-xs text-on-background leading-relaxed">
            {item.code !== "غير متاح" && (
              <span className="font-mono font-black text-[10px] bg-primary text-white px-1 ml-1">
                {item.code}
              </span>
            )}
            {item.description}
          </div>
        ))}
      </div>
    );
  }
  if (typeof value === "object" && value !== null) {
    return (
      <div className="space-y-1 w-full">
        {Object.entries(value).map(([k, v]) => (
          <div
            key={k}
            className="flex justify-between items-start gap-2 text-[11px] border-b border-surface-container pb-1 last:border-0 last:pb-0"
          >
            <span className="font-mono text-on-surface-variant flex-shrink-0">{k}</span>
            <span className="font-arabic text-on-background text-left">{String(v)}</span>
          </div>
        ))}
      </div>
    );
  }
  return <span className="font-arabic text-xs text-on-surface-variant">غير متاح</span>;
}

function SectionBlock({ label, data }: { label: string; data: SpecSection }) {
  const entries = Object.entries(data);
  if (entries.length === 0) return null;
  return (
    <div>
      <div className="bg-primary-container px-4 py-2">
        <h3 className="font-arabic font-black text-sm text-white tracking-tight">{label}</h3>
      </div>
      <div className="divide-y divide-surface-container-high">
        {entries.map(([key, value]) => (
          <div key={key} className="flex items-start gap-3 px-4 py-2.5">
            <span className="font-mono text-[10px] text-on-surface-variant min-w-[110px] flex-shrink-0 pt-0.5 leading-snug">
              {KEY_LABELS[key] || key}
            </span>
            <div className="flex-1 min-w-0">
              <SpecValueRenderer value={value} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function CatalogPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const brands = useMemo(() => {
    const seen = new Set<string>();
    const result: Array<{ brand: string; display: string }> = [];
    inverters.forEach((inv) => {
      if (!seen.has(inv.brand)) {
        seen.add(inv.brand);
        result.push({ brand: inv.brand, display: getBrandShort(inv.brand) });
      }
    });
    return result;
  }, []);

  const filtered = useMemo(
    () =>
      activeFilter
        ? inverters.filter((inv) => inv.brand === activeFilter)
        : inverters,
    [activeFilter]
  );

  function toggleExpand(key: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <main dir="rtl" className="pt-20 pb-28 min-h-screen bg-background">

      {/* ── Hero banner ───────────────────────────────────────────────────────── */}
      <div className="bg-primary-container border-b-[4px] border-primary px-4 pt-8 pb-6">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[10px] text-tertiary-fixed-dim uppercase tracking-widest mb-2">
            INVERTER CATALOG / كتالوج المحولات
          </p>
          <h1 className="font-arabic font-black text-3xl text-white leading-tight mb-2">
            المحوّلات الشمسية
          </h1>
          <p className="font-arabic text-sm text-tertiary-fixed-dim leading-relaxed">
            مواصفات تقنية موثَّقة مستخرجة من كتيبات المورّدين الرسمية
          </p>
          <div className="flex gap-4 mt-4">
            <div className="border-[2px] border-tertiary-fixed-dim px-3 py-1.5">
              <span className="font-mono text-[11px] text-secondary-container font-black">
                {inverters.length - 1}
              </span>
              <span className="font-arabic text-[11px] text-tertiary-fixed-dim mr-1">موديل</span>
            </div>
            <div className="border-[2px] border-tertiary-fixed-dim px-3 py-1.5">
              <span className="font-mono text-[11px] text-secondary-container font-black">
                {brands.length}
              </span>
              <span className="font-arabic text-[11px] text-tertiary-fixed-dim mr-1">علامة تجارية</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Brand filter chips ─────────────────────────────────────────────────── */}
      <div className="border-b-[3px] border-primary bg-surface-container-lowest sticky top-20 z-10">
        <div className="flex gap-2 px-4 py-3 overflow-x-auto">
          <button
            onClick={() => setActiveFilter(null)}
            className={`flex-shrink-0 px-3 py-1.5 border-[2px] border-primary font-mono text-xs font-black transition-all duration-100 ${
              !activeFilter
                ? "bg-secondary-container shadow-neo"
                : "bg-white hover:bg-surface-container-low"
            }`}
          >
            الكل ({inverters.length})
          </button>
          {brands.map((b) => {
            const count = inverters.filter((inv) => inv.brand === b.brand).length;
            const isActive = activeFilter === b.brand;
            return (
              <button
                key={b.brand}
                onClick={() => setActiveFilter(isActive ? null : b.brand)}
                className={`flex-shrink-0 px-3 py-1.5 border-[2px] border-primary font-mono text-xs font-black transition-all duration-100 ${
                  isActive
                    ? "bg-secondary-container shadow-neo"
                    : "bg-white hover:bg-surface-container-low"
                }`}
              >
                {b.display} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Inverter cards ─────────────────────────────────────────────────────── */}
      <div className="px-4 py-5 max-w-2xl mx-auto space-y-4">
        {filtered.map((inv) => {
          const cardKey = `${inv.brand}|${inv.modelName}`;
          const isExpanded = expanded.has(cardKey);

          const power =
            (inv.acOutput?.ratedPowerW as string) ||
            (inv.acOutput?.ratedPowerVA as string) ||
            "غير متاح";
          const mppt = inv.pvInput?.numberOfMppts as string;
          const ip = inv.connectivityAndProtection?.ipRating as string;
          const eff =
            ((inv.efficiency as SpecSection)?.maxEfficiency as string) ||
            (inv.acOutput?.maxConversionEfficiencyDcAc as string);

          const badgeClass = getCategoryBadgeClass(inv.inverterCategory);
          const categoryShort = getCategoryShort(inv.inverterCategory);
          const brandShort = getBrandShort(inv.brand);
          const isMegasun = inv.brand.includes("Megasun") || inv.brand.includes("ميجاصن");

          return (
            <div
              key={cardKey}
              className="border-[3px] border-primary bg-white shadow-neo transition-shadow"
            >
              {/* Card header */}
              <div className="px-4 pt-4 pb-3">
                <div className="flex justify-between items-start gap-2 mb-3">
                  <span className="font-mono text-[10px] font-black bg-primary text-white px-2 py-0.5 uppercase tracking-wide flex-shrink-0">
                    {brandShort}
                  </span>
                  <span
                    className={`font-arabic text-[10px] font-black px-2 py-0.5 border-[2px] border-primary flex-shrink-0 ${badgeClass}`}
                  >
                    {categoryShort}
                  </span>
                </div>
                <h2 className="font-arabic font-black text-base text-on-background leading-snug">
                  {inv.modelName}
                </h2>
                {inv.modelNumber && inv.modelNumber !== "غير متاح" && (
                  <p className="font-mono text-[10px] text-on-surface-variant mt-1">
                    {inv.modelNumber}
                  </p>
                )}
              </div>

              {/* Quick stats row */}
              {!isMegasun && (
                <div className="border-t-[2px] border-primary grid grid-cols-4">
                  <StatCell icon="bolt" label="الطاقة" value={formatPower(power)} />
                  <StatCell
                    icon="radar"
                    label="MPPT"
                    value={formatMppt(mppt)}
                    hasBorder
                  />
                  <StatCell
                    icon="security"
                    label="الحماية"
                    value={formatIp(ip)}
                    hasBorder
                  />
                  <StatCell
                    icon="grade"
                    label="الكفاءة"
                    value={formatEff(eff)}
                    hasBorder
                  />
                </div>
              )}

              {/* Inaccessible notice */}
              {isMegasun && (
                <div className="border-t-[2px] border-primary px-4 py-3 bg-surface-container-low">
                  <p className="font-arabic text-xs text-on-surface-variant leading-relaxed">
                    {inv.dataAccuracy}
                  </p>
                </div>
              )}

              {/* Expand toggle */}
              {!isMegasun && (
                <button
                  onClick={() => toggleExpand(cardKey)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 border-t-[2px] border-primary transition-colors duration-100 ${
                    isExpanded
                      ? "bg-secondary-container"
                      : "hover:bg-surface-container-low"
                  }`}
                >
                  <span className="font-arabic text-sm font-black">
                    {isExpanded ? "إخفاء المواصفات" : "عرض المواصفات الكاملة"}
                  </span>
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {isExpanded ? "expand_less" : "expand_more"}
                  </span>
                </button>
              )}

              {/* Expanded spec sections */}
              {isExpanded && (
                <div className="border-t-[2px] border-primary divide-y divide-primary">
                  {SPEC_SECTIONS.map((section) => {
                    const sectionData = (inv as unknown as Record<string, unknown>)[
                      section.key as string
                    ];
                    if (
                      !sectionData ||
                      typeof sectionData !== "object" ||
                      Array.isArray(sectionData)
                    )
                      return null;
                    return (
                      <SectionBlock
                        key={section.key as string}
                        label={section.label}
                        data={sectionData as SpecSection}
                      />
                    );
                  })}

                  {/* Operational data */}
                  {inv.operationalData && (
                    <div>
                      <div className="bg-primary-container px-4 py-2">
                        <h3 className="font-arabic font-black text-sm text-white tracking-tight">
                          بيانات التشغيل
                        </h3>
                      </div>
                      <div className="px-4 py-3 space-y-4">
                        {inv.operationalData.configurationSteps &&
                          inv.operationalData.configurationSteps !== "غير متاح" && (
                            <div>
                              <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider mb-1.5">
                                خطوات التكوين
                              </p>
                              <p className="font-arabic text-xs text-on-background whitespace-pre-line leading-relaxed">
                                {inv.operationalData.configurationSteps}
                              </p>
                            </div>
                          )}
                        {inv.operationalData.faultAndErrorCodes &&
                          inv.operationalData.faultAndErrorCodes.length > 0 &&
                          inv.operationalData.faultAndErrorCodes[0].code !== "غير متاح" && (
                            <div>
                              <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider mb-2">
                                أكواد الأعطال والأخطاء
                              </p>
                              <div className="border-[2px] border-primary overflow-hidden">
                                <div className="grid grid-cols-[auto_1fr] bg-primary">
                                  <span className="font-mono text-[9px] font-black text-white px-2 py-1 uppercase tracking-wider border-l-[2px] border-white/30">الكود</span>
                                  <span className="font-mono text-[9px] font-black text-white px-2 py-1 uppercase tracking-wider">الوصف والحل</span>
                                </div>
                                {inv.operationalData.faultAndErrorCodes.map((fc, i) => (
                                  <div
                                    key={i}
                                    className={`grid grid-cols-[auto_1fr] border-t-[2px] border-primary ${i % 2 === 0 ? "bg-surface-container-lowest" : "bg-surface-container-low"}`}
                                  >
                                    <span className="font-mono text-[10px] font-black text-primary px-2 py-1.5 border-l-[2px] border-primary whitespace-nowrap self-start">
                                      {fc.code}
                                    </span>
                                    <span className="font-arabic text-[11px] text-on-background px-2 py-1.5 leading-relaxed">
                                      {fc.description}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        {inv.operationalData.wiringDiagramPorts &&
                          inv.operationalData.wiringDiagramPorts !== "غير متاح" && (
                            <div>
                              <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider mb-1.5">
                                توصيف المنافذ والأسلاك
                              </p>
                              <p className="font-arabic text-xs text-on-background leading-relaxed">
                                {inv.operationalData.wiringDiagramPorts}
                              </p>
                            </div>
                          )}
                      </div>
                    </div>
                  )}

                  {/* Data source */}
                  <div className="bg-surface-container-low px-4 py-2.5">
                    <p className="font-mono text-[10px] text-on-surface-variant leading-snug">
                      <span className="font-black text-primary">الدقة: </span>
                      {inv.dataAccuracy}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="text-center py-20 font-arabic text-on-surface-variant">
            لا توجد نتائج للفلتر المختار
          </div>
        )}
      </div>
    </main>
  );
}
