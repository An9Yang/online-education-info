"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, School, MessageCircle, Star, Search, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

// Node definitions
const nodes = [
    { id: "student", label: "Student", icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-100", x: "50%", y: "20%" },
    { id: "family", label: "Family", icon: Users, color: "text-amber-600", bg: "bg-amber-100", x: "20%", y: "80%" },
    { id: "school", label: "School", icon: School, color: "text-emerald-600", bg: "bg-emerald-100", x: "80%", y: "80%" },
];

// Connection messages that appear on the lines
const messages = [
    { from: "family", to: "school", text: "Verified Reviews", icon: Star, color: "text-amber-500" },
    { from: "school", to: "family", text: "Tuition Transparency", icon: Search, color: "text-emerald-500" },
    { from: "student", to: "school", text: "Virtual Tour", icon: MessageCircle, color: "text-blue-500" },
    { from: "school", to: "student", text: "Admission Offer", icon: CheckCircle2, color: "text-emerald-500" },
    { from: "family", to: "student", text: "Best Match Support", icon: Users, color: "text-purple-500" },
];

export function EcosystemGraph() {
    const [activeMessage, setActiveMessage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveMessage((prev) => (prev + 1) % messages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden flex items-center justify-center p-8 md:p-12">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-slate-50/50"
                style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            <div className="relative w-full h-full max-w-2xl mx-auto">

                {/* Animated Connecting Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <defs>
                        <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>

                    {/* Triangle Connections */}
                    <path d="M 50% 25% L 20% 75%" className="stroke-slate-300 stroke-2 stroke-dashed" fill="none" strokeDasharray="5,5" />
                    <path d="M 50% 25% L 80% 75%" className="stroke-slate-300 stroke-2 stroke-dashed" fill="none" strokeDasharray="5,5" />
                    <path d="M 20% 75% L 80% 75%" className="stroke-slate-300 stroke-2 stroke-dashed" fill="none" strokeDasharray="5,5" />

                    {/* Animating Pulses */}
                    <motion.circle
                        r="4"
                        fill="#3b82f6"
                        animate={{
                            cx: ["50%", "20%", "80%", "50%"],
                            cy: ["25%", "75%", "75%", "25%"]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.circle
                        r="4"
                        fill="#10b981"
                        animate={{
                            cx: ["80%", "50%", "20%", "80%"],
                            cy: ["75%", "25%", "75%", "75%"]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
                    />
                </svg>

                {/* Nodes */}
                {nodes.map((node) => (
                    <motion.div
                        key={node.id}
                        className={`absolute flex flex-col items-center gap-3 z-10 transform -translate-x-1/2 -translate-y-1/2`}
                        style={{ left: node.x, top: node.y }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
                    >
                        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${node.bg} ${node.color} flex items-center justify-center shadow-lg border-4 border-white`}>
                            <node.icon className="w-8 h-8 md:w-10 md:h-10" />
                        </div>
                        <div className="bg-white px-4 py-1.5 rounded-full shadow-md font-bold text-slate-700 text-sm md:text-base whitespace-nowrap">
                            {node.label}
                        </div>
                    </motion.div>
                ))}

                {/* Dynamic Message Cards */}
                <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
                    {messages.map((msg, idx) => (
                        activeMessage === idx && (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                                transition={{ duration: 0.4 }}
                                className="absolute bg-white px-5 py-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
                            >
                                <div className={`p-2 rounded-full bg-slate-50 ${msg.color}`}>
                                    <msg.icon className="w-4 h-4" />
                                </div>
                                <span className="font-bold text-slate-800 text-sm md:text-lg">{msg.text}</span>
                            </motion.div>
                        )
                    ))}
                </div>

            </div>
        </div>
    );
}
