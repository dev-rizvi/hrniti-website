'use server';

import { prisma } from '@/lib/prisma';

export interface ContactInquiryInput {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function submitContactInquiryAction(data: ContactInquiryInput) {
  try {
    const { name, email, phone, subject, message } = data;

    // Server-side validation
    if (!name || name.trim() === '') {
      return { success: false, error: 'Name is required.' };
    }
    if (!email || email.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { success: false, error: 'A valid email address is required.' };
    }
    if (!phone || phone.trim() === '') {
      return { success: false, error: 'Phone number is required.' };
    }
    if (!subject || subject.trim() === '') {
      return { success: false, error: 'Subject is required.' };
    }
    if (!message || message.trim() === '') {
      return { success: false, error: 'Message is required.' };
    }

    // Insert into DB
    await prisma.contact_inquiries.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        subject: subject.trim(),
        message: message.trim(),
        status: 'new',
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Error submitting contact inquiry:', error);
    return {
      success: false,
      error: 'An error occurred while sending your message. Please try again later.',
    };
  }
}
