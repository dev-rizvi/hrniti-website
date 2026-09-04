import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Employee Monitoring & Productivity Software | HR Niti Workforce Intelligence",
    description: "HR Niti Workforce Intelligence — Windows employee monitoring, automatic attendance, periodic screenshots, website & app usage tracking, idle time and productivity analytics for modern workplaces.",
    keywords: "employee monitoring software, productivity tracking software India, workforce intelligence, employee activity monitoring, windows employee tracker, remote employee monitoring, screenshot monitoring, app usage tracking, website tracking employees, idle time tracking, employee productivity software India",
    openGraph: {
        title: "Employee Monitoring & Productivity Software | HR Niti",
        description: "Know how your workforce spends its workday. Automatic attendance, screenshots, app & website tracking, task time, idle time and productivity dashboards — all in one HRMS.",
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "HR Niti Workforce Intelligence" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Employee Monitoring & Productivity Software | HR Niti",
        description: "Windows workforce tracker with automatic attendance, screenshots, website & app usage, idle time and productivity analytics.",
        images: ["/og-default.png"],
    },
};

export default function WorkforceIntelligenceLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
