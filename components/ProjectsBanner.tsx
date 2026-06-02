"use client";
import React from "react";

// Define the exact shape of the translation dictionary object
interface TranslationDict {
  projects: {
    title: string;
    subtitle: string;
  };
}

interface ProjectsProps {
  dict: TranslationDict; // Replaced 'any' with the specific interface
}

export const ProjectsBanner: React.FC<ProjectsProps> = ({ dict }) => {
  const dummyProjects = [
    {
      id: 1,
      title: "Agricultural Grid - East Nile",
      type: "50kW Solar Array Deployment",
    },
    {
      id: 2,
      title: "Residential Off-Grid - Khartoum",
      type: "15kW Full Storage System",
    },
    {
      id: 3,
      title: "Commercial Complex - Omdurman",
      type: "100kW Industrial Integration",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-container border-b-[3px] border-primary">
      <div className="px-4 md:px-10 max-w-7xl mx-auto">
        <div className="mb-12 text-right">
          <span className="bg-primary text-white px-3 py-1 font-mono text-xs uppercase mb-3 inline-block">
            Proven Operations
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mb-4">
            {dict.projects.title}
          </h2>
          <p className="text-on-surface-variant max-w-xl text-sm md:text-base">
            {dict.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {dummyProjects.map((project) => (
            <div
              key={project.id}
              className="bg-surface-container-lowest border-[3px] border-primary p-4 shadow-neo hover:-translate-y-1 transition-transform group"
            >
              <div className="border-[2px] border-primary bg-primary-container aspect-video mb-4 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-neutral-800 opacity-40 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 text-secondary-container z-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375 0 1 1-.75 0 .375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-primary mb-1 text-right">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-on-surface-variant text-right">
                {project.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
