import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;
        if (!file) {
            return NextResponse.json({ success: false, error: 'No file provided' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadDir = join(process.cwd(), 'public', 'uploads');
        await mkdir(uploadDir, { recursive: true });

        const uniqueFilename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
        const filePath = join(uploadDir, uniqueFilename);
        await writeFile(filePath, buffer);

        const url = `/uploads/${uniqueFilename}`;
        return NextResponse.json({ success: true, url });
    } catch (error: any) {
        console.error('API /api/upload error:', error);
        return NextResponse.json({ success: false, error: error.message || 'Image upload failed.' }, { status: 500 });
    }
}
