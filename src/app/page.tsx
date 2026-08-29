import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeHero from "@/components/home/HomeHero";
import FeatureTabs from "@/components/home/FeatureTabs";
import BuiltForIndiaSection from "@/components/home/BuiltForIndiaSection";
import OneSolutionSection from "@/components/home/OneSolutionSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import BenefitCards from "@/components/home/BenefitCards";
import PricingROISection from "@/components/home/PricingROISection";
import SecuritySection from "@/components/home/SecuritySection";
import OnboardingSteps from "@/components/home/OnboardingSteps";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import SupportSection from "@/components/home/SupportSection";
import CTASection from "@/components/about/CTASection";

export const metadata = {
  title: "Best HRMS & Payroll Software in India",
  description: "Complete HRMS and payroll software in India. Automate payroll, attendance, leave, recruitment, and AI HR chatbot for growing teams.",
  keywords: "Best HR and payroll software in India, Complete HRMS and payroll software in India, All in one HR software for businesses, Cloud based HR software for companies, AI powered HR software for businesses, HR management software for Indian companies, Automated HR management software for businesses, HR Niti",
  alternates: { canonical: "https://www.hrniti.com" },
  openGraph: {
    title: "HR Niti - Best HR and Payroll Software in India",
    description: "Automate payroll, attendance, leave & recruitment with HR Niti — India's GenAI-powered HRMS built for growing businesses.",
    url: "https://www.hrniti.com",
    type: "website",
    images: [{ url: "/uploads/1781778053575-HRNITI_LOGO.png", width: 1200, height: 630, alt: "HR Niti HRMS Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HR Niti - Best HR and Payroll Software in India",
    description: "Automate payroll, attendance, leave & recruitment with HR Niti.",
    images: ["/uploads/1781778053575-HRNITI_LOGO.png"],
  },
};

export default async function Home() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HR Niti",
              url: "https://www.hrniti.com",
              logo: "https://www.hrniti.com/uploads/1781778053575-HRNITI_LOGO.png",
              description: "India's leading cloud-based HRMS & Payroll Software for modern businesses.",
              address: { "@type": "PostalAddress", addressCountry: "IN" },
              contactPoint: { "@type": "ContactPoint", contactType: "customer support", url: "https://www.hrniti.com/contact-us" },
              sameAs: ["https://linkedin.com/company/hrniti", "https://twitter.com/hrniti"]
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "HR Niti",
              url: "https://www.hrniti.com",
            },
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "HR Niti HRMS",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web, Android, iOS",
              description: "Cloud-based HRMS and Payroll Software for Indian businesses with AI-powered automation.",
              url: "https://www.hrniti.com",
              offers: { "@type": "Offer", price: "0", priceCurrency: "INR", description: "Free trial available" }
            }
          ])
        }}
      />
      <Navbar />

      <HomeHero />

      <FeatureTabs />

      <BuiltForIndiaSection />

      <OneSolutionSection />

      <IndustriesSection />

      <BenefitCards />

      <PricingROISection />

      <SecuritySection />

      <OnboardingSteps />

      <TestimonialSlider />

      <SupportSection />

      <CTASection />

      <Footer />
    </main>
  );
}
