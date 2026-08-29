export interface PainPoint {
    title: string;
    desc: string;
    bullets: string[];
}

export interface Benefit {
    title: string;
    desc: string;
}

export interface FAQ {
    q: string;
    a: string;
}

export interface Industry {
    slug: string;
    aliases?: string[];
    title: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    iconName: string;
    headline: string;
    summary: string;
    challenges: string[];
    solutions: string[];
    painPoints: PainPoint[];
    subSegments: string[];
    benefits: Benefit[];
    faqs: FAQ[];
}

export const industries: Industry[] = [
    {
        slug: "information-technology",
        aliases: ["it-services", "it-software"],
        title: "Information Technology",
        metaTitle: "HR & Payroll Software for IT & Tech Companies | HR Niti",
        metaDescription:
            "HR Niti automates recruitment, remote attendance, project timesheets, and performance appraisals for IT, software, and SaaS companies across India.",
        keywords:
            "HRMS for IT companies, HR software for IT industry India, remote employee attendance software, software developer appraisal HRMS",
        iconName: "Laptop2",
        headline: "Streamlined HR for Fast-Moving IT & Software Teams",
        summary:
            "Hire, onboard, track hybrid attendance, and manage continuous performance for tech teams without slowing down delivery sprints.",
        challenges: [
            "Onboarding remote and hybrid developers consistently",
            "Tracking billable hours and project timesheet sync",
            "High tech talent attrition and retention management",
            "Running goal-setting (OKRs) and continuous review cycles",
        ],
        solutions: [
            "Automate tech recruitment, offer letters, and digital document vaults",
            "Sync project timesheets directly with client billing and payroll",
            "Track attendance fairly across in-office, remote, and hybrid staff",
            "Run continuous 360° reviews and OKR milestone tracking",
        ],
        painPoints: [
            {
                title: "Scaling Tech Hiring & Digital Onboarding",
                desc: "Hire software engineers and product managers without HR bottlenecks.",
                bullets: ["Automated offer workflows", "Digital document collection", "Pre-built NDA & policy signoffs", "Instant ESS portal setup"],
            },
            {
                title: "Hybrid & Distributed Attendance",
                desc: "Flexible attendance rules for engineers working remote, client-site, or office.",
                bullets: ["GPS geofenced mobile punches", "WFH request approvals", "Flexible shift rosters", "Biometric IP restriction"],
            },
            {
                title: "Project Timesheet & Payroll Integration",
                desc: "Link developer project hours directly to client billing and salary processing.",
                bullets: ["Project-wise hour logging", "Billable vs non-billable tracking", "Overtime auto-calc", "Client invoice audit logs"],
            },
            {
                title: "OKR & Performance Appraisal Management",
                desc: "Keep developer goals aligned with product roadmaps through continuous feedback.",
                bullets: ["Quarterly OKR tracking", "Continuous 1-on-1 feedback", "Bell curve rating sync", "Variable bonus pay integration"],
            },
        ],
        subSegments: ["Software & Product SaaS", "IT Services & Consulting", "Global Capability Centers (GCC)", "Cybersecurity & Cloud", "AI & Data Analytics Labs"],
        benefits: [
            { title: "50% Faster Hiring Cycles", desc: "Digital onboarding pipelines fast-track tech talent joining times." },
            { title: "Seamless Timesheet Sync", desc: "Log billable project hours directly into monthly payroll calculations." },
            { title: "Empowered Mobile ESS", desc: "Developers view payslips, tax declarations, and leave requests via mobile app." },
            { title: "Structured OKR Reviews", desc: "Run transparent quarterly appraisals linked directly to salary increments." },
        ],
        faqs: [
            { q: "Does HR Niti support remote and hybrid attendance for software teams?", a: "Yes — attendance policies are configurable for remote, hybrid, and client-site employees with GPS geofencing." },
            { q: "Can HR Niti integrate timesheets with client project billing?", a: "Yes, project-wise billable hours log directly into timesheet reports and sync with payroll." },
            { q: "How does HR Niti handle Form 16 and TDS for tech employees?", a: "Employees submit IT tax declarations on the ESS portal; HR Niti auto-calculates TDS and generates Form 16." },
            { q: "Is HR Niti suitable for fast-growing IT startups?", a: "Yes, HR Niti scales effortlessly from 5-member startups to 1000+ enterprise engineering orgs." },
        ],
    },
    {
        slug: "staffing-and-recruitment",
        aliases: ["manpower-services", "staffing-agencies"],
        title: "Staffing & Recruitment",
        metaTitle: "HRMS & Payroll Software for Staffing & Manpower Agencies",
        metaDescription:
            "Manage off-role contract staff, multi-client billing, blue-collar payouts, and statutory compliance across thousands of deployed deputations.",
        keywords: "HRMS for staffing agencies, manpower payroll software, contract labor payroll system India, temp staffing HRMS",
        iconName: "Users2",
        headline: "High-Volume Contract Payroll & Manpower Management",
        summary:
            "Automate monthly payroll payouts, attendance capture, and statutory filings for thousands of contract staff deployed across multiple client sites.",
        challenges: [
            "Managing multi-client rate cards and complex payout calculations",
            "Collecting attendance from client locations on time",
            "High monthly employee turnover and rapid offboarding",
            "Managing PF, ESIC, LWF, and PT filings across multiple states",
        ],
        solutions: [
            "Configure client-specific billing rules and commission payouts",
            "Capture mobile GPS or WhatsApp attendance at client premises",
            "Generate bulk 1-click salary transfer files for bank accounts",
            "Auto-generate state-wise ECR files for PF, ESIC, and PT compliance",
        ],
        painPoints: [
            {
                title: "Multi-Client Rate Card Complexity",
                desc: "Handle different wage rates, allowances, and billing formulas per client deployment.",
                bullets: ["Client master configuration", "Custom CTC calculators", "Markup percentage billing", "Bulk contract renewals"],
            },
            {
                title: "Client-Site Attendance Aggregation",
                desc: "Collect accurate attendance for off-role workers across hundreds of client offices.",
                bullets: ["WhatsApp bot attendance", "Mobile GPS geofencing", "Client supervisor approvals", "Bulk Excel attendance import"],
            },
            {
                title: "High Volume Payouts & Bulk Bank Files",
                desc: "Disburse thousands of worker payouts on time without manual bank file errors.",
                bullets: ["ICICI, HDFC, SBI file generation", "Hold salary management", "1-click payout locking", "Instant SMS payslip alerts"],
            },
            {
                title: "Multi-State Statutory Filing Burden",
                desc: "Stay 100% compliant with state PF, ESIC, LWF, and PT rules for contract labor.",
                bullets: ["Automated ECR return files", "Sub-code ESIC management", "Contract labor register generation", "Audit-ready compliance vault"],
            },
        ],
        subSegments: ["IT Staffing & Deputation", "Industrial & Blue-Collar Manpower", "Security & Facility Staffing", "Gig Worker Operations", "Executive Search Agencies"],
        benefits: [
            { title: "100% Accurate Client Billing", desc: "Automate margin, GST, and payroll calculations per client agreement." },
            { title: "Rapid Bulk Onboarding", desc: "Onboard 500+ contract staff in minutes with automated bulk Excel uploads." },
            { title: "Zero PF/ESIC Penalty Risk", desc: "Auto-generate error-free statutory returns for all Indian states." },
            { title: "Client Supervisor Approval Portal", desc: "Clients verify and approve worker attendance before billing run." },
        ],
        faqs: [
            { q: "Can HR Niti generate client-wise billing invoices for staffing firms?", a: "Yes, HR Niti calculates worker wages, agency markups, and GST to generate audit-ready client invoices." },
            { q: "How does HR Niti handle attendance for workers deployed at client locations?", a: "Contract staff can punch attendance via mobile GPS geofencing, face recognition, or supervisor web approvals." },
            { q: "Does HR Niti support multi-state PF and ESIC sub-codes?", a: "Yes, HR Niti generates state-specific PF ECR and ESIC monthly returns across all branches." },
        ],
    },
    {
        slug: "hospitality",
        aliases: ["hotels-restaurants", "qsr-chains"],
        title: "Hospitality & Food Services",
        metaTitle: "HR & Payroll Software for Hotels, Restaurants & QSRs",
        metaDescription:
            "HR Niti simplifies 24/7 rotational shifts, tip distribution, daily wage payouts, and mobile attendance for hotels, resorts, and restaurant chains.",
        keywords: "HRMS for hotels, restaurant payroll software, hospitality shift scheduler, daily wage payroll system India",
        iconName: "Hotel",
        headline: "Simplify 24/7 Rotational Shifts & Service Staff Payouts",
        summary:
            "Keep hotel, resort, and restaurant operations running seamlessly with touchless attendance, shift swapping, and automated tip/allowance processing.",
        challenges: [
            "Scheduling complex rotational shifts and split shifts across departments",
            "High attrition rate among service, kitchen, and housekeeping staff",
            "Managing tip distributions, service charge payouts, and night allowances",
            "Tracking part-time and daily wage staff attendance accurately",
        ],
        solutions: [
            "Drag-and-drop 24/7 shift roster builder with shift swap approvals",
            "Selfie facial recognition check-in at kitchen and reception counters",
            "Automated tip, night shift allowance, and overtime calculation",
            "Mobile self-service for staff to view duty rosters and apply for leave",
        ],
        painPoints: [
            {
                title: "24/7 Rotational Shift & Split-Shift Chaos",
                desc: "Schedule front desk, housekeeping, and F&B teams without roster overlap.",
                bullets: ["Drag-and-drop shift scheduler", "Split shift configuration", "Shift swap mobile workflow", "Late-coming penalty rules"],
            },
            {
                title: "Touchless Attendance at Property Outlets",
                desc: "Prevent buddy punching among kitchen, bar, and service personnel.",
                bullets: ["Tablet facial recognition", "Geo-fenced mobile punches", "Real-time floor attendance", "Canteen sync integration"],
            },
            {
                title: "Tip & Service Charge Payout Management",
                desc: "Fairly calculate service charge and tips alongside monthly base salary.",
                bullets: ["Variable allowance engine", "Night shift bonus auto-calc", "Overtime hour tracking", "Daily wage payout register"],
            },
            {
                title: "High Staff Turnaround & Onboarding",
                desc: "Onboard new stewards, chefs, and room attendants without paperwork delays.",
                bullets: ["Instant digital joining", "ID verification upload", "Pre-built HR policy acceptance", "WhatsApp payslip delivery"],
            },
        ],
        subSegments: ["Luxury Hotels & Resorts", "Quick Service Restaurants (QSR)", "Fine Dining & Cafe Chains", "Cloud Kitchen Networks", "Event & Banquet Venues"],
        benefits: [
            { title: "No Shift Overlaps", desc: "Automated roster validation prevents double-booking hotel staff." },
            { title: "Touchless Counter Attendance", desc: "Face recognition tablets ensure hygienic check-ins for kitchen staff." },
            { title: "Instant Roster Alerts", desc: "Staff receive duty roster updates directly on WhatsApp and mobile app." },
            { title: "Accurate Night Allowances", desc: "Night shift differentials and overtime paid out with 100% accuracy." },
        ],
        faqs: [
            { q: "Can HR Niti handle split shifts common in restaurants?", a: "Yes, HR Niti supports split shifts, rotational rosters, and 24/7 hotel operations." },
            { q: "How do kitchen and service staff mark attendance without touch points?", a: "Property staff check in via facial recognition tablets placed at employee entrances." },
            { q: "Can hotel managers send duty rosters on WhatsApp?", a: "Yes, published shift rosters are automatically dispatched to employees via WhatsApp." },
        ],
    },
    {
        slug: "human-resources",
        aliases: ["hr-consultancies", "payroll-outsourcing"],
        title: "Human Resources & Payroll Outsource",
        metaTitle: "HRMS & Payroll Platform for HR Agencies & Consultancies",
        metaDescription:
            "Empower HR agencies and payroll outsourcing providers to manage multi-tenant payroll, client portals, and HR services under one roof.",
        keywords: "HRMS for HR agencies, payroll outsourcing software, multi-tenant HRMS India, HR consultancy software",
        iconName: "Briefcase",
        headline: "Multi-Tenant HR & Payroll Engine for HR Service Providers",
        summary:
            "Run white-labeled payroll, compliance filings, and employee self-service for all your client organizations from a single cloud console.",
        challenges: [
            "Managing multi-company payroll rules and custom salary structures",
            "Switching between disparate software for different corporate clients",
            "Providing clients with dedicated real-time reporting dashboards",
            "Ensuring strict data isolation and security between client accounts",
        ],
        solutions: [
            "Multi-tenant architecture allowing seamless client account management",
            "White-labeled client self-service portal with agency branding",
            "Automated multi-company statutory filing and Form 16 generation",
            "Role-based access control isolating client data strictly",
        ],
        painPoints: [
            {
                title: "Multi-Company Payroll Management",
                desc: "Process monthly payroll for 50+ client companies without manual errors.",
                bullets: ["Single-switch client dashboard", "Custom CTC component builder", "Bulk payroll lock & approval", "Client invoice auto-billing"],
            },
            {
                title: "White-Labeled Client Experience",
                desc: "Give your corporate clients a branded portal with your logo and domain.",
                bullets: ["Custom domain support", "Custom logo & theme branding", "Client admin portal", "Dedicated client reporting"],
            },
            {
                title: "Statutory Filing & Tax Outsourcing",
                desc: "Generate monthly PF ECR, ESIC returns, and PT challans across clients.",
                bullets: ["State statutory compliance engine", "Automated Form 16 PDF batch", "TDS tax computation", "Filing status tracker"],
            },
            {
                title: "Client HR Helpdesk & Ticket Resolution",
                desc: "Resolve employee queries across client companies efficiently.",
                bullets: ["GenAI HR Chatbot for ESS", "Helpdesk ticketing system", "SLA resolution tracking", "Query analytics"],
            },
        ],
        subSegments: ["Payroll Outsourcing Providers", "HR Managed Service Firms", "HR Consultancies & Advisory", "Recruitment & Executive Search", "Compliance Advisory Agencies"],
        benefits: [
            { title: "Manage All Clients in 1 Dashboard", desc: "Switch between corporate client accounts with a single click." },
            { title: "White-Labeled Client Portals", desc: "Build client trust with custom-branded HR portals." },
            { title: "Zero Payroll Calculation Errors", desc: "Automate complex tax computations across varying corporate structures." },
            { title: "AI-Powered HR Chatbot", desc: "Automate 85% of employee policy queries across client accounts." },
        ],
        faqs: [
            { q: "Can HR consultancies manage white-labeled portals for their clients?", a: "Yes, HR Niti offers white-labeled portals complete with agency logo, theme, and custom domain." },
            { q: "How many client companies can an HR outsourcing firm manage?", a: "Unlimited — HR Niti's multi-tenant architecture scales cleanly across hundreds of clients." },
            { q: "Is client data kept securely isolated?", a: "Yes, field-level encryption and strict tenant isolation guarantee client data privacy." },
        ],
    },
    {
        slug: "professional-services",
        aliases: ["consulting-firms", "ca-law-firms"],
        title: "Professional Services & Consulting",
        metaTitle: "HR & Payroll Software for Professional Services & Consulting",
        metaDescription:
            "HR Niti optimizes project-wise billable hours, partner approvals, expenses, and talent management for CA firms, law consultancies, and agency teams.",
        keywords: "HRMS for consulting firms, CA firm payroll software, billable hours tracking software, professional services HRMS",
        iconName: "Calculator",
        headline: "Maximize Billable Productivity for Consulting & Advisory Firms",
        summary:
            "Track consultant utilization, streamline partner approvals, and manage multi-currency reimbursements with an integrated HR & timesheet platform.",
        challenges: [
            "Tracking consultant billable vs non-billable utilization rates",
            "Complex travel & out-of-pocket expense reimbursement approvals",
            "Managing partner hierarchy and multi-level approval workflows",
            "Handling performance bonuses tied to billable revenue targets",
        ],
        solutions: [
            "Real-time timesheets with project-level billable hour tracking",
            "Mobile expense claim upload with OCR receipt scanning",
            "Custom multi-tier approval chains based on partner hierarchy",
            "Performance appraisal module linked to revenue target delivery",
        ],
        painPoints: [
            {
                title: "Consultant Utilization & Hour Tracking",
                desc: "Ensure every billable consultant hour is accurately logged to client projects.",
                bullets: ["Project timesheet entry", "Utilization percentage dashboard", "Overtime & holiday tracking", "Client audit logs"],
            },
            {
                title: "Client Expense & Reimbursement Delays",
                desc: "Speed up travel and out-of-pocket expense claims for client billing.",
                bullets: ["Mobile receipt scan", "Multi-currency support", "Partner 1-click approvals", "Tally PRIME voucher export"],
            },
            {
                title: "Partner & Manager Hierarchical Approvals",
                desc: "Configure multi-level approval rules for leaves, hires, and salary changes.",
                bullets: ["Custom approval workflows", "Partner delegation mode", "Email & mobile notifications", "Audit trail logs"],
            },
            {
                title: "Bonus & Revenue Target Tracking",
                desc: "Link consultant quarterly bonuses directly to target billable hours achieved.",
                bullets: ["KRA & KPI milestone engine", "Revenue bonus calculator", "Appraisal review cycles", "Variable pay payroll sync"],
            },
        ],
        subSegments: ["CA & Financial Advisory Firms", "Management Consulting", "Legal & Law Consultancies", "Marketing & Advertising Agencies", "Architecture & Design Studios"],
        benefits: [
            { title: "Higher Billable Margins", desc: "Eliminate unbilled consultant hours through daily timesheet logging." },
            { title: "Fast Expense Reimbursements", desc: "Approve and payout consultant expense claims in 48 hours." },
            { title: "Partner-Level Control", desc: "Granular access controls keep sensitive partner draw details confidential." },
            { title: "Tally Accounting Export", desc: "Sync payroll and expense journals directly into Tally or QuickBooks." },
        ],
        faqs: [
            { q: "Can consultants log project timesheets on the mobile app?", a: "Yes, consultants can log billable hours, select client codes, and submit timesheets from mobile or web." },
            { q: "Does HR Niti handle multi-level approval chains for partner signoffs?", a: "Yes, multi-tier approval chains can be customized according to your firm's partner hierarchy." },
            { q: "Can expense reimbursements be exported to Tally PRIME?", a: "Yes, 1-click accounting voucher export syncs expense claims directly into Tally, QuickBooks, or Zoho." },
        ],
    },
    {
        slug: "financial-services",
        aliases: ["finance", "bfsi-banking"],
        title: "Financial Services & BFSI",
        metaTitle: "HR & Payroll Software for Banks, NBFCs & Financial Services",
        metaDescription:
            "HR Niti delivers role-based security, multi-branch statutory aggregation, and audit logs for banks, NBFCs, and financial service enterprises.",
        keywords: "HRMS for BFSI, HR software for financial services, bank payroll software India, multi-branch statutory compliance",
        iconName: "Landmark",
        headline: "Bank-Grade Security & Multi-Branch Compliance for BFSI",
        summary:
            "Centralize HR operations across thousands of branch locations while enforcing strict role-based access control and state statutory compliance.",
        challenges: [
            "Controlling access to sensitive employee salary and financial data",
            "Managing statutory rules across hundreds of regional branch offices",
            "High turnover in field sales agents and loan relationship managers",
            "Complying with strict RBI, DPDP, and financial audit regulations",
        ],
        solutions: [
            "Granular Role-Based Access Control (RBAC) and data encryption",
            "Multi-branch statutory tax aggregation with localized rules",
            "Mobile GPS attendance tracking for field loan officers",
            "Complete system audit logs and DPDP compliance framework",
        ],
        painPoints: [
            {
                title: "Strict Data Security & Access Controls",
                desc: "Restrict sensitive payroll and HR data strictly to authorized personnel.",
                bullets: ["Granular RBAC permissions", "Field-level data encryption", "System audit trails", "Multi-Factor Authentication (MFA)"],
            },
            {
                title: "Multi-Branch Statutory Compliance",
                desc: "Automate state PT, LWF, PF, and ESIC rules across every regional branch.",
                bullets: ["Branch master configuration", "State-wise tax calculators", "Centralized compliance reports", "Audit-ready filings"],
            },
            {
                title: "Field Sales & Loan Officer Tracking",
                desc: "Track daily attendance and location check-ins for distributed sales reps.",
                bullets: ["GPS geofenced check-ins", "Client visit logging", "Conveyance expense tracking", "Real-time location maps"],
            },
            {
                title: "Incentive & Commission Payroll",
                desc: "Calculate loan disbursement commissions and sales incentives seamlessly.",
                bullets: ["Incentive matrix engine", "Performance bonus sync", "Attendance-linked payouts", "Bank file generation"],
            },
        ],
        subSegments: ["Banks & Microfinance Institutions", "NBFCs & Housing Finance", "Insurance Enterprises", "Stockbroking & Wealth Management", "Fintech Scaleups"],
        benefits: [
            { title: "Bank-Grade Data Protection", desc: "MFA, audit trails, and encrypted storage safeguard sensitive data." },
            { title: "Unified Branch Control", desc: "Manage 500+ bank branches from one centralized leadership dashboard." },
            { title: "Real-Time Field Sales Visibility", desc: "Monitor loan officer check-ins and client visits live." },
            { title: "Audit-Ready Compliance Vault", desc: "Instant compliance reports for internal, statutory, and RBI audits." },
        ],
        faqs: [
            { q: "Does HR Niti comply with Indian DPDP privacy regulations?", a: "Yes, HR Niti is built with data privacy controls, encryption, and audit logs complying with Indian DPDP rules." },
            { q: "Can HR Niti track attendance for field sales officers?", a: "Yes, loan officers mark attendance via mobile GPS geofencing with real-time location tags." },
            { q: "Is HR Niti suitable for large NBFCs with 100+ branches?", a: "Yes, HR Niti effortlessly consolidates multi-branch payroll, statutory filings, and attendance across India." },
        ],
    },
    {
        slug: "construction",
        aliases: ["real-estate", "infrastructure"],
        title: "Construction & Real Estate",
        metaTitle: "HR & Payroll Software for Construction & Infrastructure",
        metaDescription:
            "HR Niti manages site worker attendance, daily labor wages, contractor tracking, and safety compliance for construction and real estate projects.",
        keywords: "HRMS for construction industry, site labor payroll software, daily wage contractor software India, real estate HRMS",
        iconName: "HardHat",
        headline: "Master Site Labor Attendance, Daily Wages & Project Compliance",
        summary:
            "Track site worker punches via mobile facial recognition, automate contractor payouts, and maintain BOCW labor compliance across project sites.",
        challenges: [
            "Tracking site labor attendance across remote construction projects",
            "High reliance on sub-contractors and daily wage laborers",
            "Managing site allowances, safety compliance, and BOCW filings",
            "Lack of internet connectivity at remote construction sites",
        ],
        solutions: [
            "Offline-capable mobile facial recognition for site attendance",
            "Sub-contractor portal for daily labor muster verification",
            "Automated daily wage, overtime, and site allowance calculations",
            "BOCW (Building & Other Construction Workers) statutory report generator",
        ],
        painPoints: [
            {
                title: "Remote Site Attendance & Offline Sync",
                desc: "Mark attendance at remote project sites even when mobile data is unavailable.",
                bullets: ["Offline facial recognition", "Auto-sync on network reconnect", "Site supervisor punch mode", "Buddy punching elimination"],
            },
            {
                title: "Sub-Contractor & Daily Wage Management",
                desc: "Verify daily worker counts submitted by labor contractors before payout.",
                bullets: ["Contractor labor registers", "Daily wage muster verification", "Contractor billing sync", "Advance wage tracking"],
            },
            {
                title: "BOCW & Labor Law Compliance",
                desc: "Generate statutory registers mandated by Building & Construction Acts.",
                bullets: ["BOCW welfare fund report", "Form XIV & XV registers", "Safety training logs", "State minimum wage compliance"],
            },
            {
                title: "Project-Wise Labor Cost Allocation",
                desc: "Track exact labor expense allocated to each construction project site.",
                bullets: ["Project cost center tagging", "Labor CTC allocation", "Site variance reports", "ERP voucher integration"],
            },
        ],
        subSegments: ["Residential & Commercial Real Estate", "Highway & Infrastructure Projects", "EPC & Turnkey Contractors", "Industrial Civil Construction", "Interior Fit-Out Companies"],
        benefits: [
            { title: "Zero Labor Over-Billing", desc: "Facial recognition punches eliminate ghost workers and contractor inflation." },
            { title: "Works Offline at Remote Sites", desc: "Attendance records cache locally and sync automatically when internet restores." },
            { title: "Instant BOCW Statutory Reports", desc: "Generate audit-ready construction labor registers with 1 click." },
            { title: "Accurate Site Cost Allocation", desc: "Know exact labor expenditures per building or infrastructure stretch." },
        ],
        faqs: [
            { q: "Does HR Niti facial recognition work offline at remote construction sites?", a: "Yes, worker attendance caches securely on mobile/tablet and auto-syncs when network connectivity resumes." },
            { q: "Can HR Niti generate BOCW construction labor registers?", a: "Yes, statutory registers under the Building & Other Construction Workers Act are generated automatically." },
            { q: "How does HR Niti prevent contractor labor rate inflation?", a: "Facial biometric punches verify actual worker presence at project gates before supervisor sign-off." },
        ],
    },
    {
        slug: "healthcare",
        aliases: ["pharma-healthcare", "healthcare-ops", "hospitals-labs"],
        title: "Healthcare & Pharma",
        metaTitle: "HRMS & Payroll Software for Hospitals, Labs & Pharma Plants | HR Niti",
        metaDescription:
            "HR Niti simplifies 24/7 hospital shift rosters, doctor payouts, GMP audit vaults, and contractor management for hospitals, labs, and pharma units.",
        keywords: "HRMS for hospitals, pharma HR software, hospital shift roster software India, lab staff payroll system",
        iconName: "HeartPulse",
        headline: "Audit-Ready HR for Hospitals, Diagnostic Labs & Pharma Plants",
        summary:
            "Coordinate 24/7 care rosters across medical departments, automate doctor/nurse payouts, and maintain audit-ready records across facilities.",
        challenges: [
            "Building 24/7 shift rosters for doctors, nurses, and emergency staff",
            "Managing complex doctor payout models (consultants vs retainers)",
            "Strict GMP, FDA, and NABH compliance audit requirements",
            "High turnover among nursing and technical support staff",
        ],
        solutions: [
            "24/7 rotational shift roster builder with emergency call-out alerts",
            "Multi-tier payout calculator for full-time doctors, retainers, and visiting consultants",
            "Centralized document vault with complete audit trail history",
            "Automated nursing staff onboarding and compliance tracking",
        ],
        painPoints: [
            {
                title: "24/7 Medical Roster Scheduling",
                desc: "Schedule emergency care, ICU, and ward rosters without coverage gaps.",
                bullets: ["Automated 24/7 roster engine", "Emergency call-out alerts", "Shift rotation rules", "Duty swap mobile approvals"],
            },
            {
                title: "Doctor & Consultant Payout Complexity",
                desc: "Process salaries, retainer fees, and per-procedure payouts accurately.",
                bullets: ["Retainer vs payroll calculation", "TDS 194J vs 192 rules", "Visiting consultant tracking", "Variable payout engine"],
            },
            {
                title: "NABH & GMP Compliance Audit Vault",
                desc: "Keep staff qualification certificates and health records audit-ready.",
                bullets: ["License expiry tracking", "Complete audit log history", "Medical fitness records", "Document vault storage"],
            },
            {
                title: "Multi-Facility Staff Onboarding",
                desc: "Standardize HR operations across hospital chains and diagnostic centers.",
                bullets: ["Centralized employee master", "Facility-wise access control", "Digital joining kits", "Mobile payslip access"],
            },
        ],
        subSegments: ["Multi-Specialty Hospitals", "Diagnostic & Pathology Labs", "Pharma Manufacturing Plants", "Chain Clinics & Care Homes", "Medical Equipment Firms"],
        benefits: [
            { title: "Zero Care Coverage Gaps", desc: "Automated roster alerts ensure ICU and emergency shifts are always covered." },
            { title: "Audit-Ready NABH Vault", desc: "Instant retrieval of staff medical licenses, certifications, and training logs." },
            { title: "Seamless Doctor Payouts", desc: "Handle full-time salaried doctors and visiting consultant retainers in one run." },
            { title: "Mobile Duty Roster Access", desc: "Nurses and medical techs view shift schedules live on their smartphones." },
        ],
        faqs: [
            { q: "Can HR Niti handle 24/7 rotational shifts for hospital nursing staff?", a: "Yes, HR Niti is built specifically for 24/7 rotational shift schedules, night allowances, and emergency call-outs." },
            { q: "How does HR Niti handle payouts for visiting consultant doctors?", a: "HR Niti supports dual tax structures — TDS 194J for professional consultants and TDS 192 for salaried staff." },
            { q: "Is HR Niti compliant with NABH and GMP audit requirements?", a: "Yes, full audit logs, qualification tracking, and centralized document vaults keep your facilities audit-ready." },
        ],
    },
    {
        slug: "education",
        aliases: ["schools-colleges", "edtech-institutes"],
        title: "Education & EdTech",
        metaTitle: "HR & Payroll Software for Schools, Colleges & EdTech | HR Niti",
        metaDescription:
            "HR Niti manages faculty workload, academic calendar leaves, UGC/CBSE compliance, and multi-campus payroll for educational institutions.",
        keywords: "HRMS for schools, college payroll software India, faculty attendance system, edtech HR software",
        iconName: "GraduationCap",
        headline: "Academic-Ready HR for Schools, Colleges & EdTech Networks",
        summary:
            "Automate faculty attendance, lecture-based payouts, vacation leave rules, and multi-campus HR compliance from a single platform.",
        challenges: [
            "Managing complex academic leave rules (vacation vs non-vacation staff)",
            "Calculating per-lecture payouts for visiting faculty and tutors",
            "Consolidating HR operations across multiple campuses or schools",
            "Fulfilling CBSE, UGC, and NAAC accreditation staff record audits",
        ],
        solutions: [
            "Configurable academic leave engine supporting vacation policies",
            "Lecture-wise payout tracker for guest professors and online tutors",
            "Multi-campus cloud dashboard with institute-wise controls",
            "Accreditation-ready digital staff record vault (NAAC/CBSE compliant)",
        ],
        painPoints: [
            {
                title: "Academic Vacation & Non-Vacation Leave Engine",
                desc: "Apply different leave policies for teaching faculty vs administrative staff.",
                bullets: ["Vacation staff leave rules", "Summer break accrual tracking", "Earned leave conversion", "Exam duty leaves"],
            },
            {
                title: "Guest Faculty & Per-Lecture Payouts",
                desc: "Calculate monthly honorarium based on actual lectures delivered.",
                bullets: ["Lecture-wise hour logging", "Honorarium payout engine", "TDS 194J deduction", "Subject-wise cost tracking"],
            },
            {
                title: "Multi-Campus Administration",
                desc: "Manage multiple schools, colleges, or learning centers centrally.",
                bullets: ["Campus master setup", "Institute-wise payroll run", "Consolidated HR reporting", "Role-based campus access"],
            },
            {
                title: "NAAC, UGC & CBSE Compliance Audits",
                desc: "Keep faculty qualification, experience, and research paper logs organized.",
                bullets: ["Faculty credential vault", "Experience certificate generator", "Staff strength reports", "Audit-ready exports"],
            },
        ],
        subSegments: ["K-12 Private Schools", "Colleges & Higher Education Universities", "Coaching Institutes & Test Prep", "EdTech Companies", "Vocational Training Centers"],
        benefits: [
            { title: "Academic Calendar Sync", desc: "Automate leave rules aligned with summer breaks and exam schedules." },
            { title: "Error-Free Guest Honorarium", desc: "Pay visiting professors accurately based on verified lecture logs." },
            { title: "One-Click NAAC Staff Reports", desc: "Generate faculty qualification and experience reports for accreditation audits." },
            { title: "Centralized Campus Operations", desc: "Unify HR across all school branches or coaching centers nationwide." },
        ],
        faqs: [
            { q: "Can HR Niti handle different leave rules for teaching vs non-teaching staff?", a: "Yes, HR Niti allows separate policy configurations for vacation staff (teachers) and non-vacation staff (admin/maintenance)." },
            { q: "Does HR Niti support per-lecture payouts for visiting professors?", a: "Yes, honorarium payouts can be calculated based on logged lecture hours or subject sessions." },
            { q: "Is HR Niti helpful for NAAC and CBSE accreditation audits?", a: "Yes, complete faculty credential vaults and staff registers can be exported instantly for compliance audits." },
        ],
    },
    {
        slug: "manufacturing",
        aliases: ["industrial-plants", "factories"],
        title: "Manufacturing & Industrial",
        metaTitle: "HR & Payroll Software for Manufacturing Plants & Factories | HR Niti",
        metaDescription:
            "HR Niti automates multi-plant attendance, 24/7 shop floor rosters, Factory Act overtime, and PF/ESIC filings for manufacturing units across India.",
        keywords: "HRMS for manufacturing, factory payroll software, shop floor attendance system, Factory Act compliance software",
        iconName: "Factory",
        headline: "Built for Multi-Shift, Multi-Plant Manufacturing Teams",
        summary:
            "Run attendance, shifts, and payroll across plants and shop floors from a single system — with Factory Act compliance built in.",
        challenges: [
            "Tracking attendance across rotating shifts and multiple plants",
            "Manually calculating overtime and shift allowances under Factory Act",
            "Keeping statutory compliance consistent across multi-state units",
            "Buddy punching and inaccurate shop-floor attendance logs",
        ],
        solutions: [
            "Automate 24/7 shift scheduling and shop-floor rostering",
            "Capture biometric/face recognition attendance at plant gates",
            "Auto-calculate overtime multipliers, shift allowances, and daily wages",
            "Maintain Factory Act registers (Form 12, 15) and statutory filings",
        ],
        painPoints: [
            {
                title: "Multi-Plant & Rotating Shift Rosters",
                desc: "Manage shift patterns across shop floors, assembly lines, and warehouses.",
                bullets: ["Rotational shift automation", "Plant-wise attendance dashboard", "Shift allowance rules", "Late-coming penalty engine"],
            },
            {
                title: "Factory Act Overtime & Wage Payouts",
                desc: "Calculate double-rate overtime and night differentials accurately.",
                bullets: ["Factory Act overtime calculator", "Canteen deduction sync", "Attendance-linked payroll", "1-click salary file"],
            },
            {
                title: "Shop-Floor Biometric Integration",
                desc: "Prevent buddy punching at plant entry gates with hardware biometrics.",
                bullets: ["Biometric device API sync", "Face recognition gate integration", "Real-time floor attendance", "Access controller integration"],
            },
            {
                title: "Factory Inspection & Statutory Compliance",
                desc: "Generate statutory registers mandated by Indian factory inspectors.",
                bullets: ["Form 12 (Adult Worker Register)", "Form 15 (Muster Roll)", "PF, ESIC & LWF ECR returns", "State minimum wage compliance"],
            },
        ],
        subSegments: ["Auto Components & Engineering", "Pharma & Chemical Plants", "Textiles & Garment Units", "Food Processing & FMCG", "Heavy Machinery & Metals"],
        benefits: [
            { title: "Zero Overtime Over-Payment", desc: "Automated Factory Act overtime calculations eliminate manual errors." },
            { title: "Plant Gate Biometric Sync", desc: "Real-time sync between hardware biometric controllers and cloud payroll." },
            { title: "Factory Inspector Ready", desc: "Generate Form 12, 15, and muster rolls for inspections instantly." },
            { title: "Multi-Unit Scalability", desc: "Manage manufacturing units across 28 states from a single dashboard." },
        ],
        faqs: [
            { q: "Does HR Niti integrate with physical biometric hardware at plant gates?", a: "Yes, HR Niti connects directly with biometric thumb readers and facial recognition gate controllers." },
            { q: "How does HR Niti handle double-rate overtime under the Factory Act?", a: "Overtime rules can be configured to auto-calculate 1.5x or 2.0x base rates based on attendance punches." },
            { q: "Can factory HR teams generate statutory muster rolls?", a: "Yes, Form 12, Form 15, and state muster rolls are generated automatically." },
        ],
    },
    {
        slug: "logistics",
        aliases: ["supply-chain", "transportation"],
        title: "Logistics & Supply Chain",
        metaTitle: "HR & Payroll Software for Logistics & Supply Chain | HR Niti",
        metaDescription:
            "HR Niti simplifies driver GPS attendance, warehouse shift rosters, trip allowance payouts, and dekho compliance for logistics companies in India.",
        keywords: "HRMS for logistics, warehouse payroll software, driver attendance tracking India, supply chain HR software",
        iconName: "Truck",
        headline: "Mobile Attendance & Trip Payouts for Logistics & Warehouses",
        summary:
            "Track driver location punches, warehouse shift rosters, and trip allowance payouts across fulfillment hubs nationwide.",
        challenges: [
            "Tracking attendance for long-haul drivers and delivery executives on the move",
            "High turnover and shift rotation at distribution centers and warehouses",
            "Calculating trip allowances, mileage bonuses, and night halt pay",
            "Managing multi-state statutory rules for transit hub employees",
        ],
        solutions: [
            "Mobile GPS attendance with trip location geo-tagging",
            "Warehouse shift rostering with biometric gate integration",
            "Automated trip allowance, kilometers driven, and night halt payouts",
            "Centralized compliance engine for transit hubs across states",
        ],
        painPoints: [
            {
                title: "Driver & Delivery Rep GPS Attendance",
                desc: "Know exact punch locations for long-haul and last-mile delivery teams.",
                bullets: ["Mobile GPS check-in", "Trip start/end location tags", "Offline punch caching", "Real-time location validation"],
            },
            {
                title: "Warehouse Shift Roster Management",
                desc: "Schedule 24/7 packing, sorting, and dispatch shifts at fulfillment centers.",
                bullets: ["Fulfillment center rosters", "Peak season hiring support", "Overtime hour calculation", "Biometric turnstile integration"],
            },
            {
                title: "Trip Allowance & Mileage Payroll Sync",
                desc: "Calculate trip allowances based on distance traveled and night halts.",
                bullets: ["KM-based allowance calculator", "Night halt bonus engine", "Advance trip settlement", "Fuel reimbursement sync"],
            },
            {
                title: "Multi-Hub Statutory Compliance",
                desc: "Unify statutory tax filings for logistics hubs located in different states.",
                bullets: ["Multi-state PT & LWF", "Centralized PF ECR returns", "Contract driver records", "Audit trail vault"],
            },
        ],
        subSegments: ["3PL & 4PL Logistics", "Warehouse & Fulfillment Centers", "Cold Chain & Express Delivery", "Fleet Operators & Freight Forwarders", "Hyperlocal Last-Mile Delivery"],
        benefits: [
            { title: "Real-Time Driver Location Punching", desc: "Drivers check in at transit halts using mobile GPS with zero hardware needed." },
            { title: "Seamless Trip Payouts", desc: "Automate distance-based allowances alongside monthly base salary." },
            { title: "24/7 Warehouse Productivity", desc: "Keep fulfillment centers fully staffed during peak festive sales." },
            { title: "Multi-State Hub Compliance", desc: "Consolidate statutory filings for warehouses across India." },
        ],
        faqs: [
            { q: "How do long-haul drivers mark attendance on the road?", a: "Drivers mark attendance via the mobile app, which captures GPS coordinates and time stamps automatically." },
            { q: "Can HR Niti calculate trip allowances based on kilometers driven?", a: "Yes, custom allowance rules compute payouts based on logged trip distance and night halts." },
            { q: "Is HR Niti suitable for large ecommerce fulfillment centers?", a: "Yes, HR Niti manages high-density warehouse shift rosters, biometric turnstiles, and temp staffing during peak sales." },
        ],
    },
    {
        slug: "retail",
        aliases: ["retail-chains", "fmcg-supermarkets"],
        title: "Retail & FMCG Networks",
        metaTitle: "HR & Payroll Software for Retail Chains & FMCG Networks | HR Niti",
        metaDescription:
            "HR Niti centralizes store staff attendance, mobile leave approvals, sales commissions, and payroll across retail chains and FMCG outlets.",
        keywords: "HRMS for retail, retail store payroll software India, store staff attendance software, FMCG HR software",
        iconName: "ShoppingBag",
        headline: "Unified HR for Every Retail Outlet & Sales Store",
        summary:
            "Centralize HR across every retail store — from mobile attendance and incentive payouts to store manager leave approvals.",
        challenges: [
            "HR data scattered across individual store locations and outlets",
            "High-frequency shift changes, part-time staff, and weekend rushes",
            "Slow, paper-based leave and regularization approvals",
            "Calculating sales commissions and statutory deductions across stores",
        ],
        solutions: [
            "Centralize HR, attendance, and payroll across all store outlets",
            "Mobile GPS check-in with store geofencing for sales staff",
            "Automate sales commission, incentive, and statutory payroll",
            "Enable 1-tap mobile approvals for store managers",
        ],
        painPoints: [
            {
                title: "Scattered Store Data Consolidation",
                desc: "Bring every outlet's attendance and employee data into one leadership dashboard.",
                bullets: ["Centralized store master", "Outlet-wise headcount view", "Store manager access control", "Consolidated payroll run"],
            },
            {
                title: "Store Staff Mobile Attendance",
                desc: "Ensure store promoters and cashiers punch in only when physically inside the store.",
                bullets: ["Store GPS geofencing", "Selfie face recognition", "Shift swap mobile workflow", "Late entry deduction"],
            },
            {
                title: "Sales Commission & Incentive Payroll",
                desc: "Pay monthly sales commissions alongside base salary with zero delays.",
                bullets: ["Target vs achievement matrix", "Commission tier calculator", "Incentive payroll sync", "Store-wise payout reports"],
            },
            {
                title: "High Retail Attrition & Offboarding",
                desc: "Manage high turnover rates with rapid digital onboarding and quick F&F.",
                bullets: ["Instant mobile joining", "Digital ID collection", "Automated F&F settlement", "WhatsApp payslip delivery"],
            },
        ],
        subSegments: ["Fashion & Apparel Chains", "Supermarkets & Grocery Chains", "Consumer Electronics Retail", "Quick Service Restaurants (QSR)", "Optical & Luxury Retail"],
        benefits: [
            { title: "100% Store Attendance Visibility", desc: "Know real-time staffing levels across every retail outlet nationwide." },
            { title: "Store-Geofenced Punching", desc: "Staff mark attendance only when physically present inside assigned store premises." },
            { title: "Automated Sales Commissions", desc: "Calculate sales incentive payouts accurately to motivate store promoters." },
            { title: "Mobile Self-Service for Store Staff", desc: "Cashiers and stewards view duty rosters, payslips, and apply for leave on mobile." },
        ],
        faqs: [
            { q: "Can HR Niti manage HR for 100+ retail store locations?", a: "Yes, HR Niti centralizes store staff records, attendance, and payroll across all outlets in one cloud platform." },
            { q: "How do store managers verify if staff are actually inside the store when punching in?", a: "Store geofencing ensures punches are accepted only within the store's exact GPS radius." },
            { q: "Can sales incentive structures be calculated in monthly payroll?", a: "Yes, commission matrices compute automatically based on store sales achievements." },
        ],
    },
];

export function getIndustryBySlug(slug: string): Industry | null {
    if (!slug) return null;
    const clean = slug.toLowerCase().trim();

    const exact = industries.find(
        (i) => i.slug === clean || i.aliases?.includes(clean)
    );
    if (exact) return exact;

    const fuzzy = industries.find(
        (i) => clean.includes(i.slug) || i.slug.includes(clean)
    );
    return fuzzy || null;
}
