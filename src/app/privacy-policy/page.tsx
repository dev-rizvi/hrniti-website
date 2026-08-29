import React from 'react';
import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";
import { Shield, Clock } from "lucide-react";

const BASE_URL = "https://www.hrniti.com";

export const metadata: Metadata = {
  title: "Privacy Policy - HR Niti",
  description: "Read the Privacy Policy of HR Niti. Learn how we collect, store, and protect your HR and business data.",
  keywords: "privacy policy, hr niti, data protection, privacy, hrms safety",
  alternates: {
    canonical: `${BASE_URL}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy - HR Niti",
    description: "Read the Privacy Policy of HR Niti. Learn how we collect, store, and protect your HR and business data.",
    url: `${BASE_URL}/privacy-policy`,
    type: "website",
  },
};

// Fallback values in case DB is not seeded yet
const DEFAULT_PRIVACY_TITLE = "Privacy Policy";
const DEFAULT_PRIVACY_CONTENT = `
  <h2>Privacy Policy Overview</h2>
  <p>Last updated: June 13, 2026</p>
  <p>At HR Niti, accessible from hrniti.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by HR Niti and how we use it.</p>
  
  <h2>Information We Collect</h2>
  <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
  <ul>
    <li><strong>Direct Contact:</strong> If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</li>
    <li><strong>Account Registration:</strong> When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</li>
  </ul>

  <h2>How We Use Your Information</h2>
  <p>We use the information we collect in various ways, including to:</p>
  <ul>
    <li>Provide, operate, and maintain our website and HRMS platform</li>
    <li>Improve, personalize, and expand our website operations</li>
    <li>Understand and analyze how you interact with our services</li>
    <li>Develop new products, services, features, and functionality</li>
    <li>Communicate with you, either directly or through one of our partners, for customer service, updates, and marketing purposes</li>
  </ul>
`;

export default async function PrivacyPolicyPage() {
  let title = DEFAULT_PRIVACY_TITLE;
  let content = DEFAULT_PRIVACY_CONTENT;
  let updatedAt = new Date("2026-06-13");

  try {
    const legal = await prisma.legal_settings.findUnique({
      where: { id: 1 },
    });
    if (legal) {
      title = legal.privacy_title;
      content = legal.privacy_content;
      if (legal.updated_at) {
        updatedAt = new Date(legal.updated_at);
      }
    }
  } catch (err) {
    console.error("Error loading Privacy Policy:", err);
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
