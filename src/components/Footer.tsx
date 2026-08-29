"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    Facebook, Twitter, Linkedin, Instagram, Youtube,
    Shield, Lock, CheckCircle2, MapPin, Phone, Mail,
    ArrowRight, Zap
} from "lucide-react";
import { createClient } from '@/lib/supabase';

interface ContactSettings {
    phone?: string;
    logo_url?: string;
    email?: string;
    address?: string;
    linkedin_url?: string;
    instagram_url?: string;
    twitter_url?: string;
    facebook_url?: string;
    copyright_text?: string;
}

export default function Footer() {
    const [settings, setSettings] = useState<ContactSettings | null>(null);
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        const fetchSettings = async () => {
            const supabase = createClient();
            try {
                const { data } = await supabase.from('contact_settings').select('*').eq('id', 1).single();
                if (data) setSettings(data);
            } catch (err) {
                console.error('Error fetching settings:', err);
            }
        };
        fetchSettings();
    }, []);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        setSubscribed(true);
        setEmail("");
        setTimeout(() => setSubscribed(false), 4000);
    };

    const cleanPhone = "918601489763";

    const footerLinks = {
        solutions: {
            title: "Solutions by Scale",
            items: [
                { name: "Small Business (1-50)",     href: "/small-business-solutions" },
                { name: "Medium Business (50-250)",  href: "/medium-business-solutions" },
                { name: "Large Enterprise (250+)",  href: "/large-business-solutions" },
            ]
        },
        product: {
            title: "Product",
            groups: [
                {
                    label: "Core HR",
                    items: [
                        { name: "HRMS Software",        href: "/hrms-software" },
                        { name: "Employee Management",  href: "/employee-management" },
                        { name: "Employee Self Service",href: "/employee-self-service" },
                        { name: "Hiring & ATS",         href: "/hiring" },
                        { name: "Org Chart & Planning", href: "/org-chart" },
                        { name: "People Analytics",     href: "/analytics" },
                    ]
                },
                {
                    label: "Payroll & Ops",
                    items: [
                        { name: "Payroll Software",     href: "/payroll-software" },
                        { name: "Leave Management",     href: "/leave-management" },
                        { name: "Attendance",           href: "/attendance" },
                        { name: "F&F Settlement",       href: "/full-and-final-settlement" },
                        { name: "Expense Management",   href: "/expense-management-software" },
                        { name: "Employee Tracking",    href: "/employee-tracking" },
                    ]
                }
            ]
        },
        features: {
            title: "Features",
            items: [
                { name: "LMS (Learning)",         href: "/lms" },
                { name: "Timesheet Management",   href: "/timesheet-management" },
                { name: "Recruitment Management", href: "/recruitment-management" },
                { name: "Performance Management", href: "/employee-performance-management-software" },
                { name: "Niti AI Chatbot",         href: "/hr-chatbot" },
                { name: "Mobile App",             href: "/hrms-mobile-app" },
                { name: "HR MIS Reports",         href: "/hr-mis-reports" },
            ]
        },
        resources: {
            title: "Resources & Guides",
            items: [
                { name: "HR Glossary",           href: "/resources/hr-glossary" },
                { name: "HR Tools & Calculators",href: "/tools" },
                { name: "Best HRMS Software",    href: "/best-hrms-software-india" },
                { name: "HRMS Comparisons",      href: "/compare" },
                { name: "Research Reports",      href: "/reports" },
                { name: "HR Templates",          href: "/templates" },
            ]
        },
        company: {
            title: "Company",
            items: [
                { name: "About Us",          href: "/about" },
                { name: "HR Niti Entity",    href: "/company/hr-niti" },
                { name: "Pricing",           href: "/pricing" },
                { name: "Contact Us",        href: "/contact-us" },
                { name: "Support",           href: "/contact-us" },
            ]
        }
    };

    const locations = [
        { name: "Mumbai",    seoSlug: "hrms-payroll-software-in-mumbai",    slug: "mumbai" },
        { name: "Delhi",     seoSlug: "hrms-payroll-software-in-delhi",     slug: "delhi" },
        { name: "Bangalore", seoSlug: "hrms-payroll-software-in-bangalore", slug: "bangalore" },
        { name: "Pune",      seoSlug: "payroll-software-pune",              slug: "pune" },
        { name: "Hyderabad", seoSlug: "payroll-software-hyderabad",         slug: "hyderabad" },
        { name: "Chennai",   seoSlug: "hrms-payroll-software-in-chennai",   slug: "chennai" },
        { name: "Kolkata",   seoSlug: "hrms-payroll-software-in-kolkata",   slug: "kolkata" },
        { name: "Ahmedabad", seoSlug: "hrms-payroll-software-in-ahmedabad", slug: "ahmedabad" },
    ];

    const socialLinks = [
        {
            title: "LinkedIn",
            href: settings?.linkedin_url || "https://www.linkedin.com/",
            icon: <Linkedin className="w-4 h-4" />,
            color: "hover:bg-[#0A66C2] hover:border-[#0A66C2]"
        },
        {
            title: "Instagram",
            href: settings?.instagram_url || "https://www.instagram.com/",
            icon: <Instagram className="w-4 h-4" />,
            color: "hover:bg-gradient-to-br hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:border-[#fd1d1d]"
        },
        {
            title: "YouTube",
            href: "https://www.youtube.com/",
            icon: <Youtube className="w-4 h-4" />,
            color: "hover:bg-[#FF0000] hover:border-[#FF0000]"
        },
        {
            title: "Twitter / X",
            href: settings?.twitter_url || "https://twitter.com/",
            icon: <Twitter className="w-4 h-4" />,
            color: "hover:bg-[#1DA1F2] hover:border-[#1DA1F2]"
        },
        {
            title: "Facebook",
            href: settings?.facebook_url || "https://www.facebook.com/",
            icon: <Facebook className="w-4 h-4" />,
            color: "hover:bg-[#1877F2] hover:border-[#1877F2]"
        },
        {
            title: "WhatsApp",
            href: `https://wa.me/${cleanPhone}`,
            icon: (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
            color: "hover:bg-[#25D366] hover:border-[#25D366]"
        },
    ];

    return (
        <footer className="relative bg-[#0d1117] text-slate-400 font-sans overflow-hidden">

            {/* Top gradient accent bar */}
            <div className="h-[3px] w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400" />

            {/* Subtle background grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
                    backgroundSize: "64px 64px"
                }}
            />

            <div className="relative container mx-auto px-6 md:px-12 pt-16 pb-8">

                {/* ── Row 1: Brand + Newsletter ── */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-14">

                    {/* Brand block */}
                    <div className="lg:col-span-2 space-y-5">
                        {/* Logo */}
                        <div>
                            <Link href="/" className="inline-block h-10 sm:h-12 max-w-[220px]">
                                <img src="/uploads/HRNITI_LOGO_opt.webp" alt="HR Niti Logo" width={220} height={48} className="w-full h-full object-contain object-left" />
                            </Link>
                        </div>

                        {/* Tagline */}
                        <p className="text-[15px] leading-relaxed text-slate-400 max-w-lg">
                            India&apos;s leading <span className="text-emerald-400 font-medium">AI-powered HRMS &amp; Payroll platform</span> — simplifying workforce management, payroll compliance, and employee engagement for modern businesses.
                        </p>

                        {/* Contact info row */}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 text-sm">
                            <a href="tel:+918601489763" className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
                                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                                <span>+91 8601489763</span>
                            </a>
                            <a href={`mailto:${settings?.email || "sales@hrniti.com"}`} className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
                                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                                <span>{settings?.email || "sales@hrniti.com"}</span>
                            </a>
                            <span className="flex items-start gap-2 text-slate-400">
                                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>5/761, Sector 5, Sector 6, Gomti Nagar, Lucknow, Uttar Pradesh 226001</span>
                            </span>
                        </div>

                        {/* Social Icons */}
                        <div className="flex flex-wrap gap-2.5 pt-1">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.title}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    title={s.title}
                                    className={`w-9 h-9 rounded-lg border border-slate-700 bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 ${s.color}`}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>

                        {/* Trust badges */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-[11px] font-semibold text-slate-300">
                                <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                <span>256-Bit SSL</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-[11px] font-semibold text-slate-300">
                                <Lock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                                <span>Encrypted DB</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-[11px] font-semibold text-slate-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                <span>GDPR Compliant</span>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter block */}
                    <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/20 border border-emerald-800/30 rounded-2xl p-6 space-y-4 self-start">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                                <Zap className="w-4 h-4 text-emerald-400" />
                            </div>
                            <div className="text-white font-semibold text-sm">HR Insights Newsletter</div>
                        </div>
                        <p className="text-slate-400 text-[13px] leading-relaxed">
                            Get the latest HR trends, payroll tips &amp; product updates — straight to your inbox.
                        </p>
                        {subscribed ? (
                            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium py-2">
                                <CheckCircle2 className="w-5 h-5" />
                                <span>You&apos;re subscribed! Welcome aboard.</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="space-y-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your work email"
                                    required
                                    className="w-full bg-slate-900/70 border border-slate-700 focus:border-emerald-500 text-white text-sm py-2.5 px-4 rounded-lg outline-none transition-colors placeholder-slate-500"
                                />
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 py-2.5 px-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-semibold transition-all duration-300 group"
                                >
                                    Subscribe
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        )}
                        {/* WhatsApp CTA */}
                        <a
                            href="https://wa.me/918601489763"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="flex items-center gap-2 text-[#25D366] hover:text-[#1ebd59] text-sm font-medium transition-colors pt-1"
                        >
                            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Chat with us on WhatsApp
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-12" />

                {/* ── Row 2: Link columns ── */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

                    {/* Solutions by Scale (col 1) */}
                    <div>
                        <h5 className="text-white font-semibold text-sm mb-4 pb-2 border-b border-slate-800">
                            Solutions by Size
                        </h5>
                        <ul className="space-y-2.5">
                            {footerLinks.solutions.items.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-[13px] text-slate-400 hover:text-emerald-400 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product — Core HR (col 2) */}
                    <div>
                        <h5 className="text-white font-semibold text-sm mb-4 pb-2 border-b border-slate-800">
                            Core HR
                        </h5>
                        <ul className="space-y-2.5">
                            {footerLinks.product.groups[0].items.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-[13px] text-slate-400 hover:text-emerald-400 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product — Payroll & Ops (col 3) */}
                    <div>
                        <h5 className="text-white font-semibold text-sm mb-4 pb-2 border-b border-slate-800">
                            Payroll &amp; Ops
                        </h5>
                        <ul className="space-y-2.5">
                            {footerLinks.product.groups[1].items.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-[13px] text-slate-400 hover:text-emerald-400 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources (col 4) */}
                    <div>
                        <h5 className="text-white font-semibold text-sm mb-4 pb-2 border-b border-slate-800">
                            Resources
                        </h5>
                        <ul className="space-y-2.5">
                            {footerLinks.resources.items.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-[13px] text-slate-400 hover:text-emerald-400 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company (col 5) */}
                    <div>
                        <h5 className="text-white font-semibold text-sm mb-4 pb-2 border-b border-slate-800">
                            Company
                        </h5>
                        <ul className="space-y-2.5">
                            {footerLinks.company.items.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-[13px] text-slate-400 hover:text-emerald-400 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ── Row 3: Locations ── */}
                <div className="mb-8">
                    <div className="flex flex-wrap items-center gap-x-1 gap-y-2 text-[13px]">
                        <span className="flex items-center gap-1.5 text-slate-300 font-semibold mr-2">
                            <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                            Serving:
                        </span>
                        {locations.map((city, index) => (
                            <React.Fragment key={city.slug}>
                                <Link href={`/${city.seoSlug}`} className="text-slate-500 hover:text-emerald-400 transition-colors">
                                    {city.name}
                                </Link>
                                {index < locations.length - 1 && <span className="text-slate-700">·</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-slate-800 mb-6" />

                {/* ── Bottom bar: Copyright & Legal ── */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-[12px] text-slate-600">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                        <p>© {new Date().getFullYear()} HR Niti Technologies Pvt. Ltd. All rights reserved.</p>
                        <span className="hidden sm:inline text-slate-800">·</span>
                        <p>
                            A product of{" "}
                            <a
                                href="https://webeedream.com/"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="text-emerald-600 hover:text-emerald-400 font-medium transition-colors"
                            >
                                Webeedream Technologies Pvt. Ltd.
                            </a>
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-slate-700">Made with</span>
                        <span className="text-red-500 mx-0.5">♥</span>
                        <span className="text-slate-700">in India &nbsp;·&nbsp;</span>
                        <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
                        <span className="text-slate-800 mx-2">|</span>
                        <Link href="/terms-of-service" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
                        <span className="text-slate-800 mx-2">|</span>
                        <Link href="/sitemap.xml" className="hover:text-slate-400 transition-colors">Sitemap</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
