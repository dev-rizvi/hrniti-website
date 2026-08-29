"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Target, BarChart2, MessageSquare, Award, Sparkles } from "lucide-react";

export default function PerformanceHero() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: 0,
      title: "Plan Goals",
      desc: "Assign clear OKRs & KRAs aligned with corporate objectives.",
      icon: Target,
      colorClass: "text-purple-400 border-purple-500/20",
      bgClass: "bg-purple-600 shadow-purple-600/30",
    },
    {
      id: 1,
      title: "Provide Coaching",
      desc: "Managers coordinate 1-on-1 feedback and log continuous feedback.",
      icon: MessageSquare,
      colorClass: "text-pink-400 border-pink-500/20",
      bgClass: "bg-pink-600 shadow-pink-600/30",
    },
    {
      id: 2,
      title: "Evaluate & Review",
      desc: "Conduct 360° reviews and fit employees to normalization bell curves.",
      icon: Award,
      colorClass: "text-indigo-400 border-indigo-500/20",
      bgClass: "bg-indigo-600 shadow-indigo-600/30",
    },
    {
      id: 3,
      title: "Track Performance",
      desc: "Audit continuous progression with real-time KPI scorecards.",
      icon: BarChart2,
      colorClass: "text-emerald-400 border-emerald-500/20",
      bgClass: "bg-emerald-600 shadow-emerald-600/30",
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 p-48 bg-purple-600/10 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 p-32 bg-indigo-600/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-purple-500/20">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-purple-300">Continuous Growth Module</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              High-Impact Continuous <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">Performance Management</span>
            </h1>

            <p className="text-slate-350 text-base md:text-lg leading-relaxed max-w-xl font-medium">
              Link evaluations directly to variable pay, auto-trigger learning pathways in the LMS for skill gap closure, and build dynamic 360° appraising loops in one portal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact-us"
                className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-purple-600/20 hover:scale-[1.02] inline-flex items-center justify-center gap-2"
              >
                Book Appraisal Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="#ninebox"
                className="bg-slate-900/60 hover:bg-slate-800 text-white border border-slate-800 px-8 py-4 rounded-xl font-bold text-base transition-all text-center"
              >
                View 9-Box Grid Matrix
              </a>
            </div>

            {/* Quick Micro-stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-850 max-w-xl">
              <div>
                <div className="text-2xl font-black text-white">360°</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Multi-Rater Feedback</div>
              </div>
              <div>
                <div className="text-2xl font-black text-purple-400">Auto-TNI</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">LMS Training Triggers</div>
              </div>
              <div>
                <div className="text-2xl font-black text-pink-400">Bell Curve</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Rating Normalization</div>
              </div>
            </div>
          </div>

          {/* Interactive Visual - Cycle widget */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
            
            {/* Orbit Path Decoration */}
            <div className="absolute w-[80%] h-[80%] rounded-full border-2 border-dashed border-slate-800/80 animate-spin-slow"></div>

            {/* Central Node Display Card */}
            <div className="w-[50%] h-[50%] rounded-full bg-slate-950 border-4 border-slate-850 flex flex-col items-center justify-center text-center p-5 z-20 transition-all duration-300 shadow-2xl relative">
              <div className="absolute inset-0 bg-purple-500/5 rounded-full blur-md"></div>
              
              <div className="relative z-10 space-y-2">
                {(() => {
                  const CurrentIcon = stages[activeStage].icon;
                  return <CurrentIcon className="h-7 w-7 text-purple-400 mx-auto" />;
                })()}
                <h3 className="text-sm font-black text-white tracking-wide uppercase">
                  {stages[activeStage].title}
                </h3>
                <p className="text-[10px] text-slate-400 leading-snug line-clamp-3">
                  {stages[activeStage].desc}
                </p>
              </div>
            </div>

            {/* Orbiting Interaction Nodes */}
            <div className="absolute inset-0 z-30">
              {stages.map((stage) => {
                const isActive = stage.id === activeStage;
                return (
                  <div
                    key={stage.id}
                    onMouseEnter={() => setActiveStage(stage.id)}
                    className={`absolute w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border-2 ${
                      isActive 
                        ? `${stage.bgClass} text-white border-white scale-110 shadow-lg` 
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-850'
                    }`}
                    style={{
                      top: stage.id === 0 ? '10%' : stage.id === 2 ? '90%' : '50%',
                      left: stage.id === 3 ? '10%' : stage.id === 1 ? '90%' : '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <stage.icon className="h-5 w-5" />
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
