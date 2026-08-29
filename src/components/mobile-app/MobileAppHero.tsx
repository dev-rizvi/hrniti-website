"use client";

import React from "react";
import Link from "next/link";
import { Download, Smartphone, Star, CheckCircle } from "lucide-react";

export default function MobileAppHero() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-28 pb-16 lg:pt-36 lg:pb-32 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 p-64 bg-emerald-600/10 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 p-48 bg-teal-600/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-emerald-500/20">
              <Smartphone className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">HR in Your Pocket</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Engage Employees <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400">Anytime, Anywhere</span>
            </h1>

            <p className="text-slate-350 text-base md:text-lg leading-relaxed max-w-xl font-medium">
              Empower your workforce with the HR Niti Mobile App. Log attendance via facial recognition, download payslips on the go, request leave, and coordinate tasks directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="#download"
                className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-emerald-600/20 hover:scale-[1.02] inline-flex items-center justify-center gap-2"
              >
                Download Mobile App
                <Download className="h-5 w-5" />
              </Link>
              <Link
                href="/demo"
                className="bg-slate-900/60 hover:bg-slate-800 text-white border border-slate-800 px-8 py-4 rounded-xl font-bold text-base transition-all text-center"
              >
                Book Live Demo
              </Link>
            </div>

            {/* Quick Micro-stats */}
            <div className="flex items-center gap-6 pt-6 text-xs text-slate-400 font-bold uppercase tracking-wider border-t border-slate-850 max-w-xl">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-400 fill-current" /> 4.8 Store Rating
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" /> iOS &amp; Android Ready
              </div>
            </div>
          </div>

          {/* Visual - Phone Mockup */}
          <div className="lg:col-span-5 relative w-full max-w-[340px] mx-auto flex items-center justify-center">
            {/* Glowing effect behind phone */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-15 transform rotate-3 scale-95"></div>

            {/* Phone Body */}
            <div className="relative border-slate-900 bg-slate-900 border-[12px] rounded-[2.5rem] h-[580px] w-full shadow-2xl overflow-hidden">
              <div className="rounded-[1.8rem] overflow-hidden w-full h-full bg-slate-100 flex flex-col relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[20px] w-[100px] bg-slate-900 rounded-b-[0.8rem] z-20"></div>

                {/* Screen Content - Dashboard Mockup */}
                <div className="pt-10 px-4 bg-gradient-to-br from-emerald-600 to-teal-600 pb-12 rounded-b-[2rem] shadow-md text-white select-none">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-[10px] opacity-80 font-bold uppercase tracking-wider">Good Morning,</div>
                      <div className="text-base font-extrabold">Abhishek Kumar</div>
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold border border-white/10">
                      AK
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                      <div className="text-[9px] opacity-70 font-semibold uppercase">Punch In</div>
                      <div className="font-bold mt-0.5">09:15 AM</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                      <div className="text-[9px] opacity-70 font-semibold uppercase">Timesheet</div>
                      <div className="font-bold mt-0.5">4 Tasks</div>
                    </div>
                  </div>
                </div>

                {/* App Grid */}
                <div className="p-4 grid grid-cols-3 gap-y-4 gap-x-2 flex-1 items-start bg-slate-50 select-none">
                  {[
                    { name: "Attendance", colorClass: "bg-emerald-100 text-emerald-700" },
                    { name: "Leave Portal", colorClass: "bg-purple-100 text-purple-700" },
                    { name: "Payslips", colorClass: "bg-green-100 text-green-700" },
                    { name: "Claims", colorClass: "bg-orange-100 text-orange-700" },
                    { name: "Holidays", colorClass: "bg-pink-100 text-pink-700" },
                    { name: "My Team", colorClass: "bg-amber-100 text-amber-700" },
                  ].map((app, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div className={`w-11 h-11 ${app.colorClass} rounded-2xl flex items-center justify-center shadow-sm`}>
                        <Smartphone className="h-5 w-5 opacity-80" />
                      </div>
                      <span className="text-[9px] font-bold text-slate-600 tracking-tight text-center">{app.name}</span>
                    </div>
                  ))}

                  {/* Promo Banner inside App */}
                  <div className="col-span-3 mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-3 text-white shadow relative overflow-hidden">
                    <div className="relative z-10 space-y-0.5">
                      <div className="font-extrabold text-xs">Talk to Niti AI!</div>
                      <div className="text-[9px] opacity-90 font-medium">Your AI assistant is online.</div>
                    </div>
                    <div className="absolute right-2 bottom-1 text-3xl opacity-20">🤖</div>
                  </div>
                </div>

                {/* Dock */}
                <div className="bg-white border-t border-slate-100 p-3.5 flex justify-around items-center">
                  <div className="w-5 h-5 bg-emerald-600 rounded-md"></div>
                  <div className="w-5 h-5 bg-slate-100 rounded-md border border-slate-200"></div>
                  <div className="w-5 h-5 bg-slate-100 rounded-md border border-slate-200"></div>
                  <div className="w-5 h-5 bg-slate-100 rounded-md border border-slate-200"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
