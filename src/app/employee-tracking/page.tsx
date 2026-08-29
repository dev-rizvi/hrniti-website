import type { Metadata } from "next";
import EmployeeTrackingClient from "./EmployeeTrackingClient";

const BASE_URL = "https://www.hrniti.com";

export const metadata: Metadata = {
  title: "Employee Activity Tracking & GPS Geofencing | HR Niti",
  description: "Monitor remote workflows, capture task-oriented timesheets, and track field teams with automated GPS geofenced check-ins.",
  keywords: "employee tracking software, field force tracking, GPS geofencing India, desktop activity monitoring, remote productivity",
  alternates: {
    canonical: `${BASE_URL}/employee-tracking`,
  },
  openGraph: {
    title: "Employee Activity Tracking & GPS Geofencing | HR Niti",
    description: "Monitor remote workflows, capture task-oriented timesheets, and track field teams with automated GPS geofenced check-ins.",
    url: `${BASE_URL}/employee-tracking`,
    type: "website",
  },
};

export default function EmployeeTrackingPage() {
  return <EmployeeTrackingClient />;
}
