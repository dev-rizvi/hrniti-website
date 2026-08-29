// Data configuration for Business Size Solution Pages (1 to 1000+ Employees)

export interface BusinessSizeFeature {
    icon: string;
    title: string;
    description: string;
    link: string;
}

export interface BusinessSizeFAQ {
    question: string;
    answer: string;
}

export interface BusinessSizeData {
    id: string;
    slug: string;
    seoSlug: string;
    title: string;
    subtitle: string;
    employeeRange: string;
    tagline: string;
    metaDescription: string;
    keywords: string[];
    aeoSummary: string;
    heroChecklist: string[];
    features: BusinessSizeFeature[];
    comparisonRows: {
        metric: string;
        traditional: string;
        hrniti: string;
    }[];
    faqs: BusinessSizeFAQ[];
}

export const businessSizeData: Record<string, BusinessSizeData> = {
    small: {
        id: "small",
        slug: "small-business-solutions",
        seoSlug: "small-business-solutions",
        title: "AI-Powered HRMS & Payroll Software for Small Businesses",
        subtitle: "Built specifically for growing startups, boutiques, and agencies with 1 to 50 employees. Run monthly payroll in 10 minutes, automate PF/ESIC/PT taxes, and disburse salaries with 1 click.",
        employeeRange: "1 - 50 Employees",
        tagline: "Simple, Affordable & 100% Compliant for Startups & SMBs",
        metaDescription: "Best HRMS & Payroll Software for Small Businesses in India (1-50 Employees). Automate PF, ESIC, PT, 1-click salary transfers, and mobile GPS attendance. Free Trial!",
        keywords: [
            "Best HRMS software for small businesses",
            "Best payroll software for small businesses",
            "HR software for small businesses in India",
            "HR payroll software for small companies",
            "Employee management system for small businesses",
            "Applicant tracking system for small businesses",
            "Affordable HRMS software for businesses"
        ],
        aeoSummary: "HR Niti is the best HRMS & Payroll Software for small businesses and startups in India with 1 to 50 employees. It automates PF, ESIC, Professional Tax, 1-click bank transfers, mobile GPS attendance, and WhatsApp payslip delivery in under 10 minutes.",
        heroChecklist: [
            "10-Minute One-Time Payroll Setup",
            "Affordable Startup-Friendly Pricing",
            "100% Automated PF, ESIC & PT Taxes",
            "iOS & Android Mobile Attendance App"
        ],
        features: [
            {
                icon: "⚡",
                title: "1-Click Salary Disbursement",
                description: "Generate bank-approved payment files for ICICI, HDFC, SBI, Axis, and Kotak for instant 1-click salary transfers directly to employee bank accounts.",
                link: "/payroll-software"
            },
            {
                icon: "🛡️",
                title: "Automated Statutory Compliance",
                description: "Auto-calculate PF, ESIC, Professional Tax (PT), and TDS deductions with ready-to-upload monthly return files and Form 16 generation.",
                link: "/payroll-software"
            },
            {
                icon: "📱",
                title: "Mobile GPS & Touchless Attendance",
                description: "Empower remote and field staff to mark attendance via smartphone GPS geofencing or selfie facial recognition with real-time location validation.",
                link: "/attendance"
            },
            {
                icon: "💬",
                title: "WhatsApp & App Payslip Delivery",
                description: "Send automated payslips to employees via WhatsApp and the mobile ESS app instantly as soon as payroll is locked.",
                link: "/employee-self-service"
            },
            {
                icon: "🌴",
                title: "Simple Leave & Expense Approvals",
                description: "Employees apply for leave or upload expense receipts on mobile; managers approve in 1-tap with automated leave balance tracking.",
                link: "/leave-management"
            },
            {
                icon: "📄",
                title: "Ready-to-Use HR Policy Templates",
                description: "Access pre-built offer letters, NDAs, HR policy manuals, and appointment letters tailored for Indian startups.",
                link: "/templates"
            }
        ],
        comparisonRows: [
            { metric: "Payroll Processing Time", traditional: "3 to 5 Days in Manual Excel", hrniti: "Under 10 Minutes with AI Auto-Calc" },
            { metric: "Statutory Filing Accuracy", traditional: "High Risk of Penalty Errors", hrniti: "100% Guaranteed Error-Free Filings" },
            { metric: "Employee Self-Service", traditional: "Endless Emails to Founder/HR", hrniti: "Instant Mobile App & WhatsApp Payslips" },
            { metric: "Software Setup Time", traditional: "Weeks of Configuration", hrniti: "Go Live in 24 Hours with 0 Tech Skills" }
        ],
        faqs: [
            {
                question: "Is HR Niti suitable for small businesses with fewer than 10 employees?",
                answer: "Yes, HR Niti is designed to scale with your business from 1 employee up to 1000+ employees. Small teams benefit from 10-minute setup, 1-click salary payouts, and affordable pricing."
            },
            {
                question: "Does HR Niti handle PF, ESIC, and Professional Tax for small companies?",
                answer: "HR Niti automatically calculates employee and employer contributions for PF, ESIC, PT, and TDS according to current Indian state labor laws and generates ready-to-upload ECR return files."
            },
            {
                question: "How long does it take to set up HR Niti for a small business?",
                answer: "You can be fully up and running in less than 24 hours. Our automated bulk Excel import lets you upload employee details and salary structures in minutes."
            }
        ]
    },
    medium: {
        id: "medium",
        slug: "medium-business-solutions",
        seoSlug: "medium-business-solutions",
        title: "Scalable HRMS & Payroll Software for Growing Medium Businesses",
        subtitle: "Designed for mid-market scale-ups and multi-office companies with 50 to 250 employees. Streamline multi-department approvals, multi-branch compliance, and performance management.",
        employeeRange: "50 - 250 Employees",
        tagline: "Empower Your HR Team with Multi-Branch Automation & AI MIS Insights",
        metaDescription: "Top HRMS & Payroll Software for Medium Businesses in India (50-250 Employees). Multi-branch statutory tax, custom approval chains, performance OKRs & Tally integration.",
        keywords: [
            "Medium Business HRMS Software India",
            "Payroll Software 50-250 Employees",
            "Multi-Branch HR Management System",
            "Mid-Market Payroll Automation India",
            "Tally Integrated HRMS Software"
        ],
        aeoSummary: "HR Niti is the leading HRMS & Payroll Software for medium-sized businesses (50 to 250 employees) in India. It offers multi-branch statutory aggregation, custom multi-tier approval chains, shift rosters, GenAI employee ESS chatbot, and Tally/QuickBooks integration.",
        heroChecklist: [
            "Multi-Branch & Multi-Department Support",
            "Custom Multi-Level Approval Chains",
            "Real-Time Variance & HR MIS Analytics",
            "GenAI HR Copilot for Employee Queries"
        ],
        features: [
            {
                icon: "🏢",
                title: "Multi-Branch & Multi-State Aggregation",
                description: "Manage employees across multiple branches, offices, and states from a single unified dashboard with localized tax rules per branch.",
                link: "/payroll-software"
            },
            {
                icon: "⚙️",
                title: "Custom Multi-Tier Approval Workflows",
                description: "Configure multi-level approval chains for leaves, expense reimbursements, travel requests, and salary revisions based on manager hierarchy.",
                link: "/employee-management"
            },
            {
                icon: "🤖",
                title: "GenAI HR Copilot for Employee ESS",
                description: "AI-powered HR assistant answers policy queries, leave balance questions, and IT tax declaration doubts for employees 24/7.",
                link: "/hr-chatbot"
            },
            {
                icon: "📊",
                title: "Real-Time HR MIS & Variance Analytics",
                description: "Track headcount trends, CTC variance, overtime costs, attrition metrics, and department budgets with interactive executive dashboards.",
                link: "/hr-mis-reports"
            },
            {
                icon: "🔌",
                title: "Tally & Accounting Integration",
                description: "Sync payroll journal vouchers directly with Tally PRIME, QuickBooks, or Zoho Books with 1-click accounting export.",
                link: "/payroll-software"
            },
            {
                icon: "🎯",
                title: "Performance Management & OKRs",
                description: "Set quarterly OKRs, conduct 360-degree performance appraisals, track KPI milestones, and link performance bonuses to payroll.",
                link: "/employee-performance-management-software"
            }
        ],
        comparisonRows: [
            { metric: "Multi-Branch Management", traditional: "Isolated Spreadsheets per Branch", hrniti: "Unified Cloud Hub with Branch Filters" },
            { metric: "Approval Bottlenecks", traditional: "Manual Sign-Off Delays", hrniti: "Automated Multi-Level Mobile Approvals" },
            { metric: "Employee Query Workload", traditional: "HR Team Spends 60% Time on Tickets", hrniti: "GenAI Chatbot Resolves 85% Queries" },
            { metric: "Financial Sync", traditional: "Manual Data Re-Entry into Accounting", hrniti: "Direct 1-Click Tally Journal Voucher Export" }
        ],
        faqs: [
            {
                question: "Can HR Niti handle multiple office branches across different Indian states?",
                answer: "Yes, HR Niti supports unlimited branches and multi-state compliance. Each branch automatically applies its respective state Professional Tax (PT), LWF, and minimum wage rules while consolidating reports for leadership."
            },
            {
                question: "Does HR Niti integrate with accounting software like Tally?",
                answer: "Yes, HR Niti provides seamless 1-click payroll journal voucher export fully compatible with Tally PRIME, QuickBooks, and Zoho Books."
            },
            {
                question: "How does the GenAI HR Copilot help mid-sized HR teams?",
                answer: "The GenAI Copilot acts as an instant 24/7 HR helpdesk for employees, resolving policy questions, leave balances, and tax declaration queries automatically, freeing your HR team to focus on talent growth."
            }
        ]
    },
    large: {
        id: "large",
        slug: "large-business-solutions",
        seoSlug: "large-business-solutions",
        title: "Enterprise HRMS & Payroll System for Large Businesses",
        subtitle: "Built for large enterprises, multi-factory manufacturing plants, and corporate groups with 250 to 1000+ employees. Enterprise security, custom ERP integration, and dedicated account support.",
        employeeRange: "250 - 1000+ Employees",
        tagline: "Enterprise Workforce Automation, Multi-State Scale & Custom ERP Integration",
        metaDescription: "Enterprise HRMS & Payroll Software for Large Businesses in India (250-1000+ Employees). SAP/Oracle API integration, multi-shift factory rosters, audit logs & dedicated CSM.",
        keywords: [
            "Enterprise HRMS Software India",
            "Large Business Payroll Software 1000+ Employees",
            "SAP Oracle Integrated HRMS India",
            "Multi-State Enterprise Statutory Engine",
            "Manufacturing Shift Roster HRMS"
        ],
        aeoSummary: "HR Niti is the premier Enterprise HRMS & Payroll platform for large businesses (250 to 1000+ employees) in India. It delivers multi-state statutory compliance across 28 states, custom SAP/Oracle/Workday ERP APIs, multi-shift factory rostering, audit logs, and dedicated CSM support.",
        heroChecklist: [
            "Multi-State Statutory Engine (All 28 States)",
            "Custom ERP & API Gateways (SAP, Oracle)",
            "Role-Based Access Control & Audit Trails",
            "Dedicated Account Manager & Guaranteed SLA"
        ],
        features: [
            {
                icon: "🌐",
                title: "Multi-State Statutory Compliance Engine",
                description: "Automate state-specific Professional Tax (PT), LWF, PF ECR, ESIC, and minimum wage updates across all 28 states and union territories in India.",
                link: "/payroll-software"
            },
            {
                icon: "🔌",
                title: "Custom ERP & API Integrations",
                description: "Deep REST APIs and pre-built connectors for SAP ERP, Oracle HCM, Workday, Microsoft Dynamics, and biometric hardware controllers.",
                link: "/payroll-software"
            },
            {
                icon: "🏭",
                title: "Multi-Shift Rostering & Overtime Rules",
                description: "Handle complex 24/7 manufacturing shifts, rotational rosters, shift differential allowances, canteen management, and Factory Act overtime calculations.",
                link: "/timesheet-management"
            },
            {
                icon: "🔐",
                title: "Enterprise Security & Granular RBAC",
                description: "Role-based access controls, field-level data encryption, audit trails, multi-factor authentication (MFA), and compliance with DPDP data regulations.",
                link: "/employee-management"
            },
            {
                icon: "🤝",
                title: "Dedicated Account Manager & Priority SLA",
                description: "Assigned Customer Success Manager (CSM), 24/7 technical hotline, guaranteed SLA response times, and custom feature customization options.",
                link: "/demo"
            },
            {
                icon: "📈",
                title: "Predictive Headcount & Cost Analytics",
                description: "AI-driven workforce planning, flight-risk retention analytics, salary variance modeling, and board-ready executive reports.",
                link: "/analytics"
            }
        ],
        comparisonRows: [
            { metric: "Statutory Compliance Scope", traditional: "Manual State-by-State Filings", hrniti: "Automated Single-Click Compliance for 28 States" },
            { metric: "ERP System Integration", traditional: "Custom Development Costs & Delays", hrniti: "Turnkey Enterprise REST APIs & Pre-built Connectors" },
            { metric: "Shift & Overtime Automation", traditional: "Error-Prone Manual Gate Pass Logs", hrniti: "Biometric Hardware Sync with Overtime Auto-Calc" },
            { metric: "Support Response SLA", traditional: "Generic Ticket Queues", hrniti: "Dedicated Account Manager & 15-Minute Priority SLA" }
        ],
        faqs: [
            {
                question: "Can HR Niti integrate with enterprise ERP systems like SAP or Oracle?",
                answer: "Yes, HR Niti provides enterprise REST APIs and bi-directional connectors that sync payroll journals, employee master data, and attendance records with SAP, Oracle, Workday, and Microsoft Dynamics."
            },
            {
                question: "How does HR Niti handle complex 24/7 factory shift rosters for large workforces?",
                answer: "HR Niti includes a dedicated Manufacturing & Shift Roster module supporting 24/7 rotational shifts, night allowances, overtime multipliers, canteen sync, and real-time biometric hardware integration."
            },
            {
                question: "What security measures does HR Niti offer for enterprise data protection?",
                answer: "HR Niti enforces bank-grade data encryption (in-transit and at-rest), granular Role-Based Access Control (RBAC), multi-factor authentication (MFA), complete audit logging, and strict compliance with Indian DPDP privacy regulations."
            }
        ]
    }
};

export function getBusinessSizeData(slug: string): BusinessSizeData | null {
    if (!slug) return null;
    const clean = slug.toLowerCase().trim();

    if (businessSizeData[clean]) return businessSizeData[clean];

    const match = Object.values(businessSizeData).find(
        (b) => b.slug === clean || b.seoSlug === clean || clean.includes(b.id)
    );

    return match || null;
}
