import React from "react";
import { Apple, Play, Smartphone } from "lucide-react";

export default function AppDownloadSection() {
  return (
    <section id="download" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-600 via-emerald-600 to-cyan-600 rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-12 border border-white/10">

          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Get HR Niti on Your Phone
            </h2>
            <p className="text-emerald-100 text-base md:text-lg max-w-xl">
              Available for iOS and Android. Download the application now to experience the future of employee self-service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="flex items-center gap-3 bg-black hover:bg-slate-950 text-white px-6 py-3 rounded-xl transition-all border border-slate-800 shadow-md select-none cursor-pointer">
                <Apple className="h-7 w-7" />
                <div className="text-left">
                  <div className="text-[9px] uppercase font-semibold text-slate-400">Download on the</div>
                  <div className="text-base font-bold leading-none mt-0.5">App Store</div>
                </div>
              </button>

              <button className="flex items-center gap-3 bg-black hover:bg-slate-950 text-white px-6 py-3 rounded-xl transition-all border border-slate-800 shadow-md select-none cursor-pointer">
                <Play className="h-6 w-6 fill-current text-white" />
                <div className="text-left">
                  <div className="text-[9px] uppercase font-semibold text-slate-400">Get it on</div>
                  <div className="text-base font-bold leading-none mt-0.5">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* QR Code widget */}
          <div className="bg-white p-5 rounded-[2rem] shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 group select-none">
            <div className="w-32 h-32 bg-slate-50 rounded-2xl flex items-center justify-center mb-3 relative overflow-hidden border border-slate-100">
              {/* Fake QR Pattern Grid */}
              <div className="absolute inset-0 opacity-15 bg-slate-900 grid grid-cols-6 gap-1 p-2">
                {Array(36).fill(0).map((_, i) => <div key={i} className="bg-slate-900 rounded-sm"></div>)}
              </div>
              <Smartphone className="h-9 w-9 text-slate-850 text-slate-800 relative z-10" />
            </div>
            <div className="text-center text-slate-900 font-extrabold text-xs uppercase tracking-wider">
              Scan to Install
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
