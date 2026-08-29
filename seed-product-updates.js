const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updatesData = [
  {
    title: "Introducing HR Niti Mobile App v2.0",
    category: "Feature Release",
    summary: "We are thrilled to launch version 2.0 of the HR Niti Mobile App, bringing real-time geofenced attendance, instant payslip downloads, and visual org charts right to your pocket.",
    content: `<h3>Introducing HR Niti Mobile App v2.0</h3>
<p>We are thrilled to announce the official release of the <strong>HR Niti Mobile App v2.0</strong>, now available for download on both the iOS App Store and Google Play Store. This update is designed to empower employees and managers to handle HR operations on the go with zero friction.</p>

<h4>Key Highlights:</h4>
<ul>
  <li><strong>Geofenced Biometric Attendance:</strong> Clock in and out securely from designated client locations or remote workspaces with GPS-verified boundary checks.</li>
  <li><strong>Mobile Payslip Portal:</strong> Access, view, and securely download itemized monthly payslips directly to your smartphone.</li>
  <li><strong>Instant Expense Upload:</strong> Snap photos of travel and food bills to submit reimbursement claims directly to accounting in under 30 seconds.</li>
  <li><strong>Push Notification Reminders:</strong> Never miss a probation check, shift rotation request, or policy confirmation update.</li>
</ul>
<p>Update your application today or scan the QR code in your dashboard settings to download!</p>`
  },
  {
    title: "Automated Statutory PF & ESI Calculation Engine",
    category: "Enhancement",
    summary: "Seamlessly process monthly payroll with our newly upgraded calculation engine. Includes automatic state-specific professional tax and ESI rule updates.",
    content: `<h3>Automated PF & ESI Payroll Integration</h3>
<p>In our commitment to keeping your business fully compliant, we have rolled out a major backend upgrade to our <strong>Payroll Processing Engine</strong>. This update automates complex statutory filings and tax deduction math across all Indian states.</p>

<h4>What's New in this Release:</h4>
<ul>
  <li><strong>Real-time State Mandate Updates:</strong> State-specific professional tax slabs and LWF (Labour Welfare Fund) contributions are now managed automatically.</li>
  <li><strong>ESI Threshold Guard:</strong> Automatic warning triggers when an employee's salary crosses the ESI statutory gross limit, preventing wrongful deductions.</li>
  <li><strong>PF Form 12A Generation:</strong> One-click export of ECR text files ready for upload directly to the EPFO unified portal.</li>
</ul>
<p>No manual spreadsheet formulas or CSV corrections required. The payroll dashboard will display these changes in your next active pay cycle.</p>`
  },
  {
    title: "Enterprise-Grade MFA & Single Sign-On (SSO)",
    category: "Security",
    summary: "Secure your employee directory with enterprise-grade protection. Connect HR Niti to your company Google Workspace or Microsoft Azure AD account.",
    content: `<h3>Enterprise-Grade MFA & SSO Protocols</h3>
<p>Security is the foundation of modern HR management. Today, we are releasing advanced authentication controls to safeguard sensitive personal data, compensation records, and login directories.</p>

<h4>Key Security Enhancements:</h4>
<ul>
  <li><strong>Google Workspace & Microsoft Azure AD SSO:</strong> Enable single sign-on so employees can log in instantly using their official corporate accounts.</li>
  <li><strong>Time-based One-Time Passwords (TOTP):</strong> Enforce 2FA verification using Google Authenticator, Duo, or Microsoft Authenticator.</li>
  <li><strong>Session IP Restriction Rules:</strong> Restrict admin panel access to corporate office network IPs or trusted VPN networks.</li>
</ul>
<p>Account super-admins can toggle these options under <em>Settings &gt; Security &gt; Authentication Policies</em> starting today.</p>`
  },
  {
    title: "Custom Approval Workflows for Leave & Expenses",
    category: "Feature Release",
    summary: "Set up multi-level approval hierarchies for leaves, timesheets, and reimbursement claims. Configure fallback rules and delegation schedules.",
    content: `<h3>Multi-Level Custom Approval Workflows</h3>
<p>Managing operational requests in growing organizations requires flexibility. This release introduces a fully visual <strong>Workflow Builder</strong> to customize approval routes for leaves, overtime, and expenses.</p>

<h4>Workflow Capabilities:</h4>
<ul>
  <li><strong>Multi-tier Approval Routes:</strong> Direct requests to Team Lead, HOD, and HR Partner sequentially based on customizable financial or duration limits.</li>
  <li><strong>Conditional Logic Paths:</strong> Route expense claims above ₹10,000 directly to the CFO for special verification automatically.</li>
  <li><strong>Delegation & Out-of-Office Rules:</strong> Assign temporary approval authority to a peer during a manager's scheduled leave period.</li>
</ul>
<p>Get started by navigating to <em>Settings &gt; Approvals &gt; Workflow Configurations</em>.</p>`
  },
  {
    title: "Slack & MS Teams HR Bot Integration",
    category: "API & Integration",
    summary: "Punch attendance, approve leaves, and check holiday calendars directly inside Slack and Microsoft Teams panels.",
    content: `<h3>Slack & Microsoft Teams Chatbot Connect</h3>
<p>We are making it easier for employees to access everyday HR tasks without switching tabs. Our new Slack and Microsoft Teams chatbot integration brings key actions right where you communicate.</p>

<h4>Bot Features:</h4>
<ul>
  <li><strong>\`/punch\` Slack Command:</strong> Mark daily check-ins and check-outs directly inside designated chat channels.</li>
  <li><strong>Interactive Manager Approvals:</strong> Approve or reject team leave applications inside Slack/Teams direct messages with one click.</li>
  <li><strong>Holiday Alerts:</strong> Broadcast automated reminders for upcoming regional holidays to designated project channels.</li>
</ul>
<p>Workspace administrators can link their accounts under the <em>Integrations</em> tab in the admin panel.</p>`
  },
  {
    title: "Interactive Org Chart & Employee Directory Hub",
    category: "Feature Release",
    summary: "Explore your organization visually. Search team hierarchies, check reporting chains, and view employee profile cards.",
    content: `<h3>Visual Org Chart & Employee Directory</h3>
<p>Introducing a completely redesigned, interactive <strong>Org Chart and Directory Hub</strong>. Help new hires understand team hierarchies and locate peer contact cards instantly.</p>

<h4>Visual Features:</h4>
<ul>
  <li><strong>Interactive Tree Hierarchies:</strong> Click and expand cards to trace manager-report lines across departments.</li>
  <li><strong>Advanced Profile Search:</strong> Filter peers by skills, departments, office branches, or project teams.</li>
  <li><strong>Direct Communication Links:</strong> Initiate an email or chat conversation directly from profile cards with hover triggers.</li>
</ul>
<p>The Org Chart is now active for all employees via the main navigation sidebar.</p>`
  }
];

async function seed() {
  console.log("Deleting old updates...");
  await prisma.productUpdate.deleteMany();
  console.log("Seeding updates...");
  for (const u of updatesData) {
    const slug = u.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    await prisma.productUpdate.create({
      data: {
        title: u.title,
        slug: slug,
        summary: u.summary,
        category: u.category,
        content: u.content
      }
    });
  }
  console.log("Seeding complete!");
  process.exit(0);
}

seed().catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
