"use client";

import React, { useState } from "react";
import { Search, Filter, CalendarCheck, UserCheck, FileSignature, Rocket } from "lucide-react";

export default function HiringPipeline() {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  const pipeline = [
    {
      step: 1,
      title: "Sourcing",
      desc: "Post vacancies to 50+ boards in one click. Deploy custom referral links.",
      tools: "Job Portals, Social Sharing",
      icon: Search,
      colorClass: "bg-emerald-50 text-emerald-600 border-emerald-200"
    },
    {
      step: 2,
      title: "Screening",
      desc: "AI-Powered Resume Parser automatically ranks candidate relevance.",
      tools: "Bulk Parsing, JD Match",
      icon: Filter,
      colorClass: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      step: 3,
      title: "Interviewing",
      desc: "Auto-schedule calls with integrated Google & Outlook calendar slots.",
      tools: "Calendar Sync, Feedback Forms",
      icon: CalendarCheck,
      colorClass: "bg-orange-50 text-orange-600 border-orange-200"
    },
    {
      step: 4,
      title: "Selection",
      desc: "Use collaborative scorecards and evaluations to select talent.",
      tools: "Scorecards, Approval Flows",
      icon: UserCheck,
      colorClass: "bg-pink-50 text-pink-600 border-pink-200"
    },
    {
      step: 5,
      title: "Negotiation",
      desc: "Digitally generate and e-sign complex corporate offer letters.",
      tools: "e-Sign, Templates Library",
      icon: FileSignature,
      colorClass: "bg-yellow-50 text-yellow-600 border-yellow-200"
    },
    {
      step: 6,
      title: "Onboarding",
      desc: "Direct conversion to employee profile. Sync details with payroll.",
      tools: "One-click Conversion, Assets Allocation",
      icon: Rocket,
      colorClass: "bg-green-50 text-green-600 border-green-200"
    }
  ];

  return (
    <section id="pipeline" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Complete Hiring Pipeline
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Manage every candidate interaction—from application submission to day one onboarding—in one visual workspace.
          </p>
        </div>

        {/* Pipeline Layout */}
        <div className="relative">
          {/* Horizontal Connection Track Line (Desktop only) */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-slate-100 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {pipeline.map((item, index) => {
              const isHovered = hoveredStage === index;
              return (
                <div
                  key={index}
                  className="relative group pt-4 lg:pt-0"
                  onMouseEnter={() => setHoveredStage(index)}
                  onMouseLeave={() => setHoveredStage(null)}
                >
                  {/* Step Bubble Node */}
                  <div className={`relative z-10 w-20 h-20 mx-auto rounded-full flex flex-col items-center justify-center border-4 border-white shadow-sm transition-all duration-300 ${
                    isHovered 
                      ? `${item.colorClass} scale-110 shadow-md` 
                      : 'bg-slate-50 text-slate-400 border-slate-100'
                  }`}>
                    <item.icon className="h-6 w-6 mb-0.5" />
                    <span className="text-[9px] font-black uppercase tracking-wider">Step {item.step}</span>
                  </div>

                  {/* Card Details */}
                  <div className="mt-6 text-center bg-white p-5 rounded-2xl border border-slate-200/80 group-hover:border-emerald-300 group-hover:shadow-lg transition-all h-[calc(100%-6.5rem)] flex flex-col justify-between">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base mb-2 group-hover:text-emerald-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-4">
                        {item.desc}
                      </p>
                    </div>
                    <div className="inline-block bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-600 px-2 py-1 rounded-lg">
                      Module: {item.tools}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
