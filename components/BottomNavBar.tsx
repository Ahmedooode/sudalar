"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkItem {
  label: string;
  arabicLabel: string;
  path: string;
  icon: string;
}

export const BottomNavBar: React.FC = () => {
  const pathname = usePathname();
  const [lang, setLang] = useState<"ar" | "en">("ar");

  useEffect(() => {
    const update = () => {
      const saved = localStorage.getItem("photon-lang");
      setLang(saved === "en" ? "en" : "ar");
    };
    update();
    window.addEventListener("photon-lang-change", update);
    return () => window.removeEventListener("photon-lang-change", update);
  }, []);

  const navItems: NavLinkItem[] = [
    { label: "Home",       arabicLabel: "الرئيسية", path: "/",          icon: "dashboard"   },
    { label: "Viability",  arabicLabel: "الجدوى",   path: "/viability", icon: "analytics"   },
    { label: "Calculator", arabicLabel: "الحاسبة",  path: "/calculator",icon: "calculate"   },
    { label: "Grid",       arabicLabel: "الشبكة",   path: "/grid",      icon: "map"         },
    { label: "Catalog",    arabicLabel: "الكتالوج", path: "/catalog",   icon: "inventory_2" },
  ];

  const isAr = lang === "ar";

  return (
    <nav
      dir={isAr ? "rtl" : "ltr"}
      className="fixed bottom-0 left-0 right-0 md:hidden bg-surface-container-lowest border-t-[4px] border-primary h-20 flex justify-around items-center px-1 z-[99] shadow-neo-lg"
    >
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link key={item.path} href={item.path} className="no-underline">
            <button
              className={`flex flex-col items-center justify-center gap-0.5 w-14 h-14 transition-all duration-150 border-[3px] ${
                isActive
                  ? "bg-secondary-container text-primary border-primary shadow-neo"
                  : "bg-transparent border-transparent text-on-surface-variant hover:bg-surface-container"
              }`}
            >
              <span
                className="material-symbols-outlined text-[24px]"
                style={{
                  fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0",
                }}
              >
                {item.icon}
              </span>
              <span className="font-mono text-[10px] font-black tracking-tight select-none whitespace-nowrap">
                {isAr ? item.arabicLabel : item.label}
              </span>
            </button>
          </Link>
        );
      })}
    </nav>
  );
};
