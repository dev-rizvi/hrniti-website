'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Calendar, 
  BarChart3, 
  Users, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Search, 
  Mail, 
  Bell,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Tag,
  FileText,
  Video,
  Menu,
  X,
  Download
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [userEmail, setUserEmail] = useState<string>('admin@hrniti.com');
  const [userName, setUserName] = useState<string>('Admin Portal');
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Close mobile sidebar on route change
  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [pathname]);

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();
      
      // Fetch user
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email || 'admin@hrniti.com');
        const namePart = user.email ? user.email.split('@')[0] : 'Admin';
        setUserName(namePart.charAt(0).toUpperCase() + namePart.slice(1));
      }

      // Fetch logo
      try {
        const { data: settings } = await supabase.from('contact_settings').select('logo_url').eq('id', 1).single();
        if (settings?.logo_url) {
          setLogoUrl(settings.logo_url);
        }
      } catch (err) {
        console.error('Error fetching logo:', err);
      }
    };
    fetchData();
  }, []);

  const handleLogout = async () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
      router.push('/admin/login');
      router.refresh();
    } catch (err) {
      console.error('Logout error:', err);
      setIsLoggingOut(false);
    }
  };

  const menuItems: { name: string; href: string; icon: any; badge?: string }[] = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Blogs', href: '/admin/blogs', icon: CheckSquare },
    { name: 'Case Studies', href: '/admin/case-studies', icon: FileText },
    { name: 'Templates', href: '/admin/templates', icon: FileText },
    { name: 'Template Leads', href: '/admin/template-leads', icon: Download },
    { name: 'Product Updates', href: '/admin/product-updates', icon: FileText },
    { name: 'Videos', href: '/admin/videos', icon: Video },
    { name: 'Contacts', href: '/admin/contacts', icon: Mail },
    { name: 'About Us', href: '/admin/about', icon: Users },
    { name: 'Pricing', href: '/admin/pricing', icon: Tag },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];



  const generalItems: { name: string; href: string; icon: any }[] = [];

  return (
    <div className="min-h-screen bg-[#F4F7F6] text-slate-800 flex font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-700 overflow-x-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden transition-opacity"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* 1. Left Sidebar */}
      <aside className={`bg-white border-r border-slate-100 flex flex-col justify-between shrink-0 h-screen fixed lg:sticky top-0 z-50 transition-all duration-300 shadow-[2px_0_12px_rgba(0,0,0,0.01)] 
        ${isCollapsed ? 'lg:w-[80px] lg:p-4' : 'lg:w-[260px] lg:p-6'}
        ${isMobileSidebarOpen ? 'translate-x-0 w-[260px] p-6' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        {/* Toggle Collapse Button (Desktop Only) */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)} 
          className="hidden lg:flex absolute right-[-14px] top-[32px] w-7 h-7 bg-white border border-slate-200 rounded-full items-center justify-center shadow-md text-slate-400 hover:text-slate-800 hover:scale-105 active:scale-95 transition-all z-40 cursor-pointer"
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronLeft className="h-3.5 w-3.5" />}
        </button>

        {/* Mobile Close Button */}
        <button 
          onClick={() => setIsMobileSidebarOpen(false)} 
          className="lg:hidden absolute right-4 top-4 p-2 text-slate-400 hover:text-slate-800 z-40"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="space-y-8">
          
          {/* Logo Area */}
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-2'} h-12`}>
            <div className="flex items-center gap-3">
              {logoUrl ? (
                <div className={`h-10 ${isCollapsed ? 'w-10' : 'max-w-[180px]'} overflow-hidden shrink-0 transition-transform hover:scale-105 duration-300 flex items-center`}>
                  <img src={logoUrl} alt="Logo" className="w-full h-full object-contain object-left" />
                </div>
              ) : (
                <>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100/70 flex items-center justify-center text-emerald-700 font-bold shadow-sm shadow-emerald-700/5 shrink-0 transition-transform hover:scale-105 duration-300">
                    <svg className="w-5.5 h-5.5 text-[#006B3F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  {!isCollapsed && (
                    <span className="text-xl font-black text-slate-900 tracking-tight whitespace-nowrap animate-fadeIn font-sans">HR Niti</span>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="space-y-6">
            <div>
              {!isCollapsed && (
                <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest px-4 mb-3">Menu</p>
              )}
              <nav className="space-y-1">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center ${isCollapsed ? 'justify-center w-12 h-12' : 'gap-3.5 px-4 py-3'} rounded-2xl text-sm font-semibold transition-all group relative ${
                        isActive 
                          ? 'text-[#006B3F] bg-emerald-50/50 shadow-sm shadow-emerald-700/5' 
                          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50/80'
                      }`}
                      title={isCollapsed ? item.name : undefined}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-3.5 bottom-3.5 w-1.5 bg-[#006B3F] rounded-r-full" />
                      )}
                      <item.icon className={`h-5 w-5 transition-colors shrink-0 ${
                        isActive ? 'text-[#006B3F]' : 'text-slate-400 group-hover:text-slate-700'
                      }`} />
                      {!isCollapsed && <span>{item.name}</span>}
                    </Link>
                  );
                })}
              </nav>
            </div>

          </div>
        </div>



      </aside>

      {/* 2. Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        
        {/* Topbar */}
        <header className="h-[76px] bg-white border-b border-slate-100 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-20 shrink-0">
          
          <div className="flex items-center gap-3 w-full lg:w-auto">
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-slate-800 focus:outline-none"
              onClick={() => setIsMobileSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            
            {/* Search Box */}
            <div className="hidden sm:block relative w-full max-w-[280px]">
              <input
                type="text"
                placeholder="Search task"
                className="w-full bg-slate-50 border border-slate-100 text-xs text-slate-800 rounded-xl pl-10 pr-10 py-2.5 outline-none focus:bg-white focus:border-slate-200 transition-all font-medium"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 px-1 py-0.5 rounded border border-slate-200 bg-white text-[9px] font-bold text-slate-400 tracking-wide select-none">
                ⌘F
              </div>
            </div>
          </div>

          {/* Topbar Right Actions */}
          <div className="flex items-center gap-3 lg:gap-6 shrink-0 ml-auto">
            
            {/* Profile Avatar Card with Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer text-left focus:outline-none"
              >
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-900 leading-tight">{userName}</p>
                  <p className="text-[10px] text-slate-400 leading-none mt-0.5">{userEmail}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-100 border border-orange-200 overflow-hidden flex items-center justify-center shadow-sm select-none">
                  {/* 3D emoji-like avatar representation */}
                  <span className="text-xl">🧑‍💻</span>
                </div>
              </button>

              {isProfileDropdownOpen && (
                <>
                  {/* Backdrop for closing dropdown */}
                  <div 
                    className="fixed inset-0 z-30" 
                    onClick={() => setIsProfileDropdownOpen(false)}
                  />
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2.5 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl py-2 z-40 animate-fadeIn">
                    <div className="px-4 py-2 border-b border-slate-50">
                      <p className="text-xs font-bold text-slate-900 leading-tight">{userName}</p>
                      <p className="text-[10px] text-slate-400 truncate mt-0.5">{userEmail}</p>
                    </div>
                    <button
                      onClick={() => {
                        setIsProfileDropdownOpen(false);
                        handleLogout();
                      }}
                      disabled={isLoggingOut}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-slate-650 hover:text-red-600 hover:bg-red-50/40 transition-all text-left cursor-pointer disabled:opacity-50"
                    >
                      <LogOut className="h-4 w-4 text-slate-400" />
                      {isLoggingOut ? 'Logging out...' : 'Logout'}
                    </button>
                  </div>
                </>
              )}
            </div>

          </div>
        </header>

        {/* Dynamic Inner Layout Page */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
