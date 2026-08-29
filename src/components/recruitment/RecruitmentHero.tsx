"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, User, FileText, Calendar, Award, Sparkles } from "lucide-react";

export default function RecruitmentHero() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    { id: 0, label: "Applied", icon: FileText, color: "bg-emerald-500", status: "Resume Parsed" },
    { id: 1, label: "Screening", icon: User, color: "bg-purple-500", status: "Shortlisted" },
    { id: 2, label: "Interview", icon: Calendar, color: "bg-orange-500", status: "Scheduled" },
    { id: 3, label: "Offer & Hire", icon: Award, color: "bg-green-500", status: "Convert to Employee" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 p-48 bg-emerald-600/10 rounded-full blur-3xl transform -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 p-32 bg-cyan-600/10 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-emerald-500/20">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">AI-Powered ATS Module</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Smart ATS & Recruitment <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400">Integrated into HRMS & Payroll.</span>
            </h1>

            <p className="text-slate-350 text-base md:text-lg leading-relaxed max-w-xl font-medium">
              Automate resume sourcing, evaluate candidates with AI, and trigger single-click onboarding conversions that sync new hire data directly with the payroll master.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link 
                href="/contact-us" 
                className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-emerald-600/20 hover:scale-[1.02] inline-flex items-center justify-center gap-2"
              >
                Book Recruitment Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a 
                href="#pipeline" 
                className="bg-slate-900/60 hover:bg-slate-800 text-white border border-slate-800 px-8 py-4 rounded-xl font-bold text-base transition-all text-center"
              >
                Explore Hiring Pipeline
              </a>
            </div>

            {/* Quick Micro-stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-850 max-w-xl">
              <div>
                <div className="text-2xl font-black text-white">1-Click</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Employee Conversion</div>
              </div>
              <div>
                <div className="text-2xl font-black text-emerald-400">Auto-Sync</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Payroll Structures</div>
              </div>
              <div>
                <div className="text-2xl font-black text-cyan-400">AI Parser</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Bulk Resume Sorting</div>
              </div>
            </div>
          </div>

          {/* Interactive Visual - Candidate Journey Pipeline */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur-2xl opacity-15 transform rotate-3 scale-95"></div>
            
            <div className="relative bg-slate-950 border border-slate-850 rounded-3xl shadow-2xl p-6 space-y-4">
              
              {/* Header */}
              <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                <div>
                  <span className="text-[10px] text-slate-450 uppercase font-bold tracking-wider font-mono">Live Candidate Journey</span>
                  <h3 className="text-sm font-bold text-white mt-0.5">Application Pipeline Tracker</h3>
                </div>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded border border-emerald-500/20 font-bold">
                  Active Run
                </span>
              </div>

              {/* Pipeline Nodes */}
              <div className="space-y-4 relative">
                {/* Connecting Track Line */}
                <div className="absolute top-6 left-6 bottom-6 w-0.5 bg-slate-900 rounded-full"></div>

                {stages.map((stage, index) => {
                  const isActive = index === activeStage;
                  const isCompleted = index < activeStage;

                  return (
                    <div
                      key={stage.id}
                      className={`flex items-center gap-4 p-3 rounded-2xl border transition-all duration-500 ${
                        isActive 
                          ? 'bg-slate-900 border-slate-800 shadow-lg scale-[1.02]' 
                          : 'border-transparent opacity-50'
                      }`}
                    >
                      {/* Node Icon */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 shrink-0 transition-all duration-500 border ${
                        isActive 
                          ? `${stage.color} text-white shadow-md border-white/10` 
                          : isCompleted 
                          ? 'bg-emerald-950 border-emerald-800 text-emerald-400' 
                          : 'bg-slate-900 border-slate-850 text-slate-500'
                      }`}>
                        {isCompleted ? <CheckCircle2 className="h-5 w-5" /> : <stage.icon className="h-5 w-5" />}
                      </div>

                      {/* Stage description details */}
                      <div>
                        <h4 className={`text-sm font-extrabold ${isActive ? 'text-white' : 'text-slate-400'}`}>
                          {stage.label}
                        </h4>
                        <span className={`text-xs font-semibold ${
                          isActive 
                            ? stage.color === 'bg-emerald-500' ? 'text-emerald-400' : stage.color === 'bg-purple-500' ? 'text-purple-400' : stage.color === 'bg-orange-500' ? 'text-orange-400' : 'text-green-400'
                            : isCompleted 
                            ? 'text-emerald-600' 
                            : 'text-slate-500'
                        }`}>
                          {isActive ? stage.status : isCompleted ? 'Completed' : 'Pending'}
                        </span>
                      </div>

                      {/* Pulse active node */}
                      {isActive && (
                        <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.6)]"></div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
