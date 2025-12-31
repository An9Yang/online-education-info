"use client";

import Link from "next/link";
import { Search, User, Globe, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import clsx from "clsx";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigation = [
        { name: "Schools", href: "/schools" },
        { name: "Live Class", href: "/live" },
        { name: "About", href: "/about" },
    ];

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
                isScrolled
                    ? "glass py-3 border-white/20"
                    : "bg-transparent py-5 border-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-10 h-10 flex items-center justify-center">
                            <div className="absolute inset-0 bg-primary rounded-xl rotate-3 group-hover:rotate-6 transition-transform"></div>
                            <div className="absolute inset-0 bg-primary-light rounded-xl opacity-50 -rotate-3 group-hover:-rotate-6 transition-transform"></div>
                            <span className="relative text-white font-serif font-bold text-xl">E</span>
                        </div>
                        <span className={clsx(
                            "text-xl font-serif font-bold tracking-tight transition-colors",
                            isScrolled ? "text-primary" : "text-primary"
                        )}>
                            EduGlobal
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-text-main hover:text-accent transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <button className="p-2.5 text-text-main hover:bg-white/50 rounded-full transition-all hover:scale-105">
                            <Search className="w-5 h-5" />
                        </button>
                        <button className="p-2.5 text-text-main hover:bg-white/50 rounded-full transition-all hover:scale-105">
                            <Globe className="w-5 h-5" />
                        </button>
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-full hover:bg-primary-light transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 font-medium text-sm"
                        >
                            <span>Sign In</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-text-main"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-cream/95 backdrop-blur-xl border-b border-border shadow-xl md:hidden p-6 animate-in slide-in-from-top-5">
                    <div className="flex flex-col gap-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-lg font-serif font-medium text-text-main"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="h-px bg-border w-full"></div>
                        <div className="flex gap-4">
                            <button className="flex-1 py-3 border border-border rounded-xl font-medium text-sm hover:bg-white transition-colors">Search</button>
                            <button className="flex-1 py-3 border border-border rounded-xl font-medium text-sm hover:bg-white transition-colors">Language</button>
                        </div>
                        <Link
                            href="/dashboard"
                            className="w-full py-3 bg-primary text-white rounded-xl font-medium text-center shadow-lg"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
