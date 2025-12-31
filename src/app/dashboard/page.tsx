import { User, Settings, Heart, Clock, LogOut } from "lucide-react";
import Link from "next/link";
import { Play } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-background-warm py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Sidebar Navigation */}
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="flex flex-col items-center mb-6">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                                    <User className="w-8 h-8" />
                                </div>
                                <h2 className="font-bold text-lg">Student Account</h2>
                                <p className="text-sm text-gray-500">student@example.com</p>
                            </div>

                            <nav className="space-y-1">
                                <Link href="/dashboard" className="flex items-center gap-3 px-4 py-2 bg-primary/5 text-primary rounded-lg font-medium">
                                    <User className="w-4 h-4" /> Profile
                                </Link>
                                <Link href="/dashboard/favorites" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                                    <Heart className="w-4 h-4" /> Favorites
                                </Link>
                                <Link href="/dashboard/history" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                                    <Clock className="w-4 h-4" /> Watch History
                                </Link>
                                <Link href="/settings" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                                    <Settings className="w-4 h-4" /> Settings
                                </Link>
                            </nav>

                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <button className="flex items-center gap-3 px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg font-medium w-full transition-colors">
                                    <LogOut className="w-4 h-4" /> Sign Out
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1 space-y-8">

                        {/* Quick Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <div className="text-gray-500 text-sm font-medium mb-1">Favorite Schools</div>
                                <div className="text-3xl font-bold font-display text-primary">12</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <div className="text-gray-500 text-sm font-medium mb-1">Upcoming Events</div>
                                <div className="text-3xl font-bold font-display text-accent">3</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <div className="text-gray-500 text-sm font-medium mb-1">Watched Minutes</div>
                                <div className="text-3xl font-bold font-display text-success">120</div>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                                <h3 className="font-bold text-lg">Continue Watching</h3>
                                <Link href="/live" className="text-sm text-primary font-bold hover:underline">View All</Link>
                            </div>
                            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[1, 2].map(i => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-32 h-20 bg-gray-200 rounded-lg relative flex-shrink-0 flex items-center justify-center">
                                            <Play className="w-8 h-8 text-white opacity-80" />
                                            <div className="absolute bottom-0 left-0 h-1 bg-primary w-2/3 rounded-bl-lg"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm line-clamp-2">Understanding Boarding Life at Eton</h4>
                                            <p className="text-xs text-gray-500 mt-1">Stopped at 14:20</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Favorites Preview */}
                        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                                <h3 className="font-bold text-lg">Saved Schools</h3>
                                <Link href="/dashboard/favorites" className="text-sm text-primary font-bold hover:underline">View All</Link>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                                            <div>
                                                <div className="font-bold text-gray-900">St. George's International</div>
                                                <div className="text-xs text-gray-500">Switzerland • Boarding</div>
                                            </div>
                                        </div>
                                        <button className="text-gray-400 hover:text-red-500">
                                            <LogOut className="w-4 h-4 rotate-180" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
