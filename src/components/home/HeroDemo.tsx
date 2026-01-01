"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, GraduationCap, Users, Building, Play } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

// ==================== 类型定义 ====================
interface Filter {
    label: string;
    icon: typeof MapPin;
    color: string;
}

interface School {
    name: string;
    location: string;
    tag: string;
}

interface SearchScene {
    id: string;
    typingText: string;
    filters: Filter[];
    schools: School[];
    resultCount: number;
}

interface LiveStream {
    id: string;
    school: string;
    title: string;
    viewers: number;
}

interface UpcomingStream {
    id: string;
    school: string;
    title: string;
    time: string;
}

// ==================== 常量定义 ====================
const ANIMATION_CONFIG = {
    sceneDuration: 5000,
    typingSpeed: 60,
    filterStagger: 0.12,
    cardStagger: 0.15,
    cardDelay: 1.0,
};

const SEARCH_SCENES: SearchScene[] = [
    {
        id: "switzerland",
        typingText: "Switzerland boarding school IB",
        filters: [
            { label: "Switzerland", icon: MapPin, color: "bg-red-50 text-red-600 border-red-200" },
            { label: "IB Diploma", icon: GraduationCap, color: "bg-blue-50 text-blue-600 border-blue-200" },
            { label: "Grades 9-12", icon: Users, color: "bg-amber-50 text-amber-600 border-amber-200" }
        ],
        schools: [
            { name: "Le Rosey", location: "Rolle, Switzerland", tag: "IB" },
            { name: "Institut auf dem Rosenberg", location: "St. Gallen", tag: "IB/AP" },
            { name: "Brillantmont International", location: "Lausanne", tag: "IB" }
        ],
        resultCount: 127
    },
    {
        id: "uk",
        typingText: "UK A-Level boys school",
        filters: [
            { label: "United Kingdom", icon: MapPin, color: "bg-blue-50 text-blue-600 border-blue-200" },
            { label: "A-Level", icon: GraduationCap, color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
            { label: "Boys Only", icon: Users, color: "bg-purple-50 text-purple-600 border-purple-200" }
        ],
        schools: [
            { name: "Eton College", location: "Windsor, UK", tag: "A-Level" },
            { name: "Harrow School", location: "London, UK", tag: "A-Level" },
            { name: "Winchester College", location: "Hampshire, UK", tag: "A-Level" }
        ],
        resultCount: 89
    },
    {
        id: "singapore",
        typingText: "Singapore international school",
        filters: [
            { label: "Singapore", icon: MapPin, color: "bg-red-50 text-red-600 border-red-200" },
            { label: "IB/AP", icon: GraduationCap, color: "bg-blue-50 text-blue-600 border-blue-200" },
            { label: "Day School", icon: Building, color: "bg-slate-50 text-slate-600 border-slate-200" }
        ],
        schools: [
            { name: "UWC South East Asia", location: "Singapore", tag: "IB" },
            { name: "Singapore American School", location: "Singapore", tag: "AP" },
            { name: "Tanglin Trust School", location: "Singapore", tag: "IB" }
        ],
        resultCount: 56
    }
];

const LIVE_STREAMS: LiveStream[] = [
    { id: "harrow", school: "Harrow School", title: "Campus Tour: Library & Science Labs", viewers: 248 },
    { id: "lerosey", school: "Le Rosey", title: "Principal's Welcome Address", viewers: 156 }
];

const UPCOMING_STREAMS: UpcomingStream[] = [
    { id: "u1", school: "Eton College", title: "Student Q&A Session", time: "15 min" },
    { id: "u2", school: "UWC", title: "IB Curriculum Overview", time: "1 hour" }
];

// ==================== 动画变体 ====================
const filterVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -10 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            delay: 0.3 + i * ANIMATION_CONFIG.filterStagger,
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94] as const
        }
    }),
    exit: { opacity: 0, scale: 0.8, x: 10, transition: { duration: 0.2 } }
};

const schoolCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: ANIMATION_CONFIG.cardDelay + i * ANIMATION_CONFIG.cardStagger,
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94] as const
        }
    }),
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } }
};

// ==================== 自定义 Hooks ====================
function useTypingEffect(text: string, speed: number, sceneId: string) {
    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let index = 0;
        setDisplayedText("");
        setIsComplete(false);

        const typingInterval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(text.slice(0, index + 1));
                index++;
            } else {
                setIsComplete(true);
                clearInterval(typingInterval);
            }
        }, speed);

        return () => clearInterval(typingInterval);
    }, [text, speed, sceneId]);

    return { displayedText, isComplete };
}

// ==================== 子组件 ====================
function SearchFlowSection({ scene, sceneKey }: { scene: SearchScene; sceneKey: string }) {
    const { displayedText, isComplete } = useTypingEffect(
        scene.typingText,
        ANIMATION_CONFIG.typingSpeed,
        sceneKey
    );

    return (
        <div className="h-full flex flex-col p-6 md:p-8 bg-white">
            {/* 搜索栏 */}
            <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <div className="w-full pl-12 pr-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 font-medium text-sm">
                    <span>{displayedText}</span>
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="inline-block w-0.5 h-4 bg-accent ml-0.5 align-middle"
                    />
                </div>
            </div>

            {/* 筛选标签 */}
            <div className="flex flex-wrap gap-2 mb-5 min-h-[32px]">
                <AnimatePresence mode="popLayout">
                    {scene.filters.map((filter, index) => (
                        <motion.div
                            key={`${sceneKey}-${filter.label}`}
                            custom={index}
                            variants={filterVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${filter.color}`}
                        >
                            <filter.icon className="w-3 h-3" />
                            {filter.label}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* 学校卡片列表 */}
            <div className="flex-1 space-y-2.5 overflow-hidden">
                <AnimatePresence mode="popLayout">
                    {scene.schools.map((school, index) => (
                        <motion.div
                            key={`${sceneKey}-${school.name}`}
                            custom={index}
                            variants={schoolCardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md hover:border-slate-200 transition-all cursor-pointer"
                        >
                            <div className="flex items-center gap-3 p-3">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden flex-shrink-0 flex items-center justify-center">
                                    <GraduationCap className="w-6 h-6 text-slate-400" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h4 className="font-bold text-sm text-slate-900 truncate">{school.name}</h4>
                                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                                        <MapPin className="w-3 h-3" /> {school.location}
                                    </p>
                                </div>
                                <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-bold rounded flex-shrink-0">
                                    {school.tag}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* 结果计数 */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isComplete ? 1 : 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="mt-4 pt-4 border-t border-slate-100"
            >
                <p className="text-sm text-slate-500">
                    Found{" "}
                    <span className="font-bold text-accent">{scene.resultCount}</span>
                    {" "}matching schools
                </p>
            </motion.div>
        </div>
    );
}

function LivePreviewSection({ stream, viewerCount }: { stream: LiveStream; viewerCount: number }) {
    return (
        <div className="h-full flex flex-col p-6 md:p-8 bg-slate-50">
            {/* 视频预览区域 */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 group shadow-lg mb-4">
                {/* 模拟视频背景 */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" />
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.3),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.2),transparent_50%)]" />
                </div>

                {/* 播放按钮 */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Play className="w-6 h-6 fill-white text-white ml-1" />
                    </motion.div>
                </div>

                {/* LIVE 标识 */}
                <div className="absolute top-3 left-3">
                    <div className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        LIVE
                    </div>
                </div>

                {/* 观看人数 */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded flex items-center gap-1.5">
                    <Users className="w-3 h-3" />
                    <span>{viewerCount}</span>
                </div>

                {/* 底部信息 */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={stream.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <p className="text-white/70 text-xs font-medium mb-1">{stream.school}</p>
                            <h4 className="text-white font-bold text-sm">{stream.title}</h4>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* 即将开始 */}
            <div className="flex-1">
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">
                    Coming Up
                </h5>
                <div className="space-y-2">
                    {UPCOMING_STREAMS.map((upcomingStream, index) => (
                        <motion.div
                            key={upcomingStream.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="flex items-center gap-3 p-2.5 rounded-lg bg-white hover:bg-slate-50 transition-colors cursor-pointer border border-slate-100"
                        >
                            <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                                <Play className="w-3.5 h-3.5 text-slate-500 ml-0.5" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-xs font-bold text-slate-700 truncate">{upcomingStream.title}</p>
                                <p className="text-xs text-slate-400">{upcomingStream.school}</p>
                            </div>
                            <span className="text-xs font-medium text-accent whitespace-nowrap">
                                {upcomingStream.time}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ==================== 主组件 ====================
export function HeroDemo() {
    const [sceneIndex, setSceneIndex] = useState(0);
    const [liveIndex, setLiveIndex] = useState(0);
    const [viewerCount, setViewerCount] = useState(LIVE_STREAMS[0].viewers);

    // 场景自动轮播
    useEffect(() => {
        const sceneInterval = setInterval(() => {
            setSceneIndex((prev) => (prev + 1) % SEARCH_SCENES.length);
        }, ANIMATION_CONFIG.sceneDuration);

        return () => clearInterval(sceneInterval);
    }, []);

    // 直播切换（与场景同步但偏移）
    useEffect(() => {
        const liveInterval = setInterval(() => {
            setLiveIndex((prev) => {
                const newIndex = (prev + 1) % LIVE_STREAMS.length;
                setViewerCount(LIVE_STREAMS[newIndex].viewers);
                return newIndex;
            });
        }, ANIMATION_CONFIG.sceneDuration * 1.5);

        return () => clearInterval(liveInterval);
    }, []);

    // 观看人数动态变化
    useEffect(() => {
        const viewerInterval = setInterval(() => {
            setViewerCount((prev) => {
                const change = Math.floor(Math.random() * 7) - 3;
                return Math.max(prev + change, 100);
            });
        }, 2000);

        return () => clearInterval(viewerInterval);
    }, []);

    const currentScene = SEARCH_SCENES[sceneIndex];
    const currentLive = LIVE_STREAMS[liveIndex];

    return (
        <div className="relative w-full aspect-[16/10] md:aspect-[2.2/1] bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                {/* 左侧：动态搜索流程 */}
                <SearchFlowSection
                    scene={currentScene}
                    sceneKey={currentScene.id}
                />

                {/* 分隔线 */}
                <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-slate-200" />

                {/* 右侧：直播预览 */}
                <LivePreviewSection
                    stream={currentLive}
                    viewerCount={viewerCount}
                />
            </div>

            {/* 场景指示器 */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {SEARCH_SCENES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setSceneIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                            index === sceneIndex
                                ? "bg-accent w-6"
                                : "bg-slate-300 hover:bg-slate-400"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
