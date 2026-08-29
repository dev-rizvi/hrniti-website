import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";
import PricingCalculator from "./PricingCalculator";
import { Suspense } from "react";

const BASE_URL = "https://www.hrniti.com";

export const metadata: Metadata = {
  title: "Book Free Demo & Interactive Plan Estimator | HR Niti",
  description: "Calculate dynamic pricing, customize modular add-ons, and book your tailored interactive demo instantly.",
  keywords: "book demo, hrniti demo, pricing calculator, hrms pricing India",
  alternates: {
    canonical: `${BASE_URL}/demo`,
  },
  openGraph: {
    title: "Book Free Demo & Interactive Plan Estimator | HR Niti",
    description: "Calculate dynamic pricing, customize modular add-ons, and book your tailored interactive demo instantly.",
    url: `${BASE_URL}/demo`,
    type: "website",
  },
};

export default async function DemoPage() {
  let packages: any[] = [];
  let addons: any[] = [];
  let demoDays: number = 14;
  let currencySymbol: string = "₹";
  let razorpayEnabled: boolean = false;
  let razorpayKey: string | null = null;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://127.0.0.1:8000";
  const packagesUrl = process.env.NEXT_PUBLIC_API_PACKAGES_URL || `${baseUrl}/api/packages`;
  const addonsUrl = process.env.NEXT_PUBLIC_API_ADDONS_URL || `${baseUrl}/api/addons`;
  const demoSettingsUrl = process.env.NEXT_PUBLIC_API_DEMO_SETTINGS_URL || `${baseUrl}/api/demo-settings`;
  
  // 1. Fetch Packages from Backend API (.env)
  try {
    const res = await fetch(packagesUrl, { cache: "no-store" });
    if (res.ok) {
      packages = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch packages from API:", error);
  }

  // 2. Fetch Modular Addons from Backend API (.env)
  try {
    const res = await fetch(addonsUrl, { cache: "no-store" });
    if (res.ok) {
      addons = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch addons from API:", error);
  }

  // 3. Fetch Demo Settings from Backend API (.env)
  try {
    const res = await fetch(demoSettingsUrl, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      demoDays = data.demo_days || 14;
      if (data.currency_symbol) currencySymbol = data.currency_symbol;
      if (data.razorpay_enabled) razorpayEnabled = data.razorpay_enabled;
      if (data.razorpay_key) razorpayKey = data.razorpay_key;
    }
  } catch (error) {
    console.error("Failed to fetch demo settings from API:", error);
  }

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-purple-100 selection:text-purple-900">
      <Navbar />
      
      {/* Container without overflow-hidden so sticky panel works seamlessly */}
      <div className="relative isolate bg-white">
        {/* Background decorative layers */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-br from-purple-100/60 via-white to-indigo-50/50" />
          <div className="absolute -top-52 -left-32 transform-gpu blur-3xl sm:-top-80" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#9333ea] to-[#4f46e5] opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
          </div>
        </div>

        <div className="flex-grow max-w-7xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Header Title */}
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Pricing & Plan Estimator</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-4">
              Find the perfect plan for your team
            </h1>
            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Calculate dynamic pricing, customize modular add-ons, and book your tailored interactive demo instantly.
            </p>
          </div>

          {/* DYNAMIC PRICING ESTIMATOR & STEP WIZARD COMPONENT */}
          <Suspense fallback={<div className="text-center py-10 font-bold text-slate-400">Loading plan configurator...</div>}>
            <PricingCalculator 
              packages={packages}
              initialAddons={addons}
              currencySymbol={currencySymbol} 
              demoDays={demoDays}
              razorpayEnabled={razorpayEnabled}
              razorpayKey={razorpayKey}
            />
          </Suspense>

        </div>
      </div>
      <Footer />
    </main>
  );
}
