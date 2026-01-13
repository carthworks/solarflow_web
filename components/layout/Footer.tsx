"use client";

import { Sun } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-primary-foreground py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                                <Sun className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold">SolarFlow</span>
                        </div>
                        <p className="text-primary-foreground/80 text-sm">
                            Project management software built specifically for solar EPC
                            companies in India.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#how-it-works"
                                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                                >
                                    How It Works
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#features"
                                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#early-access"
                                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                                >
                                    Early Access
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold mb-4">Get in Touch</h3>
                        <ul className="space-y-2 text-sm text-primary-foreground/80">
                            <li>Email: <a href="mailto:tkarthikeyan@gmail.com">hello@solarflow.in</a></li>
                            <li>Phone: <a href="tel:+919486772206">+91 9486772206</a></li>
                            <li>Built for solar teams in India</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-primary-foreground/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
                        <p>© {currentYear} SolarFlow. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a
                                href="#"
                                className="hover:text-primary-foreground transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="hover:text-primary-foreground transition-colors"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
