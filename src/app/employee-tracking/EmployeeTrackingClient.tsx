'use client';

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";
import { 
  Users, 
  Clock, 
  MapPin, 
  ShieldAlert, 
  Play, 
  Pause, 
  Camera, 
  Activity, 
  CheckCircle, 
  Smartphone, 
  Compass, 
  HelpCircle, 
  ChevronDown, 
  Monitor, 
  TrendingUp, 
  Laptop, 
  Building2, 
  UserCheck 
} from "lucide-react";

interface EmployeeStatus {
  id: number;
  name: string;
  department: string;
  type: "active" | "field" | "away";
  currentTask: string;
  lastActive: string;
  productivityScore: number;
  location: string;
  initials: string;
}

const initialEmployees: EmployeeStatus[] = [
  {
    id: 1,
    name: "Abhishek Sharma",
    department: "Engineering",
    type: "active",
    currentTask: "Debugging Next.js Build DLL lock",
    lastActive: "Just now",
    productivityScore: 96,
    location: "Remote / Desktop App",
    initials: "AS"
  },
  {
    id: 2,
    name: "Priya Patel",
    department: "Sales",
    type: "field",
    currentTask: "Enterprise Client Pitch",
    lastActive: "2 min ago",
    productivityScore: 94,
    location: "Bandra Kurla Complex, Mumbai",
    initials: "PP"
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    department: "Engineering",
    type: "away",
    currentTask: "None (Lunch Break)",
    lastActive: "22 min ago",
    productivityScore: 0,
    location: "Away",
    initials: "VM"
  },
  {
    id: 4,
    name: "Ananya Sen",
    department: "Design",
    type: "active",
    currentTask: "LMS Certificate Layout",
    lastActive: "1 min ago",
    productivityScore: 91,
    location: "Office / Desktop App",
    initials: "AS"
  },
  {
    id: 5,
    name: "Rohan Kapoor",
    department: "Operations",
    type: "field",
    currentTask: "Vendor Logistics Audit",
    lastActive: "5 min ago",
    productivityScore: 89,
    location: "Industrial Hub, Gurugram",
    initials: "RK"
  },
  {
    id: 6,
    name: "Meera Nair",
    department: "HR Operations",
    type: "active",
    currentTask: "Onboarding Document Verification",
    lastActive: "Just now",
    productivityScore: 95,
    location: "Office / Desktop App",
    initials: "MN"
  }
];

const faqs = [
  {
    question: "How does the desktop tracking app capture screenshots?",
    answer: "The HR Niti light-weight desktop app takes randomized screenshots (e.g. 1 to 3 times per 10-minute interval) based on settings configured by the administrator. Managers can blur screenshots to respect worker privacy."
  },
  {
    question: "How does GPS Geofencing work for field teams?",
    answer: "Field employees download the HR Niti mobile app. Once they enter a designated geofenced client or warehouse radius, the system automatically checks them in. It captures real-time route mappings and travel log history."
  },
  {
    question: "Can employees view their own productivity tracking metrics?",
    answer: "Yes! Transparency is a core value of HR Niti. Employees get a personal dashboard showing their daily tracked hours, activity scores, app breakdown percentages, and calculated break distributions."
  },
  {
    question: "Does the system support silent background tracking?",
    answer: "We support both Interactive (Start/Stop timer) and Silent background modes. Silent background monitoring is strictly enterprise-configured and obeys company compliance/consent guidelines."
  }
];

export default function EmployeeTrackingClient() {
  const [employees, setEmployees] = useState<EmployeeStatus[]>(initialEmployees);
  const [filterType, setFilterType] = useState<"all" | "active" | "field" | "away">("all");
  const [isTracking, setIsTracking] = useState(false);
  const [secondsTracked, setSecondsTracked] = useState(15142);
  const [faqExpanded, setFaqExpanded] = useState<number | null>(null);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const toggleTracking = () => {
    if (isTracking) {
      if (timerRef.current) clearInterval(timerRef.current);
      setIsTracking(false);
    } else {
      setIsTracking(true);
      timerRef.current = setInterval(() => {
        setSecondsTracked(prev => prev + 1);
      }, 1000);
    }
  };

  const formatTime = (totalSecs: number) => {
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const filteredEmployees = employees.filter(
    emp => filterType === "all" || emp.type === filterType
  );

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/25 rounded-full blur-3xl -mr-20 -mt-20 z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl -ml-20 -mb-20 z-0"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Activity className="h-3.5 w-3.5" /> Operations Visibility & GPS geofencing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Automated Tracking & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">Activity Analytics Suite</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                Monitor remote workflows, capture task-oriented timesheets, and track field teams with automated GPS geofenced check-ins. Combine productivity insights with compliance guidelines.
              </p>
              <div className="flex gap-4 pt-2">
                <a 
                  href="/contact-us" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-emerald-600/20 hover:scale-[1.02]"
                >
                  Book Tracker Demo
                </a>
                <a 
                  href="#dashboard-tracker" 
                  className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-7 py-3.5 rounded-xl font-bold transition-all"
                >
                  Live Demo Widget
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-3xl blur-xl opacity-20 transform rotate-3 scale-95"></div>
              
              <div className="relative bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl p-6 space-y-5">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Office Productivity Log</span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">94% Active</span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-350">Average Daily Activity:</span>
                    <span className="text-white font-extrabold">6h 42m</span>
                  </div>

                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="w-[84%] bg-gradient-to-r from-emerald-500 to-amber-500 h-full rounded-full"></div>
                  </div>

                  <div className="space-y-2.5">
                    <span className="text-[9px] text-slate-450 block font-bold uppercase tracking-wider">Top Productive Applications</span>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl flex items-center justify-between text-[11px]">
                        <span className="text-slate-300 font-semibold truncate">VS Code</span>
                        <span className="text-emerald-400 font-bold ml-1">42%</span>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl flex items-center justify-between text-[11px]">
                        <span className="text-slate-300 font-semibold truncate">Figma Editor</span>
                        <span className="text-amber-400 font-bold ml-1">28%</span>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl flex items-center justify-between text-[11px]">
                        <span className="text-slate-300 font-semibold truncate">Slack</span>
                        <span className="text-emerald-400 font-bold ml-1">15%</span>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl flex items-center justify-between text-[11px]">
                        <span className="text-slate-300 font-semibold truncate">Email / Calendar</span>
                        <span className="text-slate-400 font-bold ml-1">10%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Interactive Desktop App Tracker */}
      <section id="dashboard-tracker" className="py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Real-Time Activity Tracker Simulator
            </h2>
            <p className="text-slate-650 text-sm md:text-base leading-relaxed">
              Experience the dual-nature platform. Test the employee desktop timer application on the left, and view how employee metrics populate in the manager's live dashboard on the right.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6.5xl mx-auto">
            <div className="lg:col-span-5 bg-slate-900 border border-slate-850 rounded-3xl shadow-xl p-6 text-white flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Laptop className="h-5 w-5 text-emerald-500" />
                    <span className="text-xs font-bold font-mono tracking-wider text-slate-300">HR Niti Desktop App</span>
                  </div>
                  <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-md ${
                    isTracking 
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                      : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  }`}>
                    {isTracking ? "Tracking Active" : "Tracking Paused"}
                  </span>
                </div>

                <div className="text-center py-6 bg-slate-950 border border-slate-850 rounded-2xl space-y-1">
                  <span className="text-[10px] font-bold text-slate-450 block uppercase tracking-widest">Tracked Time Today</span>
                  <span className="text-4xl font-black font-mono tracking-tight text-white">{formatTime(secondsTracked)}</span>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Active Task</label>
                    <input 
                      type="text" 
                      defaultValue="Designing Employee Activity Dashboard" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors font-medium" 
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase">
                      <span>Screenshot logs</span>
                      <span className="text-emerald-400 flex items-center gap-1"><Camera className="h-3.5 w-3.5" /> 3 Screens taken</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="aspect-video bg-slate-950 rounded-lg border border-slate-800 overflow-hidden flex items-center justify-center text-[10px] text-slate-500 font-mono">
                        Screen_01
                      </div>
                      <div className="aspect-video bg-slate-950 rounded-lg border border-slate-800 overflow-hidden flex items-center justify-center text-[10px] text-slate-500 font-mono">
                        Screen_02
                      </div>
                      <div className="aspect-video bg-slate-950 rounded-lg border border-slate-800 overflow-hidden flex items-center justify-center text-[10px] text-slate-500 font-mono">
                        Screen_03
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={toggleTracking}
                className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 select-none cursor-pointer transition-all ${
                  isTracking 
                    ? "bg-amber-600 hover:bg-amber-700 text-white" 
                    : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20"
                }`}
              >
                {isTracking ? (
                  <>
                    <Pause className="h-4.5 w-4.5 fill-current" /> Pause Tracking
                  </>
                ) : (
                  <>
                    <Play className="h-4.5 w-4.5 fill-current" /> Start Tracking
                  </>
                )}
              </button>
            </div>

            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl shadow-sm p-6 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-slate-100 pb-4 gap-4">
                  <div className="space-y-0.5">
                    <h3 className="font-extrabold text-slate-900 text-base">Manager's Live Monitor</h3>
                    <p className="text-xs text-slate-500 font-medium">Real-time team active directory tracking feed</p>
                  </div>

                  <div className="flex gap-1.5 flex-wrap">
                    {(["all", "active", "field", "away"] as const).map(type => (
                      <button
                        key={type}
                        onClick={() => setFilterType(type)}
                        className={`px-3 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider cursor-pointer transition-all ${
                          filterType === type 
                            ? "bg-slate-900 text-white shadow-xs" 
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3.5 max-h-[360px] overflow-y-auto pr-1">
                  {filteredEmployees.map(emp => (
                    <div 
                      key={emp.id}
                      className="bg-white border border-slate-200 hover:border-slate-300 p-3.5 rounded-2xl flex items-center justify-between gap-4 transition-colors"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-amber-600 flex items-center justify-center font-bold text-white text-xs shrink-0">
                          {emp.initials}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="font-extrabold text-slate-900 text-xs truncate leading-snug">{emp.name}</h4>
                            <span className={`text-[9px] font-extrabold px-2 py-0.2 rounded border ${
                              emp.type === 'active' 
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                                : emp.type === 'field'
                                ? 'bg-indigo-50 text-indigo-700 border-indigo-100'
                                : 'bg-amber-50 text-amber-700 border-amber-100'
                            }`}>
                              {emp.type}
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-450 mt-1 truncate max-w-[200px] sm:max-w-xs">{emp.currentTask}</p>
                          <p className="text-[9px] text-slate-400 mt-0.5 font-semibold">{emp.location}</p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-[9px] text-slate-450 block font-semibold uppercase">Productivity</span>
                        <span className={`text-xs font-black ${
                          emp.productivityScore >= 90 
                            ? 'text-emerald-600' 
                            : emp.productivityScore > 0 
                            ? 'text-blue-600' 
                            : 'text-slate-400'
                        }`}>
                          {emp.productivityScore > 0 ? `${emp.productivityScore}%` : 'Idle'}
                        </span>
                        <p className="text-[8px] text-slate-400 mt-0.5 font-mono">{emp.lastActive}</p>
                      </div>
                    </div>
                  ))}

                  {filteredEmployees.length === 0 && (
                    <div className="text-center py-10">
                      <Users className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                      <span className="text-xs text-slate-400 font-medium italic">No employees found in this category.</span>
                    </div>
                  )}
                </div>

              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                <span>Active Tracking: 4 Active / 2 Field Force</span>
                <span className="text-emerald-600 font-extrabold">Daily Logs Synced</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Field Force GPS Location Tracking */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-emerald-400 font-bold uppercase tracking-wider text-sm flex items-center gap-1">
                <Compass className="h-4.5 w-4.5" /> Mobile GPS Sync
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Geofencing & Automated Field Attendance Check-Ins
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                Take control of on-field operational tracking. HR Niti's intelligent mobile client logs location updates, map routes, and travel coordinates, syncing them directly with attendance files.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Virtual Geofence parameters to auto-verify site arrival.",
                  "Automated travel allowance computations based on GPS distances.",
                  "Tamper-proof logs preventing clock-in location spoofing."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-200 font-medium">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 relative flex justify-center">
              <div className="w-full max-w-md bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl relative">
                <div className="bg-slate-900 aspect-square rounded-2xl border border-slate-800 relative overflow-hidden flex items-center justify-center p-4">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-35"></div>
                  
                  <div className="w-40 h-40 rounded-full border-2 border-dashed border-emerald-500 bg-emerald-500/10 flex items-center justify-center relative animate-pulse">
                    <span className="text-[10px] text-emerald-400 font-mono tracking-wider font-bold uppercase">Geofence (200m)</span>
                    
                    <div className="absolute w-8 h-8 rounded-full bg-emerald-600/20 flex items-center justify-center border border-emerald-500">
                      <Building2 className="h-4 w-4 text-emerald-400" />
                    </div>

                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-slate-950 border border-slate-800 px-2 py-1 rounded-lg shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                      <span className="text-[9px] font-bold text-white">PP check-in</span>
                    </div>
                  </div>

                  <div className="absolute bottom-10 left-10 text-[9px] bg-slate-950 border border-slate-800 px-2 py-1 rounded-md text-slate-400 font-mono flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-red-500" /> BKC Hub, Mumbai
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-bold text-slate-450 uppercase">
                    <span>GPS Operations Feed</span>
                    <span className="text-emerald-400">Synced</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-slate-900 border border-slate-850 p-3 rounded-xl flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-slate-400" />
                        <div>
                          <span className="font-bold text-white block">Priya Patel (Sales)</span>
                          <span className="text-[9px] text-slate-500 block">Check-In BKC Office Geofence</span>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-slate-400">09:42 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Compliance & Security */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm space-y-5">
              <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                <span className="text-xs font-bold text-slate-850 flex items-center gap-2">
                  <ShieldAlert className="h-4.5 w-4.5 text-emerald-600" /> Data Privacy Safeguards
                </span>
                <span className="text-[9px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold font-mono">GDPR Compliant</span>
              </div>

              <div className="space-y-3.5">
                {[
                  { title: "Blurred Screenshots", desc: "Enable automated blurs on screenshot uploads to protect confidential passwords, messages, and bank listings." },
                  { title: "App Exclusions", desc: "Filter out and block tracking for specific apps like personal bank portals or private messaging channels." },
                  { title: "No Keystroke Logging", desc: "We register mouse clicks and keyboard activity counts (for productivity metrics) but never record literal keys pressed." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 p-4 rounded-xl shadow-2xs space-y-1">
                    <span className="text-xs font-extrabold text-slate-900 block">{item.title}</span>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <UserCheck className="h-3.5 w-3.5" /> Security Compliance
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Designed to Respect Employee Privacy & Trust
              </h2>
              <p className="text-slate-650 leading-relaxed text-base">
                Productivity tracking should build alignment, not control. HR Niti is built with high transparency settings that ensure employees retain control over what information is logged.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Monitor className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Employee-Activated Timers</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Interactive modes allow employees to manually toggle the timer and only record hours during specific tasks.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Productivity Self-Auditing</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Give team members absolute clarity by letting them audit, review, and request deletions for logged screenshots before managers view them.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FAQs Section */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Employee Activity Tracking FAQs
            </h2>
            <p className="text-slate-650">
              Clear information detailing configuration, privacy rules, and geofencing syncs.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setFaqExpanded(faqExpanded === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none cursor-pointer select-none"
                >
                  <span className="font-extrabold text-slate-900 pr-4 text-sm md:text-base">{faq.question}</span>
                  <ChevronDown className={`h-4.5 w-4.5 text-slate-400 shrink-0 transition-transform duration-300 ${faqExpanded === idx ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    faqExpanded === idx ? 'max-h-48 border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 text-sm text-slate-600 leading-relaxed bg-slate-50/40">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
