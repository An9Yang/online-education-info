"use client";

import { useState } from "react";
import Link from "next/link";
import { Play, Calendar, Clock, Users, Video } from "lucide-react";
import clsx from "clsx";

const MOCK_STREAMS = {
    live: [
        { id: 101, title: "Virtual Campus Tour: Library & Science Labs", school: "Harrow School", viewers: 1240, img: "bg-gray-800", tags: ["Tour", "Facilities"] },
        { id: 102, title: "Principal's Welcome Address", school: "Le Rosey", viewers: 850, img: "bg-gray-700", tags: ["Speech", "Leadership"] }
    ],
    upcoming: [
        { id: 201, title: "IB Curriculum: Is it right for you?", school: "Sevenoaks School", date: "Tomorrow, 10:00 AM", img: "bg-blue-900", tags: ["Academics", "Q&A"] },
        { id: 202, title: "Student Life Panel Discussion", school: "Phillips Andover", date: "Oct 15, 2:00 PM", img: "bg-indigo-900", tags: ["Student Life"] }
    ],
    replays: [
        { id: 301, title: "Understanding Boarding Life", school: "Eton College", duration: "45 min", views: "2.5k", img: "bg-gray-600", tags: ["Boarding"] },
        { id: 302, title: "Arts & Music Program Showcase", school: "Interlochen Arts Academy", duration: "32 min", views: "1.8k", img: "bg-gray-500", tags: ["Arts"] }
    ]
};

export default function LivePage() {
    const [activeTab, setActiveTab] = useState("all");

    return (
        <div className="bg-background-warm min-h-screen py-12">
            <div className="container mx-auto px-4 md:px-6">

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-display font-bold text-primary mb-2">Live Classroom</h1>
                        <p className="text-muted">Join real-time events, tours, and Q&A sessions from top schools.</p>
                    </div>
                    <div className="flex bg-white p-1 rounded-lg border border-gray-200 mt-4 md:mt-0">
                        {["all", "live", "upcoming", "replays"].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={clsx(
                                    "px-4 py-2 rounded-md text-sm font-bold capitalize transition-all",
                                    activeTab === tab ? "bg-primary text-white shadow-sm" : "text-gray-500 hover:text-gray-900"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-12">

                    {/* Live Now Section */}
                    {(activeTab === "all" || activeTab === "live") && (
                        <section>
                            <h2 className="text-xl font-bold flex items-center gap-2 mb-6 text-red-500 animate-pulse">
                                <span className="w-2 h-2 rounded-full bg-red-500"></span> Live Now
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {MOCK_STREAMS.live.map(stream => (
                                    <Link key={stream.id} href={`/live/${stream.id}`} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
                                        <div className={`aspect-video ${stream.img} relative flex items-center justify-center`}>
                                            <Play className="w-12 h-12 text-white/80 group-hover:scale-110 transition-transform" />
                                            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                                                <span className="animate-pulse w-1.5 h-1.5 bg-white rounded-full"></span> LIVE
                                            </div>
                                            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                                                <Users className="w-3 h-3" /> {stream.viewers}
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <h3 className="font-bold text-lg text-primary mb-1 group-hover:text-accent transition-colors">{stream.title}</h3>
                                            <p className="text-sm font-medium text-gray-500 mb-3">{stream.school}</p>
                                            <div className="flex gap-2">
                                                {stream.tags.map(tag => (
                                                    <span key={tag} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Upcoming Section */}
                    {(activeTab === "all" || activeTab === "upcoming") && (
                        <section>
                            <h2 className="text-xl font-bold flex items-center gap-2 mb-6 text-primary">
                                <Calendar className="w-5 h-5" /> Upcoming Events
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {MOCK_STREAMS.upcoming.map(stream => (
                                    <Link key={stream.id} href={`/live/${stream.id}`} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
                                        <div className={`aspect-video ${stream.img} relative flex items-center justify-center opacity-90`}>
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                            <div className="bg-white/90 backdrop-blur text-primary px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                                                Notify Me
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <div className="text-xs font-bold text-accent mb-2 uppercase tracking-wide">{stream.date}</div>
                                            <h3 className="font-bold text-lg text-primary mb-1 group-hover:text-accent transition-colors">{stream.title}</h3>
                                            <p className="text-sm font-medium text-gray-500 mb-3">{stream.school}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Replays Section */}
                    {(activeTab === "all" || activeTab === "replays") && (
                        <section>
                            <h2 className="text-xl font-bold flex items-center gap-2 mb-6 text-primary">
                                <Video className="w-5 h-5" /> Recent Replays
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {MOCK_STREAMS.replays.map(stream => (
                                    <Link key={stream.id} href={`/live/${stream.id}`} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
                                        <div className={`aspect-video ${stream.img} relative`}>
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                                            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-1.5 py-0.5 rounded font-medium">
                                                {stream.duration}
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                                                    <Play className="w-4 h-4 text-primary fill-current ml-0.5" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-base text-primary mb-1 line-clamp-2">{stream.title}</h3>
                                            <p className="text-xs font-medium text-gray-500 mb-2">{stream.school}</p>
                                            <div className="flex items-center gap-1 text-xs text-gray-400">
                                                <Play className="w-3 h-3" /> {stream.views} views
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                </div>
            </div>
        </div>
    );
}
