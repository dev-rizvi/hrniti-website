'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

const defaultAboutSettings = {
  id: 1,
  hero_title: 'ABOUT US',
  hero_subtitle: 'Building the Future of HR with Continuous Innovation and GenAI Automation.',
  hero_description: 'We are on a mission to simplify human resource management for businesses of all sizes through intelligent, cloud-based solutions.',
  hero_image_url: null,
  story_title: 'Why HR Niti?',
  story_subtitle: 'OUR STORY',
  story_description: "HR Niti was born from a simple idea: HR should be about people, not paperwork. We build modern HR technology to help businesses automate administrative tasks so they can focus on what truly matters - their employees. Our cloud-based solution is designed to be intuitive, scalable, and secure, ensuring that your HR operations run smoothly no matter where your team is located.",
  story_image_url: null,
  vision_title: 'Vision & Mission',
  vision_subtitle: 'OUR PHILOSOPHY',
  vision_description: "Our vision is to empower every organization with the tools they need to build a happier, more productive workforce. We believe in a 'People First' approach, where technology serves as an enabler rather than a barrier. By leveraging the latest advancements in AI and cloud computing, we aim to provide an HRMS that is not just a tool, but a strategic partner in your business growth.",
  vision_image_url: null,
};

export async function getAboutSettingsAction() {
  try {
    let settings = await prisma.about_settings.findUnique({
      where: { id: 1 },
    });

    if (!settings) {
      settings = await prisma.about_settings.create({
        data: defaultAboutSettings
      });
    }

    return { success: true, settings };
  } catch (error: any) {
    console.error('Error fetching about settings:', error);
    return { success: false, error: error.message || 'Failed to fetch about settings.' };
  }
}

export async function updateAboutSettingsAction(data: {
  hero_title: string;
  hero_subtitle: string;
  hero_description: string;
  hero_image_url?: string | null;
  story_title: string;
  story_subtitle: string;
  story_description: string;
  story_image_url?: string | null;
  vision_title: string;
  vision_subtitle: string;
  vision_description: string;
  vision_image_url?: string | null;
}) {
  try {
    const settings = await prisma.about_settings.upsert({
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

    revalidatePath('/about');
    revalidatePath('/admin/about');

    return { success: true, settings };
  } catch (error: any) {
    console.error('Error updating about settings:', error);
    return { success: false, error: error.message || 'Failed to save about settings.' };
  }
}
