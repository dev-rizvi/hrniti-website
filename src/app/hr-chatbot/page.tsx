import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotHero from "@/components/chatbot/ChatbotHero";
import IntegrationHighlights from "@/components/chatbot/IntegrationHighlights";
import ChatbotFeatures from "@/components/chatbot/ChatbotFeatures";
import ChatbotFAQ, { faqs } from "@/components/chatbot/ChatbotFAQ";
import CTASection from "@/components/about/CTASection";

export const metadata = {
  title: "AI HR Chatbot for Employee Self-Service",
  description: "AI HR chatbot for employee queries and support. Meet Niti AI — automate leave balances, payslip downloads, policy answers, and HR ticket resolutions 24/7.",
  keywords: "AI HR chatbot for employee queries, HR chatbot for employee support, AI powered HR software for businesses, virtual HR assistant India, Niti AI conversational bot, HR policy chatbot",
  openGraph: {
    title: "AI HR Chatbot for Employee Queries & 24/7 Support | HR Niti",
    description: "AI HR chatbot for employee queries and support. Meet Niti AI — automate leave balances, payslip downloads, policy answers, and HR ticket resolutions 24/7.",
    url: "https://www.hrniti.com/hr-chatbot",
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "AI HR Chatbot Niti AI - HR Niti" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI HR Chatbot for Employee Queries & 24/7 Support | HR Niti",
    description: "AI HR chatbot for employee queries and support. Meet Niti AI — automate leave balances, payslip downloads, policy answers, and HR ticket resolutions 24/7.",
    images: ["/og-default.png"],
  },
  alternates: { canonical: "https://www.hrniti.com/hr-chatbot" },
};

export default function HRChatbotPage() {
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
              "name": "HR Niti Niti AI HR Chatbot",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web, Android, iOS",
              "description": "An AI-powered conversational virtual assistant that automates employee queries, manages transactional leaves and attendance punches, processes secure payslip downloads, and integrates with the helpdesk ticket system.",
              "url": "https://www.hrniti.com/hr-chatbot",
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
                  "name": "AI HR Chatbot",
                  "item": "https://www.hrniti.com/hr-chatbot"
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

      {/* Hero section containing the interactive typing simulator mockup */}
      <ChatbotHero />

      {/* Core leave & payroll transaction synergy highlights */}
      <IntegrationHighlights />

      {/* Modern chatbot capabilities grid cards */}
      <ChatbotFeatures />

      {/* AEO indexable FAQ accordion disclosures */}
      <ChatbotFAQ />

      {/* Call to Action */}
      <CTASection />

      <Footer />
    </main>
  );
}
