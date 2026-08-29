import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ESSHero from "@/components/ess/ESSHero";
import ESSFeatureTabs from "@/components/ess/ESSFeatureTabs";
import MobileAppSection from "@/components/ess/MobileAppSection";
import ESSFAQ from "@/components/ess/ESSFAQ";
import CTASection from "@/components/about/CTASection";

export const metadata = {
    title: "Employee Self Service (ESS) Mobile Portal",
    description: "Empower your workforce with our self-service portal. Enable employees to view payslips, apply for leave, and manage taxes from anywhere.",
    openGraph: {
        title: "Employee Self Service (ESS) Portal - HR Niti | Mobile-First HRMS",
        description: "Empower your workforce with HR Niti's ESS Portal. Enable employees to view payslips, apply for leave, manage Form 16, and update info from anywhere — mobile or web.",
        url: "https://www.hrniti.com/employee-self-service",
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Employee Self Service (ESS) Portal - HR Niti | Mobile-First HRMS" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Employee Self Service (ESS) Portal - HR Niti | Mobile-First HRMS",
        description: "Empower your workforce with HR Niti's ESS Portal. Enable employees to view payslips, apply for leave, manage Form 16, and update info from anywhere — mobile or web.",
        images: ["/og-default.png"],
    },
    alternates: { canonical: "https://www.hrniti.com/employee-self-service" },
    keywords: "employee self service portal, ESS portal HRMS, employee portal India, payslip download online, leave application portal",
};

export default function ESSPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <ESSHero />

            <ESSFeatureTabs />

            <MobileAppSection />

            <ESSFAQ />

            <CTASection />

            <Footer />
        </main>
    );
}
