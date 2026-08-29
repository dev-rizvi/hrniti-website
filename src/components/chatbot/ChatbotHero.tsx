"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, Mic, Sparkles, Bot, ShieldCheck } from "lucide-react";
import ChatInterfaceMockup from "./ChatInterfaceMockup";

export default function ChatbotHero() {
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
              <Sparkles className="h-4 w-4 text-purple-400 fill-current animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-purple-300">AI Virtual HR Assistant</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Say Hello to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">Niti AI</span><br />
              Your 24/7 AI-Powered Virtual HR
            </h1>

            <p className="text-slate-350 text-base md:text-lg leading-relaxed max-w-xl font-medium">
              Empower your workforce with instant, natural language responses. From checking leaves to downloading PDF payslips, Niti AI handles everyday employee queries instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/demo"
                className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-purple-600/20 hover:scale-[1.02] inline-flex items-center justify-center gap-2"
              >
                Request AI Demo
                <MessageSquare className="h-5 w-5" />
              </Link>
            </div>

            {/* Quick Micro-stats */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-400 font-bold uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <Mic className="h-4 w-4 text-purple-400" /> Voice commands ready
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" /> Secure Verification
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div> 95% Query Resolution
              </div>
            </div>
          </div>

          {/* Interactive Visual - Chat Mockup */}
          <div className="lg:col-span-5 relative w-full max-w-sm mx-auto flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl blur-2xl opacity-15 transform rotate-3 scale-95"></div>
            
            <div className="relative z-10 w-full">
              <ChatInterfaceMockup />
            </div>

            {/* Floating Badge */}
            <div className="hidden md:flex absolute -top-8 -left-12 bg-slate-900/80 border border-slate-800 p-4 rounded-2xl items-center gap-3 shadow-2xl animate-float backdrop-blur-sm z-20">
              <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center border border-purple-500/20 text-purple-400">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Resolution Rate</div>
                <div className="text-lg font-black text-white">95% Autopilot</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
