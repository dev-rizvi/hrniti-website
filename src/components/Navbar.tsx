"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    ChevronDown, Menu, X, Building, Building2, Landmark,
    Users, Layout, CheckCircle, Zap, FileText, BarChart3,
    Cloud, ClipboardList, GraduationCap, TrendingUp, MessageSquare,
    Smartphone, Library, Calculator, BookOpen, Download, Mail, Info, Monitor
} from "lucide-react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL || (process.env.NEXT_PUBLIC_BASE_URL ? `${process.env.NEXT_PUBLIC_BASE_URL}/admin/login` : "/admin/login");

    const menuItems = {
        product: {
            label: "Product",
            groups: [
                {
                    title: "Core HR & Management",
                    items: [
                        { name: "HRMS Software",         href: "/hrms-software",               icon: Layout, desc: "Centralized employee records & directory" },
                        { name: "Employee Management",   href: "/employee-management",          icon: Users, desc: "Digital onboarding & profile management" },
                        { name: "Employee Self Service", href: "/employee-self-service",        icon: CheckCircle, desc: "Mobile & web ESS portal for staff" },
                        { name: "Hiring & ATS",          href: "/hiring",                       icon: Zap, desc: "Applicant tracking & candidate pipeline" },
                        { name: "Job Posting",           href: "/jobposting",                   icon: FileText, desc: "Multi-channel job publishing" },
                        { name: "Org Chart & Planning",  href: "/org-chart",                    icon: Users, desc: "Dynamic organizational hierarchy" },
                        { name: "People Analytics",      href: "/analytics",                    icon: BarChart3, desc: "Workforce attrition & headcount insights" },
                    ]
                },
                {
                    title: "Payroll & Operations",
                    items: [
                        { name: "Payroll Software",       href: "/payroll-software",                           icon: Cloud, desc: "1-Click net banking salary Excel export" },
                        { name: "Leave Management",       href: "/leave-management",                           icon: BarChart3, desc: "Custom leave rules & encashment" },
                        { name: "Attendance Management",  href: "/attendance",                                 icon: CheckCircle, desc: "GPS geo-fencing & facial attendance" },
                        { name: "F&F Settlement",         href: "/full-and-final-settlement",                  icon: CheckCircle, desc: "Automated exit & gratuity calculations" },
                        { name: "Expense Management",     href: "/expense-management-software",                icon: CheckCircle, desc: "Reimbursements & claim approvals" },
                        { name: "Employee Tracking",      href: "/employee-tracking",                          icon: BarChart3, desc: "Field staff GPS route tracking" },
                    ]
                },
                {
                    title: "Productivity & AI",
                    items: [
                        { name: "LMS (Learning)",          href: "/lms",                                               icon: GraduationCap, desc: "Course creation & compliance training" },
                        { name: "Timesheet Management",    href: "/timesheet-management",                              icon: ClipboardList, desc: "Project billable hours tracking" },
                        { name: "Recruitment Management",  href: "/recruitment-management",                            icon: Users, desc: "Interview scheduling & offer letters" },
                        { name: "Performance Management",  href: "/employee-performance-management-software",          icon: TrendingUp, desc: "9-Box grid, OKRs & 360 appraisal" },
                        { name: "Niti AI Chatbot",           href: "/hr-chatbot",                                        icon: MessageSquare, desc: "24/7 AI conversational HR assistant" },
                        { name: "Mobile App",              href: "/hrms-mobile-app",                                   icon: Smartphone, desc: "iOS & Android ESS application" },
                        { name: "HR MIS Reports",          href: "/hr-mis-reports",                                    icon: BarChart3, desc: "Statutory PF/ESIC ECR & MIS reporting" },
                        { name: "Workforce Intelligence",  href: "/employee-monitoring-productivity-software",         icon: Monitor, desc: "Windows employee monitoring & productivity analytics" },
                    ]
                }
            ]
        },
        solutions: {
            label: "Solutions",
            items: [
                { name: "Small Business (1-50)",     href: "/small-business-solutions",  icon: Building,   desc: "Simple, automated payroll & mobile ESS for SMBs" },
                { name: "Medium Business (50-250)",  href: "/medium-business-solutions", icon: Building2,  desc: "Multi-branch, approval chains & Tally sync" },
                { name: "Large Enterprise (250+)",  href: "/large-business-solutions",  icon: Landmark,   desc: "SAP/Oracle APIs & 24/7 factory shift rosters" },
            ]
        },
        company: {
            label: "Company",
            items: [
                { name: "About Us",    href: "/about",      icon: Info, desc: "Our story, mission & Indian HR technology" },
                { name: "Contact Us",  href: "/contact-us", icon: Mail, desc: "Get in touch with our team across India" },
            ]
        },
        resources: {
            label: "Resources",
            items: [
                { name: "HR Tools",         href: "/tools",                    icon: Calculator, desc: "Free salary & statutory tax calculators" },
                { name: "HR Templates",     href: "/templates",                icon: Download,   desc: "Ready-to-use policy & offer letter templates" },
                { name: "HR Glossary",      href: "/resources/hr-glossary",    icon: Library,    desc: "Key HR & labour law terms defined" },
                { name: "Research Reports", href: "/reports",                  icon: FileText,   desc: "Industry benchmarks & compliance guides" },
                { name: "Blog",             href: "/blog",                     icon: BookOpen,   desc: "Latest HR, payroll & compliance insights" },
            ]
        }
    };

    return (
        <>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50 relative">
                    <div className="h-10 sm:h-11 max-w-[220px] flex items-center shrink-0">
                        <img src="/uploads/HRNITI_LOGO_opt.webp" alt="HR Niti Logo" width={220} height={44} className="w-full h-full object-contain object-left" />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-7">
                    
                    {/* 1. Product Dropdown - 3 columns */}
                    <div 
                        className="group relative"
                        onMouseEnter={() => setOpenDropdown('product')}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <button 
                            type="button"
                            onClick={() => setOpenDropdown(openDropdown === 'product' ? null : 'product')}
                            className="flex items-center gap-1 text-sm font-semibold text-slate-800 hover:text-emerald-600 py-4 cursor-pointer"
                        >
                            Product <ChevronDown className={"h-4 w-4 transition-transform text-slate-500 " + (openDropdown === 'product' ? 'rotate-180 text-emerald-600' : 'group-hover:rotate-180')} />
                        </button>
                        <div className={"absolute top-full -left-10 w-[880px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-6 grid grid-cols-3 gap-8 z-[100] transition-all duration-200 " + (
                            openDropdown === 'product'
                                ? 'opacity-100 visible translate-y-0'
                                : 'opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'
                        )}>
                            {menuItems.product.groups.map((group, idx) => (
                                <div key={idx}>
                                    <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3 border-b border-slate-100 pb-2">{group.title}</div>
                                    <ul className="space-y-1">
                                        {group.items.map((item, i) => (
                                            <li key={i}>
                                                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-emerald-50/50 transition-colors group/item relative">
                                                    <div className="p-1.5 bg-emerald-50 text-emerald-600 rounded-md group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors shrink-0">
                                                        <item.icon className="h-3.5 w-3.5" />
                                                    </div>
                                                    <div>
                                                        <Link 
                                                            href={item.href} 
                                                            onClick={() => setOpenDropdown(null)}
                                                            className="text-xs sm:text-sm font-bold text-slate-800 group-hover/item:text-emerald-700 block hover:underline before:absolute before:inset-0"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                        <div className="text-[11px] text-slate-500 line-clamp-1 pointer-events-none">{item.desc}</div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2. Solutions Dropdown */}
                    <div 
                        className="group relative"
                        onMouseEnter={() => setOpenDropdown('solutions')}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <button 
                            type="button"
                            onClick={() => setOpenDropdown(openDropdown === 'solutions' ? null : 'solutions')}
                            className="flex items-center gap-1 text-sm font-semibold text-slate-800 hover:text-emerald-600 py-4 cursor-pointer"
                        >
                            Solutions <ChevronDown className={"h-4 w-4 transition-transform text-slate-500 " + (openDropdown === 'solutions' ? 'rotate-180 text-emerald-600' : 'group-hover:rotate-180')} />
                        </button>
                        <div className={"absolute top-full -left-4 w-[340px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-4 z-[100] transition-all duration-200 " + (
                            openDropdown === 'solutions'
                                ? 'opacity-100 visible translate-y-0'
                                : 'opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'
                        )}>
                            <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2 px-2 pb-1 border-b border-slate-100">By Company Size</div>
                            <ul className="space-y-1.5">
                                {menuItems.solutions.items.map((item, i) => (
                                    <li key={i}>
                                        <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/50 transition-colors group/item relative">
                                            <div className="p-2 bg-emerald-100/80 text-emerald-700 rounded-lg group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors shrink-0">
                                                <item.icon className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <Link 
                                                    href={item.href} 
                                                    onClick={() => setOpenDropdown(null)}
                                                    className="text-sm font-bold text-slate-800 group-hover/item:text-emerald-700 block hover:underline before:absolute before:inset-0"
                                                >
                                                    {item.name}
                                                </Link>
                                                <div className="text-xs text-slate-500 pointer-events-none">{item.desc}</div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 3. Industries - direct link */}
                    <Link href="/industries" className="text-sm font-semibold text-slate-800 hover:text-emerald-600 transition-colors">
                        Industries
                    </Link>

                    {/* 4. Pricing - direct link */}
                    <Link href="/pricing" className="text-sm font-semibold text-slate-800 hover:text-emerald-600 transition-colors">
                        Pricing
                    </Link>

                    {/* 5. Partners - direct link */}
                    <Link href="/partners" className="text-sm font-semibold text-slate-800 hover:text-emerald-600 transition-colors">
                        Partners
                    </Link>

                    {/* 6. Resources Dropdown */}
                    <div 
                        className="group relative"
                        onMouseEnter={() => setOpenDropdown('resources')}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <button 
                            type="button"
                            onClick={() => setOpenDropdown(openDropdown === 'resources' ? null : 'resources')}
                            className="flex items-center gap-1 text-sm font-semibold text-slate-800 hover:text-emerald-600 py-4 cursor-pointer"
                        >
                            Resources <ChevronDown className={"h-4 w-4 transition-transform text-slate-500 " + (openDropdown === 'resources' ? 'rotate-180 text-emerald-600' : 'group-hover:rotate-180')} />
                        </button>
                        <div className={"absolute top-full -left-4 w-[280px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 z-[100] transition-all duration-200 " + (
                            openDropdown === 'resources'
                                ? 'opacity-100 visible translate-y-0'
                                : 'opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'
                        )}>
                            <ul className="space-y-1">
                                {menuItems.resources.items.map((item, i) => (
                                    <li key={i}>
                                        <div className="flex items-start gap-3 p-2 rounded-xl hover:bg-emerald-50/50 transition-colors group/item relative">
                                            <div className="p-2 bg-emerald-100/80 text-emerald-700 rounded-lg group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors shrink-0">
                                                <item.icon className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <Link 
                                                    href={item.href} 
                                                    onClick={() => setOpenDropdown(null)}
                                                    className="text-sm font-bold text-slate-800 group-hover/item:text-emerald-700 block hover:underline before:absolute before:inset-0"
                                                >
                                                    {item.name}
                                                </Link>
                                                <div className="text-xs text-slate-500 pointer-events-none">{item.desc}</div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 7. Company Dropdown */}
                    <div 
                        className="group relative"
                        onMouseEnter={() => setOpenDropdown('company')}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <button 
                            type="button"
                            onClick={() => setOpenDropdown(openDropdown === 'company' ? null : 'company')}
                            className="flex items-center gap-1 text-sm font-semibold text-slate-800 hover:text-emerald-600 py-4 cursor-pointer"
                        >
                            Company <ChevronDown className={"h-4 w-4 transition-transform text-slate-500 " + (openDropdown === 'company' ? 'rotate-180 text-emerald-600' : 'group-hover:rotate-180')} />
                        </button>
                        <div className={"absolute top-full -left-4 w-[260px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 z-[100] transition-all duration-200 " + (
                            openDropdown === 'company'
                                ? 'opacity-100 visible translate-y-0'
                                : 'opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'
                        )}>
                            <ul className="space-y-1">
                                {menuItems.company.items.map((item, i) => (
                                    <li key={i}>
                                        <div className="flex items-start gap-3 p-2 rounded-xl hover:bg-emerald-50/50 transition-colors group/item relative">
                                            <div className="p-2 bg-emerald-100/80 text-emerald-700 rounded-lg group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors shrink-0">
                                                <item.icon className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <Link 
                                                    href={item.href} 
                                                    onClick={() => setOpenDropdown(null)}
                                                    className="text-sm font-bold text-slate-800 group-hover/item:text-emerald-700 block hover:underline before:absolute before:inset-0"
                                                >
                                                    {item.name}
                                                </Link>
                                                <div className="text-xs text-slate-500 pointer-events-none">{item.desc}</div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Actions: Book Free Demo & Login */}
                <div className="hidden lg:flex items-center gap-5">
                    <Link href={loginUrl} className="text-slate-800 hover:text-emerald-600 font-bold text-sm transition-colors">
                        Login
                    </Link>
                    <Link href="/demo" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-extrabold text-sm transition-all shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/40">
                        Book Free Demo
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 text-slate-700 z-50 relative cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div 
            className={"fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] transition-all duration-300 lg:hidden " + (isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible')}
            onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu Sidebar */}
        <div className={"fixed top-0 right-0 w-[85vw] max-w-[350px] h-[100dvh] bg-white z-[70] shadow-2xl transition-transform duration-300 lg:hidden overflow-y-auto pt-24 pb-10 px-6 " + (isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full')}>
            <div className="flex flex-col gap-5">
                
                {/* Mobile Product Submenu */}
                <div>
                    <button
                        onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === 'product' ? null : 'product')}
                        className="flex items-center justify-between w-full text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3 cursor-pointer"
                    >
                        Product <ChevronDown className={"h-5 w-5 transition-transform " + (activeMobileSubmenu === 'product' ? 'rotate-180 text-emerald-600' : '')} />
                    </button>
                    <div className={"space-y-5 mt-3 pl-2 " + (activeMobileSubmenu === 'product' ? 'block' : 'hidden')}>
                        {menuItems.product.groups.map((group, idx) => (
                            <div key={idx}>
                                <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-2">{group.title}</div>
                                <div className="space-y-2">
                                    {group.items.map((item, i) => (
                                        <Link key={i} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-700 text-xs py-1 font-medium hover:text-emerald-600 transition-colors">
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Solutions Submenu */}
                <div>
                    <button
                        onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === 'solutions' ? null : 'solutions')}
                        className="flex items-center justify-between w-full text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3 cursor-pointer"
                    >
                        Solutions <ChevronDown className={"h-5 w-5 transition-transform " + (activeMobileSubmenu === 'solutions' ? 'rotate-180 text-emerald-600' : '')} />
                    </button>
                    <div className={"space-y-2.5 mt-3 pl-2 " + (activeMobileSubmenu === 'solutions' ? 'block' : 'hidden')}>
                        {menuItems.solutions.items.map((item, i) => (
                            <Link key={i} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-700 text-xs py-1 font-medium hover:text-emerald-600 transition-colors">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile Industries link */}
                <Link href="/industries" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                    Industries
                </Link>

                {/* Mobile Pricing link */}
                <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                    Pricing
                </Link>

                {/* Mobile Partners link */}
                <Link href="/partners" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                    Partners
                </Link>

                {/* Mobile Resources Submenu */}
                <div>
                    <button
                        onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === 'resources' ? null : 'resources')}
                        className="flex items-center justify-between w-full text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3 cursor-pointer"
                    >
                        Resources <ChevronDown className={"h-5 w-5 transition-transform " + (activeMobileSubmenu === 'resources' ? 'rotate-180 text-emerald-600' : '')} />
                    </button>
                    <div className={"space-y-2.5 mt-3 pl-2 " + (activeMobileSubmenu === 'resources' ? 'block' : 'hidden')}>
                        {menuItems.resources.items.map((item, i) => (
                            <Link key={i} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-700 text-xs py-1 font-medium hover:text-emerald-600 transition-colors">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile Company Submenu */}
                <div>
                    <button
                        onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === 'company' ? null : 'company')}
                        className="flex items-center justify-between w-full text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3 cursor-pointer"
                    >
                        Company <ChevronDown className={"h-5 w-5 transition-transform " + (activeMobileSubmenu === 'company' ? 'rotate-180 text-emerald-600' : '')} />
                    </button>
                    <div className={"space-y-2.5 mt-3 pl-2 " + (activeMobileSubmenu === 'company' ? 'block' : 'hidden')}>
                        {menuItems.company.items.map((item, i) => (
                            <Link key={i} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-700 text-xs py-1 font-medium hover:text-emerald-600 transition-colors">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile Actions */}
                <div className="pt-4 flex flex-col gap-3">
                    <Link href="/demo" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl text-center shadow-lg shadow-emerald-600/20 text-sm">
                        Book Free Demo
                    </Link>
                    <Link href={loginUrl} onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 border border-slate-200 text-slate-800 font-bold rounded-xl text-center bg-slate-50 text-sm">
                        Login
                    </Link>
                </div>

            </div>
        </div>
        </>
    );
}
