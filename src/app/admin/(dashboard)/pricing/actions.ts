'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

// Seeding Defaults
const defaultPricingSettings = {
  id: 1,
  hero_title: 'Plans that Grow with Your Business',
  hero_subtitle: 'Transparent Pricing',
  hero_description: 'Choose the perfect plan for your team size. No hidden setup fees, no long-term contracts. Just simple, scalable HR software.',
};

const defaultPricingPlans = [
  {
    name: 'Standard',
    price: '₹2,995',
    period: '/month',
    desc: 'Perfect for startups and small teams getting started with organized HR.',
    features: [
      'Up to 50 Employees',
      'Employee Database (Core HR)',
      'Leave Management',
      'Attendance Tracking',
      'Basic Reports',
      'Mobile App (Lite)',
      'Email Support'
    ],
    cta: 'Start Free Trial',
    popular: false,
    color: 'blue',
    display_order: 0,
  },
  {
    name: 'Professional',
    price: '₹4,495',
    period: '/month',
    desc: 'Best for growing companies that need payroll automation and compliance.',
    features: [
      'Up to 50 Employees',
      'Everything in Standard',
      'Payroll Processing',
      'Statutory Compliance (PF/ESIC)',
      'Expense Requests',
      'Document Management',
      'Priority Phone Support'
    ],
    cta: 'Get Started',
    popular: true,
    color: 'purple',
    display_order: 1,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large organizations requiring customization and dedicated support.',
    features: [
      'Unlimited Employees',
      'Everything in Professional',
      'Performance Management',
      'Timesheet & Projects',
      'AI Chatbot (Niti AI)',
      'Custom API Integrations',
      'Dedicated Account Manager'
    ],
    cta: 'Contact Sales',
    popular: false,
    color: 'slate',
    display_order: 2,
  }
];

const defaultComparisonFeatures = [
  // Core HR
  { category: 'Core HR', name: 'Employee Database', std_value: 'true', pro_value: 'true', ent_value: 'true', display_order: 10 },
  { category: 'Core HR', name: 'Onboarding Workflows', std_value: 'true', pro_value: 'true', ent_value: 'true', display_order: 11 },
  { category: 'Core HR', name: 'Asset Management', std_value: 'false', pro_value: 'true', ent_value: 'true', display_order: 12 },
  { category: 'Core HR', name: 'Document Storage', std_value: '1 GB', pro_value: '10 GB', ent_value: 'Unlimited', display_order: 13 },
  
  // Leave & Attendance
  { category: 'Leave & Attendance', name: 'Leave Policy Configuration', std_value: 'Basic', pro_value: 'Advanced', ent_value: 'Custom', display_order: 20 },
  { category: 'Leave & Attendance', name: 'Web Check-in', std_value: 'true', pro_value: 'true', ent_value: 'true', display_order: 21 },
  { category: 'Leave & Attendance', name: 'Mobile App Attendance', std_value: 'true', pro_value: 'true', ent_value: 'true', display_order: 22 },
  { category: 'Leave & Attendance', name: 'Geofencing', std_value: 'false', pro_value: 'true', ent_value: 'true', display_order: 23 },
  { category: 'Leave & Attendance', name: 'Face Recognition', std_value: 'false', pro_value: 'false', ent_value: 'true', display_order: 24 },
  { category: 'Leave & Attendance', name: 'Shift Scheduling', std_value: 'false', pro_value: 'true', ent_value: 'true', display_order: 25 },

  // Payroll & Compliance
  { category: 'Payroll & Compliance', name: 'Salary Processing', std_value: 'false', pro_value: 'true', ent_value: 'true', display_order: 30 },
  { category: 'Payroll & Compliance', name: 'PF / ESIC / PT Calculations', std_value: 'false', pro_value: 'true', ent_value: 'true', display_order: 31 },
  { category: 'Payroll & Compliance', name: 'Form-16 Generation', std_value: 'false', pro_value: 'true', ent_value: 'true', display_order: 32 },
  { category: 'Payroll & Compliance', name: 'Loan & Advance Management', std_value: 'false', pro_value: 'true', ent_value: 'true', display_order: 33 },
  { category: 'Payroll & Compliance', name: 'Investment Declarations', std_value: 'false', pro_value: 'true', ent_value: 'true', display_order: 34 },

  // Advanced Modules
  { category: 'Advanced Modules', name: 'Expense Management', std_value: 'false', pro_value: 'true', ent_value: 'true', display_order: 40 },
  { category: 'Advanced Modules', name: 'Performance Management', std_value: 'false', pro_value: 'false', ent_value: 'true', display_order: 41 },
  { category: 'Advanced Modules', name: 'Timesheet & Projects', std_value: 'false', pro_value: 'false', ent_value: 'true', display_order: 42 },
  { category: 'Advanced Modules', name: 'AI Chatbot (Niti AI)', std_value: 'false', pro_value: 'false', ent_value: 'true', display_order: 43 },
];

const defaultFAQs = [
  {
    question: 'Are there any setup or implementation fees?',
    answer: 'No, we believe in transparent pricing. The Standard and Professional plans come with zero implementation fees. For Enterprise plans requiring custom data migration, a one-time setup fee may apply.',
    display_order: 0,
  },
  {
    key: 'upg',
    question: 'Can I upgrade my plan later?',
    answer: 'Absolutely. You can upgrade from Standard to Professional at any time. Your billing will be adjusted on a pro-rata basis for the remaining period.',
    display_order: 1,
  },
  {
    question: 'Is my data safe?',
    answer: 'Yes, we use bank-grade 256-bit encryption for all data transmission and storage. Our servers are hosted in secure AWS data centers with regular backups.',
    display_order: 2,
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes! We offer a 14-day free trial on the Professional plan so you can experience all the features including payroll processing and the mobile app.',
    display_order: 3,
  },
  {
    question: 'What happens if I cross the employee limit?',
    answer: 'For Standard and Professional plans, you can add additional employees for a small incremental fee per user per month (₹60 for Standard, ₹90 for Professional).',
    display_order: 4,
  }
];

// --- Pricing Settings Actions ---
export async function getPricingSettingsAction() {
  try {
    let settings = await prisma.pricing_settings.findUnique({
      where: { id: 1 },
    });

    if (!settings) {
      settings = await prisma.pricing_settings.create({
        data: defaultPricingSettings,
      });
    }

    return { success: true, settings };
  } catch (error: any) {
    console.error('Error fetching pricing settings:', error);
    return { success: false, error: error.message || 'Failed to fetch pricing settings.' };
  }
}

export async function updatePricingSettingsAction(data: {
  hero_title: string;
  hero_subtitle: string;
  hero_description: string;
}) {
  try {
    const settings = await prisma.pricing_settings.upsert({
      where: { id: 1 },
      update: {
        ...data,
        updated_at: new Date(),
      },
      create: {
        id: 1,
        ...data,
      },
    });

    revalidatePath('/pricing');
    revalidatePath('/admin/pricing');

    return { success: true, settings };
  } catch (error: any) {
    console.error('Error updating pricing settings:', error);
    return { success: false, error: error.message || 'Failed to update pricing settings.' };
  }
}

// --- Pricing Plans Actions ---
export async function getPricingPlansAction() {
  try {
    let plans = await prisma.pricing_plan.findMany({
      orderBy: { display_order: 'asc' },
    });

    if (plans.length === 0) {
      // Seed default plans
      await Promise.all(
        defaultPricingPlans.map((plan) =>
          prisma.pricing_plan.create({
            data: plan,
          })
        )
      );
      plans = await prisma.pricing_plan.findMany({
        orderBy: { display_order: 'asc' },
      });
    }

    return { success: true, plans };
  } catch (error: any) {
    console.error('Error fetching pricing plans:', error);
    return { success: false, error: error.message || 'Failed to fetch pricing plans.' };
  }
}

export async function updatePricingPlanAction(
  id: string,
  data: {
    name: string;
    price: string;
    period: string;
    desc: string;
    features: string[];
    cta: string;
    popular: boolean;
    color: string;
    display_order: number;
  }
) {
  try {
    const plan = await prisma.pricing_plan.update({
      where: { id },
      data,
    });

    revalidatePath('/pricing');
    revalidatePath('/admin/pricing');

    return { success: true, plan };
  } catch (error: any) {
    console.error('Error updating pricing plan:', error);
    return { success: false, error: error.message || 'Failed to update pricing plan.' };
  }
}

// --- Comparison Table Actions ---
export async function getComparisonFeaturesAction() {
  try {
    let features = await prisma.pricing_comparison_feature.findMany({
      orderBy: { display_order: 'asc' },
    });

    if (features.length === 0) {
      // Seed default features
      await Promise.all(
        defaultComparisonFeatures.map((feat) =>
          prisma.pricing_comparison_feature.create({
            data: feat,
          })
        )
      );
      features = await prisma.pricing_comparison_feature.findMany({
        orderBy: { display_order: 'asc' },
      });
    }

    return { success: true, features };
  } catch (error: any) {
    console.error('Error fetching comparison features:', error);
    return { success: false, error: error.message || 'Failed to fetch comparison features.' };
  }
}

export async function createComparisonFeatureAction(data: {
  category: string;
  name: string;
  std_value: string;
  pro_value: string;
  ent_value: string;
  display_order: number;
}) {
  try {
    const feature = await prisma.pricing_comparison_feature.create({
      data,
    });

    revalidatePath('/pricing');
    revalidatePath('/admin/pricing');

    return { success: true, feature };
  } catch (error: any) {
    console.error('Error creating comparison feature:', error);
    return { success: false, error: error.message || 'Failed to create comparison feature.' };
  }
}

export async function updateComparisonFeatureAction(
  id: string,
  data: {
    category: string;
    name: string;
    std_value: string;
    pro_value: string;
    ent_value: string;
    display_order: number;
  }
) {
  try {
    const feature = await prisma.pricing_comparison_feature.update({
      where: { id },
      data,
    });

    revalidatePath('/pricing');
    revalidatePath('/admin/pricing');

    return { success: true, feature };
  } catch (error: any) {
    console.error('Error updating comparison feature:', error);
    return { success: false, error: error.message || 'Failed to update comparison feature.' };
  }
}

export async function deleteComparisonFeatureAction(id: string) {
  try {
    const feature = await prisma.pricing_comparison_feature.delete({
      where: { id },
    });

    revalidatePath('/pricing');
    revalidatePath('/admin/pricing');

    return { success: true, feature };
  } catch (error: any) {
    console.error('Error deleting comparison feature:', error);
    return { success: false, error: error.message || 'Failed to delete comparison feature.' };
  }
}

// --- Pricing FAQ Actions ---
export async function getPricingFAQsAction() {
  try {
    let faqs = await prisma.pricing_faq.findMany({
      orderBy: { display_order: 'asc' },
    });

    if (faqs.length === 0) {
      // Seed default FAQs
      await Promise.all(
        defaultFAQs.map((faq) =>
          prisma.pricing_faq.create({
            data: faq,
          })
        )
      );
      faqs = await prisma.pricing_faq.findMany({
        orderBy: { display_order: 'asc' },
      });
    }

    return { success: true, faqs };
  } catch (error: any) {
    console.error('Error fetching pricing FAQs:', error);
    return { success: false, error: error.message || 'Failed to fetch pricing FAQs.' };
  }
}

export async function createPricingFAQAction(data: {
  question: string;
  answer: string;
  display_order: number;
}) {
  try {
    const faq = await prisma.pricing_faq.create({
      data,
    });

    revalidatePath('/pricing');
    revalidatePath('/admin/pricing');

    return { success: true, faq };
  } catch (error: any) {
    console.error('Error creating pricing FAQ:', error);
    return { success: false, error: error.message || 'Failed to create pricing FAQ.' };
  }
}

export async function updatePricingFAQAction(
  id: string,
  data: {
    question: string;
    answer: string;
    display_order: number;
  }
) {
  try {
    const faq = await prisma.pricing_faq.update({
      where: { id },
      data,
    });

    revalidatePath('/pricing');
    revalidatePath('/admin/pricing');

    return { success: true, faq };
  } catch (error: any) {
    console.error('Error updating pricing FAQ:', error);
    return { success: false, error: error.message || 'Failed to update pricing FAQ.' };
  }
}

export async function deletePricingFAQAction(id: string) {
  try {
    const faq = await prisma.pricing_faq.delete({
      where: { id },
    });

    revalidatePath('/pricing');
    revalidatePath('/admin/pricing');

    return { success: true, faq };
  } catch (error: any) {
    console.error('Error deleting pricing FAQ:', error);
    return { success: false, error: error.message || 'Failed to delete pricing FAQ.' };
  }
}
