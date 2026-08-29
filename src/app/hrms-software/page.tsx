import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HRMSHero from "@/components/hrms/HRMSHero";
import FeatureGrid from "@/components/hrms/FeatureGrid";
import HRMSSimulator from "@/components/hrms/HRMSSimulator";
import BenefitCards from "@/components/hrms/BenefitCards";
import TestimonialSlider from "@/components/hrms/TestimonialSlider";
import CTASection from "@/components/about/CTASection";

export const metadata = {
    title: "Best HRMS Software in India 2026 - HR Niti",
    description: "Streamline your HR lifecycle with our AI-powered HRMS software. Features payroll, attendance, leave management, and more.",
    openGraph: {
        title: "Best HRMS Software in India 2026 - HR Niti",
        description: "HR Niti is India's best HRMS software. Manage payroll, attendance, leave, recruitment, and performance in one unified platform. AI-powered. Trusted by 500+ companies.",
        url: "https://www.hrniti.com/hrms-software",
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Best HRMS Software in India 2026 - HR Niti" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Best HRMS Software in India 2026 - HR Niti",
        description: "HR Niti is India's best HRMS software. Manage payroll, attendance, leave, recruitment, and performance in one unified platform. AI-powered. Trusted by 500+ companies.",
        images: ["/og-default.png"],
    },
    alternates: { canonical: "https://www.hrniti.com/hrms-software" },
    keywords: "HRMS software India, best HRMS software, HR management system, all-in-one HR software India, HR Niti HRMS",
};

export default function HRMSPage() {
    return (
        <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "HR Niti HRMS Software",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web, Android, iOS",
              description: "All-in-one HRMS software for Indian businesses with payroll, attendance, leave and more.",
              url: "https://www.hrniti.com/hrms-software",
              offers: { "@type": "Offer", price: "0", priceCurrency: "INR", description: "Free trial available" }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hrniti.com" },
                { "@type": "ListItem", position: 2, name: "HRMS Software", item: "https://www.hrniti.com/hrms-software" }
              ]
            }
          ])
        }}
      />
            <Navbar />

            <HRMSHero />

            <FeatureGrid />

            {/* Interactive HRMS Simulator Sandbox */}
            <section id="interactive-simulator" className="py-20 bg-slate-950 border-y border-slate-900 relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-sm font-black tracking-wider text-emerald-500 uppercase mb-3 block">Product Sandbox Sandbox</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                            Interactive HRMS <span className="text-emerald-500">Lifecycle Sandbox</span>
                        </h2>
                        <p className="text-slate-400 text-base md:text-lg font-medium">
                            Interact with the core operations of HR Niti in real-time. Experience digital onboarding, selfie geofenced attendance check-ins, automated payslip calculations, and exit settlements.
                        </p>
                    </div>

                    <HRMSSimulator />
                </div>
            </section>

            <BenefitCards />

            <TestimonialSlider />

            <CTASection />

            <Footer />
        </main>
    );
}
