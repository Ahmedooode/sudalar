"use client";
import React from "react";

interface StatsDict {
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
}

interface StatsProps {
  dict: StatsDict;
}

export const StatsBar: React.FC<StatsProps> = ({ dict }) => {
  return (
    <div className="bg-primary text-white py-6 border-b-[3px] border-primary">
      <div className="grid grid-cols-1 md:grid-cols-4 px-4 md:px-10 gap-6 text-center max-w-7xl mx-auto">
        <div className="flex flex-col">
          <span className="font-mono text-2xl md:text-[32px] font-bold text-secondary-container">
            {dict.stats.uptime_val}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest">
            {dict.stats.uptime_label}
          </span>
        </div>

        <div className="flex flex-col border-t-[1px] md:border-t-0 md:border-l-[1px] md:rtl:border-r-[1px] md:rtl:border-l-0 border-white/20 pt-4 md:pt-0">
          <span className="font-mono text-2xl md:text-[32px] font-bold text-secondary-container">
            {dict.stats.capacity_val}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest">
            {dict.stats.capacity_label}
          </span>
        </div>

        <div className="flex flex-col border-t-[1px] md:border-t-0 md:border-l-[1px] md:rtl:border-r-[1px] md:rtl:border-l-0 border-white/20 pt-4 md:pt-0">
          <span className="font-mono text-2xl md:text-[32px] font-bold text-secondary-container">
            {dict.stats.latency_val}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest">
            {dict.stats.latency_label}
          </span>
        </div>

        <div className="flex flex-col border-t-[1px] md:border-t-0 md:border-l-[1px] md:rtl:border-r-[1px] md:rtl:border-l-0 border-white/20 pt-4 md:pt-0">
          <span className="font-mono text-2xl md:text-[32px] font-bold text-secondary-container">
            {dict.stats.reliability_val}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest">
            {dict.stats.reliability_label}
          </span>
        </div>
      </div>
    </div>
  );
};
