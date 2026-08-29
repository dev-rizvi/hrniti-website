"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Search, FileText } from 'lucide-react';
import { getProductUpdates, deleteProductUpdate } from '@/app/actions/productUpdateActions';

export default function AdminProductUpdatesPage() {
    const [updates, setUpdates] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchUpdates = async () => {
        setLoading(true);
        const res = await getProductUpdates();
        if (res.success && res.data) {
            setUpdates(res.data);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUpdates();
    }, []);

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this product update?')) {
            await deleteProductUpdate(id);
            fetchUpdates();
        }
    };

    const filteredUpdates = updates.filter(update =>
        update.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        update.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Product Updates</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage software release notes and product updates.</p>
                </div>
                <Link
                    href="/admin/product-updates/create"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    New Update
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex items-center gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search updates..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100">
                                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">Title</th>
                                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">Category</th>
                                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">Date</th>
                                <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {loading ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-gray-500 text-sm">
                                        Loading updates...
                                    </td>
                                </tr>
                            ) : filteredUpdates.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-gray-500 text-sm">
                                        No product updates found.
                                    </td>
                                </tr>
                            ) : (
                                filteredUpdates.map((update) => (
                                    <tr key={update.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                                                    <FileText className="w-5 h-5 text-emerald-600" />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-gray-900">{update.title}</div>
                                                    <div className="text-xs text-gray-500 mt-0.5">/{update.slug}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                                                {update.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {new Date(update.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/admin/product-updates/edit/${update.id}`}
                                                    className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                                                >
                                                    <Edit className="w-4 h-4" />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(update.id)}
                                                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
