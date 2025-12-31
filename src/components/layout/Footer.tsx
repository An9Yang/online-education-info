import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary-dark text-white pt-24 pb-12 overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
                    <div className="max-w-md">
                        <Link href="/" className="inline-block mb-6 group">
                            <span className="text-3xl font-serif font-bold tracking-tight">EduGlobal.</span>
                        </Link>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8 text-white/90">
                            Empowering the next generation of global leaders.
                        </h2>

                        {/* Newsletter Input - Minimalist */}
                        <div className="relative max-w-sm">
                            <input
                                type="email"
                                placeholder="Join our newsletter"
                                className="w-full bg-transparent border-b border-white/20 py-4 pr-12 text-lg focus:outline-none focus:border-white transition-colors placeholder:text-white/30"
                            />
                            <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-full transition-colors group">
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-16 flex-wrap">
                        <div>
                            <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-white/40 mb-6">Platform</h3>
                            <ul className="space-y-4">
                                <li><Link href="/schools" className="text-white/70 hover:text-white transition-colors">Browse Schools</Link></li>
                                <li><Link href="/live" className="text-white/70 hover:text-white transition-colors">Live Events</Link></li>
                                <li><Link href="/pricing" className="text-white/70 hover:text-white transition-colors">Membership</Link></li>
                                <li><Link href="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-white/40 mb-6">Support</h3>
                            <ul className="space-y-4">
                                <li><Link href="/help" className="text-white/70 hover:text-white transition-colors">Help Center</Link></li>
                                <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
                                <li><Link href="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="text-white/70 hover:text-white transition-colors">Terms</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/30 text-sm font-medium">© 2025 EduGlobal Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
