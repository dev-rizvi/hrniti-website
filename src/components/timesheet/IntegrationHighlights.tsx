import React from "react";
import { Zap, MapPin, Landmark, BarChart3, ShieldCheck, ShieldAlert } from "lucide-react";

export default function IntegrationHighlights() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200/50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-850 text-[11px] font-extrabold uppercase tracking-wider">
            <Zap className="h-3 w-3 animate-pulse" /> Core HRMS Integration
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Natively Synced with Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
              Employee Directory & Payroll Run
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Stop dealing with disconnected timesheet apps. HR Niti bridges project task logs directly with attendance devices, client rates, and monthly payroll.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Highlight 1: Attendance Punch Integration */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl leading-snug">
                Attendance & GPS Geofencing Sync
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Biometric machines, web clock-ins, or mobile GPS punches in the attendance module cross-reference logged timesheet hours. Set up rules to automatically audit and highlight discrepancies between daily working time and project-allocated time.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Sync: Biometric / Web Clock-in</span>
              <span className="text-orange-600 bg-orange-50 px-2 py-0.5 rounded">GPS Audited</span>
            </div>
          </div>

          {/* Highlight 2: Overtime & Payroll Sync */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl leading-snug">
                Automated Payroll & Overtime Processing
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Timesheet-tracked overtime hours flow directly into your payroll calculations. Setup multi-level approval workflows for manager validation, ensuring only authorized timesheet records are used to calculate payouts and overtime bonuses.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Sync: Payroll Engine</span>
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Auto-Payouts</span>
            </div>
          </div>

          {/* Highlight 3: Project Budgeting */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl leading-snug">
                Live Project Costing & Billing Analytics
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Assign specific billing rates per resource or project role. Track real-time cost accumulations versus budget targets. Automatically generate client invoice reports detailing billable and non-billable hours without exporting spreadsheets.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Sync: Resource Billing Rates</span>
              <span className="text-amber-650 bg-amber-50 px-2 py-0.5 rounded text-amber-700">Cost Tracked</span>
            </div>
          </div>

        </div>

        {/* Performance Strip */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 max-w-6xl mx-auto shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-2xl -mr-20 -mt-20"></div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center items-center divide-y md:divide-y-0 md:divide-x divide-slate-800 relative z-10">
            <div className="pb-6 md:pb-0">
              <ShieldCheck className="h-8 w-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-black">Zero Leakage</div>
              <div className="text-xs text-slate-400 mt-1">100% accurate tracking of all employee project hours</div>
            </div>
            <div className="py-6 md:py-0 md:px-4">
              <ShieldAlert className="h-8 w-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-black">Discrepancy Alerts</div>
              <div className="text-xs text-slate-400 mt-1">Automatic flags when timesheets exceed shift hours</div>
            </div>
            <div className="pt-6 md:pt-0 md:px-4">
              <Zap className="h-8 w-8 text-amber-400 mx-auto mb-2" />
              <div className="text-2xl font-black">1-Click Exports</div>
              <div className="text-xs text-slate-400 mt-1">Pre-formatted billing audits for quick client invoicing</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
