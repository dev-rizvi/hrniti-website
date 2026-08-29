"use client";

import { 
  Search, 
  MapPin, 
  Clock, 
  TrendingUp, 
  MessageSquare, 
  ShieldAlert, 
  Sparkles,
  Layers,
  Award,
  Zap,
  Cpu,
  FileCheck,
  CreditCard,
  GraduationCap,
  Briefcase,
  Users,
  CalendarCheck,
  Ticket,
  Package,
  FileText,
  Map,
  Smile
} from "lucide-react";

interface AddonApiItem {
  id?: string;
  name?: string;
  title?: string;
  desc?: string;
  description?: string;
  price_per_user?: number | string;
  category?: string;
  badge?: string;
}

interface PricingAddonsProps {
  addons?: AddonApiItem[];
}

export default function PricingAddons({ addons = [] }: PricingAddonsProps) {

  const getAddonIcon = (name: string, slug: string) => {
    const s = (slug || "").toLowerCase();
    const n = (name || "").toLowerCase();

    if (s.includes("recruitment") || n.includes("recruitment") || n.includes("ats")) return Search;
    if (s.includes("map") || s.includes("gps") || n.includes("map") || n.includes("tracking")) return MapPin;
    if (s.includes("time") || s.includes("shift") || n.includes("shift") || n.includes("attendance")) return Clock;
    if (s.includes("appraisal") || s.includes("pms") || n.includes("performance") || n.includes("appraisal")) return TrendingUp;
    if (s.includes("lms") || s.includes("learning") || n.includes("learning") || n.includes("training")) return GraduationCap;
    if (s.includes("expense") || s.includes("loan") || s.includes("salary") || s.includes("payroll")) return CreditCard;
    if (s.includes("ticket") || s.includes("helpdesk")) return Ticket;
    if (s.includes("asset")) return Package;
    if (s.includes("letter") || s.includes("document") || s.includes("itr")) return FileText;
    if (s.includes("visitor")) return Users;
    if (s.includes("complain") || s.includes("suggestion")) return MessageSquare;

    return Sparkles;
  };

  const getAddonTagline = (name: string, category: string) => {
    const n = name.toLowerCase();
    const c = (category || "").toLowerCase();

    if (n.includes("recruitment")) return "Hire Smarter";
    if (n.includes("map") || n.includes("gps")) return "Track Field Operations";
    if (n.includes("attendance") || n.includes("shift")) return "Track Time & Rosters";
    if (n.includes("performance") || n.includes("appraisal") || n.includes("pms")) return "Grow & Review Talent";
    if (n.includes("lms") || n.includes("learning")) return "Corporate LMS & Courses";
    if (n.includes("expense") || n.includes("reimbursement")) return "Paperless Expense Claims";
    if (n.includes("loan") || n.includes("advance")) return "Employee Financial Aid";
    if (n.includes("ticket") || n.includes("helpdesk")) return "Helpdesk & Resolution";
    if (n.includes("asset")) return "Track Physical Assets";
    if (n.includes("visitor")) return "Smart Visitor Check-in";
    if (n.includes("letter")) return "Communication & Letters";

    if (c === "performance") return "Performance Suite";
    if (c === "attendance") return "Attendance & Time";
    if (c === "integration") return "System Capability";
    return "Modular Add-on";
  };

  const getAddonBadge = (name: string, price: number) => {
    const n = name.toLowerCase();
    if (n.includes("recruitment") || n.includes("appraisal") || n.includes("pms")) return "Popular";
    if (n.includes("map") || n.includes("gps") || n.includes("lms")) return "Enterprise";
    if (price > 0) return `?${price}/user`;
    return "Included";
  };

  // If addons are provided from API, display all dynamic addons
  const displayList = (addons && addons.length > 0) ? addons : [
    { name: "Recruitment & ATS", desc: "From job postings and candidate tracking to automated interview scheduling and digital offer letter generation.", price_per_user: 40, category: "hr_expense", id: "recruitment" },
    { name: "Geofencing & Geo-Tracking", desc: "Real-time tracking of remote or sales teams with geofenced location check-ins and travel expense calculations.", price_per_user: 140, category: "attendance", id: "operational-map" },
    { name: "Timesheets & Project Tracking", desc: "Log project hours, track billable and non-billable tasks, and generate client-ready project reports.", price_per_user: 35, category: "attendance", id: "timesheets" },
    { name: "Performance Management (PMS)", desc: "Define custom KPI/OKR metrics, perform 360-degree appraisal rounds, and track employee growth charts.", price_per_user: 45, category: "performance", id: "appraisal" },
    { name: "Learning Management (LMS)", desc: "Upload training courses, employee quizzes, corporate certifications, and track team progress.", price_per_user: 45, category: "integration", id: "lms" },
    { name: "Asset Management", desc: "Assign laptops, ID badges, track warranties, maintenance logs, and automate digital handover forms.", price_per_user: 25, category: "integration", id: "assets" }
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      {/* Soft decorative blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1 mb-4">
            <Sparkles className="h-4 w-4 text-emerald-600 animate-pulse" />
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Modular Software</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Power Up with Custom Add-ons
          </h2>
          
          <p className="text-slate-600 leading-relaxed">
            Only pay for what you actually use. Customize your HR Niti instance by picking specific modules to boost your HR workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayList.map((addon, index) => {
            const title = addon.name || addon.title || "Module";
            const desc = addon.desc || addon.description || "Extend your workspace with this powerful operational module.";
            const price = Number(addon.price_per_user ?? 0);
            const tagline = getAddonTagline(title, addon.category || "");
            const badge = addon.badge || getAddonBadge(title, price);
            const Icon = getAddonIcon(title, addon.id || "");
            
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-slate-150 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex justify-between items-start mb-5">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  {badge && (
                    <span className={`text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-0.5 rounded-full
                      ${badge.includes("AI") 
                        ? "bg-purple-100 text-purple-700 border border-purple-200" 
                        : badge.includes("Enterprise")
                        ? "bg-slate-100 text-slate-700 border border-slate-200"
                        : "bg-emerald-100 text-emerald-700 border border-emerald-200"
                      }
                    `}>
                      {badge}
                    </span>
                  )}
                </div>

                <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest mb-1.5">
                  {tagline}
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
