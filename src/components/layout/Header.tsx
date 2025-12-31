"use client";

import Link from "next/link";
import { Search, Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: "Schools", href: "/schools" },
        { name: "Live Class", href: "/live" },
        { name: "About", href: "/about" },
    ];

    return (
        <header className="relative top-0 z-50 w-full bg-white border-b border-border shadow-sm">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                            <span className="text-white font-bold text-lg leading-none pt-0.5">E</span>
                        </div>
                        <span className="text-lg font-bold text-text-main tracking-tight">EduGlobal</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <button className="text-text-muted hover:text-primary transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                        <button className="text-text-muted hover:text-primary transition-colors">
                            <Globe className="w-5 h-5" />
                        </button>
                        <div className="h-6 w-px bg-border"></div>
                        <Link
                            href="/dashboard"
                            className="text-sm font-bold text-primary hover:text-accent transition-colors"
                        >
                            Log in
                        </Link>
                        <Link
                            href="/dashboard"
                            className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-light transition-colors"
                        >
                            Sign up
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
                <div className="absolute top-full left-0 w-full bg-white border-b border-border shadow-lg md:hidden p-4">
                    <div className="flex flex-col gap-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-base font-medium text-text-main py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <hr className="border-border" />
                        <div className="flex flex-col gap-3 pt-2">
                            <Link href="/dashboard" className="text-center py-2 text-text-main font-medium">Log in</Link>
                            <Link href="/dashboard" className="text-center py-2 bg-primary text-white rounded-lg font-bold">Sign up</Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
