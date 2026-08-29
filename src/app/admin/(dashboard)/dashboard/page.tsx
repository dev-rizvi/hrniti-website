'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Mail, 
  AlertCircle, 
  DollarSign, 
  ArrowRight, 
  Plus, 
  Eye, 
  Edit, 
  Loader2, 
  Users, 
  Settings, 
  ExternalLink,
  CheckCircle2,
  Trash2,
  Calendar,
  Sparkles,
  Phone,
  Copy,
  Check,
  TrendingUp,
  ListTodo,
  FolderOpen
} from 'lucide-react';
import { 
  getDashboardStatsAction, 
  updateInquiryStatusAction, 
  deleteInquiryAction 
} from './actions';

interface TaskItem {
  id: string;
  text: string;
  completed: boolean;
}

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any>(null);
  
  // Interactive UI states
  const [greeting, setGreeting] = useState('Welcome back');
  const [currentDate, setCurrentDate] = useState('');
  const [activeInquiry, setActiveInquiry] = useState<any | null>(null);
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  // Checklist states
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [newTaskText, setNewTaskText] = useState('');

  // Date and Time Init
  useEffect(() => {
    // 1. Time-based greeting
    const hrs = new Date().getHours();
    if (hrs < 12) setGreeting('Good Morning');
    else if (hrs < 17) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');

    // 2. Full date
    const date = new Date().toLocaleDateString(undefined, { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    setCurrentDate(date);
  }, []);

  // Fetch Stats data from Prisma
  const loadStats = async () => {
    try {
      const res = await getDashboardStatsAction();
      if (res.success && res.stats) {
        setStats(res.stats);
        
        // Auto tasks generation once data loads (only if checklist is empty in localStorage)
        const stored = localStorage.getItem('hrniti_dashboard_tasks');
        if (!stored) {
          const autoTasks: TaskItem[] = [];
          if (res.stats.newInquiriesCount > 0) {
            autoTasks.push({
              id: 'task-inq',
              text: `Respond to new inquiries (${res.stats.newInquiriesCount} pending)`,
              completed: false
            });
          }
          if (res.stats.blogPublishCounts.draft > 0) {
            autoTasks.push({
              id: 'task-drafts',
              text: `Review and publish draft articles (${res.stats.blogPublishCounts.draft} drafts)`,
              completed: false
            });
          }
          autoTasks.push({
            id: 'task-pricing',
            text: 'Audit pricing feature tier comparison values',
            completed: false
          });
          setTasks(autoTasks);
          localStorage.setItem('hrniti_dashboard_tasks', JSON.stringify(autoTasks));
        }
      }
    } catch (err) {
      console.error('Error fetching dashboard stats:', err);
    } finally {
      setLoading(false);
    }
  };

  // Load checklist from Local Storage
  useEffect(() => {
    const stored = localStorage.getItem('hrniti_dashboard_tasks');
    if (stored) {
      setTasks(JSON.parse(stored));
    }
    loadStats();
  }, []);

  // Update localStorage helper
  const saveTasksToStorage = (updatedTasks: TaskItem[]) => {
    setTasks(updatedTasks);
    localStorage.setItem('hrniti_dashboard_tasks', JSON.stringify(updatedTasks));
  };

  // Add a task
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    const newTask: TaskItem = {
      id: `task-${Date.now()}`,
      text: newTaskText.trim(),
      completed: false
    };
    saveTasksToStorage([...tasks, newTask]);
    setNewTaskText('');
  };

  // Toggle task complete status
  const handleToggleTask = (id: string) => {
    const updated = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    saveTasksToStorage(updated);
  };

  // Delete task
  const handleDeleteTask = (id: string) => {
    const updated = tasks.filter(t => t.id !== id);
    saveTasksToStorage(updated);
  };

  // Change Inquiry Status Inline
  const handleStatusChange = async (id: number, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await updateInquiryStatusAction(id, newStatus);
      if (res.success) {
        // Refresh local stats representation
        await loadStats();
        
        // Update active modal representation if open
        if (activeInquiry && activeInquiry.id === id) {
          setActiveInquiry((prev: any) => prev ? { ...prev, status: newStatus } : null);
        }
      }
    } catch (err) {
      console.error('Failed to change status:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  // Delete Inquiry
  const handleDeleteInquiry = async (id: number) => {
    if (!confirm('Are you sure you want to delete this inquiry permanently?')) return;
    try {
      const res = await deleteInquiryAction(id);
      if (res.success) {
        setActiveInquiry(null);
        await loadStats();
      }
    } catch (err) {
      console.error('Failed to delete inquiry:', err);
    }
  };

  // Copy details helper
  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(type);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Custom SVG line calculations
  const renderSVGChart = () => {
    if (!stats || !stats.chartData || stats.chartData.length === 0) return null;
    
    const maxVal = Math.max(...stats.chartData.map((d: any) => d.count), 4); // Min scale is 4
    const chartWidth = 600;
    const chartHeight = 160;
    const paddingLeft = 30;
    const paddingRight = 30;
    const paddingTop = 20;
    const paddingBottom = 30;
    
    const usableWidth = chartWidth - paddingLeft - paddingRight;
    const usableHeight = chartHeight - paddingTop - paddingBottom;
    
    // Points translation
    const points = stats.chartData.map((d: any, i: number) => {
      const x = paddingLeft + (i / (stats.chartData.length - 1)) * usableWidth;
      const y = chartHeight - paddingBottom - (d.count / maxVal) * usableHeight;
      return { x, y, label: d.label, count: d.count };
    });
    
    // Create polyline/path string
    const linePath = points.map((p: any, i: number) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
    
    // Translucent gradient area path string
    const areaPath = points.length > 0 
      ? `${linePath} L ${points[points.length - 1].x} ${chartHeight - paddingBottom} L ${points[0].x} ${chartHeight - paddingBottom} Z`
      : '';

    return (
      <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full text-emerald-600">
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        
        {/* Horizontal gridlines */}
        {[0, 0.25, 0.5, 0.75, 1].map((r, idx) => {
          const y = paddingTop + r * usableHeight;
          const valLabel = Math.round(maxVal - r * maxVal);
          return (
            <g key={idx} className="opacity-40">
              <line 
                x1={paddingLeft} 
                y1={y} 
                x2={chartWidth - paddingRight} 
                y2={y} 
                stroke="#e2e8f0" 
                strokeWidth="1" 
                strokeDasharray="4 4" 
              />
              <text 
                x={paddingLeft - 8} 
                y={y + 4} 
                fill="#94a3b8" 
                fontSize="9" 
                fontWeight="bold" 
                textAnchor="end"
              >
                {valLabel}
              </text>
            </g>
          );
        })}

        {/* Dynamic paths */}
        {areaPath && (
          <path d={areaPath} fill="url(#chartGradient)" />
        )}
        {linePath && (
          <path d={linePath} fill="none" stroke="#006B3F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        )}

        {/* Point nodes */}
        {points.map((p: any, idx: number) => (
          <g key={idx} className="group/node cursor-pointer">
            <circle 
              cx={p.x} 
              cy={p.y} 
              r="4.5" 
              fill="#ffffff" 
              stroke="#006B3F" 
              strokeWidth="2.5" 
              className="transition-transform hover:scale-125 duration-200"
            />
            {/* Soft background hover ring */}
            <circle 
              cx={p.x} 
              cy={p.y} 
              r="9" 
              fill="#10b981" 
              fillOpacity="0"
              className="hover:fill-opacity-10 transition-all duration-200"
            />
            <text
              x={p.x}
              y={p.y - 10}
              textAnchor="middle"
              fill="#0f172a"
              fontSize="9"
              fontWeight="extrabold"
              className="opacity-0 group-hover/node:opacity-100 transition-opacity bg-slate-900 duration-200"
            >
              {p.count}
            </text>
            
            {/* X Axis Labels */}
            <text
              x={p.x}
              y={chartHeight - 10}
              textAnchor="middle"
              fill="#64748b"
              fontSize="9"
              fontWeight="bold"
            >
              {p.label}
            </text>
          </g>
        ))}
      </svg>
    );
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      
      {/* Header Block */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
              {greeting}, Admin 👋
            </h1>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200/60 rounded-full text-[10px] font-extrabold text-[#006B3F] animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Live Node
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            Portal Control Center status updated for {currentDate}.
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <a 
            href="/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition-all cursor-pointer"
          >
            Open Live Website <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {loading ? (
        <div className="bg-white border border-slate-100 rounded-3xl p-20 flex items-center justify-center text-slate-400 gap-2 shadow-sm">
          <Loader2 className="h-5 w-5 animate-spin text-[#006B3F]" />
          <span className="text-sm font-semibold">Loading dashboard stats command center...</span>
        </div>
      ) : (
        <>
          {/* 4 KPI Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            
            {/* Total Blog Posts */}
            <Link 
              href="/admin/blogs"
              className="bg-white border border-slate-100 rounded-3xl p-6 relative overflow-hidden group shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer block"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Blog Posts</span>
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center transition-transform group-hover:scale-110">
                  <FileText className="h-4.5 w-4.5" />
                </div>
              </div>
              <h2 className="text-4xl font-black tracking-tight text-slate-900 mb-2">
                {stats?.blogsCount || 0}
              </h2>
              <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wide flex items-center gap-1">
                Manage articles &amp; resources <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </div>
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl"></div>
            </Link>

            {/* Total Inquiries */}
            <Link 
              href="/admin/contacts"
              className="bg-white border border-slate-100 rounded-3xl p-6 relative overflow-hidden group shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer block"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Contact Inquiries</span>
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Mail className="h-4.5 w-4.5" />
                </div>
              </div>
              <h2 className="text-4xl font-black tracking-tight text-slate-900 mb-2">
                {stats?.inquiriesCount || 0}
              </h2>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wide flex items-center gap-1">
                Review lead inquiries <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </div>
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl"></div>
            </Link>

            {/* New Inquiries (Highlight Card) */}
            <Link 
              href="/admin/contacts"
              className={`rounded-3xl p-6 relative overflow-hidden group transition-all hover:-translate-y-0.5 cursor-pointer block border ${
                stats && stats.newInquiriesCount > 0 
                  ? 'bg-amber-500/5 border-amber-200/80 text-amber-900 shadow-sm shadow-amber-500/5' 
                  : 'bg-white border-slate-100 text-slate-900 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold uppercase tracking-wider ${stats && stats.newInquiriesCount > 0 ? 'text-amber-700' : 'text-slate-400'}`}>
                  New Messages
                </span>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                  stats && stats.newInquiriesCount > 0 
                    ? 'bg-amber-100 text-amber-700' 
                    : 'bg-slate-50 border border-slate-100 text-slate-500'
                }`}>
                  <AlertCircle className="h-4.5 w-4.5" />
                </div>
              </div>
              <h2 className={`text-4xl font-black tracking-tight mb-2 ${stats && stats.newInquiriesCount > 0 ? 'text-amber-800' : 'text-slate-900'}`}>
                {stats?.newInquiriesCount || 0}
              </h2>
              <div className={`text-[10px] font-bold uppercase tracking-wide flex items-center gap-1 ${stats && stats.newInquiriesCount > 0 ? 'text-amber-700' : 'text-slate-500'}`}>
                {stats && stats.newInquiriesCount > 0 ? 'Action required: respond to leads' : 'All incoming messages read'}
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </div>
              {stats && stats.newInquiriesCount > 0 && (
                <div className="absolute right-0 bottom-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl"></div>
              )}
            </Link>

            {/* Active Pricing Plans */}
            <Link 
              href="/admin/pricing"
              className="bg-white border border-slate-100 rounded-3xl p-6 relative overflow-hidden group shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer block"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Pricing Packages</span>
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center transition-transform group-hover:scale-110">
                  <DollarSign className="h-4.5 w-4.5" />
                </div>
              </div>
              <h2 className="text-4xl font-black tracking-tight text-slate-900 mb-2">
                {stats?.pricingPlansCount || 0}
              </h2>
              <div className="text-[10px] font-bold text-purple-600 uppercase tracking-wide flex items-center gap-1">
                Configure features &amp; tiers <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </div>
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl"></div>
            </Link>

          </div>

          {/* Quick Operations Panel */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-xs font-extrabold text-slate-450 uppercase tracking-wider mb-4">Quick Operations</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Link 
                href="/admin/blogs/create"
                className="flex items-center gap-3 p-4 bg-slate-50/50 hover:bg-emerald-50/50 border border-slate-150 hover:border-emerald-250 rounded-2xl text-xs font-bold text-slate-700 hover:text-[#006B3F] transition-all cursor-pointer group"
              >
                <div className="p-2 bg-white rounded-xl shadow-xs group-hover:bg-emerald-100/50 transition-colors text-slate-500 group-hover:text-emerald-700">
                  <Plus className="h-4 w-4" />
                </div>
                Write Blog Post
              </Link>
              <Link 
                href="/admin/contacts"
                className="flex items-center gap-3 p-4 bg-slate-50/50 hover:bg-blue-50/50 border border-slate-150 hover:border-blue-250 rounded-2xl text-xs font-bold text-slate-700 hover:text-blue-800 transition-all cursor-pointer group"
              >
                <div className="p-2 bg-white rounded-xl shadow-xs group-hover:bg-blue-100/50 transition-colors text-slate-500 group-hover:text-blue-700">
                  <Mail className="h-4 w-4" />
                </div>
                Review Inquiries
              </Link>
              <Link 
                href="/admin/about"
                className="flex items-center gap-3 p-4 bg-slate-50/50 hover:bg-indigo-50/50 border border-slate-150 hover:border-indigo-250 rounded-2xl text-xs font-bold text-slate-700 hover:text-indigo-800 transition-all cursor-pointer group"
              >
                <div className="p-2 bg-white rounded-xl shadow-xs group-hover:bg-indigo-100/50 transition-colors text-slate-500 group-hover:text-indigo-700">
                  <Users className="h-4 w-4" />
                </div>
                Edit About Us
              </Link>
              <Link 
                href="/admin/settings"
                className="flex items-center gap-3 p-4 bg-slate-50/50 hover:bg-purple-50/50 border border-slate-150 hover:border-purple-250 rounded-2xl text-xs font-bold text-slate-700 hover:text-purple-800 transition-all cursor-pointer group"
              >
                <div className="p-2 bg-white rounded-xl shadow-xs group-hover:bg-purple-100/50 transition-colors text-slate-500 group-hover:text-purple-700">
                  <Settings className="h-4 w-4" />
                </div>
                Global Settings
              </Link>
            </div>
          </div>

          {/* New Interactive Widgets Section: SVG Chart & Checklist */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.25fr] gap-8">
            
            {/* Graph Visual Widget */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-50 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-[#006B3F]" />
                    <h3 className="text-sm font-extrabold text-slate-950 uppercase tracking-wider">Inquiries Trend (7 Days)</h3>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active traffic meters</span>
                </div>
                <div className="h-52 w-full mt-2 relative">
                  {renderSVGChart()}
                </div>
              </div>

              {/* Status and Publish distribution meters below graph */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-55">
                
                {/* 1. Inquiries distribution list */}
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Status Proportions</span>
                  
                  {/* New Status Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold text-slate-600">
                      <span>New Inquiries</span>
                      <span>{stats?.statusCounts?.new || 0}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-amber-500 transition-all duration-500" 
                        style={{ width: `${stats?.inquiriesCount ? ((stats.statusCounts.new / stats.inquiriesCount) * 100) : 0}%` }}
                      />
                    </div>
                  </div>

                  {/* In Progress Status Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold text-slate-600">
                      <span>In Progress</span>
                      <span>{stats?.statusCounts?.in_progress || 0}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 transition-all duration-500" 
                        style={{ width: `${stats?.inquiriesCount ? ((stats.statusCounts.in_progress / stats.inquiriesCount) * 100) : 0}%` }}
                      />
                    </div>
                  </div>

                  {/* Resolved Status Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold text-slate-600">
                      <span>Resolved</span>
                      <span>{stats?.statusCounts?.resolved || 0}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 transition-all duration-500" 
                        style={{ width: `${stats?.inquiriesCount ? ((stats.statusCounts.resolved / stats.inquiriesCount) * 100) : 0}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Blog publish distribution */}
                <div className="space-y-4 flex flex-col justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Blog Publish Ratio</span>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between text-[10px] font-bold text-slate-600">
                        <span>Published ({stats?.blogPublishCounts?.published || 0})</span>
                        <span>Draft ({stats?.blogPublishCounts?.draft || 0})</span>
                      </div>
                      <div className="w-full h-3 bg-slate-150 rounded-full flex overflow-hidden">
                        <div 
                          className="h-full bg-[#006B3F] transition-all" 
                          style={{ width: `${stats?.blogsCount ? ((stats.blogPublishCounts.published / stats.blogsCount) * 100) : 100}%` }}
                          title="Published"
                        />
                        <div 
                          className="h-full bg-slate-300 transition-all" 
                          style={{ width: `${stats?.blogsCount ? ((stats.blogPublishCounts.draft / stats.blogsCount) * 100) : 0}%` }}
                          title="Draft"
                        />
                      </div>
                    </div>
                  </div>

                  <p className="text-[9px] text-slate-400 font-semibold leading-normal">
                    Draft pages remain hidden from the dynamic marketing block on the public site landing layout.
                  </p>
                </div>
              </div>
            </div>

            {/* Checklist Planner Widget */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-50 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <ListTodo className="h-5 w-5 text-emerald-600" />
                    <h3 className="text-sm font-extrabold text-slate-950 uppercase tracking-wider">Session Task Checklist</h3>
                  </div>
                </div>

                {/* Task List */}
                {tasks.length === 0 ? (
                  <div className="py-12 text-center text-xs text-slate-450 font-medium">
                    No active planner tasks. Create one below!
                  </div>
                ) : (
                  <div className="space-y-3.5 max-h-56 overflow-y-auto pr-1">
                    {tasks.map(task => (
                      <div key={task.id} className="flex items-center justify-between gap-3 group/task">
                        <button 
                          onClick={() => handleToggleTask(task.id)}
                          className="flex items-start gap-3 cursor-pointer text-left focus:outline-none flex-1"
                        >
                          <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            task.completed ? 'bg-[#006B3F] border-[#006B3F] text-white' : 'border-slate-300 bg-white hover:border-slate-450'
                          }`}>
                            {task.completed && <Check className="h-3 w-3" />}
                          </div>
                          <span className={`text-xs font-semibold leading-tight break-all ${
                            task.completed ? 'line-through text-slate-400' : 'text-slate-700'
                          }`}>
                            {task.text}
                          </span>
                        </button>
                        <button
                          onClick={() => handleDeleteTask(task.id)}
                          className="opacity-0 group-hover/task:opacity-100 p-1 hover:bg-slate-100 text-slate-400 hover:text-red-500 rounded transition-all cursor-pointer focus:outline-none"
                          title="Remove Task"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Task Form */}
              <form onSubmit={handleAddTask} className="mt-6 pt-4 border-t border-slate-100/60 flex gap-2">
                <input
                  type="text"
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  placeholder="New goal..."
                  className="flex-1 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 outline-none focus:bg-white focus:border-[#006B3F] transition-all font-semibold"
                />
                <button
                  type="submit"
                  className="p-2.5 bg-[#006B3F] hover:bg-emerald-800 text-white rounded-xl shadow-xs transition-colors cursor-pointer"
                  title="Add Task"
                >
                  <Plus className="h-4.5 w-4.5" />
                </button>
              </form>
            </div>

          </div>

          {/* Grid Tables: Recent Blogs and Inquiries */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            
            {/* Left Column: Recent Contact inquiries */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b border-slate-50 pb-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4.5 w-4.5 text-slate-450" />
                  <h3 className="text-sm font-extrabold text-slate-950 uppercase tracking-wider">Recent Inquiries</h3>
                </div>
                <Link href="/admin/contacts" className="text-xs font-bold text-emerald-650 hover:text-[#006B3F] transition-all flex items-center gap-1">
                  View All <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {stats && stats.recentInquiries.length === 0 ? (
                <div className="py-12 text-center text-xs text-slate-400 font-medium">
                  No inquiries received yet.
                </div>
              ) : (
                <div className="divide-y divide-slate-100/65">
                  {stats?.recentInquiries.map((inq: any) => (
                    <div key={inq.id} className="py-3.5 flex items-center justify-between gap-4 group">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-xs font-bold text-slate-800 truncate">{inq.name}</p>
                          
                          {/* Inline Status Dropdown Switcher */}
                          <div className="relative inline-block">
                            <select
                              value={inq.status}
                              disabled={updatingId === inq.id}
                              onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                              className={`px-2 py-0.5 pr-6 rounded-full text-[9px] font-extrabold uppercase tracking-wide border-0 outline-none transition-all appearance-none cursor-pointer ${
                                inq.status === 'new' ? 'bg-amber-100 hover:bg-amber-150 text-amber-700' :
                                inq.status === 'in_progress' ? 'bg-blue-50 hover:bg-blue-100 text-blue-700' : 
                                'bg-slate-100 hover:bg-slate-150 text-slate-650'
                              }`}
                              style={{
                                backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                                backgroundPosition: 'right 0.35rem center',
                                backgroundSize: '0.6rem',
                                backgroundRepeat: 'no-repeat'
                              }}
                            >
                              <option value="new">New</option>
                              <option value="in_progress">In Progress</option>
                              <option value="resolved">Resolved</option>
                            </select>
                            {updatingId === inq.id && (
                              <Loader2 className="absolute right-1.5 top-1 h-2.5 w-2.5 animate-spin text-slate-500" />
                            )}
                          </div>
                        </div>
                        <p className="text-[10px] text-slate-500 font-semibold truncate mt-0.5">{inq.subject}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] text-slate-400 font-medium">
                          {new Date(inq.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                        </span>
                        
                        {/* Interactive Eye Quick View Modal Trigger */}
                        <button 
                          onClick={() => setActiveInquiry(inq)}
                          className="p-1.5 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-700 rounded-lg transition-colors cursor-pointer focus:outline-none"
                          title="Quick View Details"
                        >
                          <Eye className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Recent Blogs list */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b border-slate-50 pb-3">
                <div className="flex items-center gap-2">
                  <FolderOpen className="h-4.5 w-4.5 text-slate-450" />
                  <h3 className="text-sm font-extrabold text-slate-950 uppercase tracking-wider">Recently Written Blogs</h3>
                </div>
                <Link href="/admin/blogs" className="text-xs font-bold text-emerald-650 hover:text-[#006B3F] transition-all flex items-center gap-1">
                  View All <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {stats && stats.recentBlogs.length === 0 ? (
                <div className="py-12 text-center text-xs text-slate-400 font-medium">
                  No blog posts written yet.
                </div>
              ) : (
                <div className="divide-y divide-slate-100/65">
                  {stats?.recentBlogs.map((blog: any) => (
                    <div key={blog.id} className="py-3.5 flex items-center justify-between gap-4 group">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-bold text-slate-800 truncate" title={blog.title}>{blog.title}</p>
                          <span className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide shrink-0 ${
                            blog.published ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-650'
                          }`}>
                            {blog.published ? 'Published' : 'Draft'}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400 font-semibold truncate mt-0.5 font-mono">/blog/{blog.slug}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] text-slate-400 font-medium">
                          {new Date(blog.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                        </span>
                        <Link 
                          href={`/admin/blogs/edit/${blog.id}`}
                          className="p-1.5 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-700 rounded-lg transition-colors cursor-pointer"
                        >
                          <Edit className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </>
      )}

      {/* QUICK VIEW DETAILS MODAL */}
      {activeInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          {/* Backdrop click close */}
          <div className="absolute inset-0" onClick={() => setActiveInquiry(null)} />
          
          {/* Modal Container */}
          <div className="relative w-full max-w-lg bg-white border border-slate-150 rounded-3xl shadow-2xl p-6 md:p-8 animate-scaleIn z-10 space-y-6">
            
            {/* Header info */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className={`px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest ${
                  activeInquiry.status === 'new' ? 'bg-amber-100 text-amber-700' :
                  activeInquiry.status === 'in_progress' ? 'bg-blue-50 text-blue-700' : 'bg-slate-100 text-slate-600'
                }`}>
                  {activeInquiry.status.replace('_', ' ')}
                </span>
                <h3 className="text-lg font-black text-slate-900 mt-2">{activeInquiry.subject}</h3>
              </div>
              <button 
                onClick={() => setActiveInquiry(null)}
                className="w-8 h-8 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors focus:outline-none cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Sender Metadata details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              
              <div className="space-y-1 bg-slate-50 border border-slate-100 p-3 rounded-xl">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">Sender Name</span>
                <p className="font-bold text-slate-800">{activeInquiry.name}</p>
              </div>

              <div className="space-y-1 bg-slate-50 border border-slate-100 p-3 rounded-xl">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">Submission Date</span>
                <p className="font-bold text-slate-800">
                  {new Date(activeInquiry.created_at).toLocaleString(undefined, { 
                    dateStyle: 'medium', 
                    timeStyle: 'short' 
                  })}
                </p>
              </div>

              <div className="space-y-1 bg-slate-50 border border-slate-100 p-3 rounded-xl relative group">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  Email Address
                  <button 
                    onClick={() => copyToClipboard(activeInquiry.email, 'email')}
                    className="text-slate-400 hover:text-slate-700 cursor-pointer"
                  >
                    {copiedField === 'email' ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                  </button>
                </span>
                <p className="font-bold text-slate-850 truncate">{activeInquiry.email}</p>
              </div>

              <div className="space-y-1 bg-slate-50 border border-slate-100 p-3 rounded-xl relative group">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  Phone Number
                  <button 
                    onClick={() => copyToClipboard(activeInquiry.phone, 'phone')}
                    className="text-slate-400 hover:text-slate-700 cursor-pointer"
                  >
                    {copiedField === 'phone' ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                  </button>
                </span>
                <p className="font-bold text-slate-850 truncate">{activeInquiry.phone}</p>
              </div>

            </div>

            {/* Message contents */}
            <div className="space-y-1 bg-slate-50 border border-slate-100 p-4 rounded-xl">
              <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">Message Body</span>
              <p className="text-xs font-medium text-slate-750 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto mt-1">
                {activeInquiry.message}
              </p>
            </div>

            {/* Action Bar inside Modal */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100">
              
              {/* Quick Status Setter */}
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <span>Set Status:</span>
                <select
                  value={activeInquiry.status}
                  onChange={(e) => handleStatusChange(activeInquiry.id, e.target.value)}
                  className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-700 outline-none cursor-pointer focus:border-[#006B3F]"
                >
                  <option value="new">New</option>
                  <option value="in_progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>

              {/* Action buttons */}
              <div className="flex gap-2">
                <a 
                  href={`mailto:${activeInquiry.email}?subject=Reply: ${encodeURIComponent(activeInquiry.subject)}`}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Email Reply
                </a>
                <button
                  onClick={() => handleDeleteInquiry(activeInquiry.id)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-650 hover:text-red-700 text-xs font-bold rounded-xl transition-all cursor-pointer focus:outline-none"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Delete
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
