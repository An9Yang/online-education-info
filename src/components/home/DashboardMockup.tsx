"use client";

import { motion } from "framer-motion";
import {
    BarChart3,
    Users,
    GraduationCap,
    Calendar,
    MessageSquare,
    Settings,
    Bell,
    Search,
    MoreHorizontal,
    TrendingUp,
    ArrowUpRight
} from "lucide-react";

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
};

const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
};

export function DashboardMockup() {
    return (
        <div className="relative w-full aspect-[16/9] bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 font-sans text-left">
            <div className="absolute inset-0 flex">
                {/* Sidebar */}
                <div className="w-64 bg-slate-50 border-r border-slate-100 hidden md:flex flex-col p-6">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">E</div>
                        <span className="font-bold text-slate-800">EduGlobal</span>
                    </div>

                    <nav className="space-y-2 flex-1">
                        <div className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium text-sm">
                            <BarChart3 className="w-4 h-4" /> Dashboard
                        </div>
                        {[
                            { icon: Users, label: "Schools" },
                            { icon: GraduationCap, label: "Applications" },
                            { icon: Calendar, label: "Schedule" },
                            { icon: MessageSquare, label: "Messages" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-100 rounded-lg font-medium text-sm transition-colors cursor-pointer">
                                <item.icon className="w-4 h-4" /> {item.label}
                            </div>
                        ))}
                    </nav>

                    <div className="pt-6 border-t border-slate-200">
                        <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-100 rounded-lg font-medium text-sm transition-colors cursor-pointer">
                            <Settings className="w-4 h-4" /> Settings
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-white flex flex-col min-w-0">
                    {/* Header */}
                    <div className="h-16 border-b border-slate-100 flex items-center justify-between px-8 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
                        <div className="relative w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input type="text" placeholder="Search schools..." className="w-full pl-10 pr-4 py-2 bg-slate-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100" />
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="relative p-2 text-slate-400 hover:bg-slate-50 rounded-full">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                            </button>
                            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-100">
                                {/* Avatar Placeholder */}
                                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-500"></div>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Body */}
                    <div className="flex-1 p-8 overflow-hidden relative">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                            className="h-full flex flex-col gap-6"
                        >
                            <motion.div variants={slideUp} className="flex justify-between items-end mb-2">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-800">Welcome back, Alex!</h2>
                                    <p className="text-slate-500 text-sm">Here's what's happening with your applications today.</p>
                                </div>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                                    + New Application
                                </button>
                            </motion.div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-3 gap-6">
                                {[
                                    { label: "Schools Shortlisted", val: "12", change: "+2 this week", color: "text-blue-600", bg: "bg-blue-50" },
                                    { label: "Applications Sent", val: "4", change: "In Review", color: "text-amber-600", bg: "bg-amber-50" },
                                    { label: "Upcoming Interviews", val: "1", change: "Tomorrow, 2:00 PM", color: "text-emerald-600", bg: "bg-emerald-50" },
                                ].map((stat, i) => (
                                    <motion.div key={i} variants={slideUp} className="p-5 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                                                <TrendingUp className="w-4 h-4" />
                                            </div>
                                            <MoreHorizontal className="w-4 h-4 text-slate-300" />
                                        </div>
                                        <div className="text-2xl font-bold text-slate-800 mb-1">{stat.val}</div>
                                        <div className="text-xs font-medium text-slate-500">{stat.label}</div>
                                        <div className="mt-3 text-xs font-medium text-slate-400 bg-slate-50 inline-block px-2 py-1 rounded">{stat.change}</div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Recent Activity Graph - Simulated */}
                            <motion.div variants={slideUp} className="flex-1 rounded-xl border border-slate-100 bg-slate-50/50 p-6 relative overflow-hidden">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-bold text-slate-800">Application Velocity</h3>
                                    <select className="bg-white border border-slate-200 text-xs rounded-lg px-2 py-1 outline-none text-slate-600">
                                        <option>Last 30 Days</option>
                                    </select>
                                </div>

                                {/* CSS Chart */}
                                <div className="flex items-end justify-between h-32 gap-2 mt-4 px-2">
                                    {[30, 45, 35, 60, 50, 70, 55, 80, 65, 90, 75, 60].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ duration: 1, delay: i * 0.05 }}
                                            className="w-full bg-blue-100 rounded-t-sm relative group"
                                        >
                                            <div className="absolute bottom-0 left-0 w-full bg-blue-500 rounded-t-sm transition-all duration-500 group-hover:bg-blue-600" style={{ height: '40%' }}></div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Floating Notifications - "Dynamic" Element */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute bottom-8 right-8 bg-white p-4 rounded-xl shadow-2xl border border-slate-100 max-w-xs z-20"
            >
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm text-slate-800">Application Update</h4>
                        <p className="text-xs text-slate-500 mt-1">St. George's International viewed your profile just now.</p>
                    </div>
                </div>
            </motion.div>

            {/* Check Icon for notification (import needed inside component context but lucid-react already imported) */}
        </div>
    );
}

function CheckCircle2(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}
