import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PayrollHero from "@/components/payroll/PayrollHero";
import PayrollProcess from "@/components/payroll/PayrollProcess";
import ComplianceManager from "@/components/payroll/ComplianceManager";
import FeatureHighlight from "@/components/attendance/FeatureHighlight"; // Reusing this for Payslip feature
import PayrollFAQ from "@/components/payroll/PayrollFAQ";
import CTASection from "@/components/about/CTASection";
import PayslipFeature from "@/components/payroll/PayslipFeature";

export const metadata = {
    title: "Cloud Payroll Software for India Companies",
    description: "Automated payroll software for businesses in India. Cloud payroll software for employee salary management with 1-click bank transfers, PF, ESIC & PT tax calculations.",
    openGraph: {
        title: "Automated & Cloud Payroll Software for Businesses in India | HR Niti",
        description: "Automate salary processing with HR Niti — online payroll software for companies. Handle PF, ESIC, TDS, statutory compliance, and 1-click salary disbursement.",
        url: "https://www.hrniti.com/payroll-software",
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Automated Cloud Payroll Software - HR Niti" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Automated & Cloud Payroll Software for Businesses in India | HR Niti",
        description: "Automate salary processing with HR Niti — online payroll software for companies. Handle PF, ESIC, TDS, statutory compliance, and 1-click salary disbursement.",
        images: ["/og-default.png"],
    },
    alternates: { canonical: "https://www.hrniti.com/payroll-software" },
    keywords: "HRMS software with payroll management, automated payroll software for businesses, cloud payroll software for businesses, best payroll software for small businesses, online payroll software for companies, employee payroll management software online, HR payroll software for small companies",
};

export default function PayrollPage() {
    return (
        <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "HR Niti Payroll Software",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web, Android, iOS",
              description: "Cloud-based payroll software for Indian businesses. Automate PF, ESI, TDS, and salary disbursement.",
              url: "https://www.hrniti.com/payroll-software",
              offers: { "@type": "Offer", price: "0", priceCurrency: "INR", description: "Free trial available" }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hrniti.com" },
                { "@type": "ListItem", position: 2, name: "Payroll Software", item: "https://www.hrniti.com/payroll-software" }
              ]
            }
          ])
        }}
      />
            <Navbar />

            <PayrollHero />

            <PayrollProcess />

            <ComplianceManager />

            <PayslipFeature />

            <PayrollFAQ />

            <CTASection />

            <Footer />
        </main>
    );
}
