"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";
import {
  Monitor,
  Camera,
  Globe,
  AppWindow,
  Clock,
  MessageSquare,
  Coffee,
  BarChart3,
  CalendarDays,
  FileText,
  Bell,
  Home,
  ShieldCheck,
  ChevronDown,
  CheckCircle,
  Activity,
  Zap,
  TrendingUp,
  Users,
  Building2,
  Laptop,
  Wifi,
  Lock,
  Eye,
  Settings,
  Download,
  ArrowRight,
  Play,
  Circle,
} from "lucide-react";

// ─── DATA ───────────────────────────────────────────────────────────────────

const features = [
  {
    icon: CheckCircle,
    color: "emerald",
    title: "Automatic Attendance",
    desc: "Login/logout, working hours, late arrival and early logout — all captured without manual punch-in.",
  },
  {
    icon: Camera,
    color: "indigo",
    title: "Periodic Screenshots",
    desc: "Work-screen snapshots at configurable intervals (1–30 min) to confirm active work sessions.",
  },
  {
    icon: Globe,
    color: "sky",
    title: "Website Tracking",
    desc: "Websites visited, time spent per domain, and productive/non-productive classification.",
  },
  {
    icon: AppWindow,
    color: "violet",
    title: "Application Tracking",
    desc: "All Windows apps tracked with time-in-focus. Admins classify productive vs. non-productive apps.",
  },
  {
    icon: Clock,
    color: "amber",
    title: "Task Time Tracking",
    desc: "Time spent on assigned tasks and projects, with active vs. idle breakdowns per task.",
  },
  {
    icon: MessageSquare,
    color: "emerald",
    title: "Work Communication Activity",
    desc: "Duration in approved workplace communication tools — without reading private message content.",
  },
  {
    icon: Coffee,
    color: "orange",
    title: "Idle Time Detection",
    desc: "Keyboard and mouse inactivity detection with configurable idle-threshold alerts.",
  },
  {
    icon: BarChart3,
    color: "emerald",
    title: "Productivity Dashboard",
    desc: "Productive time vs. idle/non-productive time visualised in a premium analytics dashboard.",
  },
  {
    icon: CalendarDays,
    color: "sky",
    title: "Daily Timeline",
    desc: "Employee's complete workday activity timeline with colour-coded application segments.",
  },
  {
    icon: FileText,
    color: "indigo",
    title: "Reports",
    desc: "Employee, team, department and monthly productivity reports with exportable data.",
  },
  {
    icon: Bell,
    color: "rose",
    title: "Alerts",
    desc: "Automated alerts for excessive idle time, unusual activity patterns, and attendance issues.",
  },
  {
    icon: Home,
    color: "amber",
    title: "Remote Work Support",
    desc: "Monitor remote and hybrid employees through the same HRMS — zero friction.",
  },
  {
    icon: ShieldCheck,
    color: "emerald",
    title: "Admin Controls",
    desc: "Policies, permissions, retention periods, access controls and monitoring toggles.",
  },
  {
    icon: Monitor,
    color: "violet",
    title: "Windows Agent",
    desc: "Lightweight Windows background agent — minimal resource usage, maximum insight.",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
  emerald: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100", iconBg: "bg-emerald-100" },
  indigo:  { bg: "bg-indigo-50",  text: "text-indigo-700",  border: "border-indigo-100",  iconBg: "bg-indigo-100"  },
  sky:     { bg: "bg-sky-50",     text: "text-sky-700",     border: "border-sky-100",     iconBg: "bg-sky-100"     },
  violet:  { bg: "bg-violet-50",  text: "text-violet-700",  border: "border-violet-100",  iconBg: "bg-violet-100"  },
  amber:   { bg: "bg-amber-50",   text: "text-amber-700",   border: "border-amber-100",   iconBg: "bg-amber-100"   },
  orange:  { bg: "bg-orange-50",  text: "text-orange-700",  border: "border-orange-100",  iconBg: "bg-orange-100"  },
  rose:    { bg: "bg-rose-50",    text: "text-rose-700",    border: "border-rose-100",    iconBg: "bg-rose-100"    },
};

const industries = [
  { icon: Laptop,    label: "Software Development",    desc: "Track dev time across projects, repos and sprints." },
  { icon: Building2, label: "IT Services & Outsourcing", desc: "Client billing accuracy via project-level time tracking." },
  { icon: TrendingUp,label: "Digital Marketing Agencies",desc: "Campaign and creative task time by client and team." },
  { icon: Users,     label: "BPO / KPO Companies",     desc: "Shift adherence, active time and productivity benchmarking." },
  { icon: Home,      label: "Remote & Hybrid Teams",   desc: "Same monitoring experience regardless of employee location." },
  { icon: Zap,       label: "Startups",                desc: "Lean visibility into how a growing team spends its hours." },
];

const apps = [
  { name: "VS Code",      time: "4h 12m", pct: 52, status: "productive" },
  { name: "Chrome",       time: "2h 05m", pct: 26, status: "neutral"    },
  { name: "Slack",        time: "48m",    pct: 10, status: "productive" },
  { name: "Figma",        time: "35m",    pct:  7, status: "productive" },
  { name: "Excel",        time: "22m",    pct:  5, status: "productive" },
];

const websites = [
  { domain: "github.com",        time: "1h 35m", status: "productive"     },
  { domain: "figma.com",         time: "35m",    status: "productive"     },
  { domain: "stackoverflow.com", time: "28m",    status: "productive"     },
  { domain: "youtube.com",       time: "18m",    status: "non-productive" },
  { domain: "notion.so",         time: "12m",    status: "neutral"        },
];

const statusColors: Record<string, string> = {
  productive:     "text-emerald-600",
  neutral:        "text-amber-500",
  "non-productive":"text-rose-500",
};
const statusDot: Record<string, string> = {
  productive:      "bg-emerald-500",
  neutral:         "bg-amber-400",
  "non-productive":"bg-rose-500",
};

const screenshotIntervals = [1, 5, 10, 15, 30];

const screenshots = [
  { time: "09:35 AM", app: "VS Code",          label: "Project Dashboard",  color: "from-blue-600 to-blue-800" },
  { time: "09:40 AM", app: "Chrome",           label: "GitHub Repository",  color: "from-gray-700 to-gray-900" },
  { time: "09:45 AM", app: "Figma",            label: "Website Design",     color: "from-purple-600 to-pink-700" },
  { time: "09:50 AM", app: "Slack",            label: "Team Communication", color: "from-indigo-600 to-indigo-800" },
];

const timelineBlocks = [
  { label: "VS Code",   width: "w-[22%]", color: "bg-blue-500",   start: "09:00" },
  { label: "GitHub",    width: "w-[12%]", color: "bg-gray-500",   start: "10:20" },
  { label: "Slack",     width: "w-[7%]",  color: "bg-indigo-500", start: "11:00" },
  { label: "Meet",      width: "w-[10%]", color: "bg-emerald-500",start: "11:30" },
  { label: "Idle",      width: "w-[5%]",  color: "bg-amber-300",  start: "12:20" },
  { label: "VS Code",   width: "w-[18%]", color: "bg-blue-500",   start: "13:00" },
  { label: "Figma",     width: "w-[9%]",  color: "bg-purple-500", start: "15:00" },
  { label: "Chrome",    width: "w-[8%]",  color: "bg-yellow-500", start: "15:45" },
  { label: "Idle",      width: "w-[4%]",  color: "bg-amber-300",  start: "16:30" },
  { label: "VS Code",   width: "w-[5%]",  color: "bg-blue-500",   start: "17:00" },
];

const faqs = [
  {
    question: "What is employee monitoring software?",
    answer: "Employee monitoring software is a tool that helps organizations track employee work activity, attendance, application usage, website visits, screenshots and productivity metrics during working hours. HR Niti Workforce Intelligence is a Windows-based monitoring platform integrated into the full HRMS.",
  },
  {
    question: "How does HR Niti Workforce Intelligence work?",
    answer: "A lightweight Windows agent is installed on employee laptops. It runs quietly in the background and captures configurable metrics: attendance, active/idle time, applications used, websites visited, periodic screenshots and task time. Data is securely synced to the HR Niti cloud dashboard where managers can view individual, team and department reports.",
  },
  {
    question: "Can HR Niti track employee attendance automatically?",
    answer: "Yes. HR Niti automatically records login and logout times when the Windows agent starts, detects late arrivals, early logouts and total working hours — without requiring employees to manually punch in.",
  },
  {
    question: "Can HR Niti take employee screenshots?",
    answer: "Yes. HR Niti can capture periodic screenshots at configurable intervals: 1, 5, 10, 15 or 30 minutes. Screenshot frequency and access are controlled by company admin policy. Employees can be notified that monitoring is active.",
  },
  {
    question: "Can HR Niti track websites visited by employees?",
    answer: "Yes. HR Niti records websites visited and time spent per domain. Admins can classify domains as productive, neutral or non-productive. The classification is company-configurable — recognising that the same website may be productive in different roles.",
  },
  {
    question: "Can HR Niti track application usage?",
    answer: "Yes. HR Niti tracks all applications running on the employee's Windows device and the time spent in each. Admins can classify apps as productive or non-productive for accurate productivity scoring.",
  },
  {
    question: "Can HR Niti monitor remote employees?",
    answer: "Yes. HR Niti Workforce Intelligence is built for remote and hybrid teams. The Windows agent works seamlessly whether the employee is at home, in the office or at a client site.",
  },
  {
    question: "Can HR Niti track idle time?",
    answer: "Yes. HR Niti detects keyboard and mouse inactivity to measure idle periods. Idle time is shown in the employee dashboard and subtracted from active productive time for accurate reporting.",
  },
  {
    question: "Can HR Niti track time spent on tasks?",
    answer: "Yes. HR Niti supports task and project time tracking. Employees can log tasks and managers can see time spent per task, active vs. idle time within a task, and project-level productivity.",
  },
  {
    question: "Is HR Niti suitable for IT companies?",
    answer: "Yes. HR Niti Workforce Intelligence is specifically designed for laptop-based workplaces such as software development companies, IT services firms, digital marketing agencies, BPOs and remote/hybrid teams.",
  },
  {
    question: "Is employee monitoring legal in India?",
    answer: "Employee monitoring is generally permissible in India for legitimate business purposes when disclosed to employees. Organizations should configure monitoring policies in accordance with applicable employment, privacy and data-protection requirements and inform employees about what is being monitored.",
  },
  {
    question: "Does HR Niti provide productivity reports?",
    answer: "Yes. HR Niti provides employee, team, department and monthly productivity reports including total hours, active hours, idle hours, application usage, website usage, screenshot history, task time and attendance trends.",
  },
  {
    question: "What privacy controls does HR Niti offer for employee monitoring?",
    answer: "HR Niti includes configurable screenshot frequency, role-based access controls, data retention policies, employee notification/consent mechanisms, audit logs, the ability to exclude specific apps, secure data transmission, and the ability to disable selected monitoring features entirely.",
  },
];

const privacyControls = [
  { icon: Bell,        title: "Employee Notification",     desc: "Notify employees when monitoring is active. Consent flows can be configured to meet legal requirements." },
  { icon: Camera,      title: "Configurable Screenshots",  desc: "Set screenshot intervals company-wide or per team. Restrict who can view captured screens by role." },
  { icon: Lock,        title: "Role-Based Access",         desc: "Define who can see what: team leads see their team, HR sees all, employees see only their own data." },
  { icon: Settings,    title: "Data Retention Controls",   desc: "Set retention periods for activity logs, screenshots and reports. Auto-delete older records." },
  { icon: ShieldCheck, title: "Secure Transmission",       desc: "All data is encrypted in transit (TLS) and at rest. No third-party data sharing." },
  { icon: FileText,    title: "Audit Logs",                desc: "Every admin action — policy change, screenshot access, report export — is logged with timestamp." },
  { icon: Eye,         title: "Selective Monitoring",      desc: "Disable specific features (e.g., turn off screenshots but keep attendance) per company policy." },
  { icon: Download,    title: "Employee Self-View",        desc: "Employees can view their own productivity data and activity timeline for self-auditing." },
];

// ─── COMPONENT ──────────────────────────────────────────────────────────────

export default function WorkforceIntelligenceClient() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [selectedInterval, setSelectedInterval] = useState(5);
  const [activeTab, setActiveTab] = useState<"apps" | "websites">("apps");
  const [onlineCount, setOnlineCount] = useState(47);
  const [productivity, setProductivity] = useState(87);
  const [classificationMap, setClassificationMap] = useState<Record<string, string>>({
    "github.com": "productive",
    "figma.com": "productive",
    "stackoverflow.com": "productive",
    "youtube.com": "non-productive",
    "notion.so": "neutral",
  });

  // Subtle live animation for hero stats
  useEffect(() => {
    const id = setInterval(() => {
      setOnlineCount((n) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        return Math.max(40, Math.min(55, n + delta));
      });
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const cycleClassification = (domain: string) => {
    const cycle: Record<string, string> = {
      productive: "neutral",
      neutral: "non-productive",
      "non-productive": "productive",
    };
    setClassificationMap((prev) => ({
      ...prev,
      [domain]: cycle[prev[domain]] ?? "productive",
    }));
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 text-white pt-32 pb-24 relative overflow-hidden">
        {/* Grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left */}
            <div className="lg:col-span-7 space-y-7">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-bold uppercase tracking-widest">
                <Activity className="h-3.5 w-3.5" />
                HR Niti Workforce Intelligence
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]">
                Employee Monitoring &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-400">
                  Productivity Software
                </span>{" "}
                for Modern Workplaces
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                Know how your workforce spends its workday. HR Niti's Windows workforce tracker
                automatically captures attendance, work hours, application usage, website activity,
                screenshots, idle time and task time — all from one centralized HRMS dashboard.
              </p>

              {/* Flow pill */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                {["Attendance", "Activity", "Productivity", "Reports"].map((step, i, arr) => (
                  <React.Fragment key={step}>
                    <span className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-slate-200">
                      {step}
                    </span>
                    {i < arr.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-slate-500" />}
                  </React.Fragment>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-1">
                <a
                  href="/demo"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-emerald-600/25 hover:scale-[1.02] flex items-center gap-2"
                >
                  Book a Demo <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#how-it-works"
                  className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all flex items-center gap-2"
                >
                  <Play className="h-4 w-4 fill-current" /> See How It Works
                </a>
              </div>
            </div>

            {/* Right — live stat widget */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-indigo-500/20 rounded-3xl blur-2xl scale-95" />
                <div className="relative bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl p-6 space-y-5">
                  {/* Header */}
                  <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                    <div>
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Workforce Dashboard</p>
                      <p className="text-sm font-extrabold text-white mt-0.5">Live Overview</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-emerald-400">{onlineCount} Online</span>
                    </div>
                  </div>

                  {/* Employee card */}
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-indigo-600 flex items-center justify-center font-extrabold text-white text-sm shrink-0">
                        RS
                      </div>
                      <div>
                        <p className="font-extrabold text-white text-sm">Rahul Sharma</p>
                        <p className="text-[10px] text-slate-400">Software Developer</p>
                      </div>
                      <div className="ml-auto flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        <span className="text-[10px] text-emerald-400 font-bold">Online · 6h 42m</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: "Active Work",      value: "6h 12m",  color: "text-emerald-400" },
                        { label: "Idle Time",        value: "30m",     color: "text-amber-400"   },
                        { label: "Productive Time",  value: "5h 48m",  color: "text-sky-400"     },
                        { label: "Tasks",            value: "4",       color: "text-violet-400"  },
                        { label: "Screenshots",      value: "72",      color: "text-indigo-400"  },
                        { label: "Applications",     value: "14",      color: "text-slate-300"   },
                      ].map((m) => (
                        <div key={m.label} className="bg-slate-950 rounded-xl p-3 border border-slate-800">
                          <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">{m.label}</p>
                          <p className={`text-base font-extrabold mt-0.5 ${m.color}`}>{m.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Productivity bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] font-bold text-slate-400">
                        <span>Productivity Score</span>
                        <span className="text-emerald-400">{productivity}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full transition-all duration-700"
                          style={{ width: `${productivity}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-600 text-center font-mono">
                    9:18 AM Check-In · Last screenshot 3 min ago
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. HOW IT WORKS ──────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest">Product Workflow</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              How HR Niti Employee Monitoring Works
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              Four simple steps from installation to actionable productivity insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                icon: Download,
                color: "emerald",
                title: "Install the Windows Agent",
                desc: "Employee installs the lightweight HR Niti Work Tracker on their company laptop. Setup takes under 2 minutes.",
              },
              {
                step: "02",
                icon: Activity,
                color: "indigo",
                title: "Agent Works in the Background",
                desc: "It quietly records configured metrics: attendance, active/idle time, apps, websites, screenshots and task activity.",
              },
              {
                step: "03",
                icon: Wifi,
                color: "sky",
                title: "Data Syncs with HR Niti",
                desc: "All activity is securely encrypted and synchronised with the organisation's HR Niti account in real time.",
              },
              {
                step: "04",
                icon: BarChart3,
                color: "violet",
                title: "Managers Get One Dashboard",
                desc: "HR and Admin can view individual employees, teams, departments and projects from one unified dashboard.",
              },
            ].map((s) => {
              const c = colorMap[s.color];
              const Icon = s.icon;
              return (
                <div key={s.step} className="relative group">
                  <div className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all h-full space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`w-11 h-11 rounded-xl ${c.iconBg} ${c.text} flex items-center justify-center`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-4xl font-black text-slate-100 leading-none">{s.step}</span>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-sm mb-1">{s.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. DAILY TIMELINE ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-3">
              <span className="text-sky-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" /> Daily Timeline
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Employee's Complete Workday Activity Timeline
              </h2>
              <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
                See exactly how the workday was spent — every application, every context switch, idle gaps
                and productive streaks — in a single colour-coded timeline view.
              </p>
            </div>

            {/* Timeline widget */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-6">
              {/* Employee row */}
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-indigo-600 flex items-center justify-center font-extrabold text-white text-xs shrink-0">
                  RS
                </div>
                <div>
                  <p className="font-extrabold text-white text-sm">Rahul Sharma — Software Developer</p>
                  <p className="text-[10px] text-slate-500">Today · 9:18 AM – 6:00 PM</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-[10px] text-slate-500">Total Active</p>
                  <p className="text-sm font-extrabold text-emerald-400">6h 12m</p>
                </div>
              </div>

              {/* Timeline bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-[9px] text-slate-600 font-mono font-bold">
                  <span>09:00</span><span>10:30</span><span>12:00</span><span>13:30</span><span>15:00</span><span>16:30</span><span>18:00</span>
                </div>
                <div className="flex gap-0.5 h-8 rounded-xl overflow-hidden">
                  {timelineBlocks.map((b, i) => (
                    <div
                      key={i}
                      className={`${b.width} ${b.color} flex items-center justify-center group/tip relative transition-all hover:brightness-110`}
                    >
                      <span className="text-[7px] text-white font-bold truncate px-1 hidden sm:block">{b.label}</span>
                      {/* Tooltip */}
                      <div className="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 hidden group-hover/tip:flex bg-slate-900 border border-slate-700 text-[9px] text-white font-bold rounded-lg px-2 py-1 whitespace-nowrap z-20 shadow-xl">
                        {b.start} · {b.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-3 pt-1">
                  {[
                    { label: "VS Code",  color: "bg-blue-500"    },
                    { label: "GitHub",   color: "bg-gray-500"    },
                    { label: "Slack",    color: "bg-indigo-500"  },
                    { label: "Meet",     color: "bg-emerald-500" },
                    { label: "Figma",    color: "bg-purple-500"  },
                    { label: "Chrome",   color: "bg-yellow-500"  },
                    { label: "Idle",     color: "bg-amber-300"   },
                  ].map((l) => (
                    <div key={l.label} className="flex items-center gap-1.5">
                      <div className={`w-2.5 h-2.5 rounded-sm ${l.color}`} />
                      <span className="text-[10px] text-slate-400 font-medium">{l.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hour blocks */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {[
                  { time: "09:00–10:30", label: "Coding",     color: "text-blue-400"    },
                  { time: "10:30–11:00", label: "GitHub",     color: "text-gray-400"    },
                  { time: "11:00–11:30", label: "Slack",      color: "text-indigo-400"  },
                  { time: "11:30–12:30", label: "Meeting",    color: "text-emerald-400" },
                  { time: "12:30–13:00", label: "Idle/Lunch", color: "text-amber-400"   },
                  { time: "13:00–15:00", label: "Coding",     color: "text-blue-400"    },
                ].map((b) => (
                  <div key={b.time} className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-center">
                    <p className={`text-xs font-extrabold ${b.color}`}>{b.label}</p>
                    <p className="text-[9px] text-slate-600 font-mono mt-0.5">{b.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SCREENSHOT MONITORING ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="text-indigo-600 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Camera className="h-4 w-4" /> Automatic Work Screenshots
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  See Work Activity, Not Just Attendance
                </h2>
                <p className="text-slate-500 text-base leading-relaxed">
                  Managers can review periodic work screenshots to understand what employees were working on
                  during their logged work hours — removing ambiguity without micromanaging.
                </p>

                {/* Interval selector */}
                <div className="space-y-3">
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Screenshot Interval</p>
                  <div className="flex gap-2 flex-wrap">
                    {screenshotIntervals.map((min) => (
                      <button
                        key={min}
                        onClick={() => setSelectedInterval(min)}
                        className={`px-4 py-2 rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
                          selectedInterval === min
                            ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-600/20"
                            : "bg-slate-100 text-slate-600 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {min} min
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium">
                    Current: screenshot every <span className="text-indigo-600 font-bold">{selectedInterval} minute{selectedInterval > 1 ? "s" : ""}</span>.
                    {" "}Frequency and access are controlled by admin policy.
                  </p>
                </div>

                <ul className="space-y-3">
                  {[
                    "Screenshots stored securely with role-based access",
                    "Employee sees their own screenshots in their dashboard",
                    "Admins can disable screenshots per policy",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                      <CheckCircle className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Screenshot cards */}
              <div className="space-y-3">
                {screenshots.map((s) => (
                  <div
                    key={s.time}
                    className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 hover:border-slate-300 transition-colors"
                  >
                    <div className={`w-20 h-14 rounded-xl bg-gradient-to-br ${s.color} shrink-0 flex flex-col items-center justify-center`}>
                      <Monitor className="h-5 w-5 text-white/80" />
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-sm">{s.app}</p>
                      <p className="text-xs text-slate-500">{s.label}</p>
                      <p className="text-[10px] text-slate-400 font-mono mt-1">{s.time}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-[9px] bg-indigo-50 text-indigo-600 border border-indigo-100 px-2 py-0.5 rounded-full font-bold">
                        Captured
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. WEBSITE & APP ANALYTICS ───────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 space-y-3">
              <span className="text-sky-600 text-xs font-bold uppercase tracking-widest">Usage Analytics</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Website &amp; Application Usage Tracking
              </h2>
              <p className="text-slate-500 text-base max-w-xl mx-auto">
                Understand where work time actually goes — by app, by website, by team.
                Admins classify domains and apps; employees see their own breakdown.
              </p>
            </div>

            {/* Tab toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-white border border-slate-200 rounded-xl p-1 flex gap-1">
                {(["apps", "websites"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === tab
                        ? "bg-slate-900 text-white shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {tab === "apps" ? "Applications" : "Websites"}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <div className="col-span-5">{activeTab === "apps" ? "Application" : "Domain"}</div>
                <div className="col-span-3">Time Spent</div>
                <div className="col-span-2">Share</div>
                <div className="col-span-2 text-right">Classification</div>
              </div>

              {activeTab === "apps" ? (
                <div className="divide-y divide-slate-100">
                  {apps.map((a) => (
                    <div key={a.name} className="grid grid-cols-12 items-center px-6 py-4 hover:bg-slate-50 transition-colors">
                      <div className="col-span-5 flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-extrabold ${
                          a.status === "productive" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"
                        }`}>
                          {a.name.charAt(0)}
                        </div>
                        <span className="font-extrabold text-slate-900 text-sm">{a.name}</span>
                      </div>
                      <div className="col-span-3 text-sm font-bold text-slate-700">{a.time}</div>
                      <div className="col-span-2">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-emerald-500 rounded-full"
                              style={{ width: `${a.pct}%` }}
                            />
                          </div>
                          <span className="text-[10px] font-bold text-slate-400">{a.pct}%</span>
                        </div>
                      </div>
                      <div className="col-span-2 text-right">
                        <span className={`text-xs font-extrabold ${statusColors[a.status]}`}>
                          {a.status === "productive" ? "🟢" : a.status === "neutral" ? "🟡" : "🔴"}{" "}
                          {a.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {websites.map((w) => {
                    const cls = classificationMap[w.domain] ?? w.status;
                    return (
                      <div key={w.domain} className="grid grid-cols-12 items-center px-6 py-4 hover:bg-slate-50 transition-colors">
                        <div className="col-span-5 flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full shrink-0 ${statusDot[cls]}`} />
                          <span className="font-bold text-slate-900 text-sm font-mono">{w.domain}</span>
                        </div>
                        <div className="col-span-3 text-sm font-bold text-slate-700">{w.time}</div>
                        <div className="col-span-2" />
                        <div className="col-span-2 text-right">
                          <button
                            onClick={() => cycleClassification(w.domain)}
                            title="Click to change classification"
                            className={`text-xs font-extrabold cursor-pointer transition-all hover:opacity-80 ${statusColors[cls]}`}
                          >
                            {cls === "productive" ? "🟢" : cls === "neutral" ? "🟡" : "🔴"}{" "}
                            {cls}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                  <div className="px-6 py-3 bg-slate-50">
                    <p className="text-[10px] text-slate-400 font-medium">
                      💡 Click a classification to toggle it. Classifications are company-configurable — YouTube can be productive for video teams.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. TASK TIME TRACKING ────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Task card */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm space-y-5">
              <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Project</p>
                  <p className="font-extrabold text-slate-900 text-base mt-0.5">Website Redesign</p>
                </div>
                <span className="text-[10px] bg-emerald-100 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full font-bold">Active</span>
              </div>

              {[
                {
                  task: "Homepage Development",
                  start: "10:12 AM", end: "12:08 PM",
                  active: "1h 42m", idle: "14m",
                  pct: 87,
                },
                {
                  task: "API Integration",
                  start: "13:00 PM", end: "14:45 PM",
                  active: "1h 28m", idle: "17m",
                  pct: 84,
                },
                {
                  task: "Code Review",
                  start: "15:00 PM", end: "15:50 PM",
                  active: "45m", idle: "5m",
                  pct: 90,
                },
              ].map((t) => (
                <div key={t.task} className="bg-white border border-slate-200 rounded-2xl p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-extrabold text-slate-900 text-sm">{t.task}</p>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                        {t.start} → {t.end}
                      </p>
                    </div>
                    <span className="text-xs font-extrabold text-emerald-600">{t.pct}%</span>
                  </div>
                  <div className="flex gap-4 text-[11px]">
                    <span className="text-emerald-600 font-bold">Active: {t.active}</span>
                    <span className="text-amber-500 font-bold">Idle: {t.idle}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full" style={{ width: `${t.pct}%` }} />
                  </div>
                </div>
              ))}

              <div className="bg-slate-900 text-white rounded-2xl p-4 flex justify-between items-center">
                <div className="text-xs">
                  <p className="text-slate-400 font-mono">Total Task Time Today</p>
                  <p className="font-extrabold text-white text-lg mt-0.5">3h 55m</p>
                </div>
                <div className="text-right text-xs">
                  <p className="text-slate-400 font-mono">Avg Productivity</p>
                  <p className="font-extrabold text-emerald-400 text-lg mt-0.5">87%</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-amber-600 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> Task &amp; Project Time Tracking
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Connect Activity with Actual Work
              </h2>
              <p className="text-slate-500 text-base leading-relaxed">
                Task tracking is where HR Niti differentiates from a basic monitoring tool. Instead of
                just knowing an employee was online, managers see exactly which project, which task,
                how long, and how productively.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Task", arrow: "Employee", arrow2: "Time", arrow3: "Activity" },
                ].map(() => (
                  <div key="flow" className="flex items-center gap-2 flex-wrap text-sm font-bold">
                    {["Task", "Employee", "Time", "Activity", "Output"].map((s, i, arr) => (
                      <React.Fragment key={s}>
                        <span className="px-3 py-1.5 bg-amber-50 border border-amber-200 text-amber-800 rounded-lg">{s}</span>
                        {i < arr.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-slate-400" />}
                      </React.Fragment>
                    ))}
                  </div>
                ))}
                <p className="text-xs text-slate-400">
                  That is substantially more valuable than simply saying "employee was online for 8 hours."
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "Time per task and project, not just total hours",
                  "Active vs. idle time within each task session",
                  "Project-level productivity for billing accuracy",
                  "Manager view: employee → task → time → output",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FEATURE GRID ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest">Complete Feature Set</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Everything in HR Niti Workforce Intelligence
            </h2>
            <p className="text-slate-500 text-base">
              One module. Every workforce visibility tool your business needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {features.map((f) => {
              const c = colorMap[f.color];
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className={`bg-white border ${c.border} hover:border-slate-300 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all group`}
                >
                  <div className={`w-10 h-10 rounded-xl ${c.iconBg} ${c.text} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-sm mb-1.5">{f.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 8. TARGET INDUSTRIES ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-15 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Who Should Use HR Niti?</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Built for Modern, Laptop-Based Workplaces
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Whether your employees work from the office, remotely, or in a hybrid setup — HR Niti gives
              managers visibility into attendance, working patterns, and project time without switching between multiple tools.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.label}
                  className="bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/40 rounded-2xl p-6 space-y-3 transition-all hover:bg-slate-800"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-extrabold text-white text-sm">{ind.label}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{ind.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Also include */}
          <div className="mt-10 text-center">
            <p className="text-slate-400 text-sm font-medium">Also ideal for:</p>
            <div className="flex flex-wrap gap-2 justify-center mt-3">
              {["Recruitment Agencies", "Design Studios", "Fintech Startups", "EdTech Companies", "Consulting Firms", "Freelance Teams"].map((l) => (
                <span key={l} className="px-3.5 py-1.5 bg-slate-800 border border-slate-700 rounded-full text-xs font-bold text-slate-300">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. REPORTS ───────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14 space-y-3">
              <span className="text-indigo-600 text-xs font-bold uppercase tracking-widest">Analytics & Reports</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Team &amp; Department Productivity Reports
              </h2>
              <p className="text-slate-500 text-base max-w-xl mx-auto">
                Track trends over time across individuals, teams and departments. Export to PDF or CSV.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { label: "Total Hours",  value: "182h", sub: "This month",   color: "text-slate-900",   bar: "bg-slate-800",    pct: 91 },
                { label: "Active Hours", value: "161h", sub: "88.5% active", color: "text-emerald-600", bar: "bg-emerald-500",  pct: 80 },
                { label: "Idle Hours",   value: "21h",  sub: "11.5% idle",   color: "text-amber-600",   bar: "bg-amber-400",    pct: 10 },
              ].map((s) => (
                <div key={s.label} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{s.label}</p>
                    <p className={`text-3xl font-extrabold mt-1 ${s.color}`}>{s.value}</p>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">{s.sub}</p>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className={`h-full ${s.bar} rounded-full`} style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Department comparison */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-extrabold text-slate-900 text-sm">Department Comparison</h3>
                <span className="text-[10px] text-slate-400 font-mono">September 2026</span>
              </div>
              {[
                { dept: "Development", pct: 91, hours: "168h", color: "bg-blue-500"    },
                { dept: "Design",      pct: 87, hours: "152h", color: "bg-purple-500"  },
                { dept: "Sales",       pct: 83, hours: "144h", color: "bg-emerald-500" },
                { dept: "Support",     pct: 79, hours: "136h", color: "bg-amber-500"   },
                { dept: "Marketing",   pct: 75, hours: "128h", color: "bg-rose-500"    },
              ].map((d) => (
                <div key={d.dept} className="flex items-center gap-4">
                  <span className="text-xs font-bold text-slate-700 w-24 shrink-0">{d.dept}</span>
                  <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div className={`h-full ${d.color} rounded-full transition-all`} style={{ width: `${d.pct}%` }} />
                  </div>
                  <span className="text-xs font-extrabold text-slate-900 w-10 text-right">{d.pct}%</span>
                  <span className="text-[10px] text-slate-400 font-mono w-12 text-right">{d.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. PRIVACY & COMPLIANCE ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14 space-y-3">
              <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
                <ShieldCheck className="h-4 w-4" /> Privacy &amp; Security Controls
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Workplace Visibility with Privacy Controls
              </h2>
              <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
                HR Niti gives organizations configurable controls over employee activity monitoring.
                Transparency builds trust — we don't hide monitoring behind marketing language.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {privacyControls.map((pc) => {
                const Icon = pc.icon;
                return (
                  <div key={pc.title} className="bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/40 rounded-2xl p-5 space-y-3 transition-all">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-extrabold text-white text-xs">{pc.title}</h3>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{pc.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Policy statement */}
            <div className="bg-indigo-950/60 border border-indigo-500/20 rounded-2xl p-6 flex gap-4">
              <ShieldCheck className="h-6 w-6 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-white text-sm mb-1">Compliance Statement</p>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Organizations using HR Niti Workforce Intelligence should configure monitoring policies in accordance with applicable employment, privacy and data-protection requirements in their jurisdiction. HR Niti provides the technical controls; the organization defines the policy. Employees should be informed about what monitoring is in place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-base">
              Everything you need to know about HR Niti Workforce Intelligence.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none cursor-pointer select-none"
                >
                  <span className="font-extrabold text-slate-900 pr-4 text-sm md:text-base leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4.5 w-4.5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      faqOpen === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    faqOpen === idx ? "max-h-64 border-t border-slate-100" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-sm text-slate-600 leading-relaxed bg-slate-50/40">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Workforce Visibility?"
        description="Join IT companies, agencies and remote teams across India using HR Niti Workforce Intelligence to automatically track attendance, productivity and project time."
      />
      <Footer />
    </main>
  );
}
