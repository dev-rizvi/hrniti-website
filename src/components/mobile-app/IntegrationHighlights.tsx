import React from "react";
import { Zap, MapPin, FileText, Calendar, ShieldCheck, Laptop, BarChart3 } from "lucide-react";

export default function IntegrationHighlights() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200/50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold uppercase tracking-wider">
            <Zap className="h-3 w-3 animate-pulse" /> Core Platform Synergy
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            More than just a mobile portal: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
              The Mobile App Synced with Core Directory &amp; Payroll
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Isolated mobile apps lead to attendance delays and missed slips. HR Niti bridges field punches and payslip releases in real-time.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Highlight 1: GPS Geofenced Punch */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl leading-snug">
                GPS Geofenced Punch Auto-Sync
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Log attendance punches securely inside configured coordinates. Suit for remote sales teams with active GPS location verification, instantly pushing coordinates to the Timesheet and Attendance registers.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Sync: Attendance &amp; Timesheets</span>
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">GPS Synced</span>
            </div>
          </div>

          {/* Highlight 2: Payslip & e-Sign */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl leading-snug">
                Instant Payslip &amp; e-Sign Access
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Allow employees to view salary breakups, download PDF payslips, and e-sign mandatory forms directly within their app. Payslip documents generated inside the Payroll ledger sync to the phone instantly.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Sync: Core Payroll Database</span>
              <span className="text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">Payslips Synced</span>
            </div>
          </div>

          {/* Highlight 3: Leave & Chatbot */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl leading-snug">
                Leaves &amp; Conversational Workflows
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Check leaves or request time-off using simple chat prompts with Niti AI, triggering push notifications to managers. When approved, logs update the central directory database immediately.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Sync: Niti AI Chatbot &amp; Leave</span>
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Leaves Synced</span>
            </div>
          </div>

        </div>

        {/* Performance Strip */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 max-w-6xl mx-auto shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-2xl -mr-20 -mt-20"></div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center items-center divide-y md:divide-y-0 md:divide-x divide-slate-800 relative z-10">
            <div className="pb-6 md:pb-0">
              <ShieldCheck className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-black">Liveness Check</div>
              <div className="text-xs text-slate-400 mt-1">Facial attendance spoofing protection</div>
            </div>
            <div className="py-6 md:py-0 md:px-4">
              <Laptop className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-black">Offline Logs</div>
              <div className="text-xs text-slate-400 mt-1">Saves attendance timestamp offline &amp; autosyncs later</div>
            </div>
            <div className="pt-6 md:pt-0 md:px-4">
              <BarChart3 className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-black">100% Mobile ESS</div>
              <div className="text-xs text-slate-400 mt-1">Full self-service requests handled from the field</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
