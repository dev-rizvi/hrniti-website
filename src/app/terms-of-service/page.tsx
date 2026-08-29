import React from 'react';
import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";
import { Shield, Clock } from "lucide-react";

const BASE_URL = "https://www.hrniti.com";

export const metadata: Metadata = {
  title: "Terms of Service - HR Niti",
  description: "Read the Terms of Service for using the HR Niti website and software solutions. Learn about user agreements and operational standards.",
  keywords: "terms of service, terms and conditions, hr niti, user agreements",
  alternates: {
    canonical: `${BASE_URL}/terms-of-service`,
  },
  openGraph: {
    title: "Terms of Service - HR Niti",
    description: "Read the Terms of Service for using the HR Niti website and software solutions. Learn about user agreements and operational standards.",
    url: `${BASE_URL}/terms-of-service`,
    type: "website",
  },
};

// Fallback values in case DB is not seeded yet
const DEFAULT_TERMS_TITLE = "Terms of Service";
const DEFAULT_TERMS_CONTENT = `
  <h2>Terms & Conditions Overview</h2>
  <p>Last updated: June 13, 2026</p>
  <p>Welcome to HR Niti!</p>
  <p>These terms and conditions outline the rules and regulations for the use of HR Niti's Website and HRMS Software, located at hrniti.com.</p>
  
  <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use HR Niti if you do not agree to take all of the terms and conditions stated on this page.</p>

  <h2>License</h2>
  <p>Unless otherwise stated, HR Niti and/or its licensors own the intellectual property rights for all material on HR Niti. All intellectual property rights are reserved. You may access this from HR Niti for your own personal use subjected to restrictions set in these terms and conditions.</p>
  <p>You must not:</p>
  <ul>
    <li>Republish material from HR Niti</li>
    <li>Sell, rent or sub-license material from HR Niti</li>
    <li>Reproduce, duplicate or copy material from HR Niti</li>
    <li>Redistribute content from HR Niti</li>
  </ul>
`;

export default async function TermsOfServicePage() {
  let title = DEFAULT_TERMS_TITLE;
  let content = DEFAULT_TERMS_CONTENT;
  let updatedAt = new Date("2026-06-13");

  try {
    const legal = await prisma.legal_settings.findUnique({
      where: { id: 1 },
    });
    if (legal) {
      title = legal.terms_title;
      content = legal.terms_content;
      if (legal.updated_at) {
        updatedAt = new Date(legal.updated_at);
      }
    }
  } catch (err) {
    console.error("Error loading Terms of Service:", err);
  }

  // Ensure only 1 <h1> tag exists on the page (in the Hero block)
  const sanitizedContent = content.replace(/<h1([^>]*)>/gi, '<h2$1>').replace(/<\/h1>/gi, '</h2>');

  const formattedDate = updatedAt.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main className="min-h-screen bg-slate-50 font-sans antialiased">
      <Navbar />

      {/* Dark Premium Hero Block */}
      <section className="relative bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-950 text-white pt-36 pb-24 overflow-hidden">
        {/* Decorative Glowing Element */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" /> Legal &amp; Compliance
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-slate-400 text-sm font-semibold flex items-center justify-center gap-1.5">
              <Clock className="w-4 h-4" /> Last Updated: {formattedDate}
            </p>
          </div>
        </div>
      </section>

      {/* Legal Prose Content Card */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-none w-full">
            <style dangerouslySetInnerHTML={{__html: `
              .rich-legal-content h1 {
                font-size: 2rem;
                font-weight: 800;
                color: #0f172a;
                margin-top: 2rem;
                margin-bottom: 1rem;
                line-height: 1.25;
              }
              .rich-legal-content h2 {
                font-size: 1.5rem;
                font-weight: 700;
                color: #1e293b;
                margin-top: 2.25rem;
                margin-bottom: 1rem;
                line-height: 1.375;
                border-bottom: 2px solid #f1f5f9;
                padding-bottom: 0.5rem;
              }
              .rich-legal-content h3 {
                font-size: 1.25rem;
                font-weight: 600;
                color: #334155;
                margin-top: 1.75rem;
                margin-bottom: 0.75rem;
              }
              .rich-legal-content p {
                font-size: 0.95rem;
                color: #475569;
                margin-bottom: 1.25rem;
                line-height: 1.8;
              }
              .rich-legal-content ul {
                list-style-type: disc !important;
                padding-left: 1.75rem !important;
                margin-bottom: 1.5rem !important;
                color: #475569;
              }
              .rich-legal-content ol {
                list-style-type: decimal !important;
                padding-left: 1.75rem !important;
                margin-bottom: 1.5rem !important;
                color: #475569;
              }
              .rich-legal-content li {
                font-size: 0.95rem;
                margin-bottom: 0.625rem;
                line-height: 1.7;
                display: list-item !important;
              }
              .rich-legal-content strong {
                font-weight: 700;
                color: #0f172a;
              }
              .rich-legal-content a {
                color: #006B3F;
                text-decoration: underline;
                font-weight: 650;
              }
              .rich-legal-content a:hover {
                color: #065f46;
              }
            `}} />
            <div 
              className="rich-legal-content"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }} 
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
