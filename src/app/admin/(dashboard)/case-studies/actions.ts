'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createCaseStudyAction(data: {
  slug: string;
  company: string;
  logoText: string;
  industry: string;
  tag: string;
  title: string;
  challenge: string;
  solution: string;
  metrics: string[];
}) {
  try {
    const caseStudy = await prisma.caseStudy.create({
      data: {
        slug: data.slug,
        company: data.company,
        logoText: data.logoText,
        industry: data.industry,
        tag: data.tag,
        title: data.title,
        challenge: data.challenge,
        solution: data.solution,
        metrics: data.metrics,
      },
    });
    revalidatePath('/resources/case-study');
    revalidatePath('/admin/case-studies');
    return { success: true, caseStudy };
  } catch (error: any) {
    console.error('Server Action Error creating case study:', error);
    return { success: false, error: error.message || 'Failed to create case study.' };
  }
}

export async function updateCaseStudyAction(id: string, data: {
  slug: string;
  company: string;
  logoText: string;
  industry: string;
  tag: string;
  title: string;
  challenge: string;
  solution: string;
  metrics: string[];
}) {
  try {
    const caseStudy = await prisma.caseStudy.update({
      where: { id },
      data: {
        slug: data.slug,
        company: data.company,
        logoText: data.logoText,
        industry: data.industry,
        tag: data.tag,
        title: data.title,
        challenge: data.challenge,
        solution: data.solution,
        metrics: data.metrics,
      },
    });
    revalidatePath('/resources/case-study');
    revalidatePath('/admin/case-studies');
    return { success: true, caseStudy };
  } catch (error: any) {
    console.error('Server Action Error updating case study:', error);
    return { success: false, error: error.message || 'Failed to update case study.' };
  }
}

export async function deleteCaseStudyAction(id: string) {
  try {
    const caseStudy = await prisma.caseStudy.delete({
      where: { id },
    });
    revalidatePath('/resources/case-study');
    revalidatePath('/admin/case-studies');
    return { success: true, caseStudy };
  } catch (error: any) {
    console.error('Server Action Error deleting case study:', error);
    return { success: false, error: error.message || 'Failed to delete case study.' };
  }
}
