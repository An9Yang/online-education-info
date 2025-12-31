"use client";

import { useParams } from "next/navigation";
import { Play, Users, Share2, Heart, MessageSquare, MoreHorizontal } from "lucide-react";
import { useState } from "react";

export default function LivePlayerPage() {
    const params = useParams();
    const [isLiked, setIsLiked] = useState(false);

    // Mock specific stream data
    const STREAM = {
        id: params.id,
        title: "Virtual Campus Tour: Library & Science Labs",
        school: "Harrow School",
        viewers: 1245,
        host: "Mr. James Thompson",
        role: "Head of Admissions",
        description: "Join us for an exclusive walkthrough of our newly renovated Science Center and the historic Old Speech Room Gallery. Mr. Thompson will be answering your questions live about our STEM curriculum and facilities."
    };

    return (
        <div className="bg-black min-h-screen text-white">
            <div className="container mx-auto px-4 py-6 md:px-6 h-[calc(100vh-80px)]">
                <div className="flex flex-col lg:flex-row gap-6 h-full">

                    {/* Main Video Area */}
                    <div className="flex-1 flex flex-col">
                        {/* Video Player Placeholder */}
                        <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden border border-gray-800 flex items-center justify-center group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>

                            {/* Mock Video Content */}
                            <div className="text-gray-500 font-medium flex flex-col items-center gap-4">
                                <div className="w-20 h-20 rounded-full border-4 border-gray-700 flex items-center justify-center">
                                    <Play className="w-8 h-8 fill-current" />
                                </div>
                                <span>Stream Simulation ({params.id})</span>
                            </div>

                            {/* Player Controls Mock */}
                            <div className="absolute bottom-0 left-0 w-full p-4 flex items-center justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="flex items-center gap-4">
                                    <button className="text-white hover:text-accent"><Play className="w-5 h-5 fill-current" /></button>
                                    <div className="text-sm font-medium">00:00 / LIVE</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-red-600 px-2 py-0.5 rounded text-xs font-bold">LIVE</div>
                                </div>
                            </div>
                        </div>

                        {/* Stream Info (Below Video) */}
                        <div className="mt-6 flex justify-between items-start">
                            <div>
                                <h1 className="text-2xl font-bold font-display mb-2">{STREAM.title}</h1>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                    <span className="font-bold text-accent">{STREAM.school}</span>
                                    <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {STREAM.viewers} watching</span>
                                    <span>Started 15 mins ago</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setIsLiked(!isLiked)}
                                    className={`p-3 rounded-full transition-colors ${isLiked ? 'bg-red-500/20 text-red-500' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                                >
                                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                                </button>
                                <button className="p-3 bg-gray-800 rounded-full text-gray-400 hover:bg-gray-700 transition-colors">
                                    <Share2 className="w-5 h-5" />
                                </button>
                                <button className="p-3 bg-gray-800 rounded-full text-gray-400 hover:bg-gray-700 transition-colors">
                                    <MoreHorizontal className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 p-6 bg-gray-900 rounded-xl border border-gray-800">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gray-700"></div>
                                <div>
                                    <div className="font-bold">{STREAM.host}</div>
                                    <div className="text-sm text-gray-400">{STREAM.role}</div>
                                </div>
                                <button className="ml-auto px-4 py-2 border border-gray-600 rounded-lg text-sm font-bold hover:bg-gray-800">Follow</button>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                {STREAM.description}
                            </p>
                        </div>
                    </div>

                    {/* Chat Sidebar */}
                    <div className="w-full lg:w-80 bg-gray-900 rounded-xl border border-gray-800 flex flex-col h-[600px] lg:h-auto">
                        <div className="p-4 border-b border-gray-800 font-bold flex items-center gap-2">
                            <MessageSquare className="w-4 h-4" /> Live Chat
                        </div>

                        {/* Chat Messages Area */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-700 shrink-0"></div>
                                    <div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xs font-bold text-gray-300">User_{i}</span>
                                            <span className="text-[10px] text-gray-600">12:3{i}</span>
                                        </div>
                                        <p className="text-sm text-gray-400 mt-0.5">Is the IB program available for all grades?</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Chat Input */}
                        <div className="p-4 border-t border-gray-800">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Send a message..."
                                    className="w-full bg-gray-800 border-none rounded-lg py-3 px-4 text-sm text-white focus:ring-1 focus:ring-accent"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
