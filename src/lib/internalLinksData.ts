export interface InternalLinkTarget {
  route: string;
  title: string;
  category: 'Core HRMS & Payroll' | 'HR Modules & Productivity' | 'Solutions by Size' | 'Commercial & Resources';
  keywords: string[];
}

export const INTERNAL_LINK_TARGETS: InternalLinkTarget[] = [
  // 1. Core HRMS & Payroll
  {
    route: '/payroll-software',
    title: 'Payroll Software & Compliance',
    category: 'Core HRMS & Payroll',
    keywords: [
      'payroll software in india',
      'payroll software',
      'automated payroll india',
      'automated payroll',
      'payroll automation',
      'payroll management system',
      'payroll processing',
      'indian payroll'
    ]
  },
  {
    route: '/hrms-software',
    title: 'Integrated HRMS Software',
    category: 'Core HRMS & Payroll',
    keywords: [
      'hrms software in india',
      'hrms software',
      'hrms platform',
      'integrated hrms',
      'cloud hrms',
      'hr software in india',
      'hr software'
    ]
  },
  {
    route: '/attendance',
    title: 'Attendance Management & Biometrics',
    category: 'Core HRMS & Payroll',
    keywords: [
      'attendance management',
      'attendance tracking',
      'biometric attendance',
      'attendance system',
      'mobile attendance',
      'gps attendance'
    ]
  },
  {
    route: '/leave-management',
    title: 'Leave Management System',
    category: 'Core HRMS & Payroll',
    keywords: [
      'leave management system',
      'leave management',
      'leave policies',
      'leave tracking',
      'leave encashment',
      'leave balance'
    ]
  },
  {
    route: '/full-and-final-settlement',
    title: 'Full & Final (F&F) Settlement',
    category: 'Core HRMS & Payroll',
    keywords: [
      'full & final settlement',
      'full and final settlement',
      'f&f settlement',
      'fnf settlement',
      'gratuity calculation',
      'gratuity calculations',
      'exit settlement'
    ]
  },
  {
    route: '/employee-management',
    title: 'Employee Master & Records',
    category: 'Core HRMS & Payroll',
    keywords: [
      'employee management',
      'employee master',
      'employee records',
      'workforce management'
    ]
  },
  {
    route: '/employee-self-service',
    title: 'Employee Self-Service (ESS)',
    category: 'Core HRMS & Payroll',
    keywords: [
      'employee self-service',
      'employee self service',
      'ess portal',
      'self-service portal',
      'employee portal'
    ]
  },
  {
    route: '/hr-mis-reports',
    title: 'HR MIS Reports & Workforce Analytics',
    category: 'Core HRMS & Payroll',
    keywords: [
      'hr mis reports',
      'hr mis reporting',
      'workforce analytics',
      'mis reports',
      'payroll reports',
      'workforce cost reporting',
      'people analytics'
    ]
  },

  // 2. HR Modules & Productivity
  {
    route: '/hrms-mobile-app',
    title: 'HRMS Mobile App',
    category: 'HR Modules & Productivity',
    keywords: [
      'hrms mobile app',
      'mobile hrms',
      'hr mobile app'
    ]
  },
  {
    route: '/hr-chatbot',
    title: 'GenAI HR Assistant & Chatbot',
    category: 'HR Modules & Productivity',
    keywords: [
      'hr chatbot',
      'ai hr assistant',
      'ai hr chatbots',
      'ai chatbot',
      'genai hr'
    ]
  },
  {
    route: '/recruitment-management',
    title: 'Recruitment & ATS Software',
    category: 'HR Modules & Productivity',
    keywords: [
      'recruitment management',
      'recruitment software',
      'applicant tracking system',
      'ats software'
    ]
  },
  {
    route: '/employee-performance-management-software',
    title: 'Performance Management (PMS)',
    category: 'HR Modules & Productivity',
    keywords: [
      'performance management software',
      'performance management',
      'pms software',
      'okrs and kras'
    ]
  },
  {
    route: '/timesheet-management',
    title: 'Timesheet & Project Management',
    category: 'HR Modules & Productivity',
    keywords: [
      'timesheet management',
      'timesheet software',
      'timesheets'
    ]
  },
  {
    route: '/expense-management-software',
    title: 'Expense Management Software',
    category: 'HR Modules & Productivity',
    keywords: [
      'expense management software',
      'expense management',
      'reimbursement management'
    ]
  },
  {
    route: '/lms',
    title: 'Corporate Learning (LMS)',
    category: 'HR Modules & Productivity',
    keywords: [
      'learning management system',
      'corporate lms',
      'lms software'
    ]
  },
  {
    route: '/org-chart',
    title: 'Interactive Org Chart',
    category: 'HR Modules & Productivity',
    keywords: [
      'organizational chart',
      'org chart'
    ]
  },

  // 3. Solutions by Size
  {
    route: '/small-business-solutions',
    title: 'Small Business HRMS',
    category: 'Solutions by Size',
    keywords: [
      'small business solutions',
      'small business hrms',
      'hrms for startups'
    ]
  },
  {
    route: '/medium-business-solutions',
    title: 'Medium Business HRMS',
    category: 'Solutions by Size',
    keywords: [
      'medium business solutions',
      'growing business hrms'
    ]
  },
  {
    route: '/large-business-solutions',
    title: 'Enterprise HRMS Solutions',
    category: 'Solutions by Size',
    keywords: [
      'large business solutions',
      'enterprise hrms'
    ]
  },
  {
    route: '/best-hrms-software-india',
    title: 'Best HRMS Software in India',
    category: 'Solutions by Size',
    keywords: [
      'best hrms software in india',
      'best hrms in india',
      'top hrms software'
    ]
  },

  // 4. Commercial & Resources
  {
    route: '/pricing',
    title: 'Transparent Pricing Plans',
    category: 'Commercial & Resources',
    keywords: [
      'pricing plans',
      'hr software pricing',
      'pricing plan',
      'transparent pricing'
    ]
  },
  {
    route: '/demo',
    title: 'Book a Live Product Demo',
    category: 'Commercial & Resources',
    keywords: [
      'book a demo',
      'schedule a demo',
      'free demo',
      'live demo'
    ]
  },
  {
    route: '/templates',
    title: 'Free HR & Statutory Templates',
    category: 'Commercial & Resources',
    keywords: [
      'hr templates',
      'payroll templates',
      'free hr templates'
    ]
  },
  {
    route: '/tools',
    title: 'Free HR & Statutory Tools',
    category: 'Commercial & Resources',
    keywords: [
      'free hr tools',
      'pf calculator',
      'gratuity calculator',
      'salary calculator'
    ]
  },
  {
    route: '/contact-us',
    title: 'Contact Support & Sales',
    category: 'Commercial & Resources',
    keywords: [
      'contact us',
      'contact hr niti'
    ]
  }
];

/**
 * Helper to scan content and detect auto-link opportunities.
 * Ensures we do NOT link keywords that are already inside <a> tags or headings.
 */
export function detectInternalLinkOpportunities(content: string): Array<{
  target: InternalLinkTarget;
  matchedKeyword: string;
  count: number;
  isAlreadyLinked: boolean;
}> {
  if (!content) return [];

  const results: Array<{
    target: InternalLinkTarget;
    matchedKeyword: string;
    count: number;
    isAlreadyLinked: boolean;
  }> = [];

  for (const target of INTERNAL_LINK_TARGETS) {
    // Check if route is already linked in content
    const routeRegex = new RegExp(`href=["']${target.route}["']`, 'i');
    const isAlreadyLinked = routeRegex.test(content);

    // Find if any keyword matches
    for (const kw of target.keywords) {
      const kwRegex = new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
      const matches = content.match(kwRegex);
      if (matches && matches.length > 0) {
        results.push({
          target,
          matchedKeyword: kw,
          count: matches.length,
          isAlreadyLinked,
        });
        break; // matched the best keyword for this target
      }
    }
  }

  return results;
}

/**
 * Safely inserts internal links into content without breaking existing HTML tags.
 * Replaces only the first unlinked occurrence for each target route.
 */
export function autoLinkKeywords(
  content: string, 
  targetsToLink: InternalLinkTarget[] = INTERNAL_LINK_TARGETS
): { updatedContent: string; linkedCount: number; linkedRoutes: string[] } {
  if (!content) return { updatedContent: content, linkedCount: 0, linkedRoutes: [] };

  let updatedContent = content;
  let linkedCount = 0;
  const linkedRoutes: string[] = [];

  // Sort by longest keyword first to avoid greedy substring collisions
  const sortedTargets = [...targetsToLink].sort((a, b) => {
    const maxA = Math.max(...a.keywords.map(k => k.length));
    const maxB = Math.max(...b.keywords.map(k => k.length));
    return maxB - maxA;
  });

  for (const target of sortedTargets) {
    // If route already exists in content, skip linking another occurrence
    const routeRegex = new RegExp(`href=["']${target.route}["']`, 'i');
    if (routeRegex.test(updatedContent)) {
      continue;
    }

    let linkedThisTarget = false;

    for (const kw of target.keywords) {
      if (linkedThisTarget) break;

      // Safe matching: token-based approach
      // We match the keyword ONLY when not preceded by an opening <a or inside a tag
      // We look for text inside <p> or <li>
      const escapedKw = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      // Regex that matches keyword only outside <a ...>...</a> and outside <h1..h6>
      // We split by <a ...>...</a>, headings, and tags
      const tokens = updatedContent.split(/(<a\b[^>]*>[\s\S]*?<\/a>|<h[1-6]\b[^>]*>[\s\S]*?<\/h[1-6]>|<[^>]+>)/gi);
      
      let tokenReplaced = false;
      for (let i = 0; i < tokens.length; i++) {
        // Only inspect text nodes outside of tags
        if (!tokens[i].startsWith('<')) {
          const matchRegex = new RegExp(`\\b(${escapedKw})\\b`, 'i');
          if (matchRegex.test(tokens[i])) {
            tokens[i] = tokens[i].replace(matchRegex, (match) => {
              return `<a href="${target.route}" class="text-emerald-700 underline font-semibold hover:text-emerald-900">${match}</a>`;
            });
            tokenReplaced = true;
            linkedThisTarget = true;
            linkedCount++;
            linkedRoutes.push(target.route);
            break; // only link first occurrence per route
          }
        }
      }

      if (tokenReplaced) {
        updatedContent = tokens.join('');
      }
    }
  }

  return { updatedContent, linkedCount, linkedRoutes };
}

/**
 * Links a specific single target route keyword in the content.
 */
export function linkSingleTarget(content: string, target: InternalLinkTarget): string {
  const res = autoLinkKeywords(content, [target]);
  return res.updatedContent;
}
