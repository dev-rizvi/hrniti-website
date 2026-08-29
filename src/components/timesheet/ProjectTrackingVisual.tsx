"use client";

import React, { useState } from "react";
import { Clock, Briefcase, CheckCircle2, Info } from "lucide-react";

export default function ProjectTrackingVisual() {
  const [hoveredTask, setHoveredTask] = useState<string | null>(null);

  const planningTasks = [
    { name: "Requirement Analysis", start: 0, width: 30, color: "bg-emerald-500", type: "Billable", hrs: "80h" },
    { name: "UI/UX Mockups & Design", start: 30, width: 40, color: "bg-purple-500", type: "Billable", hrs: "120h" },
  ];

  const devTasks = [
    { name: "Core Database Setup", start: 10, width: 45, color: "bg-amber-500", type: "Billable", hrs: "160h" },
    { name: "Frontend Components Integration", start: 55, width: 35, color: "bg-pink-500", type: "Billable", hrs: "120h" },
    { name: "Client Feedback Review", start: 90, width: 10, color: "bg-slate-400", type: "Non-Billable", hrs: "30h" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visual Gantt Timelines & Tasks
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Monitor real-time progress against your project estimates. Map task durations, track resource allocation, and optimize project profitability.
          </p>
        </div>

        {/* Visual Gantt Box */}
        <div className="max-w-4xl mx-auto bg-slate-950 rounded-3xl border border-slate-900 p-6 md:p-10 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

          {/* Chart Header */}
          <div className="flex justify-between items-center mb-8 border-b border-slate-900 pb-5">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500/10 p-2.5 rounded-xl border border-orange-500/20 text-orange-400">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-lg">Project Alpha Launch</h3>
                <div className="text-xs text-slate-400 font-medium">Timeline: Jan - Mar 2026</div>
              </div>
            </div>
            
            {/* Color Legends */}
            <div className="hidden md:flex gap-4 text-xs font-bold uppercase tracking-wider text-slate-400">
              <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Planning</span>
              <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Dev Setup</span>
              <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span> UI Design</span>
              <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span> Audit Logs</span>
            </div>
          </div>

          {/* Timeline Graphic */}
          <div className="relative pt-2 pb-6">
            {/* Lane 1: Planning */}
            <div className="mb-10 relative z-10">
              <div className="text-[10px] font-bold text-slate-400 mb-3 uppercase tracking-wider font-mono">Phase 1: Discovery & Planning</div>
              
              <div className="h-14 w-full bg-slate-900/50 rounded-2xl border border-slate-900 flex overflow-hidden relative items-center">
                
                {planningTasks.map((task, idx) => (
                  <div
                    key={idx}
                    className={`${task.color} h-full relative group cursor-pointer transition-all duration-300 hover:brightness-110 flex items-center justify-center`}
                    style={{ width: `${task.width}%`, left: `${task.start}%`, position: 'absolute' }}
                    onMouseEnter={() => setHoveredTask(task.name)}
                    onMouseLeave={() => setHoveredTask(null)}
                  >
                    <span className="text-[10px] font-bold text-white uppercase hidden md:inline truncate px-2 select-none">
                      {task.name} ({task.hrs})
                    </span>

                    {hoveredTask === task.name && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-[11px] py-2 px-3.5 rounded-xl shadow-xl whitespace-nowrap z-50 border border-slate-700 flex items-center gap-1.5 font-bold">
                        <Info className="h-3.5 w-3.5 text-orange-400" />
                        <span>{task.name} • {task.hrs} • <span className={task.type === 'Billable' ? 'text-emerald-400' : 'text-slate-400'}>{task.type}</span></span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Lane 2: Development */}
            <div className="relative z-10">
              <div className="text-[10px] font-bold text-slate-400 mb-3 uppercase tracking-wider font-mono">Phase 2: Agile Development</div>
              
              <div className="h-14 w-full bg-slate-900/50 rounded-2xl border border-slate-900 flex overflow-hidden relative items-center">
                
                {devTasks.map((task, idx) => (
                  <div
                    key={idx}
                    className={`${task.color} h-full relative group cursor-pointer transition-all duration-300 hover:brightness-110 flex items-center justify-center`}
                    style={{ width: `${task.width}%`, left: `${task.start}%`, position: 'absolute' }}
                    onMouseEnter={() => setHoveredTask(task.name)}
                    onMouseLeave={() => setHoveredTask(null)}
                  >
                    <span className="text-[10px] font-bold text-white uppercase hidden md:inline truncate px-2 select-none">
                      {task.name} ({task.hrs})
                    </span>

                    {hoveredTask === task.name && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-[11px] py-2 px-3.5 rounded-xl shadow-xl whitespace-nowrap z-50 border border-slate-700 flex items-center gap-1.5 font-bold">
                        <Info className="h-3.5 w-3.5 text-orange-400" />
                        <span>{task.name} • {task.hrs} • <span className={task.type === 'Billable' ? 'text-emerald-400' : 'text-slate-400'}>{task.type}</span></span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Footer metrics */}
          <div className="mt-6 pt-5 border-t border-slate-900 flex justify-between items-center text-sm">
            <div className="text-slate-400 font-bold">Total Estimated Budget: <span className="text-white font-mono font-black">510 hrs</span></div>
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold uppercase tracking-wider text-xs">
              <CheckCircle2 className="h-4.5 w-4.5" /> Project On Track
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
