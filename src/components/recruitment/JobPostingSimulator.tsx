"use client";
import React, { useState } from "react";
import { 
  Globe, Check, Clock, Send, CheckCircle2, RefreshCw
} from "lucide-react";
import confetti from "canvas-confetti";

interface BoardStatus {
  id: string;
  name: string;
  status: 'idle' | 'posting' | 'success';
}

export default function JobPostingSimulator() {
  const [step, setStep] = useState<'edit' | 'posting' | 'success'>('edit');
  const [jobTitle, setJobTitle] = useState<string>("Senior React Developer");
  const [department, setDepartment] = useState<string>("Engineering");
  const [location, setLocation] = useState<string>("Mumbai, IN");

  const [boards, setBoards] = useState<BoardStatus[]>([
    { id: 'linkedin', name: 'LinkedIn Jobs', status: 'idle' },
    { id: 'indeed', name: 'Indeed', status: 'idle' },
    { id: 'glassdoor', name: 'Glassdoor', status: 'idle' },
    { id: 'google', name: 'Google Jobs', status: 'idle' }
  ]);

  const handleStartPublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobTitle.trim()) {
      alert("Please specify a job title");
      return;
    }
    
    // Reset board statuses and transition step
    setBoards(prev => prev.map(b => ({ ...b, status: 'idle' })));
    setStep('posting');

    // Simulate step 0: LinkedIn
    setTimeout(() => {
      setBoards(prev => {
        const copy = [...prev];
        copy[0].status = 'posting';
        return copy;
      });
    }, 100);

    setTimeout(() => {
      setBoards(prev => {
        const copy = [...prev];
        copy[0].status = 'success';
        copy[1].status = 'posting';
        return copy;
      });
      confetti({ particleCount: 15, spread: 30, origin: { y: 0.6 } });
    }, 900);

    // Simulate step 1: Indeed
    setTimeout(() => {
      setBoards(prev => {
        const copy = [...prev];
        copy[1].status = 'success';
        copy[2].status = 'posting';
        return copy;
      });
      confetti({ particleCount: 15, spread: 30, origin: { y: 0.6 } });
    }, 1700);

    // Simulate step 2: Glassdoor
    setTimeout(() => {
      setBoards(prev => {
        const copy = [...prev];
        copy[2].status = 'success';
        copy[3].status = 'posting';
        return copy;
      });
      confetti({ particleCount: 15, spread: 30, origin: { y: 0.6 } });
    }, 2500);

    // Simulate step 3: Google Jobs
    setTimeout(() => {
      setBoards(prev => {
        const copy = [...prev];
        copy[3].status = 'success';
        return copy;
      });
      confetti({ particleCount: 15, spread: 30, origin: { y: 0.6 } });
    }, 3300);

    // Complete all
    setTimeout(() => {
      setStep('success');
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    }, 3700);
  };

  const handleReset = () => {
    setBoards(prev => prev.map(b => ({ ...b, status: 'idle' })));
    setStep('edit');
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col justify-between min-h-[460px] relative overflow-hidden text-slate-100">
      
      {/* Mock browser header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <span className="text-[10px] text-slate-500 font-mono ml-2">portal.hrniti.com/recruitment/post</span>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-800 px-2.5 py-1 rounded-md text-[10px] font-mono text-violet-400 border border-slate-800">
          <Globe className="w-3.5 h-3.5" />
          <span>MULTI-BOARD POSTING READY</span>
        </div>
      </div>

      {/* Dynamic step states */}
      <div className="flex-1 flex flex-col justify-center">

        {/* STEP 1: EDIT / PRE-PUBLISH FORM */}
        {step === 'edit' && (
          <form onSubmit={handleStartPublish} className="space-y-4 animate-fade-in">
            <div className="space-y-3">
              <div>
                <label className="text-[10px] font-bold text-slate-400 block mb-1.5">Job Title</label>
                <input 
                  type="text" 
                  id="job-title-input"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="bg-slate-950 border border-slate-800 text-white text-xs px-3.5 py-2.5 rounded-xl w-full focus:outline-none focus:border-violet-500 transition-colors"
                  placeholder="e.g. Lead Software Engineer"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block mb-1.5">Department</label>
                  <select 
                    id="job-dept-select"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="bg-slate-950 border border-slate-800 text-white text-xs p-2.5 rounded-xl w-full focus:outline-none cursor-pointer"
                  >
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>Product Management</option>
                    <option>Sales</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block mb-1.5">Location</label>
                  <input 
                    type="text" 
                    id="job-loc-input"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="bg-slate-950 border border-slate-800 text-white text-xs px-3.5 py-2.5 rounded-xl w-full focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl">
              <span className="text-[9px] font-bold text-slate-500 block mb-2 uppercase tracking-wide">Target Job Boards</span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {boards.map((b) => (
                  <div key={b.id} className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                    <span className="text-slate-300 font-medium">{b.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="submit"
              id="post-job-submit"
              className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-violet-600/10 transition-all cursor-pointer"
            >
              <span>Publish Job to 4 Boards</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* STEP 2: POSTING PROGRESS */}
        {step === 'posting' && (
          <div className="space-y-5 animate-fade-in">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                <div>
                  <h4 className="font-bold text-xs text-slate-200">{jobTitle}</h4>
                  <span className="text-[9px] text-slate-500 font-mono">{department} • {location}</span>
                </div>
                <RefreshCw className="w-4 h-4 text-violet-400 animate-spin" />
              </div>

              <div className="space-y-2.5">
                {boards.map((b) => (
                  <div key={b.id} className="bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl flex items-center justify-between text-xs transition-all duration-300">
                    <span className="text-slate-300 font-semibold">{b.name}</span>
                    {b.status === 'success' ? (
                      <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1 font-bold">
                        <Check className="w-3.5 h-3.5" />
                        <span>LIVE</span>
                      </span>
                    ) : b.status === 'posting' ? (
                      <span className="text-[10px] text-violet-400 font-mono flex items-center gap-1 font-semibold">
                        <Clock className="w-3.5 h-3.5 animate-spin" />
                        <span>PUBLISHING...</span>
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-600 font-mono">PENDING QUEUE</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: SUCCESS & ANALYTICS */}
        {step === 'success' && (
          <div className="space-y-5 animate-fade-in">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4">
              <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 p-3.5 rounded-xl text-emerald-400">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-xs text-slate-200">Role Distributed Successfully!</h4>
                  <p className="text-[9px] text-slate-400">Distribution pipeline complete. Postings verified live.</p>
                </div>
              </div>

              {/* Analytics preview */}
              <div className="space-y-3">
                <span className="text-[9px] font-bold text-slate-500 block uppercase tracking-wide">Candidate Distribution Share</span>
                <div className="space-y-2">
                  {[
                    { name: 'LinkedIn Jobs', percentage: 45, color: 'bg-indigo-500' },
                    { name: 'Indeed', percentage: 30, color: 'bg-emerald-500' },
                    { name: 'Glassdoor', percentage: 15, color: 'bg-amber-500' },
                    { name: 'Google Jobs', percentage: 10, color: 'bg-pink-500' }
                  ].map((stat) => (
                    <div key={stat.name} className="space-y-1">
                      <div className="flex justify-between text-[9px] font-semibold text-slate-400">
                        <span>{stat.name}</span>
                        <span>{stat.percentage}% expected traffic</span>
                      </div>
                      <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                        <div className={`h-full ${stat.color}`} style={{ width: `${stat.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleReset}
              id="post-job-reset"
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 border border-slate-700 transition-all cursor-pointer"
            >
              <span>Post Another Role</span>
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>

      {/* Simulator static info footer */}
      <div className="text-center text-[10px] text-slate-500 border-t border-slate-800/50 pt-4 mt-6">
        {step === 'edit' && "Select boards to distribute roles across global and local job boards automatically."}
        {step === 'posting' && "Securing API channels and compiling metadata layout structure."}
        {step === 'success' && "Posting confirmed. Application routing handles candidate submissions back to central ATS."}
      </div>

    </div>
  );
}
