"use client";

import { useParams } from "next/navigation";
import { MapPin, Globe, Phone, Mail, Star, Users, GraduationCap, Calendar, DollarSign, Play } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function SchoolDetailPage() {
    const params = useParams();
    const [activeTab, setActiveTab] = useState("overview");

    // Mock Data (In a real app, fetch based on params.id)
    const SCHOOL = {
        id: 1,
        name: "St. George's International School",
        location: "Chemin de Saint-Georges 19, 1815 Montreux, Switzerland",
        description: "St. George's International School is a vibrant and truly international community. Founded in 1927, we have a long tradition of excellence in education. Our beautiful campus overlooking Lake Geneva provides an inspiring environment for learning.",
        stats: {
            founded: 1927,
            students: 480,
            boarders: "60%",
            nationalities: 60,
            ratio: "1:8"
        },
        academics: {
            curriculum: ["IB Diploma", "IGCSE", "High School Diploma"],
            languages: ["English", "French", "German", "Spanish"],
            universities: ["Oxford", "Cambridge", "Harvard", "Stanford", "ETH Zurich"]
        },
        admissions: {
            deadline: "Rolling Admissions",
            interview: "Required",
            fees: {
                tuition: "CHF 110,000",
                boarding: "Included",
                registration: "CHF 3,000"
            }
        }
    };

    const tabs = [
        { id: "overview", label: "Overview" },
        { id: "academics", label: "Academics" },
        { id: "admissions", label: "Admissions" },
        { id: "campus", label: "Campus Life" },
    ];

    return (
        <div className="bg-background-warm min-h-screen pb-20">

            {/* School Header / Hero */}
            <div className="relative h-[400px] bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                {/* Placeholder for Hero Image */}
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-white/20 text-4xl font-bold">
                    Hero Image
                </div>

                <div className="absolute bottom-0 left-0 w-full z-20 container mx-auto px-4 md:px-6 pb-8">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 text-white/80 mb-2">
                                <MapPin className="w-4 h-4" />
                                {SCHOOL.location}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 shadow-sm">{SCHOOL.name}</h1>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">Boarding School</span>
                                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20">IB World School</span>
                                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20">Co-ed</span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-xl font-bold transition-colors flex items-center gap-2">
                                <Star className="w-5 h-5" />
                                Compare
                            </button>
                            <button className="bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-accent/20">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-8">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Main Content */}
                    <div className="flex-1">

                        {/* Navigation Tabs */}
                        <div className="flex overflow-x-auto border-b border-gray-200 mb-8 gap-8 hide-scrollbar">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={clsx(
                                        "pb-4 text-sm font-bold whitespace-nowrap transition-colors relative",
                                        activeTab === tab.id ? "text-primary" : "text-gray-500 hover:text-gray-900"
                                    )}
                                >
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full"></div>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm min-h-[400px]">
                            {activeTab === "overview" && (
                                <div className="space-y-8">
                                    <section>
                                        <h2 className="text-2xl font-display font-bold text-primary mb-4">About the School</h2>
                                        <p className="text-gray-600 leading-relaxed text-lg">{SCHOOL.description}</p>
                                    </section>

                                    {/* Key Stats Grid */}
                                    <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <div className="flex items-center gap-2 text-primary font-bold mb-1">
                                                <Calendar className="w-4 h-4" /> Founded
                                            </div>
                                            <div className="text-2xl font-display text-gray-900">{SCHOOL.stats.founded}</div>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <div className="flex items-center gap-2 text-primary font-bold mb-1">
                                                <Users className="w-4 h-4" /> Students
                                            </div>
                                            <div className="text-2xl font-display text-gray-900">{SCHOOL.stats.students}</div>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <div className="flex items-center gap-2 text-primary font-bold mb-1">
                                                <Globe className="w-4 h-4" /> Nationalities
                                            </div>
                                            <div className="text-2xl font-display text-gray-900">{SCHOOL.stats.nationalities}+</div>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-xl">
                                            <div className="flex items-center gap-2 text-primary font-bold mb-1">
                                                <Users className="w-4 h-4" /> Ratio
                                            </div>
                                            <div className="text-2xl font-display text-gray-900">{SCHOOL.stats.ratio}</div>
                                        </div>
                                    </section>

                                    <section className="mt-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <h2 className="text-2xl font-display font-bold text-primary">Virtual Tour</h2>
                                            <button className="text-sm font-bold text-primary hover:underline">View All Videos</button>
                                        </div>
                                        <div className="aspect-video bg-gray-900 rounded-xl relative group cursor-pointer overflow-hidden">
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                                                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-4 left-4 text-white">
                                                <div className="font-bold">Campus Drone Tour 2024</div>
                                                <div className="text-xs opacity-80">3:45 mins</div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            )}

                            {activeTab === "academics" && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-display font-bold text-primary mb-4">Academic Programs</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-6 border border-gray-100 rounded-xl hover:border-primary/20 transition-colors">
                                            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                                                <GraduationCap className="w-5 h-5" />
                                            </div>
                                            <h3 className="font-bold text-lg mb-2">Curriculum</h3>
                                            <ul className="space-y-2">
                                                {SCHOOL.academics.curriculum.map(c => (
                                                    <li key={c} className="flex items-center gap-2 text-gray-600">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                                                        {c}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="p-6 border border-gray-100 rounded-xl hover:border-primary/20 transition-colors">
                                            <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4">
                                                <Globe className="w-5 h-5" />
                                            </div>
                                            <h3 className="font-bold text-lg mb-2">Languages</h3>
                                            <ul className="space-y-2">
                                                {SCHOOL.academics.languages.map(l => (
                                                    <li key={l} className="flex items-center gap-2 text-gray-600">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                                                        {l}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <h3 className="font-bold text-lg mb-4">University Destinations</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {SCHOOL.academics.universities.map(u => (
                                                <span key={u} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 font-medium">
                                                    {u}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "admissions" && (
                                <div className="space-y-8">
                                    <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
                                        <h3 className="font-bold text-lg text-primary mb-2 flex items-center gap-2">
                                            <Calendar className="w-5 h-5" />
                                            Application Deadline
                                        </h3>
                                        <p className="text-gray-700">Currently accepting applications for <span className="font-bold">Fall 2025</span> on a rolling basis.</p>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-lg mb-4">Tuition & Fees (Annual)</h3>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center p-4 border-b border-gray-100">
                                                <span className="text-gray-600">Boarding Tuition</span>
                                                <span className="font-bold text-lg">{SCHOOL.admissions.fees.tuition}</span>
                                            </div>
                                            <div className="flex justify-between items-center p-4 border-b border-gray-100">
                                                <span className="text-gray-600">Registration Fee</span>
                                                <span className="font-bold text-lg">{SCHOOL.admissions.fees.registration}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-96 flex flex-col gap-6">
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-24">
                            <h3 className="font-display font-bold text-lg mb-6 text-primary">Contact Admissions</h3>

                            <div className="space-y-4 mb-8">
                                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                                        <Globe className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-medium">www.school-website.com</span>
                                </a>
                                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-medium">+41 21 964 34 11</span>
                                </a>
                                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-medium">admissions@stgeorges.ch</span>
                                </a>
                            </div>

                            <button className="w-full py-3.5 bg-accent hover:bg-accent-light text-white rounded-xl font-bold transition-colors shadow-lg shadow-accent/20 mb-3">
                                Inquire Now
                            </button>
                            <button className="w-full py-3.5 bg-white border-2 border-primary text-primary hover:bg-gray-50 rounded-xl font-bold transition-colors">
                                Download Brochure
                            </button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
