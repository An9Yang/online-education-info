"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    GraduationCap,
    Users,
    School,
    Video,
    ShieldCheck,
    HeartHandshake,
    MessageCircle,
    FileCheck,
    Trophy
} from "lucide-react";
import { useEffect, useState } from "react";

const SCENES = [
    {
        id: "learning",
        activeNodes: ["school", "student"],
        label: "Immersive Learning",
        description: "Zero-distance live interaction",
        icon: Video,
        color: "bg-blue-500",
        lineGradient: "from-emerald-500 to-blue-500"
    },
    {
        id: "trust",
        activeNodes: ["school", "family"],
        label: "Transparent Trust",
        description: "Verified data & tuition reports",
        icon: ShieldCheck,
        color: "bg-emerald-500",
        lineGradient: "from-emerald-500 to-amber-500"
    },
    {
        id: "consensus",
        activeNodes: ["family", "student"],
        label: "Smart Decision",
        description: "AI-matched family alignment",
        icon: HeartHandshake,
        color: "bg-purple-500",
        lineGradient: "from-amber-500 to-blue-500"
    }
];

export function RelationshipFlow() {
    const [activeSceneIndex, setActiveSceneIndex] = useState(0);
    const activeScene = SCENES[activeSceneIndex];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSceneIndex((prev) => (prev + 1) % SCENES.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const getNodeOpacity = (role: string) => {
        return activeScene.activeNodes.includes(role) ? 1 : 0.4;
    };

    const getNodeScale = (role: string) => {
        return activeScene.activeNodes.includes(role) ? 1.1 : 1;
    };

    return (
        <div className="relative w-full aspect-[16/9] md:aspect-[2.2/1] bg-slate-50 rounded-2xl border border-slate-200 shadow-xl overflow-hidden flex items-center justify-center p-8">
            {/* Dynamic Background */}
            <div className="absolute inset-0 opacity-10 transition-colors duration-1000"
                style={{ background: `radial-gradient(circle at 50% 50%, ${activeScene.color === 'bg-blue-500' ? '#3b82f6' : activeScene.color === 'bg-emerald-500' ? '#10b981' : '#a855f7'} 0%, transparent 60%)` }}
            />

            <div className="relative w-full max-w-3xl h-full flex flex-col justify-between items-center py-4">

                {/* Top Node: School */}
                <motion.div
                    animate={{ opacity: getNodeOpacity("school"), scale: getNodeScale("school") }}
                    className="relative z-10 flex flex-col items-center gap-2"
                >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-lg border-2 border-white">
                        <School className="w-8 h-8" />
                    </div>
                    <span className="font-bold text-slate-700 text-sm">School / Teacher</span>
                </motion.div>

                {/* Central Stage (The Interaction) */}
                <div className="flex-1 w-full flex items-center justify-center relative my-4">

                    {/* Animated Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        {/* Left Line: School -> Student */}
                        <motion.line
                            x1="50%" y1="10%" x2="20%" y2="90%"
                            strokeWidth="3"
                            stroke={activeScene.id === "learning" ? "#3b82f6" : "#e2e8f0"}
                            strokeDasharray="8 8"
                            animate={activeScene.id === "learning" ? { strokeDashoffset: [0, -100] } : {}}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        {/* Right Line: School -> Family */}
                        <motion.line
                            x1="50%" y1="10%" x2="80%" y2="90%"
                            strokeWidth="3"
                            stroke={activeScene.id === "trust" ? "#10b981" : "#e2e8f0"}
                            strokeDasharray="8 8"
                            animate={activeScene.id === "trust" ? { strokeDashoffset: [0, -100] } : {}}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        {/* Bottom Line: Family -> Student */}
                        <motion.line
                            x1="20%" y1="90%" x2="80%" y2="90%"
                            strokeWidth="3"
                            stroke={activeScene.id === "consensus" ? "#a855f7" : "#e2e8f0"}
                            strokeDasharray="8 8"
                            animate={activeScene.id === "consensus" ? { strokeDashoffset: [0, -100] } : {}}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                    </svg>

                    {/* Value Card Switching */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeScene.id}
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="relative z-20 bg-white rounded-xl shadow-xl border border-slate-100 p-6 flex items-center gap-4 max-w-sm w-full"
                        >
                            <div className={`w-12 h-12 rounded-full ${activeScene.color} text-white flex items-center justify-center shrink-0`}>
                                <activeScene.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg">{activeScene.label}</h3>
                                <p className="text-slate-500 text-sm">{activeScene.description}</p>
                            </div>

                            {/* Scene Specific Decorative Elements */}
                            {activeScene.id === "learning" && (
                                <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
                                    LIVE
                                </div>
                            )}
                            {activeScene.id === "trust" && (
                                <div className="absolute top-1/2 right-4 -translate-y-1/2">
                                    <FileCheck className="w-5 h-5 text-emerald-500" />
                                </div>
                            )}
                            {activeScene.id === "consensus" && (
                                <div className="absolute top-1/2 right-4 -translate-y-1/2">
                                    <Trophy className="w-5 h-5 text-purple-500" />
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                </div>

                {/* Bottom Nodes */}
                <div className="w-full flex justify-between px-10 md:px-20 relative z-10">
                    {/* Student */}
                    <motion.div
                        animate={{ opacity: getNodeOpacity("student"), scale: getNodeScale("student") }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-lg border-2 border-white">
                            <GraduationCap className="w-8 h-8" />
                        </div>
                        <span className="font-bold text-slate-700 text-sm">Student</span>
                    </motion.div>

                    {/* Family */}
                    <motion.div
                        animate={{ opacity: getNodeOpacity("family"), scale: getNodeScale("family") }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shadow-lg border-2 border-white">
                            <Users className="w-8 h-8" />
                        </div>
                        <span className="font-bold text-slate-700 text-sm">Family</span>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
