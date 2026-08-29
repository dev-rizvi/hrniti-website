import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExpenseHero from "@/components/expense/ExpenseHero";
import ExpenseFeaturesShowcase from "@/components/expense/ExpenseFeaturesShowcase";
import ExpenseFunctions from "@/components/expense/ExpenseFunctions";
import SmartScanFeature from "@/components/expense/SmartScanFeature";
import ExpenseBroadFAQ from "@/components/expense/ExpenseBroadFAQ";
import CTASection from "@/components/about/CTASection";

export const metadata = {
    title: "Expense Management & Reimbursement App",
    description: "Employee expense management software. Simplify employee reimbursements, automate approval workflows, scan receipts, and track travel expenses in real-time.",
    keywords: "Employee expense management software, expense management software India, employee reimbursement software, business expense tracking, online expense management",
    alternates: { canonical: "https://www.hrniti.com/expense-management-software" },
    openGraph: {
        title: "Employee Expense Management Software & Reimbursement App | HR Niti",
        description: "Employee expense management software. Simplify employee reimbursements, automate approval workflows, scan receipts, and track travel expenses in real-time.",
        url: "https://www.hrniti.com/expense-management-software",
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Employee Expense Management Software - HR Niti" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Employee Expense Management Software & Reimbursement App | HR Niti",
        description: "Employee expense management software. Simplify employee reimbursements, automate approval workflows, scan receipts, and track travel expenses in real-time.",
        images: ["/og-default.png"],
    },
};

export default function ExpenseManagementSoftwarePage() {
    return (
        <main className="min-h-screen bg-white overflow-hidden">
            <Navbar />

            {/* Hero Section with Interactive Reimbursement Timeline */}
            <ExpenseHero />

            {/* Interactive Features Showcase (Eliminate Fraud, Auto Serial, Budget Limits) */}
            <ExpenseFeaturesShowcase />

            {/* OCR Smart Scan Feature */}
            <SmartScanFeature />

            {/* Core Functions / Benefits list */}
            <ExpenseFunctions />

            {/* Expandable FAQs */}
            <ExpenseBroadFAQ />

            {/* Call to Action Section */}
            <CTASection />

            <Footer />
        </main>
    );
}
