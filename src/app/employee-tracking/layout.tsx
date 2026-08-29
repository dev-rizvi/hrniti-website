import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Employee Tracking Software - Productivity & Time Monitoring - HR Niti",
    description: "Monitor remote workflows, capture task timesheets, and track field teams with automated GPS geofenced check-ins and live dashboards.",
    keywords: "employee tracking software, employee monitoring software, productivity tracking, time tracking software India, HR Niti employee tracking",
    openGraph: {
        title: "Employee Tracking Software - HR Niti",
        description: "Real-time employee productivity monitoring, app usage tracking, and attendance insights for remote and on-site teams.",
        type: "website",
        images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "HR Niti Employee Tracking" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Employee Tracking Software - HR Niti",
        description: "Monitor employee productivity and attendance in real-time with HR Niti.",
        images: ["/og-default.png"],
    },
};

export default function EmployeeTrackingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
