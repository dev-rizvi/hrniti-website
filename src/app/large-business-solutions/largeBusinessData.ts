export interface LargeBusinessFAQItem {
  question: string;
  answer: string;
}

export const LARGE_BUSINESS_FAQS: LargeBusinessFAQItem[] = [
  {
    question: "What is enterprise HRMS software?",
    answer:
      "Enterprise HRMS software is a centralized human resource and workforce management platform designed for large organizations with 250 to 1,000+ employees. It governs complex multi-tiered legal structures, cross-state statutory compliance, 24/7 rotational shift rostering, high-volume gross-to-net payroll, bi-directional ERP data synchronization, and granular role-based access control (RBAC) across corporate offices and factory shop floors.",
  },
  {
    question: "What is the best HRMS software for large businesses in India?",
    answer:
      "The best enterprise HRMS software for Indian large businesses combines robust multi-state statutory automation (covering EPF, ESIC, State PT, LWF, and Section 192 TDS) with direct ERP connectors (SAP, Oracle HCM, Workday, Microsoft Dynamics) and complex factory shift scheduling. HR Niti delivers these capabilities with high-availability cloud infrastructure, sub-second biometric synchronization, and dedicated enterprise onboarding support.",
  },
  {
    question: "Which HRMS is suitable for 250 to 1000 employees?",
    answer:
      "For companies with 250 to 1,000+ employees, HR Niti provides the ideal enterprise architecture. At this scale, organizations outgrow mid-market tools due to multi-factory shift rotas, complex union agreements, multi-entity payroll runs, and strict financial audit controls. HR Niti manages large-scale employee transactions effortlessly while eliminating the exorbitant customization costs and multi-year rollout delays typical of legacy software.",
  },
  {
    question: "Can HR Niti manage payroll across multiple Indian states?",
    answer:
      "Yes. HR Niti features an automated multi-state statutory engine supporting all 28 Indian states and Union Territories. It automatically determines applicable state Professional Tax (PT) slabs and seasonal adjustments, manages state-level Labour Welfare Fund (LWF) deduction cycles, applies local minimum wage circulars, and generates consolidated or state-specific EPFO ECR and ESIC compliance registers.",
  },
  {
    question: "Can HR Niti integrate with SAP?",
    answer:
      "Yes. HR Niti integrates with SAP ECC and SAP S/4HANA through secure RESTful APIs, SFTP batch file exchanges, and pre-mapped RFC connectors. It bi-directionally synchronizes employee master records, organizational cost centers, attendance hours, and monthly payroll journal vouchers directly into SAP General Ledger (FI/CO) without manual data re-entry.",
  },
  {
    question: "Can HR Niti integrate with Oracle HCM?",
    answer:
      "Yes. HR Niti supports enterprise integration with Oracle HCM Cloud and Oracle E-Business Suite. The platform exchanges employee job assignments, department hierarchies, leave adjustments, and localized Indian payroll deduction summaries via secure HTTPS REST APIs, maintaining financial data integrity and single-source-of-truth accuracy across systems.",
  },
  {
    question: "Does HR Niti support Workday or Microsoft Dynamics integration?",
    answer:
      "Yes. HR Niti connects with Workday and Microsoft Dynamics 365 Business Central / Finance & Operations. Organizations using global HR systems often deploy HR Niti as their localized Indian payroll and compliance engine, automatically pulling global employee profiles and pushing back verified Indian statutory payroll entries, payslip records, and attendance logs.",
  },
  {
    question: "Can HR Niti manage multi-shift and rotational workforce schedules?",
    answer:
      "Yes. HR Niti features an enterprise shift planner supporting 24/7 continuous operations, rotational day/night shifts, split shifts, weekend duty rotations, and factory roster assignments. It applies custom grace periods, break deductions, shift differential allowances, and automatic shift changeover notifications via mobile push and SMS.",
  },
  {
    question: "How does HR Niti calculate overtime for factory employees?",
    answer:
      "HR Niti calculates factory overtime strictly adhering to Section 59 of the Factories Act, 1948, which mandates double the ordinary rate of wages for work exceeding 9 hours in any day or 48 hours in any week. Overtime rules can also be configured to comply with state-specific Shops & Commercial Establishments Acts, collective bargaining agreements, and company overtime authorization policies.",
  },
  {
    question: "What enterprise security controls does HR Niti provide?",
    answer:
      "HR Niti enforces bank-grade security controls including 256-bit AES encryption at rest and TLS 1.3 encryption in transit, multi-factor authentication (MFA), SAML 2.0 / Azure AD single sign-on (SSO), automated daily encrypted cloud backups, annual vulnerability and penetration testing (VAPT), and secure hosting within high-availability, encrypted enterprise cloud infrastructure.",
  },
  {
    question: "Does HR Niti support role-based access and audit trails?",
    answer:
      "Yes. The platform provides granular Role-Based Access Control (RBAC) allowing enterprises to define custom access tiers for Super Admins, HR Business Partners, Plant Managers, Payroll Specialists, and Auditors. Immutable system audit trails record every record view, salary edit, permission modification, and approval override with full user identity and timestamp attribution.",
  },
  {
    question: "Can HR Niti manage multiple branches and factories?",
    answer:
      "Yes. HR Niti supports multi-entity corporate structures with parent companies, subsidiaries, manufacturing plants, corporate branch offices, and regional warehouses. Administrators configure localized operating calendars, shift rules, and approval chains for each factory or branch while corporate HR retains unified real-time analytics across the entire group.",
  },
  {
    question: "How does HR Niti support employee self-service at enterprise scale?",
    answer:
      "HR Niti deploys scalable native iOS and Android Employee Self-Service (ESS) mobile apps and web portals supporting thousands of concurrent employees. Workers can view biometric punch logs, request leave, submit geo-tagged field check-ins, download Form 16s and encrypted payslips, and resolve routine HR inquiries instantly through Niti AI without administrative bottlenecks.",
  },
  {
    question: "What workforce analytics can HR Niti provide?",
    answer:
      "Enterprise leadership gains access to comprehensive workforce intelligence: real-time headcount planning models, overtime cost leakage analytics, department-wise CTC expenditures, employee attrition patterns, leave liability financial projections, plant-level productivity ratios, and audit-ready statutory compliance health dashboards.",
  },
  {
    question: "How does enterprise HRMS implementation work?",
    answer:
      "Enterprise implementation follows a structured 4-phase methodology managed by enterprise implementation specialists: (1) Architecture & Discovery Mapping, (2) Historical Data Migration & ERP API Connector Configuration, (3) Parallel Payroll Run Validation & Hardware Sync, and (4) Role-Based User Training & Go-Live with dedicated account onboarding support.",
  },
];
