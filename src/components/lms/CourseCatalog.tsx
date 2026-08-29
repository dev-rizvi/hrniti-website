"use client";

import React, { useState } from "react";
import { BookOpen, Clock } from "lucide-react";

interface Course {
  id: number;
  title: string;
  category: "compliance" | "leadership" | "technical";
  duration: string;
  modules: number;
  enrolled: number;
  rating: number;
  progress: number;
  description: string;
}

const coursesData: Course[] = [
  {
    id: 1,
    title: "POSH & Gender Sensitization at Workplace",
    category: "compliance",
    duration: "2h 30m",
    modules: 4,
    enrolled: 420,
    rating: 4.8,
    progress: 100,
    description: "Statutory workplace safety training as per Indian government regulations. Mandatory for all employee enrollments on Day 1."
  },
  {
    id: 2,
    title: "Information Security & Data Protection Basics",
    category: "compliance",
    duration: "1h 45m",
    modules: 3,
    enrolled: 512,
    rating: 4.7,
    progress: 75,
    description: "Core guidelines on data protection, secure password management, and phishing defense in corporate workspaces."
  },
  {
    id: 3,
    title: "First-Time Managers & Leadership Blueprint",
    category: "leadership",
    duration: "4h 15m",
    modules: 6,
    enrolled: 84,
    rating: 4.9,
    progress: 20,
    description: "Learn delegation techniques, constructive feedback frameworks, and conflict resolution basics for new management leaders."
  },
  {
    id: 4,
    title: "Advanced Excel & Data Visualization Tools",
    category: "technical",
    duration: "6h 00m",
    modules: 8,
    enrolled: 310,
    rating: 4.6,
    progress: 0,
    description: "Master pivots, lookup functions, dashboards, and reporting automation for business analysts."
  },
  {
    id: 5,
    title: "Product Knowledge & Sales Pitch Strategy",
    category: "technical",
    duration: "3h 20m",
    modules: 5,
    enrolled: 180,
    rating: 4.8,
    progress: 90,
    description: "Deep dive into HR Niti features, pricing slabs, integration modules, and objection handling."
  },
  {
    id: 6,
    title: "Strategic Decision Making & OKRs",
    category: "leadership",
    duration: "3h 00m",
    modules: 4,
    enrolled: 65,
    rating: 4.9,
    progress: 0,
    description: "Define actionable Objectives and Key Results that align seamlessly with core company growth vectors."
  }
];

export default function CourseCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "compliance" | "leadership" | "technical">("all");

  const filteredCourses = coursesData.filter(
    course => selectedCategory === "all" || course.category === selectedCategory
  );

  return (
    <section id="courses" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pre-Configured Courseware Templates
          </h2>
          <p className="text-slate-600 text-base">
            Pick from our default compliance catalogs, or publish bespoke employee handbooks, training manuals, and internal technical guides in seconds.
          </p>
        </div>

        {/* Filtering Tabs */}
        <div className="flex justify-center gap-2.5 mb-12 flex-wrap">
          {(["all", "compliance", "leadership", "technical"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all select-none cursor-pointer border ${
                selectedCategory === cat
                  ? "bg-slate-950 text-white border-slate-950 shadow-md"
                  : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat === "all" ? "All Courses" : cat === "technical" ? "Technical Skillup" : cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                    course.category === 'compliance' 
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                      : course.category === 'leadership'
                      ? 'bg-purple-50 text-purple-700 border-purple-100'
                      : 'bg-blue-50 text-blue-700 border-blue-100'
                  }`}>
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                    ★ <span>{course.rating}</span>
                  </div>
                </div>

                <h3 className="font-extrabold text-slate-900 text-lg leading-snug group-hover:text-emerald-700 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                  {course.description}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-6 space-y-4">
                <div className="flex justify-between text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4.5 w-4.5 text-slate-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="h-4.5 w-4.5 text-slate-400" />
                    <span>{course.modules} Modules</span>
                  </div>
                </div>

                {course.progress > 0 ? (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase">
                      <span>Ongoing progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden border border-slate-200">
                      <div 
                        className={`h-full rounded-full ${course.progress === 100 ? 'bg-emerald-500' : 'bg-emerald-600'}`} 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                    Not yet started
                  </div>
                )}

                <button 
                  type="button" 
                  className="w-full py-3 text-center text-xs font-bold text-slate-700 hover:text-white bg-slate-50 hover:bg-slate-950 rounded-xl transition-all border border-slate-200 hover:border-slate-950 cursor-pointer"
                >
                  {course.progress === 100 ? "Review Certificate" : course.progress > 0 ? "Continue Learning" : "Start Course"}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
