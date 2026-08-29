import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmployeeHero from "@/components/employee/EmployeeHero";
import DigitalOnboarding from "@/components/employee/DigitalOnboarding";
import EmployeeDatabaseFeatures from "@/components/employee/EmployeeDatabaseFeatures";
import EmployeeESS from "@/components/employee/EmployeeESS";
import EmployeeFAQ from "@/components/employee/EmployeeFAQ";
import CTASection from "@/components/about/CTASection";

export const metadata = {
    title: "Best Employee Management Software India",
    description: "HRMS software for employee management. Centralize employee records with HR Niti's secure online employee management system, digital onboarding, and ESS portal.",
    openGraph: {
        title: "Best Employee Management Software for Companies in India | HR Niti",
        description: "HRMS software for employee management. Centralize employee records with HR Niti's secure online employee management system, digital onboarding, and ESS portal.",
        url: "https://www.hrniti.com/employee-management",
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Best Employee Management Software - HR Niti" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Employee Management Software for Companies in India | HR Niti",
        description: "HRMS software for employee management. Centralize employee records with HR Niti's secure online employee management system, digital onboarding, and ESS portal.",
        images: ["/og-default.png"],
    },
    alternates: { canonical: "https://www.hrniti.com/employee-management" },
    keywords: "HRMS software for employee management, Best employee management software for companies, Best employee management software in India, Online employee management software, employee management system for small businesses",
};

export default function EmployeeManagementPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <EmployeeHero />

            <EmployeeDatabaseFeatures />

            <DigitalOnboarding />

            <EmployeeESS />

            <EmployeeFAQ />

            <CTASection />

            <Footer />
        </main>
    );
}
