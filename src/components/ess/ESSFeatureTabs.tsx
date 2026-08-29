"use client";
import React, { useState } from "react";
import { User, FileText, HelpCircle, Calculator } from "lucide-react";

interface TabItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

interface ColorTheme {
  tabBgActive: string;
  iconBgActive: string;
  iconTextActive: string;
  badgeBg: string;
  badgeText: string;
  glowBg: string;
  progressBg: string;
}

export default function ESSFeatureTabs() {
  const tabs: TabItem[] = [
    {
      id: "profile",
      label: "Profile Management",
      icon: User,
      title: "Self-Service Profile Updates",
      description: "Empower employees to keep their personal details up-to-date. From address changes to emergency contacts and bank details, let them manage their own profile, reducing HR administrative burden.",
      color: "blue"
    },
    {
      id: "payslip",
      label: "Payslip & Tax",
      icon: FileText,
      title: "Instant Access to Payroll Data",
      description: "Employees can view and download their monthly payslips, Form 16, and tax computation sheets instantly. Transparency in payroll leads to higher trust and fewer queries.",
      color: "green"
    },
    {
      id: "tax",
      label: "IT Declaration",
      icon: Calculator,
      title: "Seamless Tax Planning",
      description: "A dedicated window allows employees to submit their Investment Declarations and proofs at the start and end of the financial year, directly integrated with the payroll engine.",
      color: "purple"
    },
    {
      id: "helpdesk",
      label: "HR Helpdesk",
      icon: HelpCircle,
      title: "Query Resolution System",
      description: "An integrated ticketing system where employees can raise queries related to payroll, policies, or IT assets. Track status and resolution time effectively.",
      color: "orange"
    }
  ];

  const colorThemes: Record<'blue' | 'green' | 'purple' | 'orange', ColorTheme> = {
    blue: {
      tabBgActive: "bg-white shadow-md text-slate-900 border-slate-200",
      iconBgActive: "bg-blue-100 text-blue-600",
      iconTextActive: "text-blue-600",
      badgeBg: "bg-blue-100",
      badgeText: "text-blue-700",
      glowBg: "bg-blue-50",
      progressBg: "bg-blue-500"
    },
    green: {
      tabBgActive: "bg-white shadow-md text-slate-900 border-slate-200",
      iconBgActive: "bg-green-100 text-green-600",
      iconTextActive: "text-green-600",
      badgeBg: "bg-green-100",
      badgeText: "text-green-700",
      glowBg: "bg-green-50",
      progressBg: "bg-green-500"
    },
    purple: {
      tabBgActive: "bg-white shadow-md text-slate-900 border-slate-200",
      iconBgActive: "bg-purple-100 text-purple-600",
      iconTextActive: "text-purple-600",
      badgeBg: "bg-purple-100",
      badgeText: "text-purple-700",
      glowBg: "bg-purple-50",
      progressBg: "bg-purple-500"
    },
    orange: {
      tabBgActive: "bg-white shadow-md text-slate-900 border-slate-200",
      iconBgActive: "bg-orange-100 text-orange-600",
      iconTextActive: "text-orange-600",
      badgeBg: "bg-orange-100",
      badgeText: "text-orange-700",
      glowBg: "bg-orange-50",
      progressBg: "bg-orange-500"
    }
  };

  const [activeTab, setActiveTab] = useState<TabItem>(tabs[0]);
  const currentTheme = colorThemes[activeTab.color];

  return (
    <section className="py-24 bg-white border-t border-gray-150 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">One Portal, Many Possibilities</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Explore the comprehensive features that make our ESS portal the favorite workspace for thousands of employees.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">

          {/* Tabs Navigation */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-100 rounded-3xl p-3 flex flex-col justify-center space-y-1">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isSelected = activeTab.id === tab.id;
              const theme = colorThemes[tab.color];

              return (
                <button
                  key={tab.id}
                  id={`ess-feature-tab-${tab.id}`}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full flex items-center gap-4 p-4.5 rounded-2xl text-left transition-all duration-300 border border-transparent cursor-pointer ${
                    isSelected
                      ? theme.tabBgActive
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    isSelected ? theme.iconBgActive : "bg-slate-200/60 text-slate-500"
                  }`}>
                    <TabIcon className="h-5.5 w-5.5" />
                  </div>
                  <span className="font-extrabold text-base tracking-tight">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="lg:col-span-8 bg-white border border-slate-100 rounded-3xl p-8 lg:p-12 shadow-sm animate-fade-in min-h-[400px] flex flex-col justify-center relative overflow-hidden">
            {/* Dynamic Background Glow */}
            <div className={`absolute top-0 right-0 w-80 h-80 ${currentTheme.glowBg} rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none transition-all duration-500`}></div>

            <div className="relative z-10 space-y-6">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${currentTheme.badgeBg} ${currentTheme.badgeText} text-xs font-bold uppercase tracking-wider`}>
                <activeTab.icon className="h-4 w-4" />
                {activeTab.label}
              </div>

              <h3 className="text-3xl font-black text-slate-900 tracking-tight">{activeTab.title}</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {activeTab.description}
              </p>

              {/* Dynamic theme accent line */}
              <div className={`h-2.5 w-28 rounded-full ${currentTheme.progressBg} transition-all duration-500 shadow-sm`}></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
