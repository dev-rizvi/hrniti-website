import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MISHero from "@/components/mis/MISHero";
import AnalyticsDashboard from "@/components/mis/AnalyticsDashboard";
import ReportTemplatesTiles from "@/components/mis/ReportTemplatesTiles";
import MISFAQ from "@/components/mis/MISFAQ";
import ContentBlock from "@/components/about/ContentBlock";
import CTASection from "@/components/about/CTASection";

export const metadata = {
    title: "HR MIS Reports & Workforce Analytics",
    description: "Generate comprehensive HR reports for payroll, attendance, and compliance. Visualize workforce trends with our intelligent MIS dashboard.",
    openGraph: {
        title: "HR MIS Reports & Analytics Dashboard - HR Niti | Workforce Intelligence",
        description: "Generate comprehensive HR MIS reports for payroll, attendance, headcount, and compliance. Visualize workforce trends with HR Niti's intelligent analytics dashboard.",
        url: "https://www.hrniti.com/hr-mis-reports",
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "HR MIS Reports & Analytics Dashboard - HR Niti | Workforce Intelligence" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "HR MIS Reports & Analytics Dashboard - HR Niti | Workforce Intelligence",
        description: "Generate comprehensive HR MIS reports for payroll, attendance, headcount, and compliance. Visualize workforce trends with HR Niti's intelligent analytics dashboard.",
        images: ["/og-default.png"],
    },
    alternates: { canonical: "https://www.hrniti.com/hr-mis-reports" },
    keywords: "HR MIS reports, HR analytics software India, payroll reports, attendance reports, workforce analytics dashboard",
};

export default function MISReportsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <MISHero />

            <AnalyticsDashboard />

            <ReportTemplatesTiles />

            <ContentBlock
                title="Statutory Compliance Made Easy"
                subtitle="100% COMPLIANT"
                description="Never worry about labor law non-compliance again. Our system auto-generates challans and reports for PF, ESIC, LWF, and Professional Tax in the exact government-prescribed formats for all states."
                imageAlt="Compliance Reporting"
                imageUrl="/image/Compliance.png"
                showButton={true}
                reversed={true}
            />

            <MISFAQ />

            <CTASection />

            <Footer />
        </main>
    );
}
