import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmallBusinessSolutionsClient from "./SmallBusinessSolutionsClient";
import { SMALL_BUSINESS_FAQS } from "./smallBusinessData";

const BASE_URL = "https://www.hrniti.com";
const pageUrl = `${BASE_URL}/small-business-solutions`;

export const metadata: Metadata = {
  title: "HRMS & Payroll for Small Businesses in India",
  description:
    "Best HRMS & payroll software for small businesses in India (1–50 staff). Automate PF, ESIC, PT, TDS, and mobile ESS in one platform.",
  keywords: [
    "HRMS software for small business",
    "HRMS for small businesses in India",
    "payroll software for small business India",
    "HRMS for startups",
    "payroll software for startups",
    "employee management software for small business",
    "attendance software for small business",
    "HRMS for 10 employees",
    "HRMS for 20 employees",
    "HRMS for 50 employees",
    "small business payroll software India",
    "affordable HRMS software India",
    "payroll automation for startups",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "HRMS & Payroll for Small Businesses in India | HR Niti",
    description:
      "Best HRMS & payroll software for small businesses in India (1–50 staff). Automate PF, ESIC, PT, TDS, and mobile ESS in one platform.",
    url: pageUrl,
    type: "website",
    siteName: "HR Niti",
    locale: "en_IN",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "HRMS & Payroll for Small Businesses in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HRMS & Payroll for Small Businesses in India | HR Niti",
    description:
      "Best HRMS & payroll software for small businesses in India (1–50 staff). Automate PF, ESIC, PT, TDS, and mobile ESS in one platform.",
    images: ["/og-default.png"],
  },
};

export default function SmallBusinessPage() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "HR Niti",
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Solutions",
          item: `${BASE_URL}/small-business-solutions`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "HRMS & Payroll Software for Small Businesses in India",
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "HR Niti Small Business HRMS & Payroll Software",
      operatingSystem: "Cloud / Web / Android / iOS",
      applicationCategory: "BusinessApplication",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "Contact for Pricing",
        availability: "https://schema.org/InStock",
      },
      description:
        "Comprehensive HRMS and payroll software tailored for Indian startups and SMBs with 1–50 employees. Automates attendance, leave, PF, ESIC, PT, TDS, payslips, and self-service.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: SMALL_BUSINESS_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <Navbar />
      <SmallBusinessSolutionsClient />
      <Footer />
    </main>
  );
}
