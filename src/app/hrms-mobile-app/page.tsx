import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileAppHero from "@/components/mobile-app/MobileAppHero";
import IntegrationHighlights from "@/components/mobile-app/IntegrationHighlights";
import AppFeatureShowcase from "@/components/mobile-app/AppFeatureShowcase";
import AppDownloadSection from "@/components/mobile-app/AppDownloadSection";
import MobileAppFAQ, { faqs } from "@/components/mobile-app/MobileAppFAQ";
import ChatbotFeatures from "@/components/chatbot/ChatbotFeatures";

export const metadata = {
  title: "Mobile HRMS & Payroll App iOS Android",
  description: "HR management software with mobile app. Download HR Niti Mobile HR Management App for employees to track attendance with facial recognition & GPS, access payslips, and apply for leaves.",
  keywords: "Mobile HR management app for employees, HR management software with mobile app, HRMS mobile app, employee self service app, geofencing attendance app, mobile payslip app",
  openGraph: {
    title: "Mobile HR Management App for Employees (iOS & Android) | HR Niti",
    description: "HR management software with mobile app. Download HR Niti Mobile HR Management App for employees to track attendance with facial recognition & GPS, access payslips, and apply for leaves.",
    url: "https://www.hrniti.com/hrms-mobile-app",
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Mobile HR Management App - HR Niti" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile HR Management App for Employees (iOS & Android) | HR Niti",
    description: "HR management software with mobile app. Download HR Niti Mobile HR Management App for employees to track attendance with facial recognition & GPS, access payslips, and apply for leaves.",
    images: ["/og-default.png"],
  },
  alternates: { canonical: "https://www.hrniti.com/hrms-mobile-app" },
};

export default function MobileAppPage() {
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
              "name": "HR Niti HRMS Mobile App",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Android 8.0+, iOS 13+",
              "description": "An integrated mobile self-service app enabling employees to mark attendance via geofencing/facial recognition, request leaves, view real-time task items, download PDF payslips, and chat with Niti AI.",
              "url": "https://www.hrniti.com/hrms-mobile-app",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR",
                "description": "Free with HR Niti subscription plans"
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
                  "name": "HRMS Mobile App",
                  "item": "https://www.hrniti.com/hrms-mobile-app"
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

      {/* Hero section displaying phone mockup self-service app dashboard */}
      <MobileAppHero />

      {/* GPS attendance geofencing and payroll integration triggers */}
      <IntegrationHighlights />

      {/* Interactive slider showcasing feature phone simulator mockups */}
      <AppFeatureShowcase />

      {/* Niti AI chatbot inside app capability callout */}
      <div className="bg-slate-50 border-t border-slate-200/50 py-16">
        <div className="container mx-auto px-4 text-center mb-12 space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Conversational Niti AI inside App
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
            The same natural language processing engine that powers our web portal is integrated into the mobile app, providing voice commands and instant responses.
          </p>
        </div>
        <ChatbotFeatures />
      </div>

      {/* Platform installation badge buttons & QR Code */}
      <AppDownloadSection />

      {/* AEO indexable FAQs accordion disclosures */}
      <MobileAppFAQ />

      <Footer />
    </main>
  );
}
