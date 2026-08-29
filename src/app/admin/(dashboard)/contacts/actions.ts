'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getInquiriesAction() {
  try {
    const inquiries = await prisma.contact_inquiries.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });
    return { success: true, inquiries };
  } catch (error: any) {
    console.error('Error fetching inquiries:', error);
    return { success: false, error: error.message || 'Failed to fetch inquiries.' };
  }
}

export async function updateInquiryStatusAction(id: number, status: string) {
  try {
    const inquiry = await prisma.contact_inquiries.update({
      where: { id },
      data: { status },
    });
    revalidatePath('/admin/contacts');
    return { success: true, inquiry };
  } catch (error: any) {
    console.error('Error updating inquiry status:', error);
    return { success: false, error: error.message || 'Failed to update inquiry status.' };
  }
}

export async function deleteInquiryAction(id: number) {
  try {
    const inquiry = await prisma.contact_inquiries.delete({
      where: { id },
    });
    revalidatePath('/admin/contacts');
    return { success: true, inquiry };
  } catch (error: any) {
    console.error('Error deleting inquiry:', error);
    return { success: false, error: error.message || 'Failed to delete inquiry.' };
  }
}

export async function getInquiryByIdAction(id: number) {
  try {
    const inquiry = await prisma.contact_inquiries.findUnique({
      where: { id },
    });
    if (!inquiry) {
      return { success: false, error: 'Inquiry not found.' };
    }
    return { success: true, inquiry };
  } catch (error: any) {
    console.error('Error fetching inquiry by ID:', error);
    return { success: false, error: error.message || 'Failed to fetch inquiry details.' };
  }
}
