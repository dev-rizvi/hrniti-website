import type { Metadata } from "next";
import WorkforceIntelligenceClient from "./WorkforceIntelligenceClient";

const BASE_URL = "https://www.hrniti.com";

export const metadata: Metadata = {
  title: "Employee Monitoring & Productivity Software for Modern Workplaces | HR Niti",
  description:
    "HR Niti Workforce Intelligence — automatically capture attendance, work hours, application usage, website activity, screenshots, idle time and task time from one centralized HRMS dashboard.",
  keywords:
    "employee monitoring software, employee productivity software India, workforce intelligence, windows employee monitoring, screenshot monitoring software, app usage tracking, website tracking, idle time tracker, remote employee monitoring India, IT company employee monitoring",
  alternates: {
    canonical: `${BASE_URL}/employee-monitoring-productivity-software`,
  },
  openGraph: {
    title: "Employee Monitoring & Productivity Software | HR Niti",
    description:
      "Know how your workforce spends its workday. Automatic attendance, screenshots, app & website tracking, task time, idle time and productivity dashboards — all in one HRMS.",
    url: `${BASE_URL}/employee-monitoring-productivity-software`,
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is employee monitoring software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Employee monitoring software is a tool that helps organizations track employee work activity, attendance, application usage, website visits, and productivity metrics during working hours. HR Niti Workforce Intelligence is a Windows-based monitoring platform integrated into the HRMS.",
      },
    },
    {
      "@type": "Question",
      name: "How does employee monitoring software work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A lightweight Windows agent is installed on employee laptops. It runs in the background and captures configurable metrics: attendance, active/idle time, applications used, websites visited, periodic screenshots and task time. Data is securely synced to the HR Niti cloud dashboard where managers can view individual, team and department reports.",
      },
    },
    {
      "@type": "Question",
      name: "Can HR Niti track employee attendance automatically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. HR Niti Workforce Intelligence automatically records login/logout times when the Windows agent starts, detects late arrivals, early logouts and working hours — without requiring employees to manually punch in.",
      },
    },
    {
      "@type": "Question",
      name: "Can HR Niti take employee screenshots?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. HR Niti can capture periodic screenshots at configurable intervals: 1, 5, 10, 15 or 30 minutes. Frequency and access are controlled by company policy and admin permissions. Employees can be notified that monitoring is active.",
      },
    },
    {
      "@type": "Question",
      name: "Can HR Niti track websites visited by employees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. HR Niti records websites visited and time spent on each domain. Admins can classify domains as productive, neutral or non-productive. This classification is company-configurable, recognising that the same website can be productive in different roles.",
      },
    },
    {
      "@type": "Question",
      name: "Can HR Niti track application usage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. HR Niti tracks all applications used on the employee's Windows device and the time spent in each. Admins can classify apps as productive or non-productive for accurate productivity scoring.",
      },
    },
    {
      "@type": "Question",
      name: "Can HR Niti monitor remote employees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. HR Niti Workforce Intelligence is built specifically for remote and hybrid teams. As long as the Windows agent is installed on the employee's laptop, monitoring works seamlessly whether the employee is in the office, at home, or at a client site.",
      },
    },
    {
      "@type": "Question",
      name: "Can HR Niti track idle time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. HR Niti detects keyboard and mouse inactivity to measure idle periods. Idle time is shown in the employee dashboard and subtracted from active productive time for accurate reporting.",
      },
    },
    {
      "@type": "Question",
      name: "Can HR Niti track time spent on tasks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. HR Niti supports task and project time tracking. Employees can log tasks and managers can see time spent per task, active vs. idle time within a task, and project-level productivity data.",
      },
    },
    {
      "@type": "Question",
      name: "Is HR Niti suitable for IT companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. HR Niti Workforce Intelligence is specifically designed for laptop-based workplaces such as software development companies, IT services firms, digital marketing agencies, BPOs, and remote/hybrid teams.",
      },
    },
    {
      "@type": "Question",
      name: "Is employee monitoring legal in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Employee monitoring is generally permissible in India for legitimate business purposes when disclosed to employees. Organizations should configure monitoring policies in accordance with applicable employment, privacy and data-protection requirements and inform employees about what is being monitored.",
      },
    },
    {
      "@type": "Question",
      name: "Does HR Niti provide productivity reports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. HR Niti provides employee, team, department and monthly productivity reports including total hours, active hours, idle hours, application usage, website usage, screenshot history, task time and attendance trends.",
      },
    },
    {
      "@type": "Question",
      name: "What privacy controls does HR Niti offer for employee monitoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HR Niti includes configurable screenshot frequency, role-based access controls, data retention policies, employee notification/consent mechanisms, audit logs, ability to exclude specific apps, secure data transmission, and the ability to disable selected monitoring features entirely.",
      },
    },
  ],
};

export default function WorkforceIntelligencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <WorkforceIntelligenceClient />
    </>
  );
}
