"use client";

import { useState } from "react";
import { Search, MapPin, Filter, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

// Mock Data
const MOCK_SCHOOLS = [
    {
        id: 1,
        name: "St. George's International",
        location: "Montreux, Switzerland",
        type: "Boarding",
        curriculum: "IB",
        tuition: "$45,000",
        rating: 4.9,
        reviews: 120,
        tags: ["Co-ed", "Grades 9-12", "Sports"],
        image: "/placeholder-school-1.jpg"
    },
    {
        id: 2,
        name: "Phillips Exeter Academy",
        location: "New Hampshire, USA",
        type: "Boarding",
        curriculum: "AP",
        tuition: "$58,000",
        rating: 4.8,
        reviews: 215,
        tags: ["Co-ed", "Grades 9-12", "Harkness"],
        image: "/placeholder-school-2.jpg"
    },
    {
        id: 3,
        name: "Eton College",
        location: "Windsor, UK",
        type: "Boarding",
        curriculum: "A-Level",
        tuition: "£48,500",
        rating: 4.7,
        reviews: 180,
        tags: ["Boys", "Grades 9-12", "Historic"],
        image: "/placeholder-school-3.jpg"
    },
    {
        id: 4,
        name: "UWC South East Asia",
        location: "Singapore",
        type: "Day",
        curriculum: "IB",
        tuition: "$42,000",
        rating: 4.9,
        reviews: 300,
        tags: ["Co-ed", "K-12", "Diverse"],
        image: "/placeholder-school-4.jpg"
    },
];

export default function SchoolsPage() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredSchools = MOCK_SCHOOLS.filter(school =>
        school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        school.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-background-warm py-8">
            <div className="container mx-auto px-4 md:px-6">

                {/* Page Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-display font-bold text-primary">Explore Schools</h1>
                        <p className="text-muted mt-1">Found {filteredSchools.length} schools matching your criteria</p>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <div className="relative flex-1 md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by name, location..."
                                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button
                            className="md:hidden p-2.5 bg-white border border-gray-200 rounded-lg text-gray-600"
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                        >
                            <Filter className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="flex gap-8 items-start">

                    {/* Filters Sidebar (Desktop) */}
                    <aside className={clsx(
                        "w-80 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex-shrink-0 transition-transform md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 overflow-y-auto",
                        isFilterOpen ? "translate-x-0" : "-translate-x-full"
                    )}>
                        <div className="flex items-center justify-between md:hidden mb-6">
                            <h2 className="font-bold text-lg">Filters</h2>
                            <button onClick={() => setIsFilterOpen(false)}><X className="w-5 h-5" /></button>
                        </div>

                        <div className="space-y-8">
                            {/* Country */}
                            <div>
                                <h3 className="font-bold text-gray-900 mb-3">Country</h3>
                                <div className="space-y-2">
                                    {["USA", "UK", "Switzerland", "Canada", "Singapore", "Australia"].map(country => (
                                        <label key={country} className="flex items-center gap-2 cursor-pointer group">
                                            <div className="relative flex items-center">
                                                <input type="checkbox" className="peer w-4 h-4 border-2 border-gray-300 rounded checked:bg-primary checked:border-primary transition-colors appearance-none" />
                                                <svg className="w-3 h-3 text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                            </div>
                                            <span className="text-sm text-gray-600 group-hover:text-primary transition-colors">{country}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* School Type */}
                            <div>
                                <h3 className="font-bold text-gray-900 mb-3">School Type</h3>
                                <div className="space-y-2">
                                    {["Boarding", "Day School", "Co-ed", "Boys Only", "Girls Only"].map(type => (
                                        <label key={type} className="flex items-center gap-2 cursor-pointer group">
                                            <div className="relative flex items-center">
                                                <input type="checkbox" className="peer w-4 h-4 border-2 border-gray-300 rounded checked:bg-primary checked:border-primary transition-colors appearance-none" />
                                                <svg className="w-3 h-3 text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                            </div>
                                            <span className="text-sm text-gray-600 group-hover:text-primary transition-colors">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Curriculum */}
                            <div>
                                <h3 className="font-bold text-gray-900 mb-3">Curriculum</h3>
                                <div className="space-y-2">
                                    {["IB Diploma", "AP", "A-Level", "GCSE", "American High School"].map(curr => (
                                        <label key={curr} className="flex items-center gap-2 cursor-pointer group">
                                            <div className="relative flex items-center">
                                                <input type="checkbox" className="peer w-4 h-4 border-2 border-gray-300 rounded checked:bg-primary checked:border-primary transition-colors appearance-none" />
                                                <svg className="w-3 h-3 text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                            </div>
                                            <span className="text-sm text-gray-600 group-hover:text-primary transition-colors">{curr}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </aside>

                    {/* School List */}
                    <main className="flex-1 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredSchools.map((school) => (
                                <Link key={school.id} href={`/schools/${school.id}`} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 block h-full">
                                    <div className="h-48 bg-gray-200 relative">
                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-primary">
                                            {school.curriculum}
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div className="mb-2">
                                            <h3 className="font-bold text-lg text-primary group-hover:text-accent transition-colors">{school.name}</h3>
                                            <div className="flex items-center gap-1 text-sm text-muted mt-1">
                                                <MapPin className="w-3 h-3" />
                                                {school.location}
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 my-4">
                                            {school.tags.map(tag => (
                                                <span key={tag} className="px-2 py-1 bg-gray-50 rounded-md text-xs text-gray-600 border border-gray-100">{tag}</span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                            <div className="text-sm font-medium text-gray-900">{school.tuition} <span className="text-gray-400 font-normal">/ year</span></div>
                                            <div className="flex items-center gap-1 text-xs font-medium text-orange-500">
                                                <span className="bg-orange-50 px-1.5 py-0.5 rounded">{school.rating} ★</span>
                                                <span className="text-gray-400">({school.reviews})</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {filteredSchools.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-muted text-lg">No schools found matching your criteria.</p>
                                <button
                                    className="mt-4 text-primary font-medium hover:underline"
                                    onClick={() => setSearchQuery("")}
                                >
                                    Clear search
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
