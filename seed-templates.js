const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const templatesData = [
  {
    title: "Standard Job Offer Letter",
    tag: "Recruitment",
    description: "A legally reviewed job offer letter template for Indian companies. Includes standard clauses for compensation, probation notice, notice period, and mandatory joining documentation.",
    content: `<h3>Standard Job Offer Letter</h3>
<p>Dear [Candidate Name],</p>
<p>Following our recent discussions, we are pleased to offer you the position of <strong>[Job Title]</strong> at <strong>[Company Name]</strong>. We are excited about the prospect of you joining our team and contributing to our mutual success.</p>

<h4>1. Compensation and Benefits</h4>
<p>Your Cost to Company (CTC) will be <strong>₹[Amount] per annum</strong>, as detailed in the attached salary break-up sheet. This includes standard allowances, provident fund contributions, and statutory benefits as applicable.</p>

<h4>2. Probation and Notice Period</h4>
<p>You will be on probation for a period of <strong>six (6) months</strong> from your date of joining. Upon successful completion of probation, your employment will be confirmed in writing. During probation, either party may terminate employment by giving 15 days' notice. Post-confirmation, the notice period will be 60 days.</p>

<h4>3. Location and Hours</h4>
<p>Your primary place of work will be our office in [Location]. Normal business hours are 9:00 AM to 6:00 PM, Monday through Friday.</p>

<h4>4. Documentation Required</h4>
<p>Please bring copies of the following documents on your date of joining:</p>
<ul>
  <li>Relieving letter and experience certificates from previous employers</li>
  <li>Latest 3 months' salary slips</li>
  <li>Highest educational qualification certificates</li>
  <li>PAN card, Aadhaar card, and two passport-sized photographs</li>
</ul>
<p>We look forward to working with you.</p>
<p>Sincerely,<br/><strong>HR Department</strong><br/>[Company Name]</p>`
  },
  {
    title: "Employee Onboarding Checklist",
    tag: "Onboarding",
    description: "A comprehensive timeline checklist for HR teams. Covers pre-boarding equipment setup, first day integration, and 30-60-90 day reviews.",
    content: `<h3>Employee Onboarding Checklist</h3>
<p>Ensure a smooth onboarding process for new hires with this structured timeline:</p>

<h4>Phase 1: Pre-boarding (Before Day 1)</h4>
<ul>
  <li>[ ] Send signed offer letter and verify references.</li>
  <li>[ ] Collect tax declarations, bank account forms, and emergency contact details.</li>
  <li>[ ] Set up company email, slack workspace, and system logins.</li>
  <li>[ ] Ship hardware laptop and welcome kit to candidate address.</li>
  <li>[ ] Assign an onboarding buddy to guide the candidate.</li>
</ul>

<h4>Phase 2: Day 1 (Orientation & Setup)</h4>
<ul>
  <li>[ ] Conduct official HR welcome briefing and company overview presentation.</li>
  <li>[ ] Assist with hardware setup and access verification.</li>
  <li>[ ] Introduce the candidate to their direct team and onboarding buddy.</li>
  <li>[ ] Hold a 1-on-1 meeting with the reporting manager to define week 1 expectations.</li>
</ul>

<h4>Phase 3: First Week (Integration)</h4>
<ul>
  <li>[ ] Provide initial product training and walk through key workflows.</li>
  <li>[ ] Assign the first minor starter project or research task.</li>
  <li>[ ] Schedule a welcome lunch or digital team-bonding coffee session.</li>
  <li>[ ] Check in on Day 5 to gather initial impressions and clarify doubts.</li>
</ul>

<h4>Phase 4: First Month & Beyond (Assimilation)</h4>
<ul>
  <li>[ ] Set 30-60-90 day performance goals and check progress at each milestone.</li>
  <li>[ ] Conduct the 30-day review to collect feedback on the onboarding experience.</li>
  <li>[ ] Complete compliance training modules and policy acknowledgments.</li>
</ul>`
  },
  {
    title: "Mutual Non-Disclosure Agreement (NDA)",
    tag: "Compliance",
    description: "A legally drafted Mutual Non-Disclosure Agreement to protect proprietary business information, intellectual property, and client data.",
    content: `<h3>Mutual Non-Disclosure Agreement (NDA)</h3>
<p>This Non-Disclosure Agreement (the "Agreement") is entered into as of <strong>[Effective Date]</strong> by and between:</p>
<p><strong>[Company Name]</strong>, with its principal office at [Address] ("Disclosing Party"), and <strong>[Recipient Name]</strong>, residing/having business at [Address] ("Receiving Party").</p>

<h4>1. Definition of Confidential Information</h4>
<p>"Confidential Information" means any proprietary data, client lists, technology secrets, pricing data, codes, or product roadmaps disclosed by one party to the other, whether marked confidential or not.</p>

<h4>2. Obligation of Confidentiality</h4>
<p>The Receiving Party agrees to hold all Confidential Information in strict confidence and shall not disclose it to any third party without prior written consent. The information must only be used for the evaluation of the business relationship.</p>

<h4>3. Term of Agreement</h4>
<p>This Agreement and the confidentiality obligations herein shall remain in effect for a period of <strong>three (3) years</strong> from the Effective Date, or until such time as the Confidential Information enters the public domain through no fault of the Receiving Party.</p>

<p>Signed by authorized representatives of both parties.</p>`
  },
  {
    title: "Employee Performance Appraisal Form",
    tag: "Performance",
    description: "A detailed review rubric containing self-evaluation fields, manager ratings, core competencies, and career goals.",
    content: `<h3>Employee Performance Appraisal Form</h3>
<p><strong>Review Period:</strong> Annual Appraisal 2026 | <strong>Employee Name:</strong> [Name]</p>

<h4>1. Key Accomplishments & Self-Assessment</h4>
<p>Summarize your main achievements during the review period. How did they align with your core goals?</p>
<p><em>[Employee Input Box]</em></p>

<h4>2. Competency Evaluation (Scale 1-5)</h4>
<ul>
  <li><strong>Job Knowledge & Quality:</strong> Skill levels and precision in daily tasks. (Rating: __/5)</li>
  <li><strong>Communication & Collaboration:</strong> Working with team members and partners. (Rating: __/5)</li>
  <li><strong>Problem Solving & Initiative:</strong> Proactive resolution of operational blockages. (Rating: __/5)</li>
  <li><strong>Reliability & Time Management:</strong> Delivery schedules and attendance consistency. (Rating: __/5)</li>
</ul>

<h4>3. Future Goals & Development Plan</h4>
<p>Outline three key objectives (OKRs) for the upcoming review period, and identify any skills training needed to achieve them.</p>
<p><em>[Manager & Employee Collaborative Comments]</em></p>`
  },
  {
    title: "Remote & Hybrid Work Policy",
    tag: "Strategy",
    description: "Workspace security expectations, allowance eligibility, internet reimbursement parameters, and core meeting hours.",
    content: `<h3>Remote & Hybrid Work Policy</h3>

<h4>1. Eligibility & Working Hours</h4>
<p>Employees are eligible for remote work subject to manager approval. Hybrid models assume <strong>3 days in-office and 2 days remote</strong> per week. Core collaboration hours are 10:00 AM to 4:00 PM IST daily.</p>

<h4>2. Workspace & Security Requirements</h4>
<p>Employees must operate from a secure, private workspace with high-speed internet. Standard VPN connection is mandatory for accessing company payroll databases, client profiles, and source code repositories.</p>

<h4>3. Equipment & Allowance Reimbursements</h4>
<p>The company provides a standardized laptop, mouse, and monitor. Employees are eligible for a monthly internet allowance reimbursement of up to <strong>₹1,000</strong> upon submitting valid bills.</p>`
  },
  {
    title: "Employee Handbook Framework",
    tag: "Strategy",
    description: "An outline guide for drafting your company's Employee Handbook. Covers mission statements, leave rules, anti-harassment regulations, and code of conduct.",
    content: `<h3>Employee Handbook Outline</h3>

<h4>Chapter 1: Welcome & Mission</h4>
<p>Company vision, core cultural values, and customer commitment statements.</p>

<h4>Chapter 2: Code of Conduct</h4>
<p>Professional ethics, dress codes, social media guidelines, and anti-harassment / POSH policies.</p>

<h4>Chapter 3: Work Hours & Attendance</h4>
<p>Core office hours, overtime parameters, and standard biometric punch guidelines.</p>

<h4>Chapter 4: Leaves & Benefits</h4>
<p>Earned leaves, sick leaves, casual leaves, maternity/paternity support, and health insurance claim processes.</p>`
  },
  {
    title: "Standard Exit Interview Form",
    tag: "Offboarding",
    description: "Attrition feedback parameters, leadership reviews, equipment handover, and final clearance tracking.",
    content: `<h3>Exit Interview Questionnaire</h3>

<h4>1. Reasons for Departure</h4>
<p>Identify primary factors contributing to your departure (e.g. salary, role scope, manager relationship, new opportunities).</p>

<h4>2. Feedback on Leadership & Culture</h4>
<ul>
  <li>How did you feel about manager communication?</li>
  <li>Did you receive sufficient tools and systems to execute your work?</li>
  <li>Describe the team cooperation and culture.</li>
</ul>

<h4>3. Transition Planning</h4>
<p>Confirm the transfer of keys, passwords, project files, and documents to the incoming resource.</p>`
  },
  {
    title: "Standard Job Description Template",
    tag: "Recruitment",
    description: "Structured outline mapping job titles, team divisions, primary responsibilities, qualifications, and benefits summaries.",
    content: `<h3>Job Description Template</h3>
<p><strong>Job Title:</strong> [Title] | <strong>Department:</strong> [Dept] | <strong>Location:</strong> [Location]</p>

<h4>Role Summary</h4>
<p>Provide a short summary of the role's purpose and how it fits into the team.</p>

<h4>Key Responsibilities</h4>
<ul>
  <li>Responsible for managing [task] and ensuring compliance.</li>
  <li>Collaborate with cross-functional teams to execute [initiative].</li>
  <li>Provide reports on [metrics] directly to [reporting manager].</li>
</ul>

<h4>Required Qualifications</h4>
<ul>
  <li>Bachelor's degree in [Field] or equivalent experience.</li>
  <li>Minimum of [X] years of experience in similar roles.</li>
  <li>Proficiency with [Software/Tools].</li>
</ul>`
  },
  {
    title: "Promotion Proposal Template",
    tag: "Performance",
    description: "Recommending employees for promotion. Business case justification blocks, performance logs, and salary details.",
    content: `<h3>Promotion Recommendation Proposal</h3>
<p><strong>Employee:</strong> [Name] | <strong>Current Title:</strong> [Title] | <strong>Proposed Title:</strong> [New Title]</p>

<h4>1. Justification for Promotion</h4>
<p>Detail how the employee has exceeded expectations in their current role and demonstrated readiness for increased responsibility.</p>

<h4>2. Key Accomplishments</h4>
<ul>
  <li>Accomplishment A: Delivered [project] yielding [result].</li>
  <li>Accomplishment B: Optimized [system/process] saving [time/resource].</li>
  <li>Accomplishment C: Mentored junior resources and improved team delivery.</li>
</ul>

<h4>3. Compensation Revision Details</h4>
<p>Details of proposed salary adjustments, allowance reviews, and updated target bands.</p>`
  },
  {
    title: "HR Audit Checklist",
    tag: "Compliance",
    description: "A comprehensive checklist for reviewing employment contracts, tax forms, compliance filings, and employee records for regulatory compliance.",
    content: `<h3>HR Regulatory Audit Checklist</h3>

<h4>Section 1: Employment Files Compliance</h4>
<ul>
  <li>[ ] Signed employment agreements and NDAs present in all active employee folders.</li>
  <li>[ ] Educational and previous experience documents verified.</li>
  <li>[ ] PAN and Aadhaar copies recorded and linked.</li>
</ul>

<h4>Section 2: Statutory & Payroll Compliance</h4>
<ul>
  <li>[ ] Correct Provident Fund (PF) and ESI deductions executed.</li>
  <li>[ ] Accurate calculations for Professional Tax (PT) across states.</li>
  <li>[ ] Monthly filing receipts matching records.</li>
</ul>

<h4>Section 3: Workplace Compliance</h4>
<ul>
  <li>[ ] Mandatory POSH training compliance certified.</li>
  <li>[ ] Work health and safety displays active.</li>
</ul>`
  }
];

async function seed() {
  console.log("Deleting old templates...");
  await prisma.template.deleteMany();
  console.log("Seeding templates...");
  for (const t of templatesData) {
    const slug = t.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    await prisma.template.create({
      data: {
        title: t.title,
        slug: slug,
        description: t.description,
        tag: t.tag,
        content: t.content
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
