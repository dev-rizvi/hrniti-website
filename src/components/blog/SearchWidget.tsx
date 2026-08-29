"use client";
import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchWidget() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement search functionality
        console.log("Searching for:", searchTerm);
    };

    return (
        <div className="bg-white rounded-lg p-6 border border-gray-200">
            <form onSubmit={handleSearch} className="relative">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                    aria-label="Search"
                >
                    <Search className="h-5 w-5" />
                </button>
            </form>
        </div>
    );
}
