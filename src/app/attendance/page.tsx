import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AttendanceHero from "@/components/attendance/AttendanceHero";
import FeatureHighlight from "@/components/attendance/FeatureHighlight";
import AttendanceFAQ from "@/components/attendance/AttendanceFAQ";
import ContentBlock from "@/components/about/ContentBlock";
import CTASection from "@/components/about/CTASection";

export const metadata = {
    title: "Attendance Management & Time Tracking HRMS",
    description: "Employee attendance management software with touchless biometrics, mobile GPS geofencing, shift scheduling, and seamless payroll integration.",
    openGraph: {
        title: "HRMS Software for Attendance Management & Time Tracking | HR Niti",
        description: "Employee attendance management software with touchless biometrics, mobile GPS geofencing, shift scheduling, and seamless payroll integration.",
        url: "https://www.hrniti.com/attendance",
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "HRMS Software for Attendance Management - HR Niti" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "HRMS Software for Attendance Management & Time Tracking | HR Niti",
        description: "Employee attendance management software with touchless biometrics, mobile GPS geofencing, shift scheduling, and seamless payroll integration.",
        images: ["/og-default.png"],
    },
    alternates: { canonical: "https://www.hrniti.com/attendance" },
    keywords: "HRMS software for attendance management, employee attendance management software, HR software for employee attendance and payroll, HR software for attendance and leave management, biometric attendance software, online attendance system India",
};

export default function AttendancePage() {
    return (
        <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "HR Niti Attendance Management System",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web, Android, iOS",
              description: "Biometric and mobile attendance tracking for Indian businesses.",
              url: "https://www.hrniti.com/attendance",
              offers: { "@type": "Offer", price: "0", priceCurrency: "INR", description: "Free trial available" }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hrniti.com" },
                { "@type": "ListItem", position: 2, name: "Attendance Management", item: "https://www.hrniti.com/attendance" }
              ]
            }
          ])
        }}
      />
            <Navbar />

            <AttendanceHero />

            <FeatureHighlight />

            <ContentBlock
                title="Remote Attendance with Geo-tagging"
                subtitle="WORK FROM ANYWHERE"
                description="Enable your field force and remote employees to mark attendance from their smartphones. Our system captures the precise GPS location and time, ensuring authenticity while offering flexibility."
                imageAlt="Employee marking attendance on mobile"
                imageUrl="/image/Attendance.png"
                showButton={true}
            />

            <ContentBlock
                title="Shift Rostering & Automation"
                subtitle="COMPLEX SHIFTS SIMPLIFIED"
                description="Manage rotational shifts, night shifts, and flexible hours with our automated roster management. Define rules for late marks, overtime, and half-days, and let the system handle the calculations."
                imageAlt="Shift Planner Dashboard"
                imageUrl="/image/ShiftRotation.png"
                reversed={true}
            />

            <AttendanceFAQ />

            <CTASection />

            <Footer />
        </main>
    );
}
