import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecruitmentHero from "@/components/recruitment/RecruitmentHero";
import IntegrationHighlights from "@/components/recruitment/IntegrationHighlights";
import HiringPipeline from "@/components/recruitment/HiringPipeline";
import RecruitmentFeatures from "@/components/recruitment/RecruitmentFeatures";
import RecruitmentFAQ, { faqs } from "@/components/recruitment/RecruitmentFAQ";
import CTASection from "@/components/about/CTASection";

export const metadata = {
  title: "Recruitment & Applicant Tracking System",
  description: "Recruitment and applicant tracking software. HR software for recruitment and employee management — parse resumes, schedule interviews, generate offer letters, and onboard hires.",
  keywords: "Recruitment and applicant tracking software, HR software for recruitment and employee management, Applicant tracking system for small businesses, recruitment management system, ATS software India",
  openGraph: {
    title: "Recruitment and Applicant Tracking Software (ATS) | HR Niti",
    description: "Recruitment and applicant tracking software. HR software for recruitment and employee management — parse resumes, schedule interviews, generate offer letters, and onboard hires.",
    url: "https://www.hrniti.com/recruitment-management",
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Recruitment & ATS Software - HR Niti" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recruitment and Applicant Tracking Software (ATS) | HR Niti",
    description: "Recruitment and applicant tracking software. HR software for recruitment and employee management — parse resumes, schedule interviews, generate offer letters, and onboard hires.",
    images: ["/og-default.png"],
  },
  alternates: { canonical: "https://www.hrniti.com/recruitment-management" },
};

export default function RecruitmentPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD Structured Schema Markup for SEO & AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "HR Niti Recruitment & ATS Software",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web, Android, iOS",
              "description": "An end-to-end Applicant Tracking System (ATS) and recruitment workflow software that automatically distributes job listings, parses resumes, maps collaborative evaluation, and converts candidates to employee profiles.",
              "url": "https://www.hrniti.com/recruitment-management",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR",
                "description": "Free trial available with HR Niti suite"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.hrniti.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Recruitment Management",
                  "item": "https://www.hrniti.com/recruitment-management"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }
          ])
        }}
      />

      <Navbar />

      {/* Hero section with candidate stage simulation */}
      <RecruitmentHero />

      {/* Synergistic HRMS and Payroll Integrations */}
      <IntegrationHighlights />

      {/* Interactive Step-by-Step Hiring Pipeline */}
      <HiringPipeline />

      {/* ATS Features Grid */}
      <RecruitmentFeatures />

      {/* AEO Optimized FAQs Accordion */}
      <RecruitmentFAQ />

      {/* Call to Action */}
      <CTASection />

      <Footer />
    </main>
  );
}
