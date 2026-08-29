"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';
import { getTemplates, updateTemplate } from '@/app/actions/templateActions';
import RichTextEditor from '@/components/blog/RichTextEditor';

export default function EditTemplatePage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        description: '',
        tag: 'Template',
        content: '',
        file_url: ''
    });

    useEffect(() => {
        const fetchTemplate = async () => {
            const res = await getTemplates();
            if (res.success && res.data) {
                const template = res.data.find((t: any) => t.id === id);
                if (template) {
                    setFormData({
                        title: template.title || '',
                        slug: template.slug || '',
                        description: template.description || '',
                        tag: template.tag || 'Template',
                        content: template.content || '',
                        file_url: template.file_url || ''
                    });
                } else {
                    setError('Template not found');
                }
            } else {
                setError('Failed to fetch template');
            }
            setFetching(false);
        };
        fetchTemplate();
    }, [params.id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const res = await updateTemplate(id, formData);
        if (res.success) {
            router.push('/admin/templates');
        } else {
            setError(res.error || 'Failed to update template');
            setLoading(false);
        }
    };

    if (fetching) {
        return (
            <div className="p-6 max-w-4xl mx-auto flex justify-center py-20">
                <div className="animate-spin w-8 h-8 border-2 border-emerald-600 border-t-transparent rounded-full"></div>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/templates" className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Edit Template</h1>
                    <p className="text-gray-500 mt-1">Update HR document template details.</p>
                </div>
            </div>

            {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-100">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Template Title *</label>
                        <input
                            type="text"
                            name="title"
                            required
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">URL Slug *</label>
                        <input
                            type="text"
                            name="slug"
                            required
                            value={formData.slug}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-gray-50"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Short Description *</label>
                    <textarea
                        name="description"
                        required
                        value={formData.description}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Category Tag</label>
                        <input
                            type="text"
                            name="tag"
                            value={formData.tag}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Download/File URL (Optional)</label>
                        <input
                            type="text"
                            name="file_url"
                            value={formData.file_url}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Content / Body (Optional)</label>
                    <div className="prose-sm max-w-none">
                        <RichTextEditor
                            value={formData.content}
                            onChange={(content) => setFormData({ ...formData, content })}
                        />
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-end">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2 disabled:opacity-50"
                    >
                        {loading ? (
                            <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                        ) : (
                            <Save className="w-5 h-5" />
                        )}
                        {loading ? 'Saving...' : 'Update Template'}
                    </button>
                </div>
            </form>
        </div>
    );
}
