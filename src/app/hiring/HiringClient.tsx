'use client';

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/about/CTASection";
import { 
  Users, 
  Briefcase, 
  Sparkles, 
  CheckCircle, 
  ChevronDown, 
  UserCheck, 
  Zap, 
  Check,
  Mail,
  ArrowRight
} from "lucide-react";

interface Candidate {
  id: number;
  name: string;
  role: string;
  matchScore: number;
  skills: string[];
  stage: "sourced" | "applied" | "interviewing" | "offered" | "hired";
  email: string;
  source: string;
}

const initialCandidates: Candidate[] = [
  {
    id: 1,
    name: "Abhishek Sharma",
    role: "Senior React Developer",
    matchScore: 96,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    stage: "interviewing",
    email: "abhishek.sharma@example.com",
    source: "LinkedIn Premium"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "HR Generalist",
    matchScore: 92,
    skills: ["Talent Acquisition", "Onboarding", "POSH Compliance"],
    stage: "sourced",
    email: "priya.patel@example.com",
    source: "Indeed Jobs"
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    role: "Fullstack Engineer",
    matchScore: 89,
    skills: ["Node.js", "Express", "PostgreSQL", "Docker"],
    stage: "applied",
    email: "vikram.malhotra@example.com",
    source: "Direct Referral"
  },
  {
    id: 4,
    name: "Ananya Sen",
    role: "Lead UI/UX Designer",
    matchScore: 94,
    skills: ["Figma", "Design Systems", "Prototyping", "Wireframing"],
    stage: "offered",
    email: "ananya.sen@example.com",
    source: "Behance Portfolio"
  },
  {
    id: 5,
    name: "Rohan Kapoor",
    role: "DevOps Engineer",
    matchScore: 95,
    skills: ["AWS", "Terraform", "Kubernetes", "CI/CD Pipelines"],
    stage: "hired",
    email: "rohan.kapoor@example.com",
    source: "Naukri.com"
  },
  {
    id: 6,
    name: "Meera Nair",
    role: "Product Manager",
    matchScore: 87,
    skills: ["Agile/Scrum", "Product Roadmap", "Jira", "SQL"],
    stage: "applied",
    email: "meera.nair@example.com",
    source: "LinkedIn Jobs"
  }
];

interface MockJob {
  id: number;
  title: string;
  department: string;
  requiredSkills: string[];
  candidates: {
    name: string;
    score: number;
    skillsMatched: string[];
    skillsMissing: string[];
    verdict: "Strong Hire" | "Hire" | "Pass";
  }[];
}

const mockJobs: MockJob[] = [
  {
    id: 1,
    title: "Senior React Developer",
    department: "Engineering",
    requiredSkills: ["React", "TypeScript", "Next.js", "Redux Toolkit", "Jest"],
    candidates: [
      {
        name: "Abhishek Sharma",
        score: 96,
        skillsMatched: ["React", "TypeScript", "Next.js", "Redux Toolkit"],
        skillsMissing: ["Jest"],
        verdict: "Strong Hire"
      },
      {
        name: "Vikram Malhotra",
        score: 74,
        skillsMatched: ["React", "TypeScript"],
        skillsMissing: ["Next.js", "Redux Toolkit", "Jest"],
        verdict: "Pass"
      }
    ]
  },
  {
    id: 2,
    title: "Lead UI/UX Designer",
    department: "Design",
    requiredSkills: ["Figma", "Design Systems", "User Research", "Interaction Design"],
    candidates: [
      {
        name: "Ananya Sen",
        score: 94,
        skillsMatched: ["Figma", "Design Systems", "User Research"],
        skillsMissing: ["Interaction Design"],
        verdict: "Strong Hire"
      },
      {
        name: "Karan Mehta",
        score: 82,
        skillsMatched: ["Figma", "Interaction Design"],
        skillsMissing: ["Design Systems", "User Research"],
        verdict: "Hire"
      }
    ]
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Infrastructure",
    requiredSkills: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD"],
    candidates: [
      {
        name: "Rohan Kapoor",
        score: 98,
        skillsMatched: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD"],
        skillsMissing: [],
        verdict: "Strong Hire"
      },
      {
        name: "Sanjay Dutta",
        score: 68,
        skillsMatched: ["AWS", "Docker"],
        skillsMissing: ["Kubernetes", "Terraform", "CI/CD"],
        verdict: "Pass"
      }
    ]
  }
];

const faqs = [
  {
    question: "Can we publish jobs to multiple external job boards simultaneously?",
    answer: "Yes, with HR Niti's One-Click Syndication, you can distribute job ads to over 15+ channels, including LinkedIn, Indeed, ZipRecruiter, and Naukri.com, from a single centralized dashboard."
  },
  {
    question: "How does the AI Resume Parsing engine parse candidate information?",
    answer: "HR Niti uses advanced natural language processing (NLP) to extract candidate details like contact info, work history, skill sets, and education from PDF, DOCX, or text files, scoring them dynamically against job descriptions."
  },
  {
    question: "Can we customize our recruitment workflow stages?",
    answer: "Absolutely. You can customize the hiring pipeline stages (e.g., add technical assessment, panel round, HR screening) specifically for each job profile or department according to your organization's compliance guidelines."
  },
  {
    question: "Is there calendar integration for scheduling interviews?",
    answer: "Yes. HR Niti seamlessly integrates with Google Workspace, Microsoft Outlook, and Office 365, allowing recruiters to check interviewer availability, send direct Google Meet/Teams calendar links, and handle candidate feedback."
  }
];

export default function HiringClient() {
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(initialCandidates[0]);
  const [activeJobIdx, setActiveJobIdx] = useState<number>(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const moveCandidate = (id: number, newStage: Candidate["stage"]) => {
    const updated = candidates.map(c => {
      if (c.id === id) {
        const updatedCandidate = { ...c, stage: newStage };
        if (selectedCandidate && selectedCandidate.id === id) {
          setSelectedCandidate(updatedCandidate);
        }
        return updatedCandidate;
      }
      return c;
    });
    setCandidates(updated);
  };

  const currentJob = mockJobs[activeJobIdx];

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-600/25 rounded-full blur-3xl -mr-16 -mt-16 z-0"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl -ml-16 -mb-16 z-0"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" /> Complete Recruitment Lifecycle
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Hire Smarter, Faster & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">Scale Your Teams Effortlessly</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                Find great talent fast. Track applicants, screen resumes automatically, and send digital offer letters in one simple tool.
              </p>
              <div className="flex gap-4 pt-2">
                <Link 
                  href="/contact-us" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-emerald-600/20 hover:scale-[1.02]"
                >
                  Schedule ATS Demo
                </Link>
                <a 
                  href="#ats-board" 
                  className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-7 py-3.5 rounded-xl font-bold transition-all"
                >
                  Interactive Board
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-amber-600 rounded-3xl blur-xl opacity-20 transform rotate-3"></div>
              
              <div className="relative bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl p-6 space-y-5">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">AI Sourcing match</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">Role: Lead Dev</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3.5 bg-slate-900 border border-slate-800/80 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-amber-600 flex items-center justify-center font-bold text-white text-sm">
                        AS
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Abhishek Sharma</div>
                        <p className="text-[10px] text-slate-400 mt-0.5">Sourced via LinkedIn</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-emerald-400 font-bold text-xs">96% Match</span>
                      <p className="text-[9px] text-slate-400 mt-0.5 font-mono">Strong Fit</p>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                      <span>Skills Match Analytics</span>
                      <span>4 / 5 skills parsed</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {["React.js", "TypeScript", "Next.js", "Tailwind CSS"].map((s, idx) => (
                        <span key={idx} className="bg-slate-900 text-slate-200 border border-slate-800 text-[9px] px-2 py-0.5 rounded-md flex items-center gap-1 font-semibold">
                          <Check className="h-3 w-3 text-emerald-400" /> {s}
                        </span>
                      ))}
                      <span className="bg-slate-900/40 text-slate-400 border border-slate-800/60 text-[9px] px-2 py-0.5 rounded-md flex items-center gap-1 font-semibold line-through">
                        Jest / Testing
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/60">
                    <div className="bg-slate-900/50 p-2 rounded-lg text-center">
                      <span className="text-[9px] text-slate-450 block font-semibold uppercase">Experience</span>
                      <span className="text-xs font-bold text-white">5.4 Yrs</span>
                    </div>
                    <div className="bg-slate-900/50 p-2 rounded-lg text-center">
                      <span className="text-[9px] text-slate-450 block font-semibold uppercase">Tech Match</span>
                      <span className="text-xs font-bold text-emerald-400">Excellent</span>
                    </div>
                    <div className="bg-slate-900/50 p-2 rounded-lg text-center">
                      <span className="text-[9px] text-slate-450 block font-semibold uppercase">Est. SLA</span>
                      <span className="text-xs font-bold text-white">14 Days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Interactive ATS Kanban Board Section */}
      <section id="ats-board" className="py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Interactive Applicant Tracking System
            </h2>
            <p className="text-slate-650 text-sm md:text-base leading-relaxed">
              Track applicants at every step. Click any candidate below to view their skills, score, and contact details.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6.5xl mx-auto">
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-5 gap-3.5 items-stretch">
              {(["sourced", "applied", "interviewing", "offered", "hired"] as const).map(stage => {
                const stageCandidates = candidates.filter(c => c.stage === stage);
                
                return (
                  <div key={stage} className="bg-slate-100/80 rounded-2xl p-3 border border-slate-200/50 flex flex-col min-h-[400px]">
                    <div className="flex justify-between items-center mb-4 border-b border-slate-200/80 pb-2">
                      <h3 className="font-extrabold text-slate-700 text-xs uppercase tracking-wider">{stage}</h3>
                      <span className="bg-slate-200 text-slate-600 font-bold text-[10px] px-2 py-0.5 rounded-full">
                        {stageCandidates.length}
                      </span>
                    </div>

                    <div className="space-y-3 flex-1 overflow-y-auto">
                      {stageCandidates.map(candidate => (
                        <div 
                          key={candidate.id}
                          onClick={() => setSelectedCandidate(candidate)}
                          className={`bg-white rounded-xl p-3 border shadow-sm hover:shadow transition-all cursor-pointer ${
                            selectedCandidate?.id === candidate.id 
                              ? "border-emerald-600 ring-2 ring-emerald-500/10 scale-[1.01]" 
                              : "border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <div className="space-y-1.5">
                            <h4 className="font-bold text-slate-900 text-xs leading-tight">{candidate.name}</h4>
                            <p className="text-[10px] text-slate-500 truncate">{candidate.role}</p>
                            
                            <div className="flex justify-between items-center pt-2">
                              <span className="text-[9px] font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                                {candidate.source}
                              </span>
                              <span className={`text-[10px] font-extrabold ${
                                candidate.matchScore >= 93 
                                  ? "text-emerald-600" 
                                  : "text-amber-600"
                              }`}>
                                {candidate.matchScore}% Match
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}

                      {stageCandidates.length === 0 && (
                        <div className="h-full flex items-center justify-center border-2 border-dashed border-slate-200 rounded-xl p-4">
                          <span className="text-[10px] text-slate-400 font-medium italic text-center">Empty Stage</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl shadow-md p-6 space-y-6 flex flex-col justify-between">
              {selectedCandidate ? (
                <div className="space-y-6">
                  <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-amber-600 flex items-center justify-center font-bold text-white text-lg">
                      {selectedCandidate.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base leading-tight">{selectedCandidate.name}</h3>
                      <p className="text-xs text-slate-500 mt-1 font-semibold">{selectedCandidate.role}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{selectedCandidate.email}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">AI Match Score</span>
                      <span className="text-xl font-black text-emerald-600">{selectedCandidate.matchScore}% Match</span>
                    </div>
                    <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">Sourcing Origin</span>
                      <span className="text-xs font-extrabold text-slate-700 block mt-1.5">{selectedCandidate.source}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wide">Key Skill Assessment</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCandidate.skills.map((skill, idx) => (
                        <span key={idx} className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] px-2.5 py-1 rounded-md font-bold flex items-center gap-1">
                          <CheckCircle className="h-3 w-3 text-emerald-600" /> {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wide">Pipeline Operations</h4>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {(["sourced", "applied", "interviewing", "offered", "hired"] as const).map(stageOption => {
                        const isCurrent = selectedCandidate.stage === stageOption;
                        return (
                          <button
                            key={stageOption}
                            onClick={() => moveCandidate(selectedCandidate.id, stageOption)}
                            className={`py-2 px-3 rounded-xl text-[10px] font-bold uppercase tracking-wider text-center border cursor-pointer transition-colors ${
                              isCurrent 
                                ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                                : "bg-white text-slate-650 border-slate-200 hover:bg-slate-50"
                            }`}
                          >
                            {stageOption}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8 space-y-4">
                  <Users className="h-10 w-10 text-slate-350" />
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">No Candidate Selected</h4>
                    <p className="text-xs text-slate-400 mt-1">Select a candidate card in the pipeline view to inspect analytics.</p>
                  </div>
                </div>
              )}

              {selectedCandidate && (
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>Candidate ID: ATS-{selectedCandidate.id}829</span>
                  <span className="text-emerald-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active
                  </span>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive AI Resume Screener */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-emerald-400 font-bold uppercase tracking-wider text-sm flex items-center gap-1">
                <Sparkles className="h-4.5 w-4.5" /> NLP Parsing
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                AI-Powered Candidate Scoring & Assessment
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                Save hours checking resumes by hand. HR Niti reads CVs automatically and matches candidate skills directly to your open job roles.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Smart skill matching to highlight top candidates fast.",
                  "Instant scoring based on work experience and job titles.",
                  "Automatic flags to filter candidates who meet your core needs."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-200 font-medium">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 relative flex flex-col justify-center">
              <div className="w-full max-w-lg bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="space-y-1">
                    <h3 className="text-sm font-extrabold text-white">AI Screening Simulator</h3>
                    <p className="text-[10px] text-slate-400 font-medium">Select a Job Profile below to test candidate scoring</p>
                  </div>
                  <Briefcase className="h-5 w-5 text-emerald-500" />
                </div>

                <div className="flex gap-2 border-b border-slate-900 pb-3 flex-wrap">
                  {mockJobs.map((job, idx) => (
                    <button
                      key={job.id}
                      onClick={() => setActiveJobIdx(idx)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                        activeJobIdx === idx 
                          ? "bg-emerald-600 text-white" 
                          : "bg-slate-900 text-slate-400 hover:bg-slate-800"
                      }`}
                    >
                      {job.title}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-900/60 p-4 border border-slate-800/80 rounded-2xl space-y-3">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-slate-350">Job Requirements:</span>
                      <span className="text-slate-400 font-mono text-[10px] bg-slate-950 border border-slate-800 px-2 py-0.5 rounded uppercase">
                        {currentJob.department}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {currentJob.requiredSkills.map((req, idx) => (
                        <span key={idx} className="bg-slate-950 text-slate-300 border border-slate-800/80 text-[9px] px-2 py-0.5 rounded font-mono">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Parser Recommendations</h4>
                    
                    {currentJob.candidates.map((cand, idx) => (
                      <div key={idx} className="bg-slate-900/40 border border-slate-800/50 p-4 rounded-2xl flex flex-col md:flex-row justify-between gap-4">
                        <div className="space-y-2.5 flex-1">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-white">{cand.name}</span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                              cand.verdict === 'Strong Hire' 
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                : cand.verdict === 'Hire'
                                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                : 'bg-red-500/10 text-red-400 border border-red-500/20'
                            }`}>
                              {cand.verdict}
                            </span>
                          </div>

                          <div className="space-y-1">
                            <div className="flex flex-wrap gap-1">
                              {cand.skillsMatched.map((m, i) => (
                                <span key={i} className="text-[8.5px] bg-emerald-500/5 text-emerald-400 border border-emerald-500/10 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                  ✓ {m}
                                </span>
                              ))}
                              {cand.skillsMissing.map((m, i) => (
                                <span key={i} className="text-[8.5px] bg-red-500/5 text-red-400 border border-red-500/10 px-1.5 py-0.5 rounded flex items-center gap-0.5 line-through">
                                  ✗ {m}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-center justify-center bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-center md:min-w-[90px]">
                          <span className="text-[9px] text-slate-400 block font-semibold uppercase">Score</span>
                          <span className={`text-base font-black ${
                            cand.score >= 90 ? 'text-emerald-400' : 'text-amber-400'
                          }`}>{cand.score}%</span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Collaborative Decision */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm space-y-5 relative">
              <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-2">
                  <UserCheck className="h-4.5 w-4.5 text-emerald-600" /> Hired-to-Onboard Transition
                </span>
                <span className="text-[9px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">1-Click Core Sync</span>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col gap-3">
                  <div className="bg-white border border-slate-200 p-3.5 rounded-xl shadow-xs">
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">ATS Record Candidate</span>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs font-extrabold text-slate-800">Rohan Kapoor</span>
                      <span className="text-[10px] text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded font-semibold">Stage: Offered</span>
                    </div>
                  </div>

                  <div className="flex justify-center my-0.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                      <ArrowRight className="h-4.5 w-4.5 text-emerald-600 rotate-90 md:rotate-0" />
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 p-3.5 rounded-xl shadow-xs border-l-4 border-l-emerald-500">
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">HRMS Employee Database Profile</span>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs font-extrabold text-slate-800">Rohan Kapoor (Emp #HN-8293)</span>
                      <span className="text-[10px] text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded font-semibold">Active Employee</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-emerald-50/50 border border-emerald-100 rounded-2xl text-[11px] text-emerald-800 leading-relaxed font-medium">
                  💡 <strong>Automated Operations:</strong> When you mark a candidate as <em>Hired</em> in the pipeline, HR Niti automatically duplicates their resume attachments, email history, and onboarding information to create a brand new Core HR record. No copy-pasting required!
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <Zap className="h-3.5 w-3.5" /> Operations Efficiency
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Seamless Transition from Candidate to Active Employee
              </h2>
              <p className="text-slate-650 leading-relaxed text-base">
                Hiring does not end when an offer is signed. HR Niti turns hired candidates into active employee records with a single click.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Automated Offer Letters</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Send digital offer letters that candidates can sign on any device.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Simple Onboarding Docs</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Collect key joining documents and form details before Day 1 starts.
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
              ATS & Hiring FAQs
            </h2>
            <p className="text-slate-650">
              Everything you need to know about setting up applicant tracking and automated job syndication.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none cursor-pointer select-none"
                >
                  <span className="font-extrabold text-slate-900 pr-4 text-sm md:text-base">{faq.question}</span>
                  <ChevronDown className={`h-4.5 w-4.5 text-slate-400 shrink-0 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeFaq === idx ? 'max-h-48 border-t border-slate-100' : 'max-h-0'
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
