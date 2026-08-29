"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GraduationCap, PlayCircle, Award, CheckCircle2, ArrowRight } from "lucide-react";

export default function LMSHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(25);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const simulateProgress = () => {
    if (videoProgress < 100) {
      setIsPlaying(true);
      const interval = setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            setQuizCompleted(true);
            return 100;
          }
          return prev + 15;
        });
      }, 500);
    } else {
      setVideoProgress(25);
      setQuizCompleted(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 p-48 bg-emerald-600/10 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 p-32 bg-amber-600/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-emerald-500/20">
              <GraduationCap className="h-4.5 w-4.5 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">Integrated LMS Module</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              The Only Corporate LMS Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-400">Directly into HRMS & Payroll.</span>
            </h1>
            
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl font-medium">
              From automated onboarding compliance paths to skill gap closure during appraisal cycles—unify employee learning, certification tracking, and compliance audits in one single platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link 
                href="/contact-us" 
                className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-emerald-600/20 hover:scale-[1.02] inline-flex items-center justify-center gap-2"
              >
                Book LMS Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a 
                href="#courses" 
                className="bg-slate-900/60 hover:bg-slate-800 text-white border border-slate-800 px-8 py-4 rounded-xl font-bold text-base transition-all text-center"
              >
                Explore Course Catalog
              </a>
            </div>

            {/* Quick Micro-stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-xl">
              <div>
                <div className="text-2xl font-black text-white">100%</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">POSH Compliant</div>
              </div>
              <div>
                <div className="text-2xl font-black text-emerald-400">Instant</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Audit Certificates</div>
              </div>
              <div>
                <div className="text-2xl font-black text-amber-400">Zero</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Extra Subscriptions</div>
              </div>
            </div>
          </div>

          {/* Interactive Player Mockup */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-3xl blur-2xl opacity-15 transform rotate-3 scale-95"></div>
            
            <div className="relative bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl p-5 space-y-4">
              <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${isPlaying ? "bg-red-500 animate-pulse" : "bg-slate-600"}`}></span>
                  <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase font-bold">
                    {isPlaying ? "Simulating Progress" : "Employee Portal Demo"}
                  </span>
                </div>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                  POSH & Compliance
                </span>
              </div>
              
              {/* Course player frame */}
              <div 
                onClick={simulateProgress}
                className="relative aspect-video rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col items-center justify-center group cursor-pointer"
              >
                <div className="absolute inset-0 bg-slate-950/40 z-0"></div>
                
                {/* Simulated course content display */}
                <div className="relative z-10 text-center px-4 space-y-2">
                  {videoProgress === 100 ? (
                    <div className="flex flex-col items-center animate-bounce">
                      <Award className="h-12 w-12 text-amber-400 mb-1" />
                      <span className="text-xs font-bold text-white">Course Completed!</span>
                      <span className="text-[10px] text-emerald-400">Verifiable certificate issued</span>
                    </div>
                  ) : (
                    <>
                      <div className="w-14 h-14 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mx-auto border border-white/20">
                        <PlayCircle className="h-7 w-7 text-emerald-400 fill-current pl-0.5" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-300 block">Click to test learning simulation</span>
                    </>
                  )}
                </div>

                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-[9px] px-2 py-0.5 rounded-md font-mono text-white border border-white/5">
                  {videoProgress === 100 ? "08:35 / 08:35" : `0${Math.floor(videoProgress/15)}:14 / 08:35`}
                </div>
              </div>

              {/* Progress and status */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-extrabold text-white leading-tight">
                    Module 2: Preventing Discrimination at Workplace
                  </h4>
                  <span className="text-[10px] text-slate-400 font-bold font-mono">{videoProgress}%</span>
                </div>
                
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-amber-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${videoProgress}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-450 border-t border-slate-900/80 pt-3">
                  <div className="flex items-center gap-1.5">
                    {quizCompleted ? (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Quiz Passed (85%)
                      </span>
                    ) : (
                      <span className="text-amber-400">1 Quiz Pending Completion</span>
                    )}
                  </div>
                  <span>Next: Section 3</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
