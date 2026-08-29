"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Play, Pause, Square, Clock, Sparkles } from "lucide-react";

export default function TimesheetHero() {
  const [isRunning, setIsRunning] = useState(true);
  const [seconds, setSeconds] = useState(1450); // Start with some time to look active

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 p-48 bg-orange-600/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 p-32 bg-amber-600/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-orange-500/20">
              <Sparkles className="h-4 w-4 text-orange-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-orange-450">Integrated Time & Cost Module</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Error-Free Timesheets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Synced to HRMS & Payroll.</span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl font-medium">
              Capture every billable second. Automatically compile task logs, sync overtime directly into payroll calculations, and track project timelines—all in one unified platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link 
                href="/contact-us" 
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-orange-600/20 hover:scale-[1.02] inline-flex items-center justify-center gap-2"
              >
                Schedule Timesheet Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a 
                href="#features" 
                className="bg-slate-900/60 hover:bg-slate-800 text-white border border-slate-800 px-8 py-4 rounded-xl font-bold text-base transition-all text-center"
              >
                Explore Features
              </a>
            </div>

            {/* Quick Micro-stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800 max-w-xl">
              <div>
                <div className="text-2xl font-black text-white">100%</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Payroll Synced</div>
              </div>
              <div>
                <div className="text-2xl font-black text-orange-400">One-Click</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Timer Tracking</div>
              </div>
              <div>
                <div className="text-2xl font-black text-amber-400">Zero</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Manual Data Re-entry</div>
              </div>
            </div>
          </div>

          {/* Interactive Timer Widget */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur-2xl opacity-15 transform rotate-3 scale-95"></div>
            
            <div className="relative bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl p-6 space-y-4">
              
              {/* Header */}
              <div className="flex justify-between items-center border-b border-slate-900 pb-4">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider font-mono">Active Project Task</span>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2 mt-0.5">
                    Website Redesign
                    <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2.5 py-0.5 rounded-full border border-emerald-500/20 font-bold">#PRJ-001</span>
                  </h3>
                </div>
                <div className="relative">
                  <span className={`w-2.5 h-2.5 rounded-full absolute -top-0.5 -right-0.5 ${isRunning ? "bg-red-500 animate-pulse" : "bg-slate-650"}`}></span>
                  <Clock className="h-6 w-6 text-slate-400" />
                </div>
              </div>

              {/* Timer Display */}
              <div className="py-8 text-center bg-slate-900/40 rounded-2xl border border-slate-900/60 my-2">
                <div className="text-5xl md:text-6xl font-mono font-bold text-white tracking-widest tabular-nums font-feature-settings-tnum">
                  {formatTime(seconds)}
                </div>
                <div className="text-slate-400 mt-2 text-xs font-semibold">Total logged today: 06:12:00</div>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-all cursor-pointer ${
                    isRunning 
                      ? 'bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border border-amber-500/20' 
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {isRunning ? <><Pause className="h-4.5 w-4.5 fill-current" /> Pause Timer</> : <><Play className="h-4.5 w-4.5 fill-current" /> Resume Timer</>}
                </button>
                <button 
                  onClick={() => { setSeconds(0); setIsRunning(false); }}
                  className="flex items-center justify-center gap-2 py-3.5 bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20 rounded-xl font-bold transition-all cursor-pointer"
                >
                  <Square className="h-4 w-4 fill-current" /> Stop Task
                </button>
              </div>

              {/* Billable Amount Card */}
              <div className="mt-4 pt-4 border-t border-slate-900/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center font-black">$</div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Accrued Amount</div>
                    <div className="text-base font-bold text-slate-200">₹ {(seconds * 0.42).toFixed(2)}</div>
                  </div>
                </div>
                <span className="text-[10px] bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded border border-orange-500/20 font-bold">
                  Billable Rate: ₹1500/hr
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
