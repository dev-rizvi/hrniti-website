"use client";
import React, { useState } from "react";
import { 
  BarChart3, Users, CheckCircle, 
  ShieldCheck, RefreshCw, BarChart2, ShieldAlert, Sparkles
} from "lucide-react";
import confetti from "canvas-confetti";

type Dept = 'all' | 'engineering' | 'sales' | 'marketing';

export default function AnalyticsDashboardSimulator() {
  const [activeTab, setActiveTab] = useState<'headcount' | 'attrition' | 'diversity'>('headcount');

  // Interactive state: Headcount department filter
  const [selectedDept, setSelectedDept] = useState<Dept>('all');

  // Interactive state: Attrition mitigation
  const [isMitigated, setIsMitigated] = useState<boolean>(false);
  const [mitigating, setMitigating] = useState<boolean>(false);

  // Interactive state: Diversity pay gap correction
  const [isPayGapBalanced, setIsPayGapBalanced] = useState<boolean>(false);

  const deptData = {
    all: { count: 450, cost: "2.8 Cr", rate: "8.5%", progress: 100 },
    engineering: { count: 120, cost: "1.2 Cr", rate: "4.2%", progress: 43 },
    sales: { count: 200, cost: "95 L", rate: "12.8%", progress: 34 },
    marketing: { count: 130, cost: "65 L", rate: "7.4%", progress: 23 }
  };

  const handleMitigateRisk = () => {
    if (isMitigated || mitigating) return;
    setMitigating(true);
    setTimeout(() => {
      setMitigating(false);
      setIsMitigated(true);
      confetti({
        particleCount: 50,
        spread: 40,
        colors: ["#10B981", "#34D399"]
      });
    }, 1200);
  };

  const handleTogglePayGap = () => {
    setIsPayGapBalanced(prev => {
      const next = !prev;
      if (next) {
        confetti({
          particleCount: 60,
          spread: 45,
          colors: ["#8B5CF6", "#A78BFA"]
        });
      }
      return next;
    });
  };

  const currentDept = deptData[selectedDept];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col justify-between min-h-[460px] relative overflow-hidden text-slate-100">
      
      {/* Mock browser header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <span className="text-[10px] text-slate-500 font-mono ml-2">portal.hrniti.com/analytics/board</span>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-800 px-2.5 py-1 rounded-md text-[10px] font-mono text-emerald-400 border border-slate-800">
          <BarChart3 className="w-3.5 h-3.5" />
          <span>DATA ENGINE LIVE</span>
        </div>
      </div>

      {/* Simulator Workspace layout */}
      <div className="flex-1 grid grid-cols-12 gap-5 items-stretch min-h-[300px]">
        
        {/* Sidebar tabs */}
        <div className="col-span-4 bg-slate-950/80 border border-slate-800 p-2.5 rounded-2xl flex flex-col gap-1.5 justify-center">
          {[
            { id: 'headcount', label: 'Headcount & Cost', icon: Users },
            { id: 'attrition', label: 'Attrition Risk', icon: ShieldAlert },
            { id: 'diversity', label: 'Diversity & Equity', icon: BarChart2 }
          ].map((tab) => {
            const TabIcon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`analytics-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id as 'headcount' | 'attrition' | 'diversity')}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer
                  ${isSelected 
                    ? 'bg-emerald-600/10 border border-emerald-500/30 text-emerald-400' 
                    : 'text-slate-500 hover:text-slate-300 hover:bg-slate-900'
                  }
                `}
              >
                <TabIcon className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab display pane */}
        <div className="col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-center relative">
          
          {/* TAB 1: HEADCOUNT & COST */}
          {activeTab === 'headcount' && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-slate-500 uppercase font-black tracking-wider">Metric filters</span>
                <div className="flex gap-1 text-[9px]">
                  {(['all', 'engineering', 'sales', 'marketing'] as Dept[]).map((dept) => (
                    <button
                      key={dept}
                      id={`dept-filter-${dept}`}
                      onClick={() => setSelectedDept(dept)}
                      className={`px-2 py-0.5 rounded capitalize ${
                        selectedDept === dept 
                          ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold' 
                          : 'text-slate-500 bg-slate-900 border border-transparent hover:text-slate-300'
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>

              {/* Headcount Stat Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
                  <span className="text-[8px] text-slate-500 block font-bold uppercase">Active Headcount</span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-base font-bold text-slate-200">{currentDept.count}</span>
                    <span className="text-[8px] text-emerald-400 font-medium">+5% Mom</span>
                  </div>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
                  <span className="text-[8px] text-slate-500 block font-bold uppercase">Payroll Cost</span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-base font-bold text-slate-200">INR {currentDept.cost}</span>
                    <span className="text-[8px] text-slate-500">monthly</span>
                  </div>
                </div>
              </div>

              {/* Progress bar visual */}
              <div className="space-y-1 bg-slate-900/40 p-2.5 rounded-xl border border-slate-800">
                <div className="flex justify-between text-[9px] text-slate-400 font-semibold">
                  <span>Proportion of Total Budget</span>
                  <span>{currentDept.progress}%</span>
                </div>
                <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: `${currentDept.progress}%` }}></div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ATTRITION PREDICTOR */}
          {activeTab === 'attrition' && (
            <div className="space-y-3.5 animate-fade-in">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wide">AI Flight Risk Predictor</span>
                <span className="text-[9px] text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded font-bold">2 DETECTED</span>
              </div>

              {/* Employees List */}
              <div className="space-y-2">
                <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl flex items-center justify-between text-[11px]">
                  <div>
                    <span className="font-bold text-slate-300 block">Aarav Sharma</span>
                    <span className="text-[9px] text-slate-500">Software Engineer • High Impact Role</span>
                  </div>
                  <div className="text-right">
                    <span className={`font-mono font-bold block ${isMitigated ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {isMitigated ? '21% Risk' : '82% Risk'}
                    </span>
                    <span className="text-[8px] text-slate-500 block">estimated probability</span>
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl flex items-center justify-between text-[11px]">
                  <div>
                    <span className="font-bold text-slate-300 block">Priya Patel</span>
                    <span className="text-[9px] text-slate-500">QA Analyst • Key Tech Owner</span>
                  </div>
                  <div className="text-right">
                    <span className={`font-mono font-bold block ${isMitigated ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {isMitigated ? '15% Risk' : '71% Risk'}
                    </span>
                    <span className="text-[8px] text-slate-500 block">estimated probability</span>
                  </div>
                </div>
              </div>

              {/* Retention proposal button */}
              <button
                onClick={handleMitigateRisk}
                id="attrition-mitigate-btn"
                disabled={isMitigated || mitigating}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-900 text-white disabled:text-slate-500 font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 text-xs transition-colors cursor-pointer"
              >
                {mitigating ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Calculating retention revisions...</span>
                  </>
                ) : isMitigated ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Retention Proposal Applied! Risk Dropped.</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    <span>Trigger Retention Mitigation Proposals</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* TAB 3: DIVERSITY & EQUITY */}
          {activeTab === 'diversity' && (
            <div className="space-y-4 animate-fade-in text-[10px]">
              <div className="flex justify-between items-center bg-slate-900/60 border border-slate-800 p-2.5 rounded-xl">
                <div>
                  <span className="text-[8px] text-slate-500 block uppercase font-bold tracking-wider">Gender Diversity Index</span>
                  <span className="text-xs font-bold text-slate-300">42% Female · 55% Male · 3% Other</span>
                </div>
                <div className="text-right">
                  <span className="text-[8px] text-slate-500 block">Overall Score</span>
                  <span className="font-bold text-emerald-400">8.8 / 10</span>
                </div>
              </div>

              {/* Pay Gap metrics */}
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[8px] text-slate-500 block font-bold uppercase">Gender Pay Gap Index</span>
                  <span className="text-[9px] text-slate-400 block mt-0.5">Underpaid ratio for comparable roles</span>
                </div>
                
                <div className="text-right">
                  <span className={`font-mono text-base font-black ${isPayGapBalanced ? 'text-emerald-400 animate-scale-up' : 'text-amber-500'}`}>
                    {isPayGapBalanced ? '0.4%' : '14.2%'}
                  </span>
                  <span className={`block text-[8px] font-bold ${isPayGapBalanced ? 'text-emerald-400/80' : 'text-amber-600'}`}>
                    {isPayGapBalanced ? 'BALANCED' : 'IMBALANCED'}
                  </span>
                </div>
              </div>

              {/* Equal Pay toggle button */}
              <button
                onClick={handleTogglePayGap}
                id="diversity-equal-pay-btn"
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border cursor-pointer ${
                  isPayGapBalanced 
                    ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' 
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white border-transparent shadow-lg shadow-emerald-700/5'
                }`}
              >
                {isPayGapBalanced ? (
                  <>
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Reset Pay Equity Simulation</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Apply Equal Pay Adjustments</span>
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </div>

      {/* Simulator static info footer */}
      <div className="text-center text-[10px] text-slate-500 border-t border-slate-800/50 pt-4 mt-6">
        {activeTab === 'headcount' && "Payroll projections automatically reconcile with direct ATS and core operations ledgers."}
        {activeTab === 'attrition' && "AI engine analyzes engagement indicators, tenure milestones, and benchmark gaps."}
        {activeTab === 'diversity' && "Aggregated data systems guarantee full compliance audits and pay equity parity."}
      </div>

    </div>
  );
}
