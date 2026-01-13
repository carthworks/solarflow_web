"use client";

import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                        aria-label="Scroll to top"
                    >
                        <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                            <Sun className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-foreground">
                            SolarFlow
                        </span>
                    </button>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a
                            href="#how-it-works"
                            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                        >
                            How It Works
                        </a>
                        <a
                            href="#features"
                            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                        >
                            Features
                        </a>
                        <a
                            href="#early-access"
                            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                        >
                            Early Access
                        </a>
                    </nav>

                    {/* CTA Button */}
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                        Request Demo
                    </Button>
                </div>
            </div>
        </header>
    );
}
