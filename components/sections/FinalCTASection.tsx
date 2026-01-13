"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
    return (
        <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Main Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Bring Order to Your Solar Projects
                    </h2>

                    {/* Subheading */}
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Stop losing time to chaos. Start delivering better projects and
                        happier customers.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-7 text-lg group"
                        >
                            Request Demo
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-7 text-lg"
                        >
                            Join Early Access
                        </Button>
                    </div>

                    {/* Trust Line */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mt-8 text-sm text-muted-foreground"
                    >
                        No spam. No sales pressure. Just a conversation about your needs.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
