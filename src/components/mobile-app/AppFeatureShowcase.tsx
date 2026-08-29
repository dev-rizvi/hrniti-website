"use client";

import React, { useState } from "react";
import { MapPin, ScanFace, FileText, Smartphone } from "lucide-react";

type Feature = {
  id: string;
  title: string;
  desc: string;
  icon: any;
  screenContent: React.ReactNode;
};

export default function AppFeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features: Feature[] = [
    {
      id: "geo",
      title: "Geofencing Attendance",
      desc: "Allow clock-ins only within designated coordinate boundaries. Ideal for monitoring field sales team visits with active GPS logs.",
      icon: MapPin,
      screenContent: (
        <div className="h-full flex flex-col bg-slate-50 relative select-none">
          <div className="h-1/2 bg-slate-200 relative overflow-hidden">
            {/* Fake Map Grid */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-0.5 opacity-25">
              {Array(36).fill(0).map((_, i) => <div key={i} className="bg-slate-400"></div>)}
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-emerald-500 bg-emerald-500/10 flex items-center justify-center animate-pulse">
                <div className="w-3.5 h-3.5 bg-emerald-600 rounded-full shadow-md relative z-10"></div>
              </div>
            </div>
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-slate-700 shadow-sm border border-slate-200/50">
              📍 Mumbai Office HQ (50m)
            </div>
          </div>
          <div className="p-5 text-center space-y-3 flex-1 flex flex-col justify-center">
            <div className="text-2xl font-black text-slate-800 tracking-tight">09:28 AM</div>
            <div className="text-[10px] text-slate-450 uppercase font-black tracking-wider text-slate-400">Wed, Jan 24, 2026</div>
            <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold shadow-md shadow-emerald-600/20 text-xs active:scale-[0.98] transition-all cursor-pointer">
              Swipe to Check-In
            </button>
          </div>
        </div>
      )
    },
    {
      id: "face",
      title: "Facial Recognition",
      desc: "Touch-free attendance punches. Verify employee identities with instant facial scanner checks matching database credentials.",
      icon: ScanFace,
      screenContent: (
        <div className="h-full bg-slate-950 relative flex flex-col items-center justify-center p-5 select-none">
          <div className="absolute top-8 text-slate-350 text-[10px] font-bold uppercase tracking-wider">
            Scanning Credentials
          </div>

          {/* Camera Viewfinder */}
          <div className="w-40 h-52 rounded-3xl border-2 border-emerald-500 relative overflow-hidden mb-6 bg-slate-900/60 shadow-lg">
            <div className="absolute inset-x-0 h-0.5 bg-emerald-400/80 animate-scan"></div>
            <div className="absolute bottom-3 left-0 w-full text-center">
              <div className="inline-block bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 text-[9px] px-2.5 py-0.5 rounded-full font-bold uppercase font-mono tracking-wider">
                Liveness check 99%
              </div>
            </div>
            {/* Abstract Face Shape */}
            <div className="w-20 h-28 bg-slate-850 bg-slate-800/60 border border-slate-700/50 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="text-emerald-400 font-extrabold text-base flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full">
            <ScanFace className="h-5 w-5" /> Verified Live
          </div>
        </div>
      )
    },
    {
      id: "pay",
      title: "Payslip on Cloud",
      desc: "Access monthly salary breakdowns, download Form 16s, and get instant push updates when salaries are processed.",
      icon: FileText,
      screenContent: (
        <div className="h-full bg-slate-50 p-4 pt-10 flex flex-col justify-between select-none">
          <div className="space-y-3">
            <h3 className="font-extrabold text-slate-900 text-sm border-b border-slate-200 pb-2">Payslips Directory</h3>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-slate-200/60 flex justify-between items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-red-50 p-2 rounded-lg text-red-500 font-extrabold text-[10px] border border-red-100 font-mono">PDF</div>
                    <div>
                      <div className="font-extrabold text-[11px] text-slate-850 text-slate-800">
                        {i === 1 ? 'January 2026' : i === 2 ? 'December 2025' : 'November 2025'}
                      </div>
                      <div className="text-[9px] text-slate-400 font-semibold">₹ 85,000 Credited</div>
                    </div>
                  </div>
                  <button className="text-emerald-600 text-[10px] font-bold border border-emerald-100 hover:bg-emerald-50 px-2 py-1 rounded-md transition-colors cursor-pointer">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            One App, Multiple Possibilities
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Transform how your employees connect with administrative tasks. Simple, secure, and transactional features packed inside a single mobile self-service app.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 max-w-5xl mx-auto">

          {/* Interactive Feature List (Left) */}
          <div className="flex-1 space-y-4 w-full max-w-md">
            {features.map((feature, idx) => {
              const isActive = activeFeature === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`w-full text-left p-5 rounded-3xl transition-all duration-300 flex items-start gap-4 border select-none cursor-pointer group ${
                    isActive
                      ? "bg-emerald-50/60 border-emerald-200 shadow-md scale-[1.02]"
                      : "bg-white border-transparent hover:bg-slate-50/80"
                  }`}
                >
                  <div className={`p-3 rounded-2xl shrink-0 transition-all ${
                    isActive 
                      ? "bg-emerald-600 text-white" 
                      : "bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-emerald-500"
                  }`}>
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className={`text-base font-extrabold mb-1 ${isActive ? "text-emerald-950" : "text-slate-800"}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-xs leading-relaxed ${isActive ? "text-emerald-700" : "text-slate-500"}`}>
                      {feature.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Central Phone Display (Right) */}
          <div className="relative shrink-0 w-full max-w-[280px]">
            {/* Phone Frame */}
            <div className="relative border-slate-900 bg-slate-900 border-[10px] rounded-[2.5rem] h-[500px] w-full shadow-2xl overflow-hidden">
              <div className="rounded-[1.8rem] overflow-hidden w-full h-full bg-white relative">
                
                {/* Dynamic Content Display with proper React key trigger */}
                <div key={activeFeature} className="w-full h-full animate-fade-in">
                  {features[activeFeature].screenContent}
                </div>

                {/* Status Bar Mockup */}
                <div className="absolute top-0 w-full h-8 flex justify-between px-6 items-center pt-2 z-20 mix-blend-difference text-white">
                  <span className="text-[9px] font-bold">9:41</span>
                  <div className="flex gap-1">
                    <Smartphone className="h-3.5 w-3.5 opacity-55" />
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-100/40 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
