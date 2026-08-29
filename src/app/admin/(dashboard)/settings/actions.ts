'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

// Default content fallback values
const DEFAULT_PRIVACY_TITLE = "Privacy Policy";
const DEFAULT_PRIVACY_CONTENT = `
  <h2>Privacy Policy Overview</h2>
  <p>Last updated: June 13, 2026</p>
  <p>At HR Niti, accessible from hrniti.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by HR Niti and how we use it.</p>
  
  <h2>Information We Collect</h2>
  <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
  <ul>
    <li><strong>Direct Contact:</strong> If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</li>
    <li><strong>Account Registration:</strong> When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</li>
  </ul>

  <h2>How We Use Your Information</h2>
  <p>We use the information we collect in various ways, including to:</p>
  <ul>
    <li>Provide, operate, and maintain our website and HRMS platform</li>
    <li>Improve, personalize, and expand our website operations</li>
    <li>Understand and analyze how you interact with our services</li>
    <li>Develop new products, services, features, and functionality</li>
    <li>Communicate with you, either directly or through one of our partners, for customer service, updates, and marketing purposes</li>
  </ul>

  <h2>Data Security</h2>
  <p>We use commercial standards to protect the personal information submitted to us, both during transmission and once we receive it. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure.</p>
`;

const DEFAULT_TERMS_TITLE = "Terms of Service";
const DEFAULT_TERMS_CONTENT = `
  <h2>Terms &amp; Conditions Overview</h2>
  <p>Last updated: June 13, 2026</p>
  <p>Welcome to HR Niti!</p>
  <p>These terms and conditions outline the rules and regulations for the use of HR Niti's Website and HRMS Software, located at hrniti.com.</p>
  
  <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use HR Niti if you do not agree to take all of the terms and conditions stated on this page.</p>

  <h2>License</h2>
  <p>Unless otherwise stated, HR Niti and/or its licensors own the intellectual property rights for all material on HR Niti. All intellectual property rights are reserved. You may access this from HR Niti for your own personal use subjected to restrictions set in these terms and conditions.</p>
  <p>You must not:</p>
  <ul>
    <li>Republish material from HR Niti</li>
    <li>Sell, rent or sub-license material from HR Niti</li>
    <li>Reproduce, duplicate or copy material from HR Niti</li>
    <li>Redistribute content from HR Niti</li>
  </ul>

  <h2>User Submissions & Portal Comments</h2>
  <p>Parts of this website offer an opportunity for users to post and exchange opinions and information. HR Niti does not filter, edit, publish or review comments prior to their presence on the website. Comments do not reflect the views and opinions of HR Niti, its agents and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions.</p>

  <h2>Disclaimer</h2>
  <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will limit or exclude our or your liability for death or personal injury resulting from negligence.</p>
`;

export async function getLegalSettingsAction() {
  try {
    // Attempt to retrieve legal settings
    let legal = await prisma.legal_settings.findUnique({
      where: { id: 1 },
    });

    // Seed defaults if row does not exist
    if (!legal) {
      legal = await prisma.legal_settings.create({
        data: {
          id: 1,
          privacy_title: DEFAULT_PRIVACY_TITLE,
          privacy_content: DEFAULT_PRIVACY_CONTENT,
          terms_title: DEFAULT_TERMS_TITLE,
          terms_content: DEFAULT_TERMS_CONTENT,
        },
      });
    }

    return { success: true, legal };
  } catch (error: unknown) {
    const err = error as { message?: string };
    console.error('Error fetching legal settings:', error);
    return { success: false, error: err.message || 'Failed to fetch legal settings.' };
  }
}

export async function updateLegalSettingsAction(
  type: 'privacy' | 'terms',
  title: string,
  content: string
) {
  try {
    const dataToUpdate: Record<string, unknown> = {
      updated_at: new Date(),
    };

    if (type === 'privacy') {
      dataToUpdate.privacy_title = title;
      dataToUpdate.privacy_content = content;
    } else {
      dataToUpdate.terms_title = title;
      dataToUpdate.terms_content = content;
    }

    const updated = await prisma.legal_settings.update({
      where: { id: 1 },
      data: dataToUpdate,
    });

    // Revalidate public routes
    revalidatePath('/privacy-policy');
    revalidatePath('/terms-of-service');
    revalidatePath('/admin/settings');

    return { success: true, legal: updated };
  } catch (error: unknown) {
    const err = error as { message?: string };
    console.error('Error updating legal settings:', error);
    return { success: false, error: err.message || 'Failed to update legal settings.' };
  }
}
