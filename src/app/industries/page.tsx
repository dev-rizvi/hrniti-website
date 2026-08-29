import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesList from "@/components/industries/IndustriesList";
import IndustryComparison from "@/components/industries/IndustryComparison";
import CTASection from "@/components/about/CTASection";

export const metadata = {
    title: "Industry-Specific HRMS & Payroll Solutions",
    description:
        "Tailored HRMS and payroll software for Information Technology, Staffing, Healthcare, Manufacturing, Construction, Retail, Hospitality, and Financial Services.",
    keywords:
        "HRMS for IT companies, manufacturing payroll software, hospital HRMS India, retail attendance software, construction site labor payroll, industry HR solutions",
    alternates: { canonical: "https://www.hrniti.com/industries" },
    openGraph: {
        title: "Industry-Specific HRMS Solutions | HR Niti",
        description:
            "HR Niti configures around your industry's shift patterns, compliance needs, and workforce structure — not the other way around.",
        url: "https://www.hrniti.com/industries",
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "HR Niti Industry Solutions" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Industry-Specific HRMS Solutions | HR Niti",
        description: "See how HR Niti adapts to your industry's HR challenges.",
        images: ["/og-default.png"],
    },
};

export default function IndustriesPage() {
    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hrniti.com" },
                            { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.hrniti.com/industries" },
                        ],
                    }),
                }}
            />
            <Navbar />
            <IndustriesHero />
            <IndustriesList />
            <IndustryComparison />
            <CTASection />
            <Footer />
        </main>
    );
}
