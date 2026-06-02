"use client";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-primary border-t-[3px] border-primary text-right"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 w-full">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Info Identity Block */}
          <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
            <div className="text-2xl md:text-3xl font-black text-white uppercase">
              SUDAN SOLAR
            </div>
            <p className="font-mono text-xs md:text-sm text-tertiary-fixed-dim uppercase leading-relaxed max-w-sm">
              Heavy industrial energy solutions built to survive extreme thermal
              stress and deliver raw power grid autonomy.
            </p>

            {/* Social Media Link Interfaces configured with interactive neo-shadow responses */}
            <div className="flex gap-4 mt-4 justify-start">
              {/* WhatsApp Interface Link */}
              <a
                href="https://wa.me/249XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary-container border-[2px] border-black flex items-center justify-center shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-black active:translate-x-0 active:translate-y-0 transition-all"
                title="WhatsApp"
              >
                <svg
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.053.953 11.428.951 6.001.951 1.58 5.322 1.577 10.751c-.001 1.71.463 3.384 1.343 4.877l-.101.163-1.112 4.06 4.156-1.09.158.093z" />
                </svg>
              </a>
              {/* Facebook Interface Link */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-surface-container-lowest border-[2px] border-black flex items-center justify-center shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-black active:translate-x-0 active:translate-y-0 transition-all"
                title="Facebook"
              >
                <svg
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* Instagram Interface Link */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-surface-container-lowest border-[2px] border-black flex items-center justify-center shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-black active:translate-x-0 active:translate-y-0 transition-all"
                title="Instagram"
              >
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links Blocks */}
          <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold font-mono text-sm uppercase">
                Systems
              </span>
              <a
                className="font-mono text-tertiary-fixed-dim text-xs hover:text-secondary-container"
                href="#"
              >
                Residential Systems
              </a>
              <a
                className="font-mono text-tertiary-fixed-dim text-xs hover:text-secondary-container"
                href="#"
              >
                Agricultural Grids
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold font-mono text-sm uppercase">
                Support
              </span>
              <a
                className="font-mono text-tertiary-fixed-dim text-xs hover:text-secondary-container"
                href="#"
              >
                Contact Engineer
              </a>
              <a
                className="font-mono text-tertiary-fixed-dim text-xs hover:text-secondary-container"
                href="#"
              >
                Request Maintenance
              </a>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar Layout */}
        <div className="col-span-12 pt-8 mt-12 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-center md:text-right">
          <span className="font-mono text-xs text-tertiary-fixed-dim uppercase">
            © 2026 Sudan Solar Industrial Corp. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
