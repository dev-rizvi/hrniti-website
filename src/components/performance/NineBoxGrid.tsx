"use client";

import React, { useState } from "react";
import { Star, TrendingUp, Shuffle } from "lucide-react";

interface BoxDetails {
  title: string;
  action: string;
  colorClass: string;
  desc: string;
}

export default function NineBoxGrid() {
  const [selectedBox, setSelectedBox] = useState<{ p: string; m: string } | null>({ p: "High", m: "High" });

  const gridData: Record<string, BoxDetails> = {
    "High-High": { title: "Star Performer", action: "Groom for Leadership / Fast-Track Promotion", colorClass: "bg-emerald-600 border-emerald-500 hover:bg-emerald-500", desc: "Consistently exceeds both performance and potential markers. Give them high-profile project responsibilities and assign leadership coaching." },
    "High-Medium": { title: "High Potential Performer", action: "Develop for Leadership / Mentor Assignment", colorClass: "bg-emerald-550 bg-emerald-500 border-emerald-400 hover:bg-emerald-450", desc: "Demonstrates great future capability with standard task completion stats. Mentor to expand operational knowledge." },
    "High-Low": { title: "Enigma / Dilemma Performer", action: "Identify Cause / Assign Performance Goals", colorClass: "bg-amber-500 border-amber-400 hover:bg-amber-400", desc: "Possesses strong talent potential but fails to meet deliverables. Perform root cause checks and check project mappings." },
    "Medium-High": { title: "High Performer", action: "Retain, Reward & Challenge", colorClass: "bg-emerald-500 border-emerald-400 hover:bg-emerald-450", desc: "Highly reliable individual contributor with average potential. Reward well and assign them mentoring roles." },
    "Medium-Medium": { title: "Core Player", action: "Upskill & Coach", colorClass: "bg-yellow-500 border-yellow-400 hover:bg-yellow-400 text-slate-900", desc: "Stable performance matching average talent potential. Guide them through specialized upskilling catalogs in the LMS." },
    "Medium-Low": { title: "Inconsistent Performer", action: "Targeted Coaching / Performance Improvement Plan", colorClass: "bg-orange-500 border-orange-400 hover:bg-orange-400", desc: "Has average potential but lags behind in recent deliverables. Assign performance tracking goals." },
    "Low-High": { title: "Solid Workhorse", action: "Keep Motivated / Maintain Role Scope", colorClass: "bg-yellow-500 border-yellow-400 hover:bg-yellow-400 text-slate-900", desc: "High performance stats but limited growth potential. Keep their workflow standardized and secure retention." },
    "Low-Medium": { title: "Effective Support Performer", action: "Provide Training / Monitor closely", colorClass: "bg-orange-500 border-orange-400 hover:bg-orange-400", desc: "Meeting basics but limited potential. Assign technical training paths to assist daily tasks." },
    "Low-Low": { title: "Underperformer", action: "PIP / Action Plan Alignment", colorClass: "bg-red-600 border-red-500 hover:bg-red-500", desc: "Struggling with deliverables and low potential markers. Conduct PIP evaluations and coordinate next steps." }
  };

  const getGridDetails = (potential: string, performance: string): BoxDetails => {
    return gridData[`${potential}-${performance}`];
  };

  return (
    <section id="ninebox" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Interactive 9-Box Talent Grid
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Map talent potential against core performance ratings to identify stars, core players, and structure objective promotion tracks.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto items-stretch">

          {/* Visual Grid Layout */}
          <div className="flex-1 bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200/60 flex flex-col items-center justify-center">
            
            {/* Grid Container */}
            <div className="relative pt-6 pr-6 pl-10 pb-10 w-full max-w-md">
              
              {/* Y-Axis Label */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-left font-black text-slate-400 tracking-widest text-[10px] uppercase">
                Potential Growth
              </div>

              {/* Grid Cells */}
              <div className="grid grid-rows-3 gap-2.5">
                {['High', 'Medium', 'Low'].map((potential) => (
                  <div key={potential} className="grid grid-cols-3 gap-2.5">
                    {['Low', 'Medium', 'High'].map((performance) => {
                      const details = getGridDetails(potential, performance);
                      const isSelected = selectedBox?.p === potential && selectedBox?.m === performance;

                      return (
                        <button
                          key={performance}
                          onClick={() => setSelectedBox({ p: potential, m: performance })}
                          className={`
                            aspect-square rounded-2xl flex flex-col items-center justify-center p-3 transition-all duration-300 border text-white shadow-sm select-none cursor-pointer
                            ${isSelected 
                              ? 'ring-4 ring-offset-2 ring-purple-600 scale-[1.03] z-10' 
                              : 'opacity-85 hover:opacity-100 hover:scale-[1.01]'
                            }
                            ${details.colorClass}
                          `}
                        >
                          <span className="text-[10px] font-bold text-center leading-snug tracking-tight">
                            {details.title}
                          </span>
                          {isSelected && (
                            <span className="text-[8px] mt-1.5 bg-black/25 px-1.5 py-0.5 rounded font-mono uppercase tracking-wider font-bold">
                              Selected
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* X-Axis Label */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-black text-slate-400 tracking-widest text-[10px] uppercase">
                Performance Rating
              </div>

              {/* Axes Marks */}
              <div className="absolute left-8 right-6 bottom-8 flex justify-between text-[9px] text-slate-400 font-bold uppercase mt-1">
                <span>Low</span>
                <span>Medium</span>
                <span>High</span>
              </div>
              <div className="absolute left-8 top-10 bottom-12 flex flex-col justify-between text-[9px] text-slate-400 font-bold uppercase h-[calc(100%-8.5rem)] text-right pr-2">
                <span>High</span>
                <span>Medium</span>
                <span>Low</span>
              </div>

            </div>

          </div>

          {/* Context Details Panel Card */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm min-h-[380px] flex flex-col justify-between">
              {selectedBox ? (
                <div className="animate-fade-in space-y-6">
                  {(() => {
                    const details = getGridDetails(selectedBox.p, selectedBox.m);
                    return (
                      <>
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 rounded-2xl ${details.colorClass.split(' ')[0]} flex items-center justify-center text-white shadow-md`}>
                            <Star className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="text-xl font-extrabold text-slate-900">
                              {details.title}
                            </h4>
                            <p className="text-xs text-slate-500 font-medium">
                              Potential Level: <span className="font-bold text-slate-700">{selectedBox.p}</span> • Performance: <span className="font-bold text-slate-700">{selectedBox.m}</span>
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-slate-50 border border-slate-100 p-4.5 rounded-2xl">
                            <span className="text-[10px] font-black text-slate-400 block uppercase tracking-wider mb-1.5">
                              Quadrant Analysis
                            </span>
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {details.desc}
                            </p>
                          </div>

                          <div className="bg-purple-50/60 border border-purple-100 p-4.5 rounded-2xl">
                            <span className="text-[10px] font-black text-purple-600 block uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                              <TrendingUp className="h-4 w-4" /> Recommended Action
                            </span>
                            <p className="text-purple-950 font-extrabold text-base leading-snug">
                              {details.action}
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                  <Shuffle className="h-12 w-12 text-slate-300 animate-pulse" />
                  <h4 className="text-lg font-bold text-slate-400">Select Grid Node</h4>
                  <p className="text-slate-400 max-w-xs text-xs">
                    Click on any quadrant in the 9-box grid to see action guidelines.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
