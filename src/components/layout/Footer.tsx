import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-white py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-8">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-2xl font-bold tracking-tight">EduGlobal.</span>
                        </Link>
                        <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
                            Connecting students with the world's best educational opportunities through transparent, real-time information.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-6">Platform</h3>
                        <ul className="space-y-3">
                            <li><Link href="/schools" className="text-gray-300 hover:text-white transition-colors text-sm">Browse Schools</Link></li>
                            <li><Link href="/live" className="text-gray-300 hover:text-white transition-colors text-sm">Live Events</Link></li>
                            <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-6">Connect</h3>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">© 2025 EduGlobal Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-gray-500 hover:text-white text-xs">Privacy Policy</Link>
                        <Link href="/terms" className="text-gray-500 hover:text-white text-xs">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
